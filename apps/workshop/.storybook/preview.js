import "ui/style"
import './remove-sidebar-icons.css'
import * as React from 'react'

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      sidebar: {
        collapsedRoots: ['canvas', 'docs', 'story'],
      },
    },
  },
  tags: ['autodocs'],
};

export default preview;
