const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { promisify } = require("node:util");
const { Pool } = require("pg");

const ROOT = path.join(__dirname, "..");
const PUBLIC_DIR = path.join(ROOT, "public");
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_BODY_BYTES = 7 * 1024 * 1024;
const MAX_ACCOUNT_DATA_BYTES = 1024 * 1024;
const MAX_ACCOUNT_RECORDS = 3000;
const MAX_REQUESTS_PER_WINDOW = 8;
const MAX_AUTH_REQUESTS_PER_WINDOW = 6;
const MAX_ACCOUNT_WRITES_PER_WINDOW = 30;
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const RATE_WINDOW_MS = 60 * 1000;
const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const rateLimit = new Map();
const authRateLimit = new Map();
const accountWriteRateLimit = new Map();
const scryptAsync = promisify(crypto.scrypt);

function loadLocalEnvironment() {
  const filePath = path.join(ROOT, ".env");
  let content;
  try {
    content = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    if (error.code === "ENOENT") return;
    throw error;
  }

  for (const line of content.split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match || match[1].startsWith("#") || process.env[match[1]]) continue;
    const value = match[2].replace(/^(['"])(.*)\1$/, "$2");
    process.env[match[1]] = value;
  }
}

loadLocalEnvironment();

const IS_VERCEL = Boolean(process.env.VERCEL);
if (!process.env.DATABASE_URL) {
  console.error("DATABASE_URL is required (Supabase Postgres connection string).");
}
const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: IS_VERCEL ? 3 : 10
});
db.on("error", (error) => console.error("Postgres pool error.", error.message));
const databaseReady = db.query(`
  CREATE TABLE IF NOT EXISTS hidro_users (
    id BIGSERIAL PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password_salt TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS hidro_sessions (
    token_hash TEXT PRIMARY KEY,
    user_id BIGINT NOT NULL REFERENCES hidro_users(id) ON DELETE CASCADE,
    expires_at BIGINT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS hidro_sessions_expiry_idx ON hidro_sessions(expires_at);
  CREATE TABLE IF NOT EXISTS hidro_account_data (
    user_id BIGINT PRIMARY KEY REFERENCES hidro_users(id) ON DELETE CASCADE,
    readings_json TEXT NOT NULL DEFAULT '[]',
    calibrations_json TEXT NOT NULL DEFAULT '[]',
    updated_at TEXT NOT NULL
  );
  ALTER TABLE hidro_users ADD COLUMN IF NOT EXISTS display_name TEXT;
  ALTER TABLE hidro_users ADD COLUMN IF NOT EXISTS theme TEXT NOT NULL DEFAULT 'system';
  ALTER TABLE hidro_users ADD COLUMN IF NOT EXISTS avatar TEXT;
  ALTER TABLE hidro_users ENABLE ROW LEVEL SECURITY;
  ALTER TABLE hidro_sessions ENABLE ROW LEVEL SECURITY;
  ALTER TABLE hidro_account_data ENABLE ROW LEVEL SECURITY;
`).then(() => db.query("DELETE FROM hidro_sessions WHERE expires_at <= $1", [Date.now()]))
  .catch((error) => { console.error("Could not initialise the database.", error.message); throw error; });
databaseReady.catch(() => {});

async function query(text, params) {
  await databaseReady;
  return db.query(text, params);
}

const supportInstructions = [
  "Eres el asistente técnico de HIDRO TEC, especializado en hidroponía y este prototipo híbrido en L (torres verticales y balsa de raíces flotantes).",
  "Ayuda en agronomía hidropónica, compatibilidad de cultivos, plagas y enfermedades, pH, EC/TDS, temperatura, oxígeno disuelto, flujo, bombas, nivel, luz, sensores, calibración, electrónica, software y solución de problemas.",
  "Responde en el idioma indicado por la persona, con pasos claros, seguros y priorizados. Pide datos faltantes en vez de inventarlos. Distingue lecturas reales de valores introducidos o simulados.",
  "Al analizar una imagen, describe solo signos visibles y posibilidades con incertidumbre; no confirmes una plaga/enfermedad ni una deficiencia solo por la foto. Recomienda fotos adicionales y revisión de un especialista cuando no haya certeza.",
  "No recomiendes mezclar plaguicidas, dosis químicas, ni acciones peligrosas. Para cualquier aplicación de insumos, pide seguir la etiqueta local y consultar un especialista autorizado. Advierte de riesgos de inocuidad si aplica.",
  "Si parece una falla urgente (bomba detenida, nivel crítico, raíces secas o riesgo eléctrico), indica medidas de contención seguras y contactar soporte humano/técnico local; no afirmes que has contactado a una persona.",
  "No afirmes controlar hardware, sensores, haber detectado con certeza, ni consultar datos externos. No solicites datos personales o credenciales."
].join(" ");

function respond(response, status, payload, extraHeaders = {}) {
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
    ...extraHeaders
  });
  response.end(JSON.stringify(payload));
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let length = 0;
    let rejected = false;
    if (Number(request.headers["content-length"] || 0) > MAX_BODY_BYTES) {
      reject(Object.assign(new Error("payload_too_large"), { status: 413 }));
      request.resume();
      return;
    }
    request.on("data", (chunk) => {
      if (rejected) return;
      length += chunk.length;
      if (length > MAX_BODY_BYTES) {
        rejected = true;
        reject(Object.assign(new Error("payload_too_large"), { status: 413 }));
        request.resume();
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => {
      if (rejected) return;
      if (!chunks.length) {
        reject(Object.assign(new Error("invalid_request"), { status: 400 }));
        return;
      }
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch {
        reject(Object.assign(new Error("invalid_request"), { status: 400 }));
      }
    });
    request.on("error", reject);
  });
}

function validateHistory(history) {
  if (history === undefined) return [];
  if (!Array.isArray(history) || history.length > 12) return null;
  const valid = history.every((entry) => entry
    && ["user", "assistant"].includes(entry.role)
    && typeof entry.content === "string"
    && entry.content.length <= 1500);
  return valid ? history : null;
}

function validateImage(image) {
  if (image === undefined || image === null) return { image: null };
  if (!image || !allowedImageTypes.has(image.mimeType) || typeof image.data !== "string") {
    return { error: "unsupported_image" };
  }
  if (image.data.length > Math.ceil(MAX_IMAGE_BYTES * 4 / 3) + 8 || !/^[A-Za-z0-9+/]*={0,2}$/.test(image.data)) {
    return { error: "image_too_large" };
  }
  const data = Buffer.from(image.data, "base64");
  if (!data.length || data.length > MAX_IMAGE_BYTES || data.toString("base64") !== image.data) {
    return { error: "image_too_large" };
  }
  const isJpeg = image.mimeType === "image/jpeg" && data.length >= 3
    && data[0] === 0xff && data[1] === 0xd8 && data[2] === 0xff;
  const isPng = image.mimeType === "image/png" && data.length >= 8
    && data.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]));
  const isWebp = image.mimeType === "image/webp" && data.length >= 12
    && data.toString("ascii", 0, 4) === "RIFF" && data.toString("ascii", 8, 12) === "WEBP";
  if (!isJpeg && !isPng && !isWebp) return { error: "unsupported_image" };
  return { image: { mimeType: image.mimeType, data: image.data } };
}

function permitRequest(request, limits = rateLimit, maximum = MAX_REQUESTS_PER_WINDOW) {
  const now = Date.now();
  const address = request.socket.remoteAddress || "local";
  const current = limits.get(address);
  if (!current || now - current.startedAt >= RATE_WINDOW_MS) {
    limits.set(address, { startedAt: now, count: 1 });
    return true;
  }
  if (current.count >= maximum) return false;
  current.count += 1;
  return true;
}

function requestCookie(request, name) {
  const cookies = (request.headers.cookie || "").split(";");
  const cookie = cookies.map((part) => part.trim()).find((part) => part.startsWith(`${name}=`));
  return cookie ? cookie.slice(name.length + 1) : "";
}

function sessionTokenHash(request) {
  const token = requestCookie(request, "hidrotec_session");
  return /^[A-Za-z0-9_-]{40,60}$/.test(token)
    ? crypto.createHash("sha256").update(token).digest("hex")
    : "";
}

function authCookie(token, request, clear = false) {
  const parts = [
    `hidrotec_session=${token}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Strict",
    `Max-Age=${clear ? 0 : Math.floor(SESSION_TTL_MS / 1000)}`
  ];
  if (request.socket.encrypted || request.headers["x-forwarded-proto"] === "https" || process.env.COOKIE_SECURE === "true") parts.push("Secure");
  return parts.join("; ");
}

function isSameOrigin(request) {
  const origin = request.headers.origin;
  const host = request.headers.host;
  if (typeof origin !== "string" || typeof host !== "string") return false;
  try {
    const parsedOrigin = new URL(origin);
    return ["http:", "https:"].includes(parsedOrigin.protocol)
      && parsedOrigin.host.toLowerCase() === host.toLowerCase();
  } catch {
    return false;
  }
}

async function passwordHash(password, salt) {
  return scryptAsync(password, salt, 64, {
    N: 32768,
    r: 8,
    p: 1,
    maxmem: 64 * 1024 * 1024
  });
}

const MAX_AVATAR_CHARS = 200 * 1024;
const allowedThemes = new Set(["light", "dark", "system"]);

function publicUser(row) {
  return {
    id: Number(row.id),
    username: row.username,
    displayName: row.display_name || "",
    theme: allowedThemes.has(row.theme) ? row.theme : "system",
    avatar: row.avatar || ""
  };
}

function validateProfile(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return null;
  const displayName = typeof body.displayName === "string" ? body.displayName.trim() : "";
  if (Array.from(displayName).length > 40 || /[\u0000-\u001f<>]/.test(displayName)) return null;
  if (!allowedThemes.has(body.theme)) return null;
  let avatar = "";
  if (body.avatar) {
    if (typeof body.avatar !== "string" || body.avatar.length > MAX_AVATAR_CHARS
        || !/^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/]+={0,2}$/.test(body.avatar)) {
      return null;
    }
    avatar = body.avatar;
  }
  return { displayName, theme: body.theme, avatar };
}

async function getAuthenticatedUser(request) {
  const tokenHash = sessionTokenHash(request);
  if (!tokenHash) return null;
  const session = (await query(`
    SELECT hidro_users.id, hidro_users.username, hidro_users.display_name, hidro_users.theme,
      hidro_users.avatar, hidro_sessions.expires_at
    FROM hidro_sessions JOIN hidro_users ON hidro_users.id = hidro_sessions.user_id
    WHERE hidro_sessions.token_hash = $1
  `, [tokenHash])).rows[0];
  if (!session || Number(session.expires_at) <= Date.now()) {
    if (session) await query("DELETE FROM hidro_sessions WHERE token_hash = $1", [tokenHash]);
    return null;
  }
  return publicUser(session);
}

async function setAuthenticatedSession(userId, request) {
  const token = crypto.randomBytes(32).toString("base64url");
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  await query("INSERT INTO hidro_sessions (token_hash, user_id, expires_at) VALUES ($1, $2, $3)",
    [tokenHash, userId, Date.now() + SESSION_TTL_MS]);
  return authCookie(token, request);
}

function validateAccountData(body) {
  if (!body || !Array.isArray(body.readings) || !Array.isArray(body.calibrations)
      || body.readings.length > MAX_ACCOUNT_RECORDS || body.calibrations.length > MAX_ACCOUNT_RECORDS) {
    return false;
  }
  const recordIsValid = (record) => record && typeof record === "object" && !Array.isArray(record)
    && typeof record.timestamp === "string" && Number.isFinite(Date.parse(record.timestamp));
  if (!body.readings.every((record) => recordIsValid(record)
      && record.readings && typeof record.readings === "object" && !Array.isArray(record.readings))) {
    return false;
  }
  if (!body.calibrations.every((record) => record && typeof record === "object" && !Array.isArray(record)
      && typeof record.timestamp === "string" && Number.isFinite(Date.parse(record.timestamp))
      && typeof record.subsystem === "string" && record.subsystem.length <= 20
      && typeof record.sensor === "string" && record.sensor.length <= 40
      && typeof record.date === "string" && record.date.length <= 20
      && typeof record.responsible === "string" && record.responsible.length <= 80)) {
    return false;
  }
  return Buffer.byteLength(JSON.stringify(body), "utf8") <= MAX_ACCOUNT_DATA_BYTES;
}

async function handleAuth(request, response, pathname) {
  if (request.method === "GET" && pathname === "/api/auth/session") {
    const user = await getAuthenticatedUser(request);
    respond(response, 200, { authenticated: Boolean(user), user });
    return;
  }
  const isAccountWrite = pathname === "/api/account/data" || pathname === "/api/account/profile";
  const allowedMethods = isAccountWrite ? ["PUT"] : ["POST"];
  if (!allowedMethods.includes(request.method)) {
    response.writeHead(405, { allow: allowedMethods.join(", ") });
    response.end();
    return;
  }
  if (!isSameOrigin(request)) {
    respond(response, 403, { error: "origin_not_allowed" });
    return;
  }
  const requestLimits = isAccountWrite
    ? [accountWriteRateLimit, MAX_ACCOUNT_WRITES_PER_WINDOW]
    : [authRateLimit, MAX_AUTH_REQUESTS_PER_WINDOW];
  if (!permitRequest(request, requestLimits[0], requestLimits[1])) {
    respond(response, 429, { error: "rate_limited" });
    return;
  }
  if (!request.headers["content-type"]?.includes("application/json")) {
    respond(response, 415, { error: "invalid_request" });
    return;
  }

  let body;
  try {
    body = await readJson(request);
  } catch (error) {
    respond(response, error.status === 413 ? 413 : 400, {
      error: error.status === 413 ? "payload_too_large" : "invalid_request"
    });
    return;
  }

  if (pathname === "/api/auth/logout") {
    const tokenHash = sessionTokenHash(request);
    if (tokenHash) await query("DELETE FROM hidro_sessions WHERE token_hash = $1", [tokenHash]);
    respond(response, 200, { ok: true }, { "set-cookie": authCookie("", request, true) });
    return;
  }

  if (pathname === "/api/account/profile") {
    const user = await getAuthenticatedUser(request);
    if (!user) {
      respond(response, 401, { error: "authentication_required" });
      return;
    }
    const profile = validateProfile(body);
    if (!profile) {
      respond(response, 400, { error: "invalid_profile" });
      return;
    }
    await query("UPDATE hidro_users SET display_name = $1, theme = $2, avatar = $3 WHERE id = $4",
      [profile.displayName || null, profile.theme, profile.avatar || null, user.id]);
    respond(response, 200, { user: { ...user, ...profile } });
    return;
  }

  if (pathname === "/api/account/data") {
    if (request.method !== "PUT") {
      response.writeHead(405, { allow: "GET, PUT" });
      response.end();
      return;
    }
    const user = await getAuthenticatedUser(request);
    if (!user) {
      respond(response, 401, { error: "authentication_required" });
      return;
    }
    if (!validateAccountData(body)) {
      respond(response, 400, { error: "invalid_account_data" });
      return;
    }
    await query(`
      INSERT INTO hidro_account_data (user_id, readings_json, calibrations_json, updated_at)
      VALUES ($1, $2, $3, $4)
      ON CONFLICT(user_id) DO UPDATE SET
        readings_json = excluded.readings_json,
        calibrations_json = excluded.calibrations_json,
        updated_at = excluded.updated_at
    `, [user.id, JSON.stringify(body.readings), JSON.stringify(body.calibrations), new Date().toISOString()]);
    respond(response, 200, { ok: true });
    return;
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    respond(response, 400, { error: "invalid_request" });
    return;
  }
  if (!["/api/auth/register", "/api/auth/login"].includes(pathname)) {
    respond(response, 404, { error: "not_found" });
    return;
  }
  const username = typeof body.username === "string" ? body.username.trim().toLowerCase() : "";
  const password = typeof body.password === "string" ? body.password : "";
  const passwordLength = Array.from(password).length;
  if (!/^[a-z0-9_]{3,32}$/.test(username)
      || passwordLength < 10 || passwordLength > 128 || Buffer.byteLength(password, "utf8") > 512) {
    respond(response, 400, { error: "invalid_credentials_format" });
    return;
  }

  if (pathname === "/api/auth/register") {
    const salt = crypto.randomBytes(16);
    const hash = await passwordHash(password, salt);
    try {
      const result = await query(`
        INSERT INTO hidro_users (username, password_salt, password_hash, created_at)
        VALUES ($1, $2, $3, $4) RETURNING id
      `, [username, salt.toString("hex"), hash.toString("hex"), new Date().toISOString()]);
      const userId = Number(result.rows[0].id);
      await query(`
        INSERT INTO hidro_account_data (user_id, readings_json, calibrations_json, updated_at)
        VALUES ($1, '[]', '[]', $2)
      `, [userId, new Date().toISOString()]);
      respond(response, 201, { user: publicUser({ id: userId, username }) }, {
        "set-cookie": await setAuthenticatedSession(userId, request)
      });
    } catch (error) {
      if (error.code === "23505") {
        respond(response, 409, { error: "username_unavailable" });
        return;
      }
      throw error;
    }
    return;
  }

  const user = (await query(`
    SELECT id, username, password_salt, password_hash, display_name, theme, avatar FROM hidro_users WHERE username = $1
  `, [username])).rows[0];
  const salt = user ? Buffer.from(user.password_salt, "hex") : Buffer.alloc(16);
  const expectedHash = user ? Buffer.from(user.password_hash, "hex") : Buffer.alloc(64);
  const actualHash = await passwordHash(password, salt);
  const valid = user && expectedHash.length === actualHash.length
    && crypto.timingSafeEqual(expectedHash, actualHash);
  if (!valid) {
    respond(response, 401, { error: "invalid_credentials" });
    return;
  }
  const userId = Number(user.id);
  respond(response, 200, { user: publicUser(user) }, {
    "set-cookie": await setAuthenticatedSession(userId, request)
  });
}

async function handleAccountData(request, response) {
  if (request.method !== "GET") {
    response.writeHead(405, { allow: "GET, PUT" });
    response.end();
    return;
  }
  const user = await getAuthenticatedUser(request);
  if (!user) {
    respond(response, 401, { error: "authentication_required" });
    return;
  }
  const record = (await query(`
    SELECT readings_json, calibrations_json FROM hidro_account_data WHERE user_id = $1
  `, [user.id])).rows[0];
  if (!record) {
    respond(response, 200, { readings: [], calibrations: [] });
    return;
  }
  respond(response, 200, {
    readings: JSON.parse(record.readings_json),
    calibrations: JSON.parse(record.calibrations_json)
  });
}

async function handleSupport(request, response) {
  if (!permitRequest(request)) {
    respond(response, 429, { error: "rate_limited" });
    return;
  }
  if (!request.headers["content-type"]?.includes("application/json")) {
    respond(response, 415, { error: "invalid_request" });
    return;
  }

  let body;
  try {
    body = await readJson(request);
  } catch (error) {
    if (error.status === 413) {
      respond(response, 413, { error: "payload_too_large" });
      return;
    }
    if (error.status === 400) {
      respond(response, 400, { error: "invalid_request" });
      return;
    }
    throw error;
  }
  if (!process.env.GEMINI_API_KEY) {
    respond(response, 503, { error: "ai_not_configured" });
    return;
  }

  const message = typeof body.message === "string" ? body.message.trim() : "";
  const history = validateHistory(body.history);
  const imageResult = validateImage(body.image);
  const language = ["es", "en", "fr"].includes(body.language) ? body.language : "es";
  if (message.length > 2500 || !message && !body.image || !history) {
    respond(response, 400, { error: "invalid_request" });
    return;
  }
  if (imageResult.error) {
    respond(response, 400, { error: imageResult.error });
    return;
  }

  const conversationText = history
    .map((entry) => `${entry.role === "user" ? "Usuario" : "Asistente"}: ${entry.content}`)
    .join("\n");
  const prompt = [
    `Idioma de respuesta: ${language}.`,
    conversationText ? `Contexto previo de esta conversación:\n${conversationText}` : "",
    `Consulta actual:\n${message || "Analiza la imagen adjunta y describe los signos visibles con incertidumbre."}`,
    imageResult.image ? "Se adjunta una fotografía de una planta. Analízala con cautela; ofrece posibilidades, no un diagnóstico definitivo." : ""
  ].filter(Boolean).join("\n\n");
  const input = [{ type: "text", text: prompt }];
  if (imageResult.image) {
    input.push({
      type: "image",
      data: imageResult.image.data,
      mime_type: imageResult.image.mimeType
    });
  }

  let upstream;
  try {
    upstream = await fetch("https://generativelanguage.googleapis.com/v1beta/interactions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY
      },
      body: JSON.stringify({
        model: process.env.GEMINI_MODEL || "gemini-3.8-flash",
        system_instruction: supportInstructions,
        input,
        generation_config: { thinking_level: "low", max_output_tokens: 1200 }
      }),
      signal: AbortSignal.timeout(45000)
    });
  } catch (error) {
    console.error("Gemini request failed before receiving a response.", error.name);
    respond(response, 502, { error: "gemini_unavailable" });
    return;
  }

  if (!upstream.ok) {
    console.error("Gemini returned HTTP status", upstream.status);
    respond(response, 502, { error: "gemini_unavailable" });
    return;
  }

  let result;
  try {
    result = await upstream.json();
  } catch {
    respond(response, 502, { error: "invalid_gemini_response" });
    return;
  }
  const answer = typeof result.output_text === "string" ? result.output_text.trim() : "";
  if (!answer) {
    respond(response, 502, { error: "invalid_gemini_response" });
    return;
  }
  respond(response, 200, { answer });
}

function serveFile(response, pathname) {
  const files = {
    "/": ["index.html", "text/html; charset=utf-8"],
    "/index.html": ["index.html", "text/html; charset=utf-8"],
    "/app.js": ["app.js", "text/javascript; charset=utf-8"],
    "/styles.css": ["styles.css", "text/css; charset=utf-8"]
  };
  const assetMatch = pathname.match(/^\/assets\/([A-Za-z0-9._-]+)$/);
  if (assetMatch && assetMatch[1].toLowerCase().endsWith(".png")) {
    files[pathname] = [path.join("assets", assetMatch[1]), "image/png"];
  }
  const file = files[pathname];
  if (!file) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8", "x-content-type-options": "nosniff" });
    response.end("Not found");
    return;
  }
  const filePath = path.join(PUBLIC_DIR, file[0]);
  fs.readFile(filePath, (error, content) => {
    if (error) {
      console.error("Could not serve an application asset.", error.code);
      response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      response.end("Application asset unavailable");
      return;
    }
    response.writeHead(200, {
      "content-type": file[1],
      "cache-control": "no-store",
      "x-content-type-options": "nosniff",
      "referrer-policy": "no-referrer",
      "x-frame-options": "DENY"
    });
    response.end(content);
  });
}

const server = http.createServer((request, response) => {
  const requestUrl = new URL(request.url, "http://localhost");
  if (requestUrl.pathname === "/api/auth/session"
      || requestUrl.pathname === "/api/auth/register"
      || requestUrl.pathname === "/api/auth/login"
      || requestUrl.pathname === "/api/auth/logout"
      || requestUrl.pathname === "/api/account/profile"
      || requestUrl.pathname === "/api/account/data" && request.method !== "GET") {
    handleAuth(request, response, requestUrl.pathname).catch((error) => {
      console.error("Unexpected account request error.", error.message);
      if (!response.headersSent) respond(response, 500, { error: "account_service_error" });
    });
    return;
  }
  if (requestUrl.pathname === "/api/account/data" && request.method === "GET") {
    handleAccountData(request, response).catch((error) => {
      console.error("Could not read account data.", error.message);
      if (!response.headersSent) respond(response, 500, { error: "account_service_error" });
    });
    return;
  }
  if (requestUrl.pathname === "/api/health" && request.method === "GET") {
    databaseReady.then(() => "ok", (error) => `error: ${error.code || error.message}`).then((database) => {
      respond(response, 200, {
        provider: "Google Gemini",
        configured: Boolean(process.env.GEMINI_API_KEY),
        model: process.env.GEMINI_MODEL || "gemini-3.8-flash",
        database
      });
    });
    return;
  }
  if (requestUrl.pathname === "/api/support" && request.method === "POST") {
    handleSupport(request, response).catch((error) => {
      console.error("Unexpected technical support request error.", error.message);
      if (!response.headersSent) respond(response, 500, { error: "server_error" });
    });
    return;
  }
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { allow: "GET, HEAD" });
    response.end();
    return;
  }
  serveFile(response, requestUrl.pathname);
});

if (IS_VERCEL) {
  module.exports = (request, response) => server.emit("request", request, response);
} else {
  const host = process.env.HOST || "127.0.0.1";
  const port = Number(process.env.PORT || 3000);
  server.listen(port, host, () => {
    console.log(`HIDRO TEC is running at http://${host}:${port}`);
    if (!process.env.GEMINI_API_KEY) console.warn("Gemini support is disabled until GEMINI_API_KEY is configured.");
  });

  server.on("error", (error) => {
    console.error("Could not start the HIDRO TEC server.", error.message);
    process.exitCode = 1;
  });
}
