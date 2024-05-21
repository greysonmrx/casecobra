"use client";

import React from "react";
import * as PrimitiveProgress from "@radix-ui/react-progress";

import { cn } from "@/utils/cn";

const ProgressRoot: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveProgress.Root>,
  PrimitiveProgress.ProgressProps
> = ({ className, value, ...props }, ref) => (
  <PrimitiveProgress.Root
    ref={ref}
    className={cn(
      "relative h-2 w-full overflow-hidden rounded-full bg-primary/20",
      className
    )}
    {...props}
  >
    <PrimitiveProgress.Indicator
      className="h-full w-full flex-1 bg-primary transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </PrimitiveProgress.Root>
);
ProgressRoot.displayName = PrimitiveProgress.Root.displayName;

const ForwardedProgressRootRef = React.forwardRef(ProgressRoot);

export { ForwardedProgressRootRef as Progress };
