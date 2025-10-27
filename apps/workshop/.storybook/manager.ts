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
      
      /* Ensure sidebar has sufficient width and text doesn't get cut off */
      [data-side="left"],
      nav,
      aside,
      [role="navigation"],
      [class*="sidebar"] {
        min-width: 300px !important;
        width: auto !important;
      }
      
      /* Add proper padding to sidebar items */
      [data-parent-id] > button,
      [data-item-id] > a,
      button,
      a {
        padding-left: 20px !important;
        padding-right: 20px !important;
        text-overflow: ellipsis !important;
        overflow: hidden !important;
        white-space: nowrap !important;
      }
      
      /* Ensure nested text is properly styled */
      [data-parent-id] > button *,
      [data-item-id] > a * {
        color: #FFFFFF !important;
      }
      
      /* Top toolbar background color */
      [class*="Toolbar"],
      [role="toolbar"],
      header,
      [id*="toolbar"],
      [class*="bar"]:not([class*="sidebar"]):not([class*="scrollbar"]):not([class*="sidebar"]) {
        background-color: #013531 !important;
      }
      
      /* Top toolbar text color */
      [class*="Toolbar"] *,
      [role="toolbar"] *,
      header *,
      [id*="toolbar"] * {
        color: #FFFFFF !important;
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

