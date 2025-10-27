# Icons Assets

This folder contains SVG icon assets for the design system, organized by category for easy navigation and usage.

## Structure

```
icons/
├── svg/                           # Raw SVG files organized by category
│   ├── icons:a11y/               # Accessibility icons
│   ├── icons:actions/            # Action icons (buttons, toggles, etc.)
│   ├── icons:alerts/             # Alert and notification icons
│   ├── icons:arrows/             # Arrow and navigation icons
│   ├── icons:general/            # General purpose icons
│   │   └── icons:data/           # Data visualization icons
│   ├── icons:mapping/            # Location and mapping icons
│   ├── icons:money/              # Financial and payment icons
│   ├── icons:security/           # Security and authentication icons
│   └── index.ts                  # SVG exports
├── components/                    # React icon components
│   ├── chevron-down.tsx
│   └── index.ts
├── categories.ts                  # Category-based exports
├── index.ts                      # Main icon exports
└── README.md                     # This file
```

## Usage

### Importing Icons

```typescript
// Import individual icons
import { CloseSvg, CheckSvg, SearchSvg } from "ui";

// Import with common aliases
import { Close, Check, Search, Menu, Settings } from "ui";

// Import by category
import * as ActionIcons from "ui";
import * as MoneyIcons from "ui";
import * as SecurityIcons from "ui";

// Import React components
import { ChevronDownIcon } from "ui";
```

### Using Icons in Components

```typescript
// Using SVG imports
<img src={CloseSvg} alt="Close" className="w-4 h-4" />

// Using React components
<ChevronDownIcon className="w-4 h-4 text-gray-500" />
<ChevronDownIcon size={24} strokeWidth={1.5} />
```

## Icon Categories

### 🎯 Actions (24 icons)
- Add, Remove, Check, Cancel, Close
- Bookmark, Favorite, Star
- Copy, Cut, Share
- List, Menu, Settings

### 🚨 Alerts (8 icons)
- Error, Warning, Help
- Notifications, Info

### ➡️ Arrows (19 icons)
- Arrow directions (up, down, left, right)
- Navigation arrows
- Upload, Download, Transfer

### 🏠 General (35+ icons)
- User, Home, Settings
- Search, Menu, Share
- File, Folder, Photo
- Visibility, Eye, Eye-off

### 📊 Data (2 icons)
- Bar Chart, Pie Chart

### 🗺️ Mapping (6 icons)
- Location, Map, Distance
- Add Location

### 💰 Money (20 icons)
- Wallet, Card, Cash, Bank
- Payment, Receipt, Savings
- Currency Exchange, ATM

### 🔒 Security (12 icons)
- Lock, Key, Shield
- Password, Fingerprint
- Verified User

### ♿ Accessibility (3 icons)
- Accessible, Blind, Ear Sound

## SVG Guidelines

- **Naming**: Use `kebab-case` (e.g., `arrow-drop-down.svg`)
- **Optimization**: Remove unnecessary metadata and optimize for web
- **Consistency**: Use consistent stroke width and sizing
- **Variants**: Create both filled and outlined versions when needed
- **Colors**: Use `currentColor` for stroke/fill to inherit text color

## Adding New Icons

1. **Place SVG files** in the appropriate category folder under `svg/`
2. **Update exports** in `svg/index.ts` to include new icons
3. **Add common aliases** in `categories.ts` if frequently used
4. **Create React components** in `components/` for complex icons
5. **Update this README** with new icon documentation

## React Component Guidelines

For frequently used icons, create React components for better performance and customization:

```typescript
// Example: close.tsx
import * as React from "react";

export interface CloseIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const CloseIcon: React.FC<CloseIconProps> = ({ 
  size = 16, 
  className,
  ...props 
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}
  >
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

CloseIcon.displayName = "CloseIcon";
```

## Performance Tips

- Use React components for frequently used icons
- Use SVG imports for one-off or rarely used icons
- Consider creating icon sprites for very large icon sets
- Use `currentColor` to inherit text color for better theming
