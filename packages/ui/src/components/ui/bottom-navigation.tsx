import * as React from "react";
import { cn } from "../../lib/utils";

export interface BottomNavigationProps {
  activeTab?: string;
  onTabChange?: (tabId: string) => void;
  onHelpClick?: () => void;
  className?: string;
}

// SVG Icon paths
const icons = {
  home: {
    filled: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    outlined: "M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z",
  },
  card: {
    filled: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z",
    outlined: "M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z",
  },
  more: {
    outlined: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z",
  },
  help: {
    filled: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z",
    outlined: "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
  },
};

// ATM icon SVG path
const atmIconPath = "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z";

export const BottomNavigation = React.forwardRef<HTMLDivElement, BottomNavigationProps>(
  ({ activeTab: controlledActiveTab, onTabChange, onHelpClick, className, ...props }, ref) => {
    const [internalActiveTab, setInternalActiveTab] = React.useState(controlledActiveTab || "home");
    
    const activeTab = controlledActiveTab !== undefined ? controlledActiveTab : internalActiveTab;

    const navItems = [
      { id: "home", label: "Home", icon: "home" },
      { id: "card", label: "Card", icon: "card" },
      { id: "atm", label: "ATM", icon: "atm" },
      { id: "more", label: "", icon: "more" },
    ];

    const handleTabClick = (id: string) => {
      setInternalActiveTab(id);
      onTabChange?.(id);
    };

    const handleHelpClick = () => {
      const newActiveTab = activeTab === "help" ? "" : "help";
      setInternalActiveTab(newActiveTab);
      onHelpClick?.();
    };

    const isHelpActive = activeTab === "help";

    const getIconPath = (icon: string, isActive: boolean) => {
      switch (icon) {
        case "home":
          return isActive ? icons.home.filled : icons.home.outlined;
        case "card":
          return isActive ? icons.card.filled : icons.card.outlined;
        case "atm":
          return null; // Using inline SVG
        case "more":
          return icons.more.outlined;
        case "help":
          return isActive ? icons.help.filled : icons.help.outlined;
        default:
          return "";
      }
    };

    return (
      <div ref={ref} className={cn("ds-bottom-navigation", className)} {...props}>
        {/* Toolbar */}
        <div className="ds-bottom-navigation__toolbar">
          {navItems.map((item, index) => {
            const isActive = activeTab === item.id;
            const textColor = isActive ? "#fbfaf8" : "#c8d2d2";

            return (
              <div
                key={item.id}
                className={cn(
                  "ds-bottom-navigation__slot",
                  index === 0 && "ds-bottom-navigation__slot--first"
                )}
                onClick={() => handleTabClick(item.id)}
              >
                <div className="ds-bottom-navigation__content">
                  <div className="ds-bottom-navigation__state-layer">
                    <div
                      className={cn(
                        "ds-bottom-navigation__inner",
                        item.icon === "more" && "ds-bottom-navigation__inner--row"
                      )}
                    >
                      <div
                        className={cn(
                          "ds-bottom-navigation__item-content",
                          item.icon === "more" && "ds-bottom-navigation__item-content--row"
                        )}
                      >
                        {/* Icon */}
                        <div className="ds-bottom-navigation__icon">
                          {item.icon === "atm" ? (
                            <svg className="ds-bottom-navigation__icon-svg" fill="none" viewBox="0 0 24 24">
                              <g>
                                <path d={atmIconPath} fill={textColor} />
                              </g>
                            </svg>
                          ) : (
                            <svg className="ds-bottom-navigation__icon-svg" fill="none" viewBox="0 0 24 24">
                              <g>
                                <path d={getIconPath(item.icon, isActive)} fill={textColor} />
                              </g>
                            </svg>
                          )}
                        </div>
                        {/* Label */}
                        {item.label && (
                          <p
                            className="ds-bottom-navigation__label"
                            style={{
                              color: textColor,
                              width: item.id === "atm" ? "48px" : "40px",
                              height: item.id === "card" || item.id === "atm" ? "14px" : undefined,
                            }}
                          >
                            {item.label}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAB */}
        <div className="ds-bottom-navigation__fab" onClick={handleHelpClick}>
          <div className="ds-bottom-navigation__fab-state-layer">
            <div className="ds-bottom-navigation__fab-icon">
              <svg className="ds-bottom-navigation__icon-svg" fill="none" viewBox="0 0 24 24">
                <g>
                  <path d={getIconPath("help", isHelpActive)} fill={isHelpActive ? "#FBFAF8" : "#C8D2D2"} />
                </g>
              </svg>
            </div>
            <p
              className="ds-bottom-navigation__fab-label"
              style={{
                color: isHelpActive ? "#FBFAF8" : "#C8D2D2",
              }}
            >
              Help
            </p>
          </div>
        </div>
      </div>
    );
  }
);

BottomNavigation.displayName = "BottomNavigation";

