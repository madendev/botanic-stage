import BrandTitle from '@/components/brand/BrandTitle';

/* {FaqIntro – introducción de la sección de FAQs} */
/* {Responsable de: presentar la sección con título y descripción} */
/* {Ubicación: columna izquierda en desktop} */
export default function FaqIntro() {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* {Título} */}
      <BrandTitle as="h2" className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
        Preguntas frecuentes
      </BrandTitle>

      {/* {Descripción} */}
      <div className="flex flex-col gap-4 text-white/70">
        <p className="text-base sm:text-lg">Encuentra respuestas a las preguntas más habituales sobre Botanic.</p>
        <p className="text-sm sm:text-base">Si no encuentras lo que buscas, no dudes en contactarnos directamente por WhatsApp o a través de nuestro formulario de contacto.</p>
      </div>
    </div>
  );
}
