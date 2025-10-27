import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const customTheme = create({
  base: 'light', // Changed back to light theme
  
  // Typography
  fontBase: '"Noto Sans", sans-serif',
  fontCode: '"Source Code Pro", monospace',
  
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
      /* Hide SVG icons ONLY in the navigation sidebar */
      nav svg,
      aside svg,
      section[data-side="left"] svg,
      [data-side="left"] svg,
      [role="navigation"] svg {
        display: none !important;
        visibility: hidden !important;
        opacity: 0 !important;
        width: 0 !important;
        height: 0 !important;
      }
      
      /* EXCEPT: Don't hide SVGs in story content (including password requirements) */
      main svg,
      [role="main"] svg,
      [class*="password-requirements"] svg,
      .ds-password-requirements svg,
      [id*="storybook-addon"] svg,
      [data-testid] svg,
      article svg,
      [data-id*="story"] svg {
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
      
      /* Add proper padding to sidebar items - parent items (categories) */
      [data-parent-id] > button {
        padding-left: 24px !important;
        padding-right: 20px !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
      
      /* Child items (stories) should be indented more */
      [data-item-id] > a {
        padding-left: 40px !important;
        padding-right: 20px !important;
        overflow: hidden !important;
        text-overflow: ellipsis !important;
        white-space: nowrap !important;
      }
      
      /* Ensure nested text is properly styled */
      [data-parent-id] > button *,
      [data-item-id] > a * {
        color: #FFFFFF !important;
      }
      
      /* Apply Source Serif Pro to sidebar titles/category labels */
      [data-parent-id] > button,
      h1,
      h2,
      h3,
      h4,
      [class*="Title"],
      [class*="title"] {
        font-family: 'Source Serif Pro', serif !important;
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

