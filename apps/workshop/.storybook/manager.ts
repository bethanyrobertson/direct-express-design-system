import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const customTheme = create({
  base: 'light', // Changed back to light theme
  
  // UI
  appBg: '#FFFFFF',
  appContentBg: '#FBFAF8',
  
  // Sidebar
  colorSecondary: '#02514E',
  
  // Customize your brand if needed
  brandTitle: 'Direct Express Design System',
  // brandUrl: 'https://example.com',
  // brandImage: 'https://yourlogo.com/logo.png',
});

addons.setConfig({
  theme: customTheme,
  sidebar: {
    renderLabel: ({ name }) => name, // Remove any emoji/icons from labels
  },
});

// Hide the sidebar icons with custom CSS
const style = document.createElement('style');
style.innerHTML = `
  /* Hide the grid/layout icons and bookmark icons in sidebar */
  [data-parent-id] > button > span:first-child,
  [data-item-id] > a > span:first-child {
    display: none !important;
  }
  
  /* Custom sidebar background color */
  [data-side="left"] {
    background-color: #013531 !important;
  }
  
  /* Custom hover color */
  [data-parent-id]:hover,
  [data-item-id]:hover {
    background-color: #DDECE7 !important;
  }
  
  /* Adjust padding since icons are hidden */
  [data-parent-id] > button,
  [data-item-id] > a {
    padding-left: 16px !important;
  }
`;
document.head.appendChild(style);

