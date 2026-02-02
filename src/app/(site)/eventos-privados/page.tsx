import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import SiteSection from '@/components/common/SiteSection';
import SiteFooter from '@/components/common/SiteFooter';
import EventosPrivadosHero from '@/components/eventos-privados/EventosPrivadosHero';
import EventosPrivadosForm from '@/components/eventos-privados/EventosPrivadosForm';
import InfiniteImageCarousel from '@/components/eventos-privados/InfiniteImageCarousel';
import BrandTitle from '@/components/brand/BrandTitle';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Eventos privados} */
/* {Estructura: Hero fullscreen > Intro > CTA > Form > Tel > Carrusel > Footer} */

export const metadata: Metadata = buildPageMetadata('eventosPrivados');

export default function EventosPrivadosPage() {
  const phone = '+34 956 12 34 56';

  return (
    <>
      {/* {1. Hero fullscreen con imagen de fondo y flecha} */}
      <EventosPrivadosHero />

      {/* {2. Texto centrado explicativo} */}
      <SiteSection>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-base leading-relaxed text-white/80 sm:text-lg lg:text-xl">
            Botanic es el escenario perfecto para tus celebraciones más especiales. Desde cumpleaños y eventos de empresa hasta presentaciones y fiestas privadas, adaptamos nuestro
            espacio a tus necesidades para crear una experiencia inolvidable.
          </p>
        </div>
      </SiteSection>

      {/* {3. H2 grande centrado + CTA} */}
      <SiteSection>
        <div className="mx-auto max-w-4xl text-center">
          <BrandTitle as="h2" className="text-3xl font-semibold sm:text-4xl lg:text-5xl">
            ¿Quieres organizar algo único?
          </BrandTitle>
          <p className="mt-6 text-base text-white/70 sm:text-lg">Rellena el formulario y nos pondremos en contacto contigo para diseñar tu evento a medida</p>
        </div>
      </SiteSection>

      {/* {4. Formulario de contacto para eventos privados} */}
      <SiteSection>
        <EventosPrivadosForm />
      </SiteSection>

      {/* {5. CTA "O llámanos" con botón tel:} */}
      <SiteSection size="compact">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <p className="text-lg text-white/70 sm:text-xl">O llámanos directamente</p>
          <a
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="inline-block border border-white/30 px-12 py-4 text-sm font-medium tracking-[0.2em] text-white uppercase transition-colors hover:border-white hover:bg-white/5">
            {phone}
          </a>
        </div>
      </SiteSection>

      {/* {6. Carrusel de imágenes infinito y automático} */}
      <SiteSection size="compact">
        <InfiniteImageCarousel />
      </SiteSection>

      {/* {7. Footer del sitio} */}
      <SiteFooter />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </>
  );
}
