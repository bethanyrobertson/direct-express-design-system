import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>img~*]:pl-7 [&>img+div]:translate-y-[-3px] [&>img]:absolute [&>img]:left-4 [&>img]:top-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 font-sans",
  {
    variants: {
      variant: {
        default: "bg-[#E8F7DF] text-[#2E6B34] border-[#2E6B34] [&>svg]:text-[#2E6B34]",
        destructive:
          "bg-[#FFEBE9] border-[#B39595] text-[#410002] [&>svg]:text-[#410002]",
        success:
          "bg-[#E8F7DF] border-[#A4C1A4] text-[#2E6B34] [&>svg]:text-[#2E6B34]",
        warning:
          "bg-[#FDF6E2] border-[#C9BC8C] text-[#876700] [&>svg]:text-[#7C640C]",
        info:
          "bg-[#F4FFFA] border-[#9AB9B8] text-[#01332E] [&>svg]:text-[#01332E]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  onDismiss?: () => void;
  dismissible?: boolean;
}

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, onDismiss, dismissible, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertVariants({ variant }), className)}
        {...props}
      >
        {children}
        {dismissible && onDismiss && (
          <button
            type="button"
            onClick={onDismiss}
            className="absolute right-4 top-4 rounded-md p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Dismiss alert"
          >
            <CloseIcon />
          </button>
        )}
      </div>
    );
  }
);
Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-tight tracking-[0.15px] text-[16px]", "font-sans", className)}
    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 600 }}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed font-sans", className)}
    style={{ fontFamily: 'Noto Sans, sans-serif', fontWeight: 400 }}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
