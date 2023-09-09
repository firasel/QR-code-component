import '../src/app/globals.css';
import type { Preview } from '@storybook/react';
import { primary } from '../fonts';
import { cn } from '../src/lib/utils';
import React from 'react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div
        className={cn(primary.variable, 'font-primary text-base text-black')}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
