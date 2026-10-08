const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const crypto = require("node:crypto");
const { promisify } = require("node:util");
const { DatabaseSync } = require("node:sqlite");

const ROOT = __dirname;
const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_BODY_BYTES = 7 * 1024 * 1024;
const MAX_ACCOUNT_DATA_BYTES = 1024 * 1024;
const MAX_ACCOUNT_RECORDS = 3000;
const MAX_REQUESTS_PER_WINDOW = 8;
const MAX_SPEECH_REQUESTS_PER_WINDOW = 10;
const MAX_AUTH_REQUESTS_PER_WINDOW = 6;
const MAX_ACCOUNT_WRITES_PER_WINDOW = 30;
const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000;
const RATE_WINDOW_MS = 60 * 1000;
const allowedImageTypes = new Set(["image/jpeg", "image/png", "image/webp"]);
const rateLimit = new Map();
const speechRateLimit = new Map();
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
const accountDatabasePath = process.env.HIDRO_TEC_DB_PATH
  ? path.resolve(process.env.HIDRO_TEC_DB_PATH)
  : IS_VERCEL
    ? path.join("/tmp", "hidro-tec-accounts.sqlite")
    : path.join(ROOT, "data", "hidro-tec-accounts.sqlite");
fs.mkdirSync(path.dirname(accountDatabasePath), { recursive: true });
const accountDatabase = new DatabaseSync(accountDatabasePath);
accountDatabase.exec(`
  PRAGMA foreign_keys = ON;
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL COLLATE NOCASE UNIQUE,
    password_salt TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TEXT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS sessions (
    token_hash TEXT PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at INTEGER NOT NULL
  );
  CREATE INDEX IF NOT EXISTS sessions_expiry_idx ON sessions(expires_at);
  CREATE TABLE IF NOT EXISTS account_data (
    user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
    readings_json TEXT NOT NULL DEFAULT '[]',
    calibrations_json TEXT NOT NULL DEFAULT '[]',
    updated_at TEXT NOT NULL
  );
`);
accountDatabase.prepare("DELETE FROM sessions WHERE expires_at <= ?").run(Date.now());

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

function getAuthenticatedUser(request) {
  const tokenHash = sessionTokenHash(request);
  if (!tokenHash) return null;
  const session = accountDatabase.prepare(`
    SELECT users.id, users.username, sessions.expires_at
    FROM sessions JOIN users ON users.id = sessions.user_id
    WHERE sessions.token_hash = ?
  `).get(tokenHash);
  if (!session || session.expires_at <= Date.now()) {
    if (session) accountDatabase.prepare("DELETE FROM sessions WHERE token_hash = ?").run(tokenHash);
    return null;
  }
  return { id: Number(session.id), username: session.username };
}

function setAuthenticatedSession(userId, request) {
  const token = crypto.randomBytes(32).toString("base64url");
  const tokenHash = crypto.createHash("sha256").update(token).digest("hex");
  accountDatabase.prepare("INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)")
    .run(tokenHash, userId, Date.now() + SESSION_TTL_MS);
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
    const user = getAuthenticatedUser(request);
    respond(response, 200, { authenticated: Boolean(user), user });
    return;
  }
  const allowedMethods = pathname === "/api/account/data" ? ["PUT"] : ["POST"];
  if (!allowedMethods.includes(request.method)) {
    response.writeHead(405, { allow: allowedMethods.join(", ") });
    response.end();
    return;
  }
  if (!isSameOrigin(request)) {
    respond(response, 403, { error: "origin_not_allowed" });
    return;
  }
  const requestLimits = pathname === "/api/account/data"
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
    if (tokenHash) accountDatabase.prepare("DELETE FROM sessions WHERE token_hash = ?").run(tokenHash);
    respond(response, 200, { ok: true }, { "set-cookie": authCookie("", request, true) });
    return;
  }

  if (pathname === "/api/account/data") {
    if (request.method !== "PUT") {
      response.writeHead(405, { allow: "GET, PUT" });
      response.end();
      return;
    }
    const user = getAuthenticatedUser(request);
    if (!user) {
      respond(response, 401, { error: "authentication_required" });
      return;
    }
    if (!validateAccountData(body)) {
      respond(response, 400, { error: "invalid_account_data" });
      return;
    }
    accountDatabase.prepare(`
      INSERT INTO account_data (user_id, readings_json, calibrations_json, updated_at)
      VALUES (?, ?, ?, ?)
      ON CONFLICT(user_id) DO UPDATE SET
        readings_json = excluded.readings_json,
        calibrations_json = excluded.calibrations_json,
        updated_at = excluded.updated_at
    `).run(user.id, JSON.stringify(body.readings), JSON.stringify(body.calibrations), new Date().toISOString());
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
      const result = accountDatabase.prepare(`
        INSERT INTO users (username, password_salt, password_hash, created_at)
        VALUES (?, ?, ?, ?)
      `).run(username, salt.toString("hex"), hash.toString("hex"), new Date().toISOString());
      const userId = Number(result.lastInsertRowid);
      accountDatabase.prepare(`
        INSERT INTO account_data (user_id, readings_json, calibrations_json, updated_at)
        VALUES (?, '[]', '[]', ?)
      `).run(userId, new Date().toISOString());
      respond(response, 201, { user: { id: userId, username } }, {
        "set-cookie": setAuthenticatedSession(userId, request)
      });
    } catch (error) {
      if (error.code === "ERR_SQLITE_ERROR" && /UNIQUE constraint failed/i.test(error.message)) {
        respond(response, 409, { error: "username_unavailable" });
        return;
      }
      throw error;
    }
    return;
  }

  const user = accountDatabase.prepare(`
    SELECT id, username, password_salt, password_hash FROM users WHERE username = ? COLLATE NOCASE
  `).get(username);
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
  respond(response, 200, { user: { id: userId, username: user.username } }, {
    "set-cookie": setAuthenticatedSession(userId, request)
  });
}

function handleAccountData(request, response) {
  if (request.method !== "GET") {
    response.writeHead(405, { allow: "GET, PUT" });
    response.end();
    return;
  }
  const user = getAuthenticatedUser(request);
  if (!user) {
    respond(response, 401, { error: "authentication_required" });
    return;
  }
  const record = accountDatabase.prepare(`
    SELECT readings_json, calibrations_json FROM account_data WHERE user_id = ?
  `).get(user.id);
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

function findAudioPayload(value) {
  if (!value || typeof value !== "object") return null;
  if (value.type === "audio" && typeof value.data === "string") {
    return { data: value.data, mimeType: typeof value.mime_type === "string" ? value.mime_type : "audio/wav" };
  }
  for (const child of Object.values(value)) {
    const result = findAudioPayload(child);
    if (result) return result;
  }
  return null;
}

async function handleSpeech(request, response) {
  if (!permitRequest(request, speechRateLimit, MAX_SPEECH_REQUESTS_PER_WINDOW)) {
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
    respond(response, error.status === 413 ? 413 : 400, { error: error.status === 413 ? "payload_too_large" : "invalid_request" });
    return;
  }
  if (!process.env.GEMINI_API_KEY) {
    respond(response, 503, { error: "ai_not_configured" });
    return;
  }
  const text = typeof body.text === "string" ? body.text.trim() : "";
  const locale = typeof body.language === "string" ? body.language : "";
  const voiceByLanguage = { "es-MX": "Kore", "en-US": "Aoede", "fr-FR": "Sulafat" };
  if (!text || text.length > 1800 || !voiceByLanguage[locale]) {
    respond(response, 400, { error: "invalid_request" });
    return;
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
        model: process.env.GEMINI_TTS_MODEL || "gemini-3.8-flash-tts",
        input: [{
          type: "user_input",
          content: [{
            type: "text",
            text,
            annotations: [{ type: "speech_metadata", style: "Speak clearly and warmly at a steady, easy-to-follow pace." }]
          }]
        }],
        response_format: { type: "audio" },
        generation_config: { speech_config: [{ voice: voiceByLanguage[locale] }] }
      }),
      signal: AbortSignal.timeout(60000)
    });
  } catch (error) {
    console.error("Gemini speech request failed before receiving a response.", error.name);
    respond(response, 502, { error: "speech_unavailable" });
    return;
  }
  if (!upstream.ok) {
    console.error("Gemini speech returned HTTP status", upstream.status);
    respond(response, 502, { error: "speech_unavailable" });
    return;
  }
  let result;
  try {
    result = await upstream.json();
  } catch {
    respond(response, 502, { error: "invalid_speech_response" });
    return;
  }
  const audio = findAudioPayload(result);
  if (!audio || !audio.data || audio.mimeType.toLowerCase().split(";")[0].trim() !== "audio/wav"
      || !/^[A-Za-z0-9+/]+={0,2}$/.test(audio.data)) {
    respond(response, 502, { error: "invalid_speech_response" });
    return;
  }
  let audioBytes;
  try {
    audioBytes = Buffer.from(audio.data, "base64");
  } catch {
    respond(response, 502, { error: "invalid_speech_response" });
    return;
  }
  if (audioBytes.length < 44 || audioBytes.length > MAX_BODY_BYTES || audioBytes.toString("base64") !== audio.data
      || audioBytes.toString("ascii", 0, 4) !== "RIFF"
      || audioBytes.toString("ascii", 8, 12) !== "WAVE") {
    respond(response, 502, { error: "invalid_speech_response" });
    return;
  }
  respond(response, 200, { data: audio.data, mimeType: "audio/wav" });
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
  const filePath = path.join(ROOT, file[0]);
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
      || requestUrl.pathname === "/api/account/data" && request.method !== "GET") {
    handleAuth(request, response, requestUrl.pathname).catch((error) => {
      console.error("Unexpected account request error.", error.message);
      if (!response.headersSent) respond(response, 500, { error: "account_service_error" });
    });
    return;
  }
  if (requestUrl.pathname === "/api/account/data" && request.method === "GET") {
    try {
      handleAccountData(request, response);
    } catch (error) {
      console.error("Could not read account data.", error.message);
      if (!response.headersSent) respond(response, 500, { error: "account_service_error" });
    }
    return;
  }
  if (requestUrl.pathname === "/api/health" && request.method === "GET") {
    respond(response, 200, {
      provider: "Google Gemini",
      configured: Boolean(process.env.GEMINI_API_KEY),
      speechConfigured: Boolean(process.env.GEMINI_API_KEY),
      model: process.env.GEMINI_MODEL || "gemini-3.8-flash"
    });
    return;
  }
  if (requestUrl.pathname === "/api/speech" && request.method === "POST") {
    handleSpeech(request, response).catch((error) => {
      console.error("Unexpected speech request error.", error.message);
      if (!response.headersSent) respond(response, 500, { error: "speech_unavailable" });
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
