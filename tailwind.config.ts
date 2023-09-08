const { fontFamily } = require('tailwindcss/defaultTheme');
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      primary: ['var(--font-primary)', ...fontFamily.sans],
    },
    fontSize: {
      base: [
        '0.9375rem', // 15px
        {
          lineHeight: '1',
        },
      ],
      md: [
        '1.375rem', // 22px
        {
          lineHeight: '1',
        },
      ],
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      navy: {
        dark: '#1F314F',
      },
      gray: {
        DEFAULT: '#7D889E',
        light: '#D5E1EF',
      },
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [],
};
export default config;
