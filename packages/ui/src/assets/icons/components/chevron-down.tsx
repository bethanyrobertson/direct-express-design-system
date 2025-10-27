import * as React from "react";

export interface ChevronDownIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ChevronDownIcon: React.FC<ChevronDownIconProps> = ({ 
  size = 16, 
  className,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

ChevronDownIcon.displayName = "ChevronDownIcon";
