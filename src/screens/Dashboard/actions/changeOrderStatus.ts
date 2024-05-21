"use server";

import { db } from "@/db";
import { OrderStatus } from "@prisma/client";

const changeOrderStatus = async ({
  id,
  newStatus,
}: {
  id: string;
  newStatus: OrderStatus;
}) => {
  await db.order.update({
    where: { id },
    data: { status: newStatus },
  });
};

export { changeOrderStatus };
