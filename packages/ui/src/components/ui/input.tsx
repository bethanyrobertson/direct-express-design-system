import * as React from "react";
import { cn } from "../../lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Input size variant */
  size?: "sm" | "md" | "lg";
  /** Input variant */
  variant?: "default" | "error" | "success";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size = "md", variant = "default", ...props }, ref) => {
    const sizeClasses = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-3 text-sm",
      lg: "h-12 px-4 text-base",
    };

    const variantClasses = {
      default: "border-gray-300 dark:border-gray-600 focus:border-[#02514E] focus:ring-[#02514E]",
      error: "border-red-500 focus:border-red-500 focus:ring-red-500",
      success: "border-green-500 focus:border-green-500 focus:ring-green-500",
    };

    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-900 dark:ring-offset-gray-900 dark:placeholder:text-gray-400",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
