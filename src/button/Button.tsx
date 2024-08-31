"use client";
import * as React from "react";

import { getIconStyling, getButtonStyling, TButtonVariant, TButtonSizes } from "./helper";
import { cn } from "../../helpers";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariant;
  size?: TButtonSizes;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  endIcon?: any;
  startIcon?: any;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    variant = "primary",
    size = "md",
    className = "",
    type = "button",
    loading = false,
    disabled = false,
    startIcon = null,
    endIcon = null,
    children,
    ...rest
  } = props;

  const buttonStyle = getButtonStyling(variant, size, disabled || loading);
  const buttonIconStyle = getIconStyling(size);

  return (
    <button ref={ref} type={type} className={cn(buttonStyle, className)} disabled={disabled || loading} {...rest}>
      {startIcon && <div className={buttonIconStyle}>{React.cloneElement(startIcon, { strokeWidth: 2 })}</div>}
      {children}
      {endIcon && <div className={buttonIconStyle}>{React.cloneElement(endIcon, { strokeWidth: 2 })}</div>}
    </button>
  );
});

Button.displayName = "batchui-button";

export { Button };
