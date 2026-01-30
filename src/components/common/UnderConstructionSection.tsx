/* {Props del componente UnderConstructionSection} */
type UnderConstructionSectionProps = {
  /* {Clases Tailwind adicionales} */
  className?: string;
};

/* {UnderConstructionSection – sección informativa de contenido en desarrollo} */
/* {Responsable de: informar al usuario sobre secciones en construcción sin romper UX} */
/* {Reutilizable en: cualquier página sin contenido definitivo} */
export default function UnderConstructionSection({ className = '' }: UnderConstructionSectionProps) {
  return (
    <div className={`mx-auto mt-28 mb-52 flex w-full max-w-3xl flex-col items-center text-center ${className}`}>
      {/* {Título principal} */}
      <h2 className="text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">Estamos trabajando en esta sección</h2>

      {/* {Descripción informativa} */}
      <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
        Próximamente encontrarás aquí toda la información que necesitas. Mientras tanto, puedes explorar el resto de la web o contactarnos directamente.
      </p>
    </div>
  );
}
