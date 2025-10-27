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
      /* Hide ALL SVG icons in the sidebar ONLY, not in content */
      nav svg,
      aside svg,
      section[data-side="left"] svg,
      [data-side="left"] svg,
      [role="navigation"] svg,
      [class*="sidebar"] svg:not([class*="password-requirements"]),
      [id*="sidebar"] svg {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        width: 0 !important;
        height: 0 !important;
      }
      
      /* Don't hide SVGs in password requirements or other components */
      [class*="password-requirements"] svg,
      main svg,
      [id*="storybook-addon"] svg,
      [data-testid] svg {
        display: initial !important;
        visibility: visible !important;
        opacity: 1 !important;
        width: initial !important;
        height: initial !important;
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
      
      /* Ensure all text in sidebar is white and readable */
      nav,
      aside,
      [role="navigation"],
      [class*="sidebar"],
      [data-side="left"],
      nav *,
      aside *,
      [role="navigation"] *,
      [class*="sidebar"] *,
      a,
      button,
      span,
      div {
        color: #FFFFFF !important;
      }
      
      /* Custom hover color */
      [data-parent-id]:hover,
      [data-item-id]:hover,
      a:hover,
      button:hover {
        background-color: #DDECE7 !important;
        color: #01332E !important;
      }
      
      /* Adjust padding since icons are hidden */
      [data-parent-id] > button,
      [data-item-id] > a {
        padding-left: 20px !important;
      }
      
      /* Add more spacing to all sidebar content */
      nav,
      aside,
      [role="navigation"],
      [class*="sidebar"],
      [data-side="left"] {
        padding-left: 16px !important;
      }
      
      /* Ensure text elements have proper left padding */
      nav *,
      aside *,
      [class*="sidebar"] * {
        padding-left: 0 !important;
      }
      
      /* Add padding to the container level */
      [data-side="left"] > div:first-child {
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

