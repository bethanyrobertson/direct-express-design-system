import * as React from "react";
import { cn } from "../../lib/utils";

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Link text/content */
  children: React.ReactNode;
  /** URL to navigate to */
  href?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Opens in new tab (adds target="_blank" and rel="noopener noreferrer") */
  external?: boolean;
  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Link component with Material 3 styling
 * 
 * Text links with proper states and accessibility
 */
export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({
    children,
    href,
    disabled = false,
    external = false,
    className = '',
    onClick,
    ...props
  }, ref) => {
    const linkClasses = cn(
      "ds-link inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline-offset-4 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-sm transition-colors",
      disabled && "ds-link--disabled text-gray-400 dark:text-gray-600 cursor-not-allowed hover:text-gray-400 dark:hover:text-gray-600 hover:no-underline",
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };

    const linkProps = {
      ref,
      className: linkClasses,
      onClick: handleClick,
      ...(disabled && { 'aria-disabled': true }),
      ...(external && { target: '_blank', rel: 'noopener noreferrer' }),
      ...props,
    };

    if (href && !disabled) {
      return (
        <a href={href} {...linkProps}>
          {children}
        </a>
      );
    }

    return (
      <a 
        {...linkProps}
        role="link"
        tabIndex={disabled ? -1 : 0}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";
