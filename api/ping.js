module.exports = (request, response) => {
  let pg = "ok";
  try { require("pg"); } catch (error) { pg = error.message; }
  response.setHeader("content-type", "text/plain");
  response.end(`pong node ${process.version} pg:${pg} vercel:${process.env.VERCEL} db:${Boolean(process.env.DATABASE_URL)}`);
};
