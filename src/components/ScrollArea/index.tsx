"use client";

import React from "react";
import * as PrimitiveScrollArea from "@radix-ui/react-scroll-area";

import { cn } from "@/utils/cn";

const ScrollAreaRoot: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveScrollArea.Root>,
  PrimitiveScrollArea.ScrollAreaProps
> = ({ className, children, ...props }, ref) => (
  <PrimitiveScrollArea.Root
    ref={ref}
    className={cn("relative overflow-hidden", className)}
    {...props}
  >
    <PrimitiveScrollArea.Viewport className="h-full w-full rounded-[inherit]">
      {children}
    </PrimitiveScrollArea.Viewport>
    <ForwardedScrollAreaScrollbarRef />
    <PrimitiveScrollArea.Corner />
  </PrimitiveScrollArea.Root>
);
ScrollAreaRoot.displayName = PrimitiveScrollArea.Root.displayName;

const ScrollAreaScrollbar: React.ForwardRefRenderFunction<
  React.ElementRef<typeof PrimitiveScrollArea.ScrollAreaScrollbar>,
  PrimitiveScrollArea.ScrollAreaScrollbarProps
> = ({ className, orientation = "vertical", ...props }, ref) => (
  <PrimitiveScrollArea.ScrollAreaScrollbar
    ref={ref}
    orientation={orientation}
    className={cn(
      "flex touch-none select-none transition-colors",
      orientation === "vertical" &&
        "h-full w-2.5 border-l border-l-transparent p-[1px]",
      orientation === "horizontal" &&
        "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      className
    )}
    {...props}
  >
    <PrimitiveScrollArea.ScrollAreaThumb className="relative flex-1 rounded-full bg-border" />
  </PrimitiveScrollArea.ScrollAreaScrollbar>
);
ScrollAreaScrollbar.displayName =
  PrimitiveScrollArea.ScrollAreaScrollbar.displayName;

const ForwardedScrollAreaRootRef = React.forwardRef(ScrollAreaRoot);
const ForwardedScrollAreaScrollbarRef = React.forwardRef(ScrollAreaScrollbar);

export const ScrollArea = {
  Root: ForwardedScrollAreaRootRef,
  Scrollbar: ForwardedScrollAreaScrollbarRef,
};
