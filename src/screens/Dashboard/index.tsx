import React from "react";
import type { Order, Prisma, ShippingAddress, User } from "@prisma/client";
import { notFound } from "next/navigation";
import type { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";

import { Card } from "@/components/Card";
import { Progress } from "@/components/Progress";
import { Table } from "@/components/Table";

import { formatPrice } from "@/utils/formatPrice";

import { StatusDropdown } from "./components/StatusDropdown";

type DefaultArgs = {
  where: {
    isPaid: true;
    createdAt: {
      gte: Date;
    };
  };
  _sum: {
    amount: true;
  };
};

interface DashboardProps {
  user: KindeUser | null;
  orders: (Order & {
    user: User;
    shippingAddress: ShippingAddress;
  })[];
  lastWeekSum: Prisma.GetOrderAggregateType<DefaultArgs>;
  lastMonthSum: Prisma.GetOrderAggregateType<DefaultArgs>;
}

const Dashboard: React.FC<DashboardProps> = ({
  user,
  orders,
  lastWeekSum,
  lastMonthSum,
}) => {
  const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

  if (!user || user.email !== ADMIN_EMAIL) {
    return notFound();
  }

  const WEEKLY_GOAL = 500;
  const MONTHLY_GOAL = 2500;

  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      <div className="max-w-7xl w-full mx-auto flex flex-col sm:gap-4 sm:py-4">
        <div className="flex flex-col gap-16">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card.Root>
              <Card.Header className="pb-2">
                <Card.Description>Last Week</Card.Description>
                <Card.Title className="text-4xl">
                  {formatPrice(lastWeekSum._sum.amount ?? 0)}
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="text-sm text-muted-foreground">
                  of {formatPrice(WEEKLY_GOAL)} goal
                </div>
              </Card.Content>
              <Card.Footer>
                <Progress
                  value={((lastWeekSum._sum.amount ?? 0) * 100) / WEEKLY_GOAL}
                />
              </Card.Footer>
            </Card.Root>
            <Card.Root>
              <Card.Header className="pb-2">
                <Card.Description>Last Month</Card.Description>
                <Card.Title className="text-4xl">
                  {formatPrice(lastMonthSum._sum.amount ?? 0)}
                </Card.Title>
              </Card.Header>
              <Card.Content>
                <div className="text-sm text-muted-foreground">
                  of {formatPrice(MONTHLY_GOAL)} goal
                </div>
              </Card.Content>
              <Card.Footer>
                <Progress
                  value={((lastMonthSum._sum.amount ?? 0) * 100) / MONTHLY_GOAL}
                />
              </Card.Footer>
            </Card.Root>
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Incoming orders</h1>
          <Table.Root>
            <Table.Header>
              <Table.Row>
                <Table.Head>Customer</Table.Head>
                <Table.Head className="hidden sm:table-cell">Status</Table.Head>
                <Table.Head className="hidden sm:table-cell">
                  Purchase date
                </Table.Head>
                <Table.Head className="text-right">Amount</Table.Head>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {orders.map((order) => (
                <Table.Row key={order.id} className="bg-accent">
                  <Table.Cell>
                    <div className="font-medium">
                      {order.shippingAddress?.name}
                    </div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      {order.user.email}
                    </div>
                  </Table.Cell>
                  <Table.Cell className="hidden sm:table-cell">
                    <StatusDropdown id={order.id} orderStatus={order.status} />
                  </Table.Cell>
                  <Table.Cell className="hidden md:table-cell">
                    {order.createdAt.toLocaleDateString()}
                  </Table.Cell>
                  <Table.Cell className="text-right">
                    {formatPrice(order.amount)}
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
