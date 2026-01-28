import type { ReactNode } from "react";

/* {Props del componente BrandTitle} */
type BrandTitleProps = {
  /* {Contenido del título (por defecto: "BOTANIC")} */
  children?: ReactNode;

  /* {Elemento HTML semántico: h1 para hero, h2/h3 para secciones} */
  as?: "h1" | "h2" | "h3";

  /* {Clases Tailwind adicionales (tamaño responsive, márgenes, etc.)} */
  className?: string;
};

/* {BrandTitle – identidad tipográfica de marca} */
/* {Responsable de: renderizar título con tracking premium y corrección de espaciado} */
/* {Usa Montserrat (font-brand) con tracking de 1em, corrigiendo último carácter} */
/* {Reutilizable en: hero, secciones, overlays, contextos donde la identidad es prioritaria} */
export default function BrandTitle({ children = "BOTANIC", as: Tag = "h1", className = "" }: BrandTitleProps) {
  /* {Convierte children a string (si no lo es) para manipulación de caracteres} */
  const text = typeof children === "string" ? children : "BOTANIC";
  /* {Separa último carácter para corregir espaciado excesivo por letter-spacing} */
  const base = text.slice(0, -1);
  const last = text.slice(-1);

  return (
    <Tag className={`font-brand ${className}`}>
      {base}
      {/* {Último carácter sin tracking (tracking-normal)} */}
      <span className="tracking-normal">{last}</span>
    </Tag>
  );
}
