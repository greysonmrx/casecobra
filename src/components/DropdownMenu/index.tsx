"use client";

import React from "react";
import * as PrimitiveDropdownMenu from "@radix-ui/react-dropdown-menu";

import { cn } from "@/utils/cn";

import { Icon } from "../Icon";

const DropdownMenuRoot = PrimitiveDropdownMenu.Root;

const DropdownMenuTrigger = PrimitiveDropdownMenu.Trigger;

const DropdownMenuGroup = PrimitiveDropdownMenu.Group;

const DropdownMenuPortal = PrimitiveDropdownMenu.Portal;

const DropdownMenuSub = PrimitiveDropdownMenu.Sub;

const DropdownMenuRadioGroup = PrimitiveDropdownMenu.RadioGroup;

interface DropdownMenuSubTriggerProps
  extends PrimitiveDropdownMenu.MenuSubTriggerProps {
  inset?: boolean;
}

const DropdownMenuSubTrigger: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDropdownMenu.SubTrigger>,
  DropdownMenuSubTriggerProps
> = ({ className, inset, children, ...props }, ref) => (
  <PrimitiveDropdownMenu.SubTrigger
    ref={ref}
    className={cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
      inset && "pl-8",
      className
    )}
    {...props}
  >
    {children}
    <Icon name="chevron-right" className="ml-auto h-4 w-4" />
  </PrimitiveDropdownMenu.SubTrigger>
);
DropdownMenuSubTrigger.displayName =
  PrimitiveDropdownMenu.SubTrigger.displayName;

const DropdownMenuSubContent: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDropdownMenu.SubContent>,
  PrimitiveDropdownMenu.MenuSubContentProps
> = ({ className, ...props }, ref) => (
  <PrimitiveDropdownMenu.SubContent
    ref={ref}
    className={cn(
      "z-50 w-[var(--radix-dropdown-menu-trigger-width)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
);
DropdownMenuSubContent.displayName =
  PrimitiveDropdownMenu.SubContent.displayName;

const DropdownMenuContent: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDropdownMenu.Content>,
  PrimitiveDropdownMenu.MenuContentProps
> = ({ className, sideOffset = 4, ...props }, ref) => (
  <PrimitiveDropdownMenu.Portal>
    <PrimitiveDropdownMenu.Content
      ref={ref}
      sideOffset={sideOffset}
      className={cn(
        "z-50 w-[var(--radix-dropdown-menu-trigger-width)] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        className
      )}
      {...props}
    />
  </PrimitiveDropdownMenu.Portal>
);
DropdownMenuContent.displayName = PrimitiveDropdownMenu.Content.displayName;

interface DropdownMenuItemProps extends PrimitiveDropdownMenu.MenuItemProps {
  inset?: boolean;
}

const DropdownMenuItem: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDropdownMenu.Item>,
  DropdownMenuItemProps
> = ({ className, inset, ...props }, ref) => (
  <PrimitiveDropdownMenu.Item
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);
DropdownMenuItem.displayName = PrimitiveDropdownMenu.Item.displayName;

const DropdownMenuCheckboxItem: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDropdownMenu.CheckboxItem>,
  PrimitiveDropdownMenu.MenuCheckboxItemProps
> = ({ className, children, checked, ...props }, ref) => (
  <PrimitiveDropdownMenu.CheckboxItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    checked={checked}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <PrimitiveDropdownMenu.ItemIndicator>
        <Icon name="check" className="h-4 w-4" />
      </PrimitiveDropdownMenu.ItemIndicator>
    </span>
    {children}
  </PrimitiveDropdownMenu.CheckboxItem>
);
DropdownMenuCheckboxItem.displayName =
  PrimitiveDropdownMenu.CheckboxItem.displayName;

const DropdownMenuRadioItem: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDropdownMenu.RadioItem>,
  PrimitiveDropdownMenu.MenuRadioItemProps
> = ({ className, children, ...props }, ref) => (
  <PrimitiveDropdownMenu.RadioItem
    ref={ref}
    className={cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <PrimitiveDropdownMenu.ItemIndicator>
        <Icon name="dot" className="h-4 w-4 fill-current" />
      </PrimitiveDropdownMenu.ItemIndicator>
    </span>
    {children}
  </PrimitiveDropdownMenu.RadioItem>
);
DropdownMenuRadioItem.displayName = PrimitiveDropdownMenu.RadioItem.displayName;

interface DropdownMenuLabelProps extends PrimitiveDropdownMenu.MenuLabelProps {
  inset?: boolean;
}

const DropdownMenuLabel: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDropdownMenu.Label>,
  DropdownMenuLabelProps
> = ({ className, inset, ...props }, ref) => (
  <PrimitiveDropdownMenu.Label
    ref={ref}
    className={cn(
      "px-2 py-1.5 text-sm font-semibold",
      inset && "pl-8",
      className
    )}
    {...props}
  />
);
DropdownMenuLabel.displayName = PrimitiveDropdownMenu.Label.displayName;

const DropdownMenuSeparator: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveDropdownMenu.Separator>,
  PrimitiveDropdownMenu.MenuSeparatorProps
> = ({ className, ...props }, ref) => (
  <PrimitiveDropdownMenu.Separator
    ref={ref}
    className={cn("-mx-1 my-1 h-px bg-muted", className)}
    {...props}
  />
);
DropdownMenuSeparator.displayName = PrimitiveDropdownMenu.Separator.displayName;

const DropdownMenuShortcut: React.FC<React.ComponentProps<"span">> = ({
  className,
  ...props
}) => {
  return (
    <span
      className={cn("ml-auto text-xs tracking-widest opacity-60", className)}
      {...props}
    />
  );
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

const ForwardedDropdownMenuContentRef = React.forwardRef(DropdownMenuContent);
const ForwardedDropdownMenuItemRef = React.forwardRef(DropdownMenuItem);
const ForwardedDropdownMenuCheckboxItemRef = React.forwardRef(
  DropdownMenuCheckboxItem
);
const ForwardedDropdownMenuRadioItemRef = React.forwardRef(
  DropdownMenuRadioItem
);
const ForwardedDropdownMenuLabelRef = React.forwardRef(DropdownMenuLabel);
const ForwardedDropdownMenuSeparatorRef = React.forwardRef(
  DropdownMenuSeparator
);
const ForwardedDropdownMenuSubContentRef = React.forwardRef(
  DropdownMenuSubContent
);
const ForwardedDropdownMenuSubTriggerRef = React.forwardRef(
  DropdownMenuSubTrigger
);

export const DropdownMenu = {
  Root: DropdownMenuRoot,
  Trigger: DropdownMenuTrigger,
  Content: ForwardedDropdownMenuContentRef,
  Item: ForwardedDropdownMenuItemRef,
  CheckboxItem: ForwardedDropdownMenuCheckboxItemRef,
  RadioItem: ForwardedDropdownMenuRadioItemRef,
  Label: ForwardedDropdownMenuLabelRef,
  Separator: ForwardedDropdownMenuSeparatorRef,
  Shortcut: DropdownMenuShortcut,
  Group: DropdownMenuGroup,
  Portal: DropdownMenuPortal,
  Sub: DropdownMenuSub,
  SubContent: ForwardedDropdownMenuSubContentRef,
  SubTrigger: ForwardedDropdownMenuSubTriggerRef,
  RadioGroup: DropdownMenuRadioGroup,
};
