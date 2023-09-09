const { fontFamily } = require('tailwindcss/defaultTheme');
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      primary: ['var(--font-primary)', ...fontFamily.sans],
    },
    fontSize: {
      base: [
        '0.9375rem', // 15px
        {
          lineHeight: 'normal',
        },
      ],
      md: [
        '1.375rem', // 22px
        {
          lineHeight: 'normal',
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
    boxShadow: {
      1: '0px 25px 25px 0px rgba(0, 0, 0, 0.05)',
    },
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      borderRadius: {
        10: '.625rem',
        20: '1.25rem',
      },
    },
  },
  plugins: [],
};
export default config;
