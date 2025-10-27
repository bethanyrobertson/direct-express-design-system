# Adding New Icons to the System

This guide explains how to add new icons to your design system and have them automatically appear in the Icons page.

## Quick Start

1. **Add your SVG file** to the appropriate category folder:
   ```
   packages/ui/src/assets/icons/svg/icons:actions/my-new-icon.svg
   ```

2. **Export the icon** in `packages/ui/src/assets/icons/svg/index.ts`:
   ```typescript
   export { default as MyNewIconSvg } from './icons:actions/my-new-icon.svg';
   ```

3. **That's it!** The icon will automatically appear in the Icons page.

## Detailed Steps

### Step 1: Choose the Right Category

Place your SVG in the appropriate category folder:

- `icons:a11y/` - Accessibility icons
- `icons:actions/` - Action buttons, toggles, interactions
- `icons:alerts/` - Errors, warnings, notifications
- `icons:arrows/` - Navigation and directional icons
- `icons:general/` - General purpose UI icons
- `icons:mapping/` - Location and geography icons
- `icons:money/` - Financial and payment icons
- `icons:security/` - Security and authentication icons

### Step 2: Add the Export

Add your icon to the `svg/index.ts` file:

```typescript
// In packages/ui/src/assets/icons/svg/index.ts

// Add your export in the appropriate category section
export { default as MyNewIconSvg } from './icons:actions/my-new-icon.svg';
```

### Step 3: Optional - Add Common Alias

If it's a frequently used icon, add an alias in `categories.ts`:

```typescript
// In packages/ui/src/assets/icons/categories.ts

export { 
  // ... existing aliases
  MyNewIconSvg as MyNewIcon,  // Add this line
} from './svg';
```

### Step 4: Optional - Create React Component

For complex or frequently used icons, create a React component:

```typescript
// In packages/ui/src/assets/icons/components/my-new-icon.tsx
import * as React from "react";

export interface MyNewIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const MyNewIcon: React.FC<MyNewIconProps> = ({ 
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
    {/* Your SVG content */}
  </svg>
);

MyNewIcon.displayName = "MyNewIcon";
```

Then export it in `components/index.ts`:

```typescript
export * from './my-new-icon';
```

## Automatic Discovery

The icon system automatically:

- ✅ **Categorizes icons** based on their names and folder location
- ✅ **Updates the Icons page** when you add new exports
- ✅ **Provides search functionality** across all icons
- ✅ **Shows icon counts** per category
- ✅ **Enables copy-to-clipboard** for icon names

## Icon Naming Conventions

- Use `kebab-case` for file names: `my-new-icon.svg`
- Use `PascalCase` for exports: `MyNewIconSvg`
- Use descriptive names that indicate the icon's purpose
- Include variants in the name: `icon-filled.svg`, `icon-outline.svg`

## SVG Guidelines

- **Optimize** your SVGs for web use
- **Use `currentColor`** for stroke/fill to inherit text color
- **Consistent sizing** - aim for 24x24 viewBox
- **Remove metadata** and unnecessary attributes
- **Use consistent stroke width** (usually 1.5 or 2)

## Testing Your Icons

1. **View in Storybook**: Go to the Icons page in Storybook
2. **Search functionality**: Test the search to ensure your icon appears
3. **Copy functionality**: Click the copy button to test icon name copying
4. **Responsive design**: Check how icons look on different screen sizes

## Troubleshooting

### Icon Not Appearing
- Check that the export is added to `svg/index.ts`
- Verify the file path is correct
- Ensure the SVG file is valid

### Wrong Category
- Check the folder location matches the intended category
- Update the `categorizeIcon` function in `iconRegistry.ts` if needed

### Import Issues
- Make sure the icon name ends with `Svg`
- Check for typos in the export name
- Verify the import path is correct

## Examples

### Adding a Simple Icon
```bash
# 1. Add file
cp my-icon.svg packages/ui/src/assets/icons/svg/icons:actions/

# 2. Add export
echo "export { default as MyIconSvg } from './icons:actions/my-icon.svg';" >> packages/ui/src/assets/icons/svg/index.ts
```

### Adding a React Component Icon
```bash
# 1. Create component file
touch packages/ui/src/assets/icons/components/my-icon.tsx

# 2. Add export
echo "export * from './my-icon';" >> packages/ui/src/assets/icons/components/index.ts
```

The icon system is designed to be flexible and automatic - just add your SVG files and exports, and everything else is handled for you! 🎉
