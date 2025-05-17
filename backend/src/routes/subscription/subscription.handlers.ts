import { subscriptionService } from "@/business/services";
import { SubscriptionInput } from "@/schemas/subscription.schema";
import { FastifyReply, FastifyRequest } from "fastify";

const subscribe = async (
  request: FastifyRequest<{ Body: SubscriptionInput }>,
  reply: FastifyReply
) => {
  const payload = request.body;

  await subscriptionService.subscribe({ payload });

  return reply.code(200).send({
    message: "Subscription successful. Confirmation email sent.",
  });
};

export { subscribe };
