import type { ReactNode } from "react";

/* {BrandTitleProps: permite reutilizar el título de marca en distintos contextos (hero, secciones, overlays, etc.)} */
type BrandTitleProps = {
  /* {Texto del título, por defecto "BOTANIC"} */
  children?: ReactNode;

  /* {Elemento semántico a renderizar: h1 para hero, h2/h3 para secciones} */
  as?: "h1" | "h2" | "h3";

  /* {Clases adicionales para controlar tamaño, responsive, márgenes, etc.} */
  className?: string;
};

/* {BrandTitle: componente de identidad tipográfica de la marca Botanic} */
/* {Usa Montserrat con tracking elevado y corrige el espaciado del último carácter} */
/* {Pensado para títulos principales donde la identidad visual es prioritaria} */
export default function BrandTitle({ children = "BOTANIC", as: Tag = "h1", className = "" }: BrandTitleProps) {
  /* {Separamos el último carácter para evitar que letter-spacing deje espacio sobrante} */
  const text = typeof children === "string" ? children : "BOTANIC";
  const base = text.slice(0, -1);
  const last = text.slice(-1);

  return (
    <Tag className={`font-brand ${className}`}>
      {base}
      <span className="tracking-normal">{last}</span>
    </Tag>
  );
}
