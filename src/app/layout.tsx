import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { geistSans, geistMono, montserrat, barlowCondensed } from '@/config/fonts';
import { buildPageMetadata } from '@/lib/metadata';

/* {Props del root layout} */
type RootLayoutProps = {
  children: ReactNode;
};

/* {Metadata base del sitio} */
export const metadata: Metadata = buildPageMetadata('home');

/* {Root layout global} */
/* {Responsable de: estructura HTML base (html/body), variables de fuentes globales, metadata base} */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${barlowCondensed.variable} antialiased`}>{children}</body>
    </html>
  );
}
