import Link from 'next/link';

/* {Props del componente PageNavCTA} */
type PageNavCTAProps = {
  /* {CTA primaria obligatoria} */
  primary: {
    label: string;
    href: string;
  };
  /* {CTA secundaria opcional} */
  secondary?: {
    label: string;
    href: string;
  };
};

/* {PageNavCTA – navegación contextual editorial} */
/* {Responsable de: proporcionar "siguiente paso" lógico sin sobrecargar} */
/* {Estilo: mayúsculas, tracking de marca, hover accent-warm} */
/* {Responsive: horizontal desktop, stack mobile} */
export default function PageNavCTA({ primary, secondary }: PageNavCTAProps) {
  return (
    <nav className="mx-auto flex w-full max-w-lg flex-col gap-3 sm:flex-row sm:gap-8">
      {/* {CTA primaria} */}
      <Link href={primary.href} className="hover:text-accent-warm inline-block text-xs font-medium tracking-[0.2em] text-white/70 uppercase transition-colors duration-300">
        {primary.label}
      </Link>

      {/* {CTA secundaria – opcional} */}
      {secondary && (
        <Link href={secondary.href} className="hover:text-accent-warm inline-block text-xs font-medium tracking-[0.2em] text-white/50 uppercase transition-colors duration-300">
          {secondary.label}
        </Link>
      )}
    </nav>
  );
}
