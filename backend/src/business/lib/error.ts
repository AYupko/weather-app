import createError from "@fastify/error";

const ConflictError = createError("409", "%s", 409);
const BadRequestError = createError("400", "%s", 400);
const NotFoundError = createError("404", "%s", 404);

export { ConflictError, BadRequestError, NotFoundError };
