import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  colorPrimary: '#02514E',
  colorSecondary: '#DDECE7',
  appBg: '#013531',
  appContentBg: '#FBFAF8',
  appBorderColor: '#DDECE7',
  appBorderRadius: 8,
  fontBase: '"Noto Sans", sans-serif',
  fontCode: 'monospace',
  textColor: '#01332E',
  textInverseColor: '#ffffff',
  barTextColor: '#ffffff',
  barSelectedColor: '#ffffff',
  barBg: '#013531',
  inputBg: '#ffffff',
  inputBorder: '#DDECE7',
  inputTextColor: '#01332E',
  inputBorderRadius: 8,
  buttonBg: '#02514E',
  buttonBorder: '#02514E',
  barHoverColor: '#DDECE7',
  brandTitle: 'Design System',
  brandUrl: '/',
});

addons.setConfig({
  theme,
});

