/* {Tipos para los datos de navegación} */
import { businessInfo } from '@/data/business';
export type NavLink = {
  href: string;
  label: string;
};

export type CTAButton = {
  href: string;
  label: string;
  variant: 'primary' | 'secondary';
  target?: '_self' | '_blank';
};

/* {Botones CTA principales (Main Stage)} */
export const ctaButtons: CTAButton[] = [
  {
    href: '/programacion',
    label: 'ENTRADAS',
    variant: 'primary',
  },
  {
    href: businessInfo.whatsapp.url,
    label: 'RESERVAS',
    variant: 'secondary',
    target: '_blank',
  },
];

/* {Enlaces de navegación del Stage (desktop)} */
export const stageNavLinks: NavLink[] = [
  { href: '/terraza', label: 'TERRACE' },
  { href: '/programacion', label: 'PROGRAMACIÓN Y ENTRADAS' },
  { href: '/club', label: 'MUSIC BAR' },
  { href: '/preguntas', label: 'PREGUNTAS' },
  { href: '/eventos-privados', label: 'EVENTOS PRIVADOS' },
  { href: '/contacto', label: 'CONTACTO' },
];

/* {Enlaces de navegación secundaria (mobile)} */
export const mobileNavLinks: NavLink[] = [
  { href: '/terraza', label: 'TERRACE' },
  { href: '/club', label: 'MUSIC BAR' },
  { href: '/noticias', label: 'NOTICIAS' },
  { href: '/preguntas', label: 'PREGUNTAS' },
  { href: '/eventos-privados', label: 'EVENTOS PRIVADOS' },
  { href: '/contacto', label: 'CONTACTO' },
];
