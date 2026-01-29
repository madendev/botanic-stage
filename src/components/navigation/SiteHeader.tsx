'use client';

import BrandTitle from '../brand/BrandTitle';
import ActionButton from '../common/ActionButton';
import MenuButton from './MenuButton';
import { ctaButtons } from '@/data/navigation';

/* {Props del componente SiteHeader} */
type SiteHeaderProps = {
  /* {Callback para abrir el menú} */
  onMenuOpen: () => void;
};

/* {SiteHeader – header superior para páginas internas} */
/* {Estructura: CTA Entradas (izquierda) | Logo Botanic (centro) | Botón menú (derecha)} */
export default function SiteHeader({ onMenuOpen }: SiteHeaderProps) {
  /* {Obtiene el primer botón CTA (ENTRADAS) desde data/navigation} */
  const enterButton = ctaButtons[0];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex h-auto items-center justify-between px-6 pt-10 pb-6 lg:px-12">
      {/* {CTA Entradas – izquierda} */}
      <ActionButton
        label={enterButton.label}
        href={enterButton.href}
        variant={enterButton.variant as 'primary' | 'secondary'}
        target={enterButton.target}
        className="px-8 py-2 text-xs md:text-lg"
      />

      {/* {Logo Botanic – centro (enlace a home)} */}
      <BrandTitle as="a" href="/" className="mr-36 text-[38px]">
        Botanic
      </BrandTitle>

      {/* {Botón menú – derecha} */}
      <MenuButton onClick={onMenuOpen} />
    </header>
  );
}
