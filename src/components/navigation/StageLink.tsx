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
};

/* {StageLink – enlace de navegación con espaciado de letra} */
/* {Responsable de: enlace simple, amigable con tracking elevado} */
/* {Corrige último carácter para evitar espacios extras} */
export default function StageLink({ href, label, onClick, className = "" }: StageLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        font-ui
        uppercase
        tracking-[0.8em]
        text-lg
        text-white/80
        hover:text-white
        transition
        cursor-pointer
        ${className}
      `}
    >
      {label.slice(0, -1)}
      <span className="tracking-normal">{label.slice(-1)}</span>
    </a>
  );
}
