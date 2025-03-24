import './globals.css';
import type { Metadata } from 'next';
import CustomCursor from '@/components/CustomCursor';
import Navigation from '@/components/Navigation';
import { bounded } from './fonts';

export const metadata: Metadata = {
  title: 'Web Studio',
  description: 'Создаем современные веб-сайты',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={bounded.variable}>
      <body>
        <Navigation />
        {children}
        <CustomCursor />
      </body>
    </html>
  );
}
