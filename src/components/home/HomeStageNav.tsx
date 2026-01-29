'use client';

import { useState, useEffect } from 'react';
import StageLink from '../navigation/StageLink';
import SiteMenu from '../navigation/SiteMenu';
import HamburgerButton from '../navigation/HamburgerButton';
import { stageNavLinks } from '@/data/navigation';

/* {HomeStageNav – controlador de navegación desktop + mobile para home} */
/* {Responsable de: gestionar estado del menú, toggle de scroll body} */
/* {Renderiza: HamburgerButton (mobile), SiteMenu overlay, Desktop nav (lg+)} */
/* {Exclusivo de: página home (/) – no reutilizar en otras secciones} */
export default function HomeStageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* {Previene scroll del body cuando el menú mobile está abierto} */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  /* {Posiciones absolutas para los 6 enlaces del stage} */
  const positions = [
    'absolute top-10 left-12 z-20', // Superior izquierda
    'absolute top-10 left-1/2 -translate-x-1/2 z-20', // Centro superior
    'absolute top-10 right-12 z-20', // Superior derecha
    'absolute bottom-10 left-12 z-20', // Inferior izquierda
    'absolute bottom-10 left-1/2 -translate-x-1/2 z-20', // Centro inferior
    'absolute bottom-10 right-12 z-20', // Inferior derecha
  ];

  return (
    <>
      {/* {Botón hamburguesa – solo visible en mobile} */}
      {!isMenuOpen && <HamburgerButton onClick={() => setIsMenuOpen(true)} />}

      {/* {Overlay de menú mobile} */}
      <SiteMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onEscape={() => setIsMenuOpen(false)} />

      {/* {Navegación desktop – solo visible en lg+} */}
      <div className="hidden lg:block">
        {stageNavLinks.map((link, index) => (
          <nav key={link.href} className={positions[index]}>
            <StageLink href={link.href} label={link.label} className="font-bold" />
          </nav>
        ))}
      </div>
    </>
  );
}
