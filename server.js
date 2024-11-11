import Fastify from "fastify";
import userRouter from "./user.js";

const fastify = new Fastify({
  logger: true,
});
fastify.register(userRouter);

async function start() {
  const PORT = process.env.PORT || 4000;

  try {
    await fastify.listen({ port: PORT });
    console.log(`server is listening on port ${PORT}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
