'use client';

import { useEffect } from 'react';
import StageLink from './StageLink';
import BrandLogo from '../brand/BrandLogo';
import { ctaButtons, mobileNavLinks } from '@/data/navigation';

/* {Props del menú mobile} */
type MobileMenuProps = {
  /* {Estado: abierto/cerrado} */
  isOpen: boolean;
  /* {Callback para cerrar el menú} */
  onClose: () => void;
  /* {Callback para cierre por tecla Escape} */
  onEscape: () => void;
};

/* {MobileMenu – overlay fullscreen con navegación jerárquica} */
/* {Responsable de: menú superpuesto, backdrop con blur, CTA + navegación} */
/* {Estructura: logo (top), botones CTA (compactos), navegación secundaria} */
/* {Visible: solo en pantallas < lg (1024px)} */
export default function MobileMenu({ isOpen, onClose, onEscape }: MobileMenuProps) {
  /* {Maneja cierre con tecla Escape} */
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onEscape]);

  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-200 lg:hidden">
      {/* {Backdrop semi-opaco con blur – cierra al click} */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-xl"
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onClose()}
        aria-label="Close menu"
      />

      {/* {Contenido jerárquico del menú} */}
      <div className="relative z-10 flex h-screen flex-col items-center justify-start overflow-y-auto px-6 pt-16 pb-8">
        {/* {1. Logo centrado – parte superior} */}
        <div className="mb-12 scale-75">
          <BrandLogo delay={0} />
        </div>

        {/* {2. Bloque de botones CTA compactos} */}
        <div className="mb-12 flex w-full max-w-xs flex-col items-center gap-3 px-4">
          {ctaButtons.map(button => (
            <a
              key={button.href}
              href={button.href}
              target={button.target}
              rel={button.target === '_blank' ? 'noopener noreferrer' : undefined}
              onClick={handleLinkClick}
              className={`font-ui w-full rounded-full border px-6 py-1.5 text-center text-sm leading-none tracking-[0.2em] uppercase transition-all duration-300 ${
                button.variant === 'primary' ? 'border-white/60 bg-white/10 text-white hover:bg-white/20' : 'border-white/30 text-white/80 hover:border-white/60 hover:text-white'
              } `}>
              {button.label}
            </a>
          ))}
        </div>

        {/* {3. Navegación secundaria – enlaces del stage} */}
        <nav className="flex flex-col items-center gap-6">
          {mobileNavLinks.map(link => (
            <StageLink key={link.href} href={link.href} label={link.label} onClick={handleLinkClick} className="-mr-[0.2em] text-sm tracking-[0.2em]" />
          ))}
        </nav>
      </div>

      {/* {Botón de cierre (X) – esquina superior derecha} */}
      <button aria-label="Close menu" onClick={onClose} className="font-ui fixed top-6 right-6 z-210 cursor-pointer text-3xl text-white transition hover:scale-110">
        ✕
      </button>
    </div>
  );
}
