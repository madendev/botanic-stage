import SocialIcon from '@/components/social/SocialIcon';
import { socialLinks } from '@/data/social';

/* {Componente: Footer del Sitio} */
/* {Reutilizable en todas las páginas del sitio} */
/* {Incluye: redes sociales, dirección, enlaces legales y copyright} */

type SiteFooterProps = {
  /* {Clases Tailwind adicionales} */
  className?: string;
};

export default function SiteFooter({ className = '' }: SiteFooterProps) {
  return (
    <footer className={`relative w-full bg-black/50 backdrop-blur-sm ${className}`}>
      <div className="flex w-full flex-col p-6 lg:flex-row lg:items-start lg:justify-between lg:px-12 lg:py-8">
        {/* {Columna izquierda: Iconos sociales + Dirección} */}
        <div className="flex flex-col gap-4">
          {/* {Iconos sociales} */}
          <div className="flex flex-row justify-center gap-6 lg:justify-start">
            {socialLinks.map(social => (
              <SocialIcon key={social.id} social={social} />
            ))}
          </div>

          {/* {Dirección} */}
          <div className="flex flex-row justify-center lg:justify-start">
            <a
              href="https://maps.app.goo.gl/2AHoaEBXyBWB1fFM9"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-warm text-center text-xs leading-relaxed font-normal text-white/70 no-underline transition-colors duration-300 md:text-sm lg:text-left">
              <address className="not-italic">Avd/ Capitan Ontañon, Edif. Plaza Mayor - 11202 Algeciras</address>
            </a>
          </div>
        </div>

        {/* {Columna derecha: Enlaces legales + Copyright} */}
        <div className="mt-6 flex flex-col gap-4 lg:mt-0 lg:items-end">
          {/* {Enlaces legales} */}
          <div className="flex flex-col gap-2 text-center lg:flex-row lg:gap-6 lg:text-right">
            <a href="/contacto" className="hover:text-accent-warm text-xs leading-relaxed font-normal text-white/70 transition-colors duration-300 md:text-sm">
              Contacto
            </a>
            <a href="/preguntas" className="hover:text-accent-warm text-xs leading-relaxed font-normal text-white/70 transition-colors duration-300 md:text-sm">
              Preguntas Frecuentes
            </a>
            <a href="#" className="hover:text-accent-warm text-xs leading-relaxed font-normal text-white/70 transition-colors duration-300 md:text-sm">
              Política de Privacidad
            </a>
          </div>

          {/* {Copyright} */}
          <div className="flex flex-col gap-1 text-center lg:text-right">
            <p className="flex flex-col text-xs leading-relaxed font-normal text-white/40 md:text-sm lg:flex-row">
              Botanic Algeciras © {new Date().getFullYear()} <span className="hidden lg:block"> - </span>
              <span>
                Diseño Web by{' '}
                <a href="https://manueldenis.netlify.app/" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300 hover:text-white/60">
                  @madendev
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
