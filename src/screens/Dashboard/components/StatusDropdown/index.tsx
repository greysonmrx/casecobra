"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { OrderStatus } from "@prisma/client";
import { useMutation } from "@tanstack/react-query";

import { Icon } from "@/components/Icon";
import { Button } from "@/components/Button";
import { DropdownMenu } from "@/components/DropdownMenu";

import { cn } from "@/utils/cn";

import { changeOrderStatus } from "../../actions/changeOrderStatus";

const LABEL_MAP: Record<keyof typeof OrderStatus, string> = {
  AWAITING_SHIPMENT: "Awaiting Shipment",
  FULFILLED: "Fulfilled",
  SHIPPED: "Shipped",
};

interface StatusDropdownProps {
  id: string;
  orderStatus: OrderStatus;
}

const StatusDropdown: React.FC<StatusDropdownProps> = ({ id, orderStatus }) => {
  const router = useRouter();

  const { mutate } = useMutation({
    mutationKey: ["change-order-status"],
    mutationFn: changeOrderStatus,
    onSuccess: () => router.refresh(),
  });

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button.Root
          variant="outline"
          className="w-52 flex justify-between items-center"
        >
          <Button.Text>
            {LABEL_MAP[orderStatus]}
            <Icon
              name="chevrons-up-down"
              className="ml-2 h-4 w-4 shrink-0 opacity-50"
            />
          </Button.Text>
        </Button.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content className="p-0">
        {Object.keys(OrderStatus).map((status) => (
          <DropdownMenu.Item
            key={status}
            className={cn(
              "flex text-sm gap-1 items-center p-2.5 cursor-default hover:bg-zinc-100",
              {
                "bg-zinc-100": orderStatus === status,
              }
            )}
            onClick={() => mutate({ id, newStatus: status as OrderStatus })}
          >
            <Icon
              name="check"
              className={cn(
                "mr-2 h-4 w-4 text-primary",
                orderStatus === status ? "opacity-100" : "opacity-0"
              )}
            />
            {LABEL_MAP[status as OrderStatus]}
          </DropdownMenu.Item>
        ))}
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export { StatusDropdown };
