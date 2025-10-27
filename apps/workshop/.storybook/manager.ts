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

// Hide the sidebar icons with custom CSS using a more aggressive approach
if (typeof document !== 'undefined') {
  const injectStyles = () => {
    const style = document.createElement('style');
    style.setAttribute('data-storybook-manager', 'true');
    style.innerHTML = `
      /* Hide ALL SVG icons in the sidebar */
      nav svg,
      aside svg,
      section svg,
      [data-side="left"] svg,
      [role="navigation"] svg,
      [class*="sidebar"] svg,
      [id*="sidebar"] svg {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        width: 0 !important;
        height: 0 !important;
      }
      
      /* Hide button icons */
      button[aria-label*="Story"],
      button[aria-label*="Component"],
      button > span:first-child,
      a > span:first-child,
      [data-parent-id] > button > span:first-child,
      [data-item-id] > a > span:first-child {
        display: none !important;
      }
      
      /* Custom sidebar background color */
      [data-side="left"],
      nav,
      aside,
      [role="navigation"],
      [class*="sidebar"] {
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
  };

  // Try immediately
  injectStyles();

  // Also try after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectStyles);
  } else {
    injectStyles();
  }

  // Watch for new elements
  const observer = new MutationObserver(injectStyles);
  observer.observe(document.body, { childList: true, subtree: true });
}

