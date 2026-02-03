import { ReactNode } from 'react';

/* {Props del componente SiteParagraph} */
type SiteParagraphProps = {
  /* {Contenido del párrafo} */
  children: ReactNode;
  /* {Clases Tailwind adicionales} */
  className?: string;
};

/* {SiteParagraph – párrafo consistente para secciones del site} */
/* {Responsable de: unificar estilo tipográfico en textos secundarios} */
export default function SiteParagraph({ children, className = '' }: SiteParagraphProps) {
  return <p className={`text-sm leading-relaxed text-white/70 md:text-base ${className}`}>{children}</p>;
}
