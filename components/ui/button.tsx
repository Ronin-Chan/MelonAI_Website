import * as React from "react";
import { cn } from "@/lib/utils";

interface BaseButtonProps {
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

export type ButtonProps = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const variants: Record<NonNullable<BaseButtonProps["variant"]>, string> = {
  default:
    "bg-slate-950 text-white hover:bg-slate-800 focus-visible:ring-slate-400",
  outline:
    "border border-slate-200 bg-white text-slate-950 hover:bg-slate-50 focus-visible:ring-slate-400",
  secondary:
    "bg-slate-100 text-slate-950 hover:bg-slate-200 focus-visible:ring-slate-400",
};

const sizes: Record<NonNullable<BaseButtonProps["size"]>, string> = {
  default: "h-12 px-6 py-3 text-sm",
  sm: "h-10 px-4 text-sm",
  lg: "h-14 px-8 text-base",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const buttonClassName = cn(
      "inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60",
      variants[variant],
      sizes[size],
      className
    );

    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children, {
        className: cn(buttonClassName, (children.props as any).className),
        ref,
        ...props,
      } as any);
    }

    return (
      <button ref={ref} className={buttonClassName} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button };
