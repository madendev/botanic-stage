import { ReactNode } from 'react';

/* {Props del componente SiteSection} */
type SiteSectionProps = {
  /* {Contenido de la sección} */
  children: ReactNode;
  /* {Tamaño de padding vertical: default (amplio) o compact (reducido)} */
  size?: 'default' | 'compact';
  /* {Clases Tailwind adicionales} */
  className?: string;
};

/* {SiteSection – wrapper semántico para secciones del site} */
/* {Responsable de: unificar padding vertical y ritmo visual} */
/* {Responsive: mobile compacto → tablet/desktop amplio} */
export default function SiteSection({ children, size = 'default', className = '' }: SiteSectionProps) {
  const sizeClasses = {
    default: 'py-12 md:py-16 lg:py-20',
    compact: 'py-8 md:py-12 lg:py-16',
  };

  return <section className={`mx-auto w-full px-6 ${sizeClasses[size]} ${className}`}>{children}</section>;
}
