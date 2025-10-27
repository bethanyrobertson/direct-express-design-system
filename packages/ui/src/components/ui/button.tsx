import * as React from "react";
import { cn } from "../../lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "filled" | "outlined" | "text" | "tonal";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "filled", size = "md", disabled = false, fullWidth = false, icon, iconPosition = "left", children, onClick, type = "button", className, ...props }, ref) => {
    const buttonClasses = cn(
      "ds-button",
      `ds-button--${variant}`,
      icon && "ds-button--with-icon",
      icon && `ds-button--icon-${iconPosition}`,
      fullWidth && "ds-button--full-width",
      disabled && "ds-button--disabled"
    );

    return (
      <button ref={ref} type={type} className={cn(buttonClasses, className)} onClick={onClick} disabled={disabled} {...props}>
        <div className="ds-button__state-layer">
          {icon && iconPosition === "left" && <span className="ds-button__icon">{icon}</span>}
          <span className="ds-button__label">{children}</span>
          {icon && iconPosition === "right" && <span className="ds-button__icon">{icon}</span>}
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";
