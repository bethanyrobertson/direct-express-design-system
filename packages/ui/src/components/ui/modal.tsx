import * as React from "react";
import { cn } from "../../lib/utils";

export interface ModalProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  /** Whether the modal is open */
  open?: boolean;
  /** Callback when modal should close */
  onClose?: () => void;
  /** Modal title */
  title?: string;
  /** Modal content */
  children: React.ReactNode;
  /** Action buttons (typically a fragment with Button components) */
  actions?: React.ReactNode;
  /** Modal size */
  size?: "small" | "medium" | "large" | "fullscreen";
  /** Show close button in header */
  showCloseButton?: boolean;
  /** Close modal when clicking backdrop */
  closeOnBackdropClick?: boolean;
  /** Close modal when pressing Escape key */
  closeOnEscape?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  open = false,
  onClose,
  title,
  children,
  actions,
  size = "medium",
  showCloseButton = true,
  closeOnBackdropClick = true,
  closeOnEscape = true,
  className,
  ...props
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const previousFocusRef = React.useRef<HTMLElement | null>(null);

  // Handle escape key
  React.useEffect(() => {
    if (!open || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, closeOnEscape, onClose]);

  // Focus management
  React.useEffect(() => {
    if (open) {
      previousFocusRef.current = document.activeElement as HTMLElement;
      modalRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      previousFocusRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (closeOnBackdropClick && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const modalClasses = cn(
    "ds-modal",
    `ds-modal--${size}`,
    className
  );

  return (
    <div
      className="ds-modal-backdrop"
      onClick={handleBackdropClick}
      role="presentation"
    >
      <div
        ref={modalRef}
        className={modalClasses}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        tabIndex={-1}
        {...props}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="ds-modal__header">
            {title && (
              <h2 id="modal-title" className="ds-modal__title">
                {title}
              </h2>
            )}
            {showCloseButton && (
              <button
                type="button"
                className="ds-modal__close"
                onClick={onClose}
                aria-label="Close modal"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className="ds-modal__content">{children}</div>

        {/* Actions */}
        {actions && <div className="ds-modal__actions">{actions}</div>}
      </div>
    </div>
  );
};

Modal.displayName = "Modal";

/**
 * useModal Hook
 * Convenient hook for managing modal state
 */
export const useModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = React.useCallback(() => setIsOpen(true), []);
  const closeModal = React.useCallback(() => setIsOpen(false), []);
  const toggleModal = React.useCallback(() => setIsOpen((prev) => !prev), []);

  return {
    isOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};

