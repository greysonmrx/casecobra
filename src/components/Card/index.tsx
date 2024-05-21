import React from "react";

import { cn } from "@/utils/cn";

const CardRoot: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentProps<"div">
> = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
);
CardRoot.displayName = "CardRoot";

const CardHeader: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentProps<"div">
> = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardTitle: React.ForwardRefRenderFunction<
  HTMLHeadingElement,
  React.ComponentProps<"h3">
> = ({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription: React.ForwardRefRenderFunction<
  HTMLParagraphElement,
  React.ComponentProps<"p">
> = ({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

const CardContent: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentProps<"div">
> = ({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter: React.ForwardRefRenderFunction<
  HTMLDivElement,
  React.ComponentProps<"div">
> = ({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

const ForwardedCardRootRef = React.forwardRef(CardRoot);
const ForwardedCardHeaderRef = React.forwardRef(CardHeader);
const ForwardedCardFooterRef = React.forwardRef(CardFooter);
const ForwardedCardTitleRef = React.forwardRef(CardTitle);
const ForwardedCardDescriptionRef = React.forwardRef(CardDescription);
const ForwardedCardContentRef = React.forwardRef(CardContent);

export const Card = {
  Root: ForwardedCardRootRef,
  Header: ForwardedCardHeaderRef,
  Footer: ForwardedCardFooterRef,
  Title: ForwardedCardTitleRef,
  Description: ForwardedCardDescriptionRef,
  Content: ForwardedCardContentRef,
};
