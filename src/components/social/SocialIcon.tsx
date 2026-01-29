import { SocialLink } from '@/data/social';

/* {Props del componente SocialIcon} */
type SocialIconProps = {
  /* {Datos de la red social} */
  social: SocialLink;
  /* {Clases Tailwind adicionales} */
  className?: string;
};

/* {SocialIcon – renderiza un icono SVG de red social} */
/* {Responsable de: presentar el icono, manejar hover y enlace} */
export default function SocialIcon({ social, className = '' }: SocialIconProps) {
  const IconComponent = social.icon;

  return (
    <a
      href={social.href}
      aria-label={social.label}
      title={social.label}
      className={`hover:text-accent-warm inline-block size-5 text-white/60 transition-colors duration-300 ${className}`}
      target="_blank"
      rel="noopener noreferrer">
      <div className="size-full [&>svg]:size-full [&>svg]:fill-current">
        <IconComponent />
      </div>
    </a>
  );
}
