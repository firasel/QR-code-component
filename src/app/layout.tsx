import { cn } from '@src/lib/utils';
import './globals.css';
import type { Metadata } from 'next';
import { primary } from 'fonts';

export const metadata: Metadata = {
  title: 'QR Code Component - Frontend Mentor Challenge',
  description: 'Project developed by FiRasel',
  authors: {
    name: 'Firasel',
    url: 'https://firasel.com',
  },
  keywords: ['Frontend Mentor', 'QR Code', 'Component', 'Challenge'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(primary.variable, 'font-primary text-base')}>
        <main className="overflow-hidden">{children}</main>
      </body>
    </html>
  );
}
