import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import SiteSection from '@/components/common/SiteSection';
import SiteFooter from '@/components/common/SiteFooter';
import FaqSection from '@/components/preguntas/FaqSection';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Preguntas frecuentes} */
/* {Estructura: Hero > FAQs (intro + acordeón) > Footer} */

export const metadata: Metadata = buildPageMetadata('preguntas');

export default function PreguntasPage() {
  return (
    <>
      {/* {Hero de preguntas} */}
      <SiteSection size="compact">
        <PageHero pageKey="preguntas" variant="compact" />
      </SiteSection>

      {/* {Sección de FAQs} */}
      <FaqSection />

      {/* {Footer del sitio} */}
      <SiteFooter />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </>
  );
}
