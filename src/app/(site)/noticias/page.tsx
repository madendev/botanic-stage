import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import PageNavCTA from '@/components/common/PageNavCTA';
import SiteSection from '@/components/common/SiteSection';
import SiteFooter from '@/components/common/SiteFooter';
import UnderConstructionSection from '@/components/common/UnderConstructionSection';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Noticias} */

export const metadata: Metadata = buildPageMetadata('noticias');

export default function NoticiasPage() {
  return (
    <>
      {/* {Hero de noticias} */}
      <SiteSection size="compact">
        <PageHero pageKey="noticias" variant="compact" />
      </SiteSection>

      {/* {Sección en construcción} */}
      <SiteSection size="compact">
        <UnderConstructionSection />
      </SiteSection>

      {/* {Navegación contextual} */}
      <SiteSection size="compact">
        <PageNavCTA primary={{ label: 'Programación', href: '/programacion' }} />
      </SiteSection>

      {/* {Footer del sitio} */}
      <SiteFooter />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </>
  );
}
