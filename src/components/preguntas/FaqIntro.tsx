import BrandTitle from '@/components/brand/BrandTitle';
import SiteParagraph from '@/components/common/SiteParagraph';

/* {FaqIntro – introducción de la sección de FAQs} */
/* {Responsable de: presentar la sección con título y descripción} */
/* {Ubicación: columna izquierda en desktop} */
export default function FaqIntro() {
  return (
    <div className="flex w-full flex-col gap-6">
      {/* {Título} */}
      <BrandTitle as="h2" className="text-lg font-semibold sm:text-xl lg:text-2xl">
        Preguntas frecuentes
      </BrandTitle>

      {/* {Descripción} */}
      <div className="flex flex-col gap-4 text-white/70">
        <SiteParagraph className="sm:text-lg">Encuentra respuestas a las preguntas más habituales sobre Botanic.</SiteParagraph>
        <SiteParagraph>Si no encuentras lo que buscas, no dudes en contactarnos directamente por WhatsApp o a través de nuestro formulario de contacto.</SiteParagraph>
      </div>
    </div>
  );
}
