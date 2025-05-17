import createError from "@fastify/error";

const ConflictError = createError("409", "%s", 409);
const BadRequestError = createError("400", "%s", 400);

export { ConflictError, BadRequestError };
