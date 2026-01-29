/* {Props del botón de acción} */
type ActionButtonProps = {
  /* {Texto del botón} */
  label: string;
  /* {URL destino} */
  href: string;
  /* {Variante visual: primary (destacado) o secondary (sutil)} */
  variant?: 'primary' | 'secondary';
  /* {Delay en ms para animación de entrada} */
  delay?: number;
  /* {Target del enlace: mismo tab o nueva ventana} */
  target?: '_self' | '_blank';
  /* {Clases Tailwind adicionales} */
  className?: string;
};

/* {ActionButton – botón de acción reutilizable con efecto glass + halo} */
/* {Responsable de: acciones CTA con estilos consistentes} */
/* {Animación: fade-in con delay opcional + hover con glow efecto} */
export default function ActionButton({ label, href, variant = 'secondary', delay = 0, target = '_self', className = '' }: ActionButtonProps) {
  const isPrimary = variant === 'primary';
  const isExternal = target === '_blank';

  return (
    <a
      href={href}
      target={target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      style={{ animationDelay: `${delay}ms` }}
      className={`group font-ui relative rounded-full border leading-none tracking-[0.28em] uppercase backdrop-blur-md transition-all duration-500 ${
        isPrimary ? 'border-white/60 bg-white/10 text-white hover:bg-white/20' : 'border-white/30 text-white/80 hover:border-white/60 hover:text-white'
      } ${delay > 0 ? 'animate-stage-fade-in' : ''} ${className}`}>
      {/* {Efecto de halo/glow al hover} */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${isPrimary ? 'shadow-[0_0_40px_rgba(255,255,255,0.35)]' : 'shadow-[0_0_28px_rgba(255,255,255,0.18)]'} `}
      />

      {/* {Etiqueta con corrección de espaciado en último carácter} */}
      <span className="relative z-10 inline-block">
        {label.slice(0, -1)}
        <span className="tracking-normal">{label.slice(-1)}</span>
      </span>
    </a>
  );
}
