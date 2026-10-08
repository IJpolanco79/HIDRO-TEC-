// TEMPORAL: muestra el error real en la respuesta para depurar el despliegue.
let handler;
let loadError;
try {
  handler = require("../server.js");
} catch (error) {
  loadError = error;
}

module.exports = (request, response) => {
  if (loadError || typeof handler !== "function") {
    response.statusCode = 500;
    response.setHeader("content-type", "text/plain; charset=utf-8");
    response.end(`Load error: ${loadError ? loadError.stack : "handler is not a function"}`);
    return;
  }
  try {
    return handler(request, response);
  } catch (error) {
    response.statusCode = 500;
    response.setHeader("content-type", "text/plain; charset=utf-8");
    response.end(`Runtime error: ${error.stack}`);
  }
};
