import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';
import { geistSans, geistMono, montserrat, barlowCondensed } from '@/config/fonts';

/* {Tipos del layout raíz} */
type RootLayoutProps = {
  children: ReactNode;
};

/* {Metadata base del sitio} */
export const metadata: Metadata = {
  title: 'Botanic',
  description: 'Botanic · Night Experience',
};

/* {Layout raíz de la aplicación} */
/* {Responsable de: inyectar variables de fuentes, estilos globales, estructura HTML base} */
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className={` ${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${barlowCondensed.variable} antialiased`}>{children}</body>
    </html>
  );
}
