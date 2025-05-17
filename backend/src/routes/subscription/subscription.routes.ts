import { subscriptionBodySchema } from "@/schemas/subscription.schema";
import { FastifyInstance } from "fastify";
import { subscribe } from "./subscription.handlers";
import { zodToJsonSchema as $ref } from "zod-to-json-schema";

export const subscriptionRoutes = async (fastify: FastifyInstance) => {
  fastify.post(
    "/subscribe",
    {
      schema: {
        tags: ["subscription"],
        summary: "Subscribe to weather updates",
        description:
          "Subscribe an email to receive weather updates for a specific city with chosen frequency.",
        consumes: ["application/json", "application/x-www-form-urlencoded"],
        produces: ["application/json"],
        body: $ref(subscriptionBodySchema),
        response: {
          200: {
            description: "Subscription successful. Confirmation email sent.",
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
          400: { description: "Invalid input" },
          409: { description: "Email already subscribed" },
        },
      },
    },
    subscribe
  );
};
