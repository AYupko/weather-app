import { Prisma, prisma } from "@/database/prisma";

export const defaultSubscriptionSelect = {
  id: true,
  email: true,
  city: true,
  frequency: true,
  confirmed: true,
  createAt: true,
};

const findFirst = <T extends Prisma.SubscriptionFindFirstArgs>(
  payload: Prisma.SelectSubset<T, Prisma.SubscriptionFindFirstArgs>
) => {
  return prisma.subscription.findFirst(payload);
};

const create = <T extends Prisma.SubscriptionCreateArgs>(
  payload: Prisma.SelectSubset<T, Prisma.SubscriptionCreateArgs>
) => prisma.subscription.create(payload);

export const subscriptionRepository = {
  findFirst,
  create,
};
