import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium ring-offset-white transition-colors text-[#02514E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#02514E] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-[#DDECE7]",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-gray-200 bg-transparent hover:bg-gray-100 dark:border-gray-800 dark:hover:bg-gray-800",
      },
      size: {
        default: "h-10 px-3",
        sm: "h-9 px-2.5",
        lg: "h-11 px-5",
      },
    },
    defaultVariants: {
      variant: "outline",
      size: "default",
    },
  }
);

export interface ToggleProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof toggleVariants> {
  asChild?: boolean;
  pressed?: boolean;
  onPressedChange?: (pressed: boolean) => void;
}

const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, variant, size, asChild = false, pressed, onPressedChange, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    return (
      <Comp
        className={cn(toggleVariants({ variant, size, className }))}
        ref={ref}
        data-state={pressed ? "on" : "off"}
        aria-pressed={pressed}
        onClick={() => onPressedChange?.(!pressed)}
        {...props}
      />
    );
  }
);
Toggle.displayName = "Toggle";

export { Toggle, toggleVariants };
