/* {Props del componente UnderConstructionSection} */
type UnderConstructionSectionProps = {
  /* {Clases Tailwind adicionales} */
  className?: string;
};

/* {UnderConstructionSection – sección informativa de contenido en desarrollo} */
/* {Responsable de: informar al usuario sobre secciones en construcción sin romper UX} */
/* {Reutilizable en: cualquier página sin contenido definitivo} */
/* {Envuelta en SiteSection – no incluir margins manuales} */
export default function UnderConstructionSection({ className = '' }: UnderConstructionSectionProps) {
  return (
    <section className={`mx-auto flex w-full max-w-lg flex-col items-center text-center ${className}`}>
      {/* {Título informativo} */}
      <h2 className="text-xl font-semibold text-white sm:text-2xl lg:text-3xl">Estamos trabajando en esta sección</h2>

      {/* {Descripción}} */}
      <p className="mt-4 text-sm text-white/50 sm:text-base">Muy pronto estará disponible</p>
    </section>
  );
}
