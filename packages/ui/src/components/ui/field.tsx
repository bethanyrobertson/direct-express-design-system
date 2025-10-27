import * as React from "react";
import { cn } from "../../lib/utils";

// Field component
export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Field orientation */
  orientation?: "vertical" | "horizontal";
}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = "vertical", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "field",
          orientation === "horizontal" && "flex items-start gap-4",
          orientation === "vertical" && "space-y-2",
          className
        )}
        {...props}
      />
    );
  }
);
Field.displayName = "Field";

// FieldLabel component
export interface FieldLabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  /** Whether the field is required */
  required?: boolean;
}

const FieldLabel = React.forwardRef<HTMLLabelElement, FieldLabelProps>(
  ({ className, required, children, ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={cn(
          "block font-medium text-gray-900 dark:text-gray-100",
          className
        )}
        {...props}
      >
        {children}
        {required && (
          <span className="ml-1 text-red-500" aria-label="required">
            *
          </span>
        )}
      </label>
    );
  }
);
FieldLabel.displayName = "FieldLabel";

// FieldDescription component
export interface FieldDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

const FieldDescription = React.forwardRef<HTMLParagraphElement, FieldDescriptionProps>(
  ({ className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn(
          "text-sm text-gray-600 dark:text-gray-400",
          className
        )}
        {...props}
      />
    );
  }
);
FieldDescription.displayName = "FieldDescription";

// FieldGroup component
export interface FieldGroupProps extends React.HTMLAttributes<HTMLDivElement> {}

const FieldGroup = React.forwardRef<HTMLDivElement, FieldGroupProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("space-y-4", className)}
        {...props}
      />
    );
  }
);
FieldGroup.displayName = "FieldGroup";

// FieldSet component
export interface FieldSetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {}

const FieldSet = React.forwardRef<HTMLFieldSetElement, FieldSetProps>(
  ({ className, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        className={cn("space-y-4", className)}
        {...props}
      />
    );
  }
);
FieldSet.displayName = "FieldSet";

// FieldLegend component
export interface FieldLegendProps extends React.LegendHTMLAttributes<HTMLLegendElement> {}

const FieldLegend = React.forwardRef<HTMLLegendElement, FieldLegendProps>(
  ({ className, ...props }, ref) => {
    return (
      <legend
        ref={ref}
        className={cn(
          "text-base font-semibold text-gray-900 dark:text-gray-100",
          className
        )}
        {...props}
      />
    );
  }
);
FieldLegend.displayName = "FieldLegend";

// FieldSeparator component
export interface FieldSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

const FieldSeparator = React.forwardRef<HTMLDivElement, FieldSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("border-t border-gray-200 dark:border-gray-700", className)}
        {...props}
      />
    );
  }
);
FieldSeparator.displayName = "FieldSeparator";

export { Field, FieldLabel, FieldDescription, FieldGroup, FieldSet, FieldLegend, FieldSeparator };
