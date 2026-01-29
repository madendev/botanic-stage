/* {Props del enlace de navegación} */
type StageLinkProps = {
  /* {URL destino} */
  href: string;
  /* {Texto del enlace} */
  label: string;
  /* {Callback opcional al hacer click (para cerrar menús)} */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  /* {Clases Tailwind adicionales para customización} */
  className?: string;
  style?: React.CSSProperties;
};

/* {StageLink – enlace de navegación con espaciado de letra} */
/* {Responsable de: enlace simple, amigable con tracking elevado} */
/* {Corrige último carácter para evitar espacios extras} */
export default function StageLink({ href, label, onClick, className = '', style = {} }: StageLinkProps) {
  return (
    <a href={href} onClick={onClick} className={`font-ui cursor-pointer text-lg tracking-[0.8em] text-white/80 uppercase transition hover:text-white ${className} `} style={style}>
      {label.slice(0, -1)}
      <span className="tracking-normal">{label.slice(-1)}</span>
    </a>
  );
}
