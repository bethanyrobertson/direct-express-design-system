import * as React from "react";
import { cn } from "../../lib/utils";

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string | number;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
  label?: React.ReactNode;
  name?: string;
  id?: string;
  className?: string;
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ value, checked = false, onChange, disabled = false, error = false, label, name, id, className, ...props }, ref) => {
    const radioId = React.useId();
    const finalId = id || `radio-${name}-${value}-${radioId.replace(/:/g, "-")}`;

    const containerClasses = cn("ds-radio-container", disabled && "ds-radio-container--disabled", className);

    const radioClasses = cn("ds-radio", checked && "ds-radio--checked", disabled && "ds-radio--disabled", error && "ds-radio--error");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(e);
      }
    };

    const radioElement = (
      <div className={radioClasses}>
        <input ref={ref} id={finalId} name={name} type="radio" className="ds-radio__input" value={value} checked={checked} onChange={handleChange} disabled={disabled} aria-invalid={error} {...props} />
        <div className="ds-radio__background">
          <div className="ds-radio__outer-circle"></div>
          <div className="ds-radio__inner-circle"></div>
        </div>
        <div className="ds-radio__ripple"></div>
      </div>
    );

    if (label) {
      return (
        <label className={containerClasses} htmlFor={finalId}>
          {radioElement}
          <span className="ds-radio__label">{label}</span>
        </label>
      );
    }

    return radioElement;
  }
);

RadioButton.displayName = "RadioButton";

export interface RadioGroupProps {
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  children: React.ReactNode;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  orientation?: "vertical" | "horizontal";
  className?: string;
}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ value, onChange, name, children, disabled = false, error = false, label, orientation = "vertical", className, ...props }, ref) => {
    const groupClasses = cn("ds-radio-group", `ds-radio-group--${orientation}`, disabled && "ds-radio-group--disabled", error && "ds-radio-group--error", className);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!disabled && onChange) {
        onChange(e);
      }
    };

    // Clone children and inject props
    const enhancedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.type === RadioButton) {
        return React.cloneElement(child, {
          name: name || child.props.name,
          checked: value === child.props.value,
          onChange: handleChange,
          disabled: disabled || child.props.disabled,
          error: error || child.props.error,
        });
      }
      return child;
    });

    return (
      <div ref={ref} className={groupClasses} role="radiogroup" aria-label={label} {...props}>
        {label && <div className="ds-radio-group__label">{label}</div>}
        <div className="ds-radio-group__options">{enhancedChildren}</div>
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";

