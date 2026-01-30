import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import SiteSection from '@/components/common/SiteSection';
import SiteFooter from '@/components/common/SiteFooter';
import UnderConstructionSection from '@/components/common/UnderConstructionSection';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Music Bar} */

export const metadata: Metadata = buildPageMetadata('club');

export default function ClubPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero del club} */}
      <SiteSection size="compact">
        <PageHero pageKey="club" variant="compact" />
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
