"use client";

import React from "react";
import * as PrimitiveToast from "@radix-ui/react-toast";
import type { VariantProps } from "tailwind-variants";

import { Icon } from "@/components/Icon";

import { cn } from "@/utils/cn";

import { variants } from "./variants";

const ToastProvider = PrimitiveToast.Provider;

const ToastViewport: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveToast.Viewport>,
  PrimitiveToast.ToastViewportProps
> = ({ className, ...props }, ref) => (
  <PrimitiveToast.Viewport
    ref={ref}
    className={cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    )}
    {...props}
  />
);
ToastViewport.displayName = PrimitiveToast.Viewport.displayName;

export interface ToastRootProps extends PrimitiveToast.ToastProps {
  variant: VariantProps<typeof variants>["variant"];
}

const ToastRoot: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveToast.Root>,
  ToastRootProps
> = ({ className, variant, ...props }, ref) => (
  <PrimitiveToast.Root
    ref={ref}
    className={cn(variants({ variant }), className)}
    {...props}
  />
);
ToastRoot.displayName = PrimitiveToast.Root.displayName;

const ToastAction: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveToast.Action>,
  PrimitiveToast.ToastActionProps
> = ({ className, ...props }, ref) => (
  <PrimitiveToast.Action
    ref={ref}
    className={cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    )}
    {...props}
  />
);
ToastAction.displayName = PrimitiveToast.Action.displayName;

const ToastClose: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveToast.Close>,
  PrimitiveToast.ToastCloseProps
> = ({ className, ...props }, ref) => (
  <PrimitiveToast.Close
    ref={ref}
    className={cn(
      "absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    )}
    toast-close=""
    {...props}
  >
    <Icon name="x" className="h-4 w-4" />
  </PrimitiveToast.Close>
);
ToastClose.displayName = PrimitiveToast.Close.displayName;

const ToastTitle: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveToast.Title>,
  PrimitiveToast.ToastTitleProps
> = ({ className, ...props }, ref) => (
  <PrimitiveToast.Title
    ref={ref}
    className={cn("text-sm font-semibold [&+div]:text-xs", className)}
    {...props}
  />
);
ToastTitle.displayName = PrimitiveToast.Title.displayName;

const ToastDescription: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveToast.Description>,
  PrimitiveToast.ToastDescriptionProps
> = ({ className, ...props }, ref) => (
  <PrimitiveToast.Description
    ref={ref}
    className={cn("text-sm opacity-90", className)}
    {...props}
  />
);
ToastDescription.displayName = PrimitiveToast.Description.displayName;

export type ToastActionElement = React.ReactElement<typeof ToastAction>;

const ForwardedToastViewportRef = React.forwardRef(ToastViewport);
const ForwardedToastRootRef = React.forwardRef(ToastRoot);
const ForwardedToastTitleRef = React.forwardRef(ToastTitle);
const ForwardedToastDescriptionRef = React.forwardRef(ToastDescription);
const ForwardedToastCloseRef = React.forwardRef(ToastClose);
const ForwardedToastActionRef = React.forwardRef(ToastAction);

export const Toast = {
  Provider: ToastProvider,
  Viewport: ForwardedToastViewportRef,
  Root: ForwardedToastRootRef,
  Title: ForwardedToastTitleRef,
  Description: ForwardedToastDescriptionRef,
  Close: ForwardedToastCloseRef,
  Action: ForwardedToastActionRef,
};
