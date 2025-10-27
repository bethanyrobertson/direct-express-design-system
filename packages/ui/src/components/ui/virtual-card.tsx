import * as React from "react";
import { cn } from "../../lib/utils";

// Import SVG assets
import DefaultCard from "../../assets/virtual-cards/State-Default.svg";
import LockedCard from "../../assets/virtual-cards/State-Locked.svg";
import DeactivatedCard from "../../assets/virtual-cards/State-Deactivated.svg";
import CardBack from "../../assets/virtual-cards/virtualcard-back.svg";

export interface VirtualCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card state */
  state?: "default" | "locked" | "deactivated";
  /** Show back of card */
  showBack?: boolean;
  /** Card number (masked) */
  cardNumber?: string;
  /** Cardholder name */
  cardHolder?: string;
  /** Expiry date */
  expiryDate?: string;
  /** Size variant */
  size?: "default" | "small" | "large";
}

const VirtualCard = React.forwardRef<HTMLDivElement, VirtualCardProps>(
  (
    {
      state = "default",
      showBack = false,
      cardNumber = "**** **** **** 1234",
      cardHolder = "CARDHOLDER NAME",
      expiryDate = "12/25",
      size = "default",
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    // Select the appropriate SVG based on showBack and state
    let CardSvg;
    if (showBack) {
      CardSvg = CardBack;
    } else {
      CardSvg = state === "locked" ? LockedCard : state === "deactivated" ? DeactivatedCard : DefaultCard;
    }

    const cardClasses = cn(
      "ds-virtual-card",
      `ds-virtual-card--${state}`,
      showBack && "ds-virtual-card--back",
      onClick && state !== "deactivated" && state !== "locked" && "ds-virtual-card--clickable",
      size !== "default" && `ds-virtual-card--${size}`,
      className
    );

    return (
      <div 
        ref={ref}
        className={cardClasses}
        onClick={state !== "deactivated" && state !== "locked" ? onClick : undefined}
        {...props}
      >
        <img src={CardSvg} alt="Virtual Card" className="ds-virtual-card__svg" />
        
        {/* Optional: Overlay card information for front side only if dynamic data is provided */}
        {!showBack && state === "default" && (cardNumber !== "**** **** **** 1234" || cardHolder !== "CARDHOLDER NAME") && (
          <div className="ds-virtual-card__info">
            <div className="ds-virtual-card__number">{cardNumber}</div>
            <div className="ds-virtual-card__details">
              <div className="ds-virtual-card__holder">{cardHolder}</div>
            </div>
          </div>
        )}
      </div>
    );
  }
);

VirtualCard.displayName = "VirtualCard";

export { VirtualCard };

