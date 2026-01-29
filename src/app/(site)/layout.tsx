'use client';

import type { ReactNode } from 'react';
import '../globals.css';
import { useState } from 'react';
import SiteHeader from '@/components/navigation/SiteHeader';
import SiteMenu from '@/components/navigation/SiteMenu';

/* {Props del layout site} */
type SiteLayoutProps = {
  children: ReactNode;
};

/* {Layout para páginas internas del sitio} */
/* {Responsable de: estilos globales, header superior, menú overlay, contenido variable} */
export default function SiteLayout({ children }: SiteLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* {Header fijo superior} */}
      <SiteHeader onMenuOpen={() => setIsMenuOpen(true)} />

      {/* {Contenido principal} */}
      <main className="relative w-full">{children}</main>

      {/* {Menú overlay – solo en mobile} */}
      <SiteMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
