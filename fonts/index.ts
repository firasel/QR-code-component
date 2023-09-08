import { Outfit } from 'next/font/google';

export const primary = Outfit({
  subsets: ['latin'],
  variable: '--font-primary',
  style: ['normal'],
  weight: ['400', '700'],
  display: 'optional',
});
