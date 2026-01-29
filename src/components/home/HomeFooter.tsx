/* {Props del componente HomeFooter} */
type HomeFooterProps = {
  /* {Clases Tailwind adicionales} */
  className?: string;
};

export default function HomeFooter({ className = '' }: HomeFooterProps) {
  return (
    <footer
      className={`relative w-full border-t border-white/10 bg-black/50 backdrop-blur-sm ${className}`}
    >
      <div className="flex w-full flex-col p-6 lg:flex-row lg:items-start lg:justify-between lg:px-12 lg:py-8">
        {/* {Columna izquierda: Iconos sociales + Dirección} */}
        <div className="flex flex-col gap-4">
          {/* {Iconos sociales} */}
          <div className="flex flex-row justify-center gap-6 lg:justify-start">
            <a
              href="#"
              aria-label="Facebook"
              className="text-lg text-white/60 transition-colors duration-200 hover:text-white"
            >
              👍
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-lg text-white/60 transition-colors duration-200 hover:text-white"
            >
              📷
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="text-lg text-white/60 transition-colors duration-200 hover:text-white"
            >
              🎵
            </a>
            <a
              href="#"
              aria-label="WhatsApp"
              className="text-lg text-white/60 transition-colors duration-200 hover:text-white"
            >
              💬
            </a>
            <a
              href="tel:+34"
              className="text-lg text-white/60 transition-colors duration-200 hover:text-white"
            >
              ☎️
            </a>
          </div>

          {/* {Dirección} */}
          <div className="flex flex-row justify-center lg:justify-start">
            <address className="text-center text-xs text-white/70 not-italic lg:text-left">
              Avd/ Capitan Ontañon, Edif. Plaza Mayor - 11202 Algeciras
            </address>
          </div>
        </div>

        {/* {Columna derecha: Enlaces legales + Copyright} */}
        <div className="mt-6 flex flex-col gap-4 lg:mt-0 lg:items-end">
          {/* {Enlaces legales} */}
          <div className="flex flex-col gap-2 text-center lg:flex-row lg:text-right">
            <a
              href="#"
              className="text-xs text-white/60 transition-colors duration-200 hover:text-white"
            >
              Política de Privacidad
            </a>
            <a
              href="#"
              className="text-xs text-white/60 transition-colors duration-200 hover:text-white"
            >
              Términos y Condiciones
            </a>
            <a
              href="#"
              className="text-xs text-white/60 transition-colors duration-200 hover:text-white"
            >
              Política de Cookies
            </a>
          </div>

          {/* {Copyright} */}
          <div className="flex flex-col gap-1 text-center lg:text-right">
            <p className="text-xs text-white/40">
              Botanic Terrace &amp; Music Bar © {new Date().getFullYear()} - Diseño Web by Madendev
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
