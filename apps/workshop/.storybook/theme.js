import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  // Color palette
  colorPrimary: '#02514E',
  colorSecondary: '#DDECE7',

  // App background - this controls the sidebar background
  appBg: '#013531',
  
  // Content area background
  appContentBg: '#FBFAF8',
  
  appBorderColor: '#DDECE7',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Noto Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#01332E',
  textInverseColor: '#ffffff',

  // Toolbar colors
  barTextColor: '#ffffff',
  barSelectedColor: '#ffffff',
  barBg: '#013531',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#DDECE7',
  inputTextColor: '#01332E',
  inputBorderRadius: 8,

  // Button colors
  buttonBg: '#02514E',
  buttonBorder: '#02514E',
  barHoverColor: '#DDECE7',

  brandTitle: 'Design System',
  brandUrl: '/',
});

