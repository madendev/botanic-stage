import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import SiteSection from '@/components/common/SiteSection';
import SiteFooter from '@/components/common/SiteFooter';
import UnderConstructionSection from '@/components/common/UnderConstructionSection';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Eventos privados} */

export const metadata: Metadata = buildPageMetadata('eventosPrivados');

export default function EventosPrivadosPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero de eventos privados} */}
      <SiteSection size="compact">
        <PageHero pageKey="eventosPrivados" variant="compact" />
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
