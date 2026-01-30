import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import SiteSection from '@/components/common/SiteSection';
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

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
