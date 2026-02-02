import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PageHero from '@/components/common/PageHero';
import SiteSection from '@/components/common/SiteSection';
import SiteFooter from '@/components/common/SiteFooter';
import ContactForm from '@/components/contacto/ContactForm';
import ContactLocation from '@/components/contacto/ContactLocation';
import Newsletter from '@/components/contacto/Newsletter';
import WorkWithUs from '@/components/contacto/WorkWithUs';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Contacto} */
/* {Jerarquía: Hero > Formulario + Ubicación (grid) > Newsletter + Trabaja con nosotros (grid) > Footer} */

export const metadata: Metadata = buildPageMetadata('contacto');

export default function ContactoPage() {
  return (
    <>
      {/* {Hero de contacto} */}
      <SiteSection size="compact">
        <PageHero pageKey="contacto" variant="compact" />
      </SiteSection>

      {/* {Sección principal: Formulario + Ubicación} */}
      <SiteSection>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* {Columna izquierda: Formulario de contacto} */}
          <div>
            <ContactForm />
          </div>

          {/* {Columna derecha: Encuéntranos} */}
          <div>
            <ContactLocation />
          </div>
        </div>
      </SiteSection>

      {/* {Sección secundaria: Newsletter + Trabaja con nosotros} */}
      <SiteSection>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* {Columna izquierda: Newsletter} */}
          <div>
            <Newsletter />
          </div>

          {/* {Columna derecha: Trabaja con nosotros} */}
          <div>
            <WorkWithUs />
          </div>
        </div>
      </SiteSection>

      {/* {Footer del sitio} */}
      <SiteFooter />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </>
  );
}
