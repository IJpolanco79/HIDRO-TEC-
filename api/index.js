// TEMPORAL: muestra el error real en la respuesta para depurar el despliegue.
const captured = [];
process.on("unhandledRejection", (reason) => captured.push(`unhandledRejection: ${reason && reason.stack || reason}`));
process.on("uncaughtException", (error) => captured.push(`uncaughtException: ${error && error.stack || error}`));

let handler;
let loadError;

module.exports = async (request, response) => {
  if (!handler && !loadError) {
    try {
      handler = require("../server.js");
    } catch (error) {
      loadError = error;
    }
  }
  if (request.url.startsWith("/__debug")) {
    response.statusCode = 200;
    response.setHeader("content-type", "text/plain; charset=utf-8");
    response.end([
      `node ${process.version}`,
      `DATABASE_URL set: ${Boolean(process.env.DATABASE_URL)}`,
      `GEMINI_API_KEY set: ${Boolean(process.env.GEMINI_API_KEY)}`,
      `loadError: ${loadError ? loadError.stack : "none"}`,
      `handler: ${typeof handler}`,
      ...captured
    ].join("\n"));
    return;
  }
  if (loadError || typeof handler !== "function") {
    response.statusCode = 500;
    response.setHeader("content-type", "text/plain; charset=utf-8");
    response.end(`Load error: ${loadError ? loadError.stack : "handler is not a function"}\n${captured.join("\n")}`);
    return;
  }
  try {
    return handler(request, response);
  } catch (error) {
    response.statusCode = 500;
    response.setHeader("content-type", "text/plain; charset=utf-8");
    response.end(`Runtime error: ${error.stack}\n${captured.join("\n")}`);
  }
};
