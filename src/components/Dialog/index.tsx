"use client";

import React from "react";
import * as PrimitiveDialog from "@radix-ui/react-dialog";

import { cn } from "@/utils/cn";
import { Icon } from "../Icon";

const DialogRoot = PrimitiveDialog.Root;

const DialogTrigger = PrimitiveDialog.Trigger;

const DialogPortal = PrimitiveDialog.Portal;

const DialogClose = PrimitiveDialog.Close;

const DialogOverlay: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDialog.Overlay>,
  PrimitiveDialog.DialogOverlayProps
> = ({ className, ...props }, ref) => (
  <PrimitiveDialog.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-[99999] bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
);
DialogOverlay.displayName = PrimitiveDialog.Overlay.displayName;

const DialogContent: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDialog.Content>,
  PrimitiveDialog.DialogContentProps
> = ({ className, children, ...props }, ref) => (
  <DialogPortal>
    <ForwardedDialogOverlayRef />
    <PrimitiveDialog.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <PrimitiveDialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <Icon name="x" className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </PrimitiveDialog.Close>
    </PrimitiveDialog.Content>
  </DialogPortal>
);
DialogContent.displayName = PrimitiveDialog.Content.displayName;

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
DialogHeader.displayName = "DialogHeader";

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
DialogFooter.displayName = "DialogFooter";

const DialogTitle: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDialog.Title>,
  PrimitiveDialog.DialogTitleProps
> = ({ className, ...props }, ref) => (
  <PrimitiveDialog.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);
DialogTitle.displayName = PrimitiveDialog.Title.displayName;

const DialogDescription: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDialog.Description>,
  PrimitiveDialog.DialogDescriptionProps
> = ({ className, ...props }, ref) => (
  <PrimitiveDialog.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);
DialogDescription.displayName = PrimitiveDialog.Description.displayName;

const ForwardedDialogTitleRef = React.forwardRef(DialogTitle);
const ForwardedDialogOverlayRef = React.forwardRef(DialogOverlay);
const ForwardedDialogContentRef = React.forwardRef(DialogContent);
const ForwardedDialogDescriptionRef = React.forwardRef(DialogDescription);

export const Dialog = {
  Root: DialogRoot,
  Portal: DialogPortal,
  Close: DialogClose,
  Trigger: DialogTrigger,
  Overlay: ForwardedDialogOverlayRef,
  Content: ForwardedDialogContentRef,
  Header: DialogHeader,
  Footer: DialogFooter,
  Title: ForwardedDialogTitleRef,
  Description: ForwardedDialogDescriptionRef,
};
