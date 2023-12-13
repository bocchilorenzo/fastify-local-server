const fastify = require("fastify")({ logger: false });

fastify.register(require("@fastify/static"), {
  root: process.cwd(),
});

fastify.get("/", (req, reply) => {
  reply.sendFile("index.html");
});

fastify.listen({ port: 3000 }, (err, address) => {
  console.log("Server launched on http://localhost:3000");
  console.log("Press CTRL+C or close the terminal to stop the server.");
  let start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
  require('child_process').exec(start + ' http://localhost:3000');
  if (err) throw err;
});
