import { ConflictError } from "@/business/lib/error";
import { subscriptionRepository } from "@/database/repositories";
import { SubscriptionInput } from "@/schemas/subscription.schema";
import { randomUUID } from "crypto";

const subscribe = async ({ payload }: { payload: SubscriptionInput }) => {
  const subscription = await subscriptionRepository.findFirst({
    where: { email: payload.email, city: payload.city },
    select: { id: true },
  });

  if (subscription) {
    throw new ConflictError("Email already subscribed");
  }

  const token = randomUUID();

  await subscriptionRepository.create({
    data: {
      email: payload.email,
      frequency: payload.frequency,
      city: payload.city,
      token,
    },
  });

  // implement sending confirmation email
};

export const subscriptionService = {
  subscribe,
};
