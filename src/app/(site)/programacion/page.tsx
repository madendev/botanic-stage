import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import ProgramacionEventsEmbed from '@/components/programacion/ProgramacionEventsEmbed';
import SiteSection from '@/components/common/SiteSection';
import SiteFooter from '@/components/common/SiteFooter';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Programación} */
/* {Orquesta los componentes principales: navegación, programación y acciones globales} */
/* {Estructura: SiteHeader (layout) > PageHero > WhatsAppButton (flotante)} */

export const metadata: Metadata = buildPageMetadata('programacion');

export default function ProgramacionPage() {
  return (
    <>
      {/* {Hero de programación} */}
      <SiteSection size="compact">
        <PageHero pageKey="programacion" variant="compact" />
      </SiteSection>

      {/* {Listado de eventos (Embed)} */}
      <SiteSection size="compact">
        <ProgramacionEventsEmbed />
      </SiteSection>

      {/* {Footer del sitio} */}
      <SiteFooter />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </>
  );
}
