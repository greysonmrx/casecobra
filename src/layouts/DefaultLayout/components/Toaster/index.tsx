"use client";

import React from "react";

import { Toast } from "@/components/Toast";

import { useToast } from "@/hooks/useToast";

const Toaster: React.FC = () => {
  const { toasts } = useToast();

  return (
    <Toast.Provider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast.Root key={id} {...props}>
            <div className="grid gap-1">
              {title && <Toast.Title>{title}</Toast.Title>}
              {description && (
                <Toast.Description>{description}</Toast.Description>
              )}
            </div>
            {action}
            <Toast.Close />
          </Toast.Root>
        );
      })}
      <Toast.Viewport />
    </Toast.Provider>
  );
};

export { Toaster };
