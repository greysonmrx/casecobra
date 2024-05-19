import React from "react";

import { variants } from "./variants";

export type IButtonSize = "default" | "sm" | "lg" | "icon";
export type IButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link";

interface RootProps extends React.ComponentProps<"button"> {
  isLoading?: boolean;
  size?: IButtonSize;
  variant?: IButtonVariant;
}

const ButtonRoot: React.ForwardRefRenderFunction<
  HTMLButtonElement,
  RootProps
> = ({ children, className, isLoading, variant, size, ...props }, ref) => {
  return (
    <button
      {...props}
      ref={ref}
      className={variants({ variant, size, className })}
      disabled={props.disabled || isLoading}
      aria-disabled={props.disabled || isLoading}
    >
      {children}
      {isLoading ? (
        <span className="ml-1.5 flex items-center gap-1">
          <span className="animate-flashing w-1 h-1 bg-white rounded-full inline-block" />
          <span className="animate-flashing delay-100 w-1 h-1 bg-white rounded-full inline-block" />
          <span className="animate-flashing delay-200 w-1 h-1 bg-white rounded-full inline-block" />
        </span>
      ) : null}
    </button>
  );
};

ButtonRoot.displayName = "ButtonRoot";

const ButtonText: React.FC<React.ComponentProps<"span">> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span className={className} {...props}>
      {children}
    </span>
  );
};

ButtonText.displayName = "ButtonText";

const ForwardedButtonRootRef = React.forwardRef(ButtonRoot);

export const Button = {
  Root: ForwardedButtonRootRef,
  Text: ButtonText,
};
