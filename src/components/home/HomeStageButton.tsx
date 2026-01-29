import ActionButton from '../common/ActionButton';

/* {Props del botón de acción} */
type HomeStageButtonProps = {
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
};

/* {HomeStageButton – botón de acción para home (solo mobile)} */
/* {Responsable de: acciones CTA en página home con restricción lg:hidden} */
/* {Reutiliza: ActionButton con clase lg:hidden añadida} */
/* {Exclusivo de: página home (/) – no reutilizar en otras secciones} */
export default function HomeStageButton({ label, href, variant = 'secondary', delay = 0, target = '_self' }: HomeStageButtonProps) {
  return <ActionButton label={label} href={href} variant={variant} delay={delay} target={target} className="px-9 py-2 lg:hidden" />;
}
