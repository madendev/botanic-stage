import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import SiteSection from '@/components/common/SiteSection';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Contacto} */

export const metadata: Metadata = buildPageMetadata('contacto');

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero de contacto} */}
      <SiteSection size="compact">
        <PageHero pageKey="contacto" variant="compact" />
      </SiteSection>

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
