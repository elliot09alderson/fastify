const createUserSchema = {
  body: {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
      name: {
        type: "string",
      },
      email: {
        type: "string",
      },
      password: {
        type: "number",
      },
    },
  },

  response: {
    200: {
      type: "object",
      properties: {
        id: {
          type: "string",
        },
      },
    },
  },
};

async function userRouter(fastify, opts) {
  fastify.post("/api/users", { schema: createUserSchema }, (request, reply) => {
    reply.code(201);
    return {
      id: "User created Successfully ",
    };
  });
  fastify.get("/", (request, reply) => {
    return {
      message: "User fetched Successfully ",
    };
  });
}

export default userRouter;
