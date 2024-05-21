"use client";

import React from "react";
import * as PrimitiveLabel from "@radix-ui/react-label";
import { type VariantProps } from "tailwind-variants";

import { cn } from "@/utils/cn";

import { variants } from "./variants";

interface LabelRootProps
  extends PrimitiveLabel.LabelProps,
    VariantProps<typeof variants> {}

const LabelRoot: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveLabel.Root>,
  LabelRootProps
> = ({ className, ...props }, ref) => (
  <PrimitiveLabel.Root
    ref={ref}
    className={cn(variants(), className)}
    {...props}
  />
);
LabelRoot.displayName = PrimitiveLabel.Root.displayName;

const ForwardedLabelRootRef = React.forwardRef(LabelRoot);

export { ForwardedLabelRootRef as Label };
