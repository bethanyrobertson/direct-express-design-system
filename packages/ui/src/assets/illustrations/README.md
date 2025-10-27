# Illustrations System

This folder contains all illustration assets for your design system.

## Folder Structure

```
illustrations/
├── svg/              # Place your SVG illustrations here
└── index.ts          # Export file for illustrations
```

## How to Add Illustrations

1. **Add your SVG files** to the `svg/` folder
2. **Export them** in `svg/index.ts`:
   
```typescript
export { default as YourIllustrationName } from './your-illustration-name.svg';
```

3. **That's it!** The illustration will automatically appear in Storybook on the Illustrations page.

## Example

```typescript
// In svg/index.ts
export { default as WelcomeIllustration } from './welcome-illustration.svg';
export { default as EmptyStateIllustration } from './empty-state-illustration.svg';
export { default as ErrorIllustration } from './error-illustration.svg';
```

## Features

- ✅ **Auto-displays** in Storybook
- ✅ **Search functionality** across all illustrations
- ✅ **Click to enlarge** - Click any illustration to view it full-size
- ✅ **Copy name** - Click to copy the illustration name
- ✅ **Organized layout** - Grid layout with responsive design

## Best Practices

- Use descriptive file names
- Optimize SVGs for web use
- Keep illustrations consistent in style
- Use appropriate file sizes

## Viewing Illustrations

Go to Storybook → "Illustrations/All Illustrations" to see all your illustrations in one place!

Happy illustrating! 🎨
