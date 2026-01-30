import type { ReactNode } from 'react';

/* {Props del componente BrandTitle} */
type BrandTitleProps = {
  /* {Children anidados entre las etiquetas} */
  children: ReactNode;

  /* {Elemento HTML semántico: h1 para hero, h2/h3 para secciones, a para enlace, span para navegación} */
  as?: 'h1' | 'h2' | 'h3' | 'a' | 'span';

  /* {URL destino si se usa como enlace} */
  href?: string;

  /* {Clases Tailwind adicionales (tamaño responsive, márgenes, etc.)} */
  className?: string;
};

/* {BrandTitle – identidad tipográfica de marca} */
/* {Responsable de: renderizar título con tracking premium y corrección de espaciado} */
/* {Usa Montserrat (font-brand) con tracking de 1em, corrigiendo último carácter} */
/* {Reutilizable en: hero, secciones, overlays, enlaces (con href)} */
export default function BrandTitle({ children, as: Tag = 'h1', href, className = '' }: BrandTitleProps) {
  /* {Convierte children a string (si no lo es) para manipulación de caracteres} */
  const text = typeof children === 'string' ? children : 'BOTANIC';
  /* {Separa último carácter para corregir espaciado excesivo por letter-spacing} */
  const base = text.slice(0, -1);
  const last = text.slice(-1);

  /* {Si href está presente, renderiza como enlace} */
  if (href && Tag === 'a') {
    return (
      <a href={href} className={`font-brand hover:text-accent-warm cursor-pointer transition-colors duration-300 ${className}`}>
        {base}
        {/* {Último carácter sin tracking (tracking-normal)} */}
        <span className="tracking-normal">{last}</span>
      </a>
    );
  }

  /* {Renderiza como elemento semántico} */
  return (
    <Tag className={`font-brand ${className}`}>
      {base}
      {/* {Último carácter sin tracking (tracking-normal)} */}
      <span className="tracking-normal">{last}</span>
    </Tag>
  );
}
