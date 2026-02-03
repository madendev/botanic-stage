'use client';

import { useEffect } from 'react';
import StageLink from './StageLink';
import BrandLogo from '../brand/BrandLogo';
import SocialIcon from '@/components/social/SocialIcon';
import { ctaButtons, mobileNavLinks } from '@/data/navigation';
import { socialLinks } from '@/data/social';
import { businessInfo } from '@/data/business';

/* {Props del menú overlay} */
type SiteMenuProps = {
  /* {Estado: abierto/cerrado} */
  isOpen: boolean;
  /* {Callback para cerrar el menú} */
  onClose: () => void;
  /* {Callback para cierre por tecla Escape} */
  onEscape?: () => void;
};

/* {SiteMenu – overlay fullscreen con navegación jerárquica} */
/* {Responsable de: menú superpuesto, backdrop con blur, CTA + navegación} */
/* {Estructura: logo (top), botones CTA (compactos), navegación secundaria} */
/* {Visible: solo en pantallas < lg (1024px)} */
export default function SiteMenu({ isOpen, onClose, onEscape }: SiteMenuProps) {
  /* {Maneja cierre con tecla Escape} */
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onEscape?.();
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
    <div className="fixed inset-0 z-200">
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
      <div className="relative z-10 flex h-screen flex-col items-center justify-between overflow-y-auto px-6 pt-4 pb-20 sm:pt-16 sm:pb-8">
        {/* {Botón cerrar X – superior derecha} */}
        <button
          onClick={onClose}
          className="absolute top-4 right-6 z-20 text-white/60 transition-colors duration-300 hover:text-white sm:top-5 sm:right-8"
          aria-label="Cerrar menú">
          <svg className="size-6 sm:size-7" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* {Contenedor superior: logo, botones CTA y navegación} */}
        <div className="flex w-full flex-col items-center">
          {/* {1. Logo centrado – parte superior (reducido en mobile)} */}
          <div className="mb-8 scale-50 sm:mb-12 sm:scale-75">
            <BrandLogo delay={0} />
          </div>

          {/* {2. Bloque de botones CTA compactos} */}
          <div className="mb-8 flex w-full max-w-xs flex-col items-center gap-3 px-4 sm:mb-12">
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

        {/* {4. Bloque de cierre: dirección + redes sociales} */}
        <div className="flex w-full flex-col items-center gap-4 sm:gap-6">
          {/* {Dirección} */}
          <a
            href={businessInfo.maps.mainUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-warm text-center text-xs leading-relaxed font-normal text-white/70 transition-colors duration-300">
            <address className="not-italic">{businessInfo.address.main}</address>
          </a>

          {/* {Iconos de redes sociales} */}
          <div className="flex gap-4">
            {socialLinks.map(social => (
              <SocialIcon key={social.id} social={social} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
