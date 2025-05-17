import { Frequency } from "@prisma/client";
import { z } from "zod";

const subscriptionBodySchema = z.object({
  email: z.string().email(),
  city: z.string().min(1),
  frequency: z.nativeEnum(Frequency),
});

type SubscriptionInput = z.infer<typeof subscriptionBodySchema>;

export { subscriptionBodySchema };

export type { SubscriptionInput };
