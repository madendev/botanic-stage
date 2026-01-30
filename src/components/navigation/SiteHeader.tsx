'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import BrandTitle from '../brand/BrandTitle';
import BrandIsologoSvg from '../brand/BrandIsologoSvg';
import ActionButton from '../common/ActionButton';
import MenuButton from './MenuButton';
import { ctaButtons } from '@/data/navigation';

/* {Props del componente SiteHeader} */
type SiteHeaderProps = {
  /* {Callback para abrir el menú} */
  onMenuOpen: () => void;
};

const SCROLL_THRESHOLD = 48;

/* {SiteHeader – header superior responsive para páginas internas} */
/* {Mobile: Isologo izquierda | Hamburger derecha} */
/* {Desktop: CTA Entradas izquierda | Logo centro | Hamburger derecha} */
/* {Scroll: fondo oscuro + backdrop-blur cuando scrollY > SCROLL_THRESHOLD} */
export default function SiteHeader({ onMenuOpen }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const enterButton = ctaButtons[0];

  /* {Detecta scroll y actualiza estado} */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 px-6 transition-[padding,background-color,backdrop-filter,border-color] duration-300 ease-out lg:px-12 ${
        isScrolled ? 'border-b border-white/5 bg-black/40 py-3 backdrop-blur-sm' : 'border-b border-transparent bg-transparent pt-10 pb-6'
      }`}>
      {/* {Layout mobile: flex entre isologo y hamburger} */}
      {/* {Layout desktop: grid de 3 columnas con logo centrado} */}
      <div className="flex items-center justify-between md:grid md:grid-cols-3">
        {/* {Mobile: BrandIsologo a la izquierda (oculto en desktop)} */}
        <Link href="/" className="flex items-center md:hidden">
          <BrandIsologoSvg className="h-8 w-auto fill-current text-white" />
        </Link>

        {/* {Desktop: CTA Entradas a la izquierda (oculto en mobile)} */}
        <div className="hidden justify-start md:flex">
          <ActionButton
            label={enterButton.label}
            href={enterButton.href}
            variant={enterButton.variant as 'primary' | 'secondary'}
            target={enterButton.target}
            className="px-8 py-2 text-xs md:text-lg"
          />
        </div>

        {/* {Desktop: Logo Botanic centrado (oculto en mobile)} */}
        <div className="hidden justify-center md:flex">
          <Link href="/">
            <BrandTitle as="span" className="text-[28px] sm:text-[34px] lg:text-[38px]">
              Botanic
            </BrandTitle>
          </Link>
        </div>

        {/* {Hamburger button – derecha en ambos breakpoints} */}
        <div className="flex justify-end">
          <MenuButton onClick={onMenuOpen} />
        </div>
      </div>
    </header>
  );
}
