import SiteSection from '@/components/common/SiteSection';
import FaqIntro from './FaqIntro';
import FaqAccordion from './FaqAccordion';
import { faqs } from '@/data/faqs';

/* {FaqSection – sección completa de preguntas frecuentes} */
/* {Responsable de: layout 2 columnas (intro + acordeón)} */
/* {Responsive: stack mobile, grid desktop} */
export default function FaqSection() {
  return (
    <SiteSection>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* {Columna izquierda: Introducción} */}
        <div>
          <FaqIntro />
        </div>

        {/* {Columna derecha: Acordeón de preguntas} */}
        <div>
          <FaqAccordion faqs={faqs} />
        </div>
      </div>
    </SiteSection>
  );
}
