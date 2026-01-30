import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import SiteSection from '@/components/common/SiteSection';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Noticias} */

export const metadata: Metadata = buildPageMetadata('noticias');

export default function NoticiasPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero de noticias} */}
      <SiteSection size="compact">
        <PageHero pageKey="noticias" variant="compact" />
      </SiteSection>

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
