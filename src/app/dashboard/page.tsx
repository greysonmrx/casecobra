import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

import { Dashboard } from "@/screens/Dashboard";

import { db } from "@/db";

const DashboardPage: React.FC = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const orders = await db.order.findMany({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: true,
      shippingAddress: true,
    },
  });

  const lastWeekSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 7)),
      },
    },
    _sum: {
      amount: true,
    },
  });

  const lastMonthSum = await db.order.aggregate({
    where: {
      isPaid: true,
      createdAt: {
        gte: new Date(new Date().setDate(new Date().getDate() - 30)),
      },
    },
    _sum: {
      amount: true,
    },
  });

  return (
    <Dashboard
      user={user}
      orders={orders as any}
      lastWeekSum={lastWeekSum}
      lastMonthSum={lastMonthSum}
    />
  );
};

export default DashboardPage;
