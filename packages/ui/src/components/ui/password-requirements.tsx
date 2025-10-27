import * as React from "react";
import { cn } from "../../lib/utils";

export interface PasswordRequirement {
  id: string;
  label: string;
  validator: (password: string) => boolean;
}

export interface PasswordRequirementsProps {
  password?: string;
  requirements?: PasswordRequirement[];
  title?: string;
  showTitle?: boolean;
  className?: string;
}

export const PasswordRequirements = React.forwardRef<HTMLDivElement, PasswordRequirementsProps>(
  (
    {
      password = "",
      requirements = [
        { id: "length", label: "At least 8 characters", validator: (pwd) => pwd.length >= 8 },
        { id: "uppercase", label: "One uppercase letter", validator: (pwd) => /[A-Z]/.test(pwd) },
        { id: "lowercase", label: "One lowercase letter", validator: (pwd) => /[a-z]/.test(pwd) },
        { id: "number", label: "One number", validator: (pwd) => /\d/.test(pwd) },
        { id: "special", label: "One special character", validator: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) },
      ],
      title = "Password requirements",
      showTitle = true,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div ref={ref} className={cn("ds-password-requirements", className)} {...props}>
        {showTitle && <h4 className="ds-password-requirements__title">{title}</h4>}
        <ul className="ds-password-requirements__list">
          {requirements.map((requirement) => {
            const isMet = password ? requirement.validator(password) : false;
            const isActive = password.length > 0;

            return (
              <li
                key={requirement.id}
                className={cn(
                  "ds-password-requirements__item",
                  isMet && "ds-password-requirements__item--met",
                  isActive && !isMet && "ds-password-requirements__item--unmet"
                )}
              >
                <div className="ds-password-requirements__icon">
                  {isMet ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="currentColor" />
                      <path d="M6.66667 10.1147L4.55333 8.00133L3.78667 8.76133L6.66667 11.6413L12.6667 5.64133L11.9067 4.88133L6.66667 10.1147Z" fill="white" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" fill="none" />
                    </svg>
                  )}
                </div>
                <span className="ds-password-requirements__label">{requirement.label}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

PasswordRequirements.displayName = "PasswordRequirements";

// Hook for password validation
export const usePasswordValidation = (password: string, requirements: PasswordRequirement[]) => {
  const results = requirements.map((requirement) => ({
    id: requirement.id,
    met: password ? requirement.validator(password) : false,
  }));

  const allMet = results.every((result) => result.met);
  const metCount = results.filter((result) => result.met).length;
  const totalCount = requirements.length;
  const percentage = (metCount / totalCount) * 100;

  return {
    results,
    allMet,
    metCount,
    totalCount,
    percentage,
  };
};

// Default requirement sets
export const defaultPasswordRequirements: PasswordRequirement[] = [
  { id: "length", label: "At least 8 characters", validator: (pwd) => pwd.length >= 8 },
  { id: "uppercase", label: "One uppercase letter", validator: (pwd) => /[A-Z]/.test(pwd) },
  { id: "lowercase", label: "One lowercase letter", validator: (pwd) => /[a-z]/.test(pwd) },
  { id: "number", label: "One number", validator: (pwd) => /\d/.test(pwd) },
  { id: "special", label: "One special character (!@#$%^&*)", validator: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) },
];

export const strictPasswordRequirements: PasswordRequirement[] = [
  { id: "length", label: "At least 12 characters", validator: (pwd) => pwd.length >= 12 },
  { id: "uppercase", label: "At least two uppercase letters", validator: (pwd) => (pwd.match(/[A-Z]/g) || []).length >= 2 },
  { id: "lowercase", label: "At least two lowercase letters", validator: (pwd) => (pwd.match(/[a-z]/g) || []).length >= 2 },
  { id: "number", label: "At least two numbers", validator: (pwd) => (pwd.match(/\d/g) || []).length >= 2 },
  { id: "special", label: "At least one special character", validator: (pwd) => /[!@#$%^&*(),.?":{}|<>]/.test(pwd) },
  { id: "no-spaces", label: "No spaces allowed", validator: (pwd) => !/\s/.test(pwd) },
];

export const basicPasswordRequirements: PasswordRequirement[] = [
  { id: "length", label: "At least 6 characters", validator: (pwd) => pwd.length >= 6 },
  { id: "letter", label: "At least one letter", validator: (pwd) => /[a-zA-Z]/.test(pwd) },
  { id: "number", label: "At least one number", validator: (pwd) => /\d/.test(pwd) },
];

