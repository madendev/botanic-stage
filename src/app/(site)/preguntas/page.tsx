import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import SiteSection from '@/components/common/SiteSection';
import SiteFooter from '@/components/common/SiteFooter';
import UnderConstructionSection from '@/components/common/UnderConstructionSection';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Preguntas frecuentes} */

export const metadata: Metadata = buildPageMetadata('preguntas');

export default function PreguntasPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero de preguntas} */}
      <SiteSection size="compact">
        <PageHero pageKey="preguntas" variant="compact" />
      </SiteSection>

      {/* {Sección en construcción} */}
      <SiteSection size="compact">
        <UnderConstructionSection />
      </SiteSection>

      {/* {Footer del sitio} */}
      <SiteFooter />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
