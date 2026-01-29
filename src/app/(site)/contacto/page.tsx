import { Metadata } from 'next';
import StageNav from '@/components/navigation/StageNav';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import ContactoHero from '@/components/contacto/ContactoHero';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Contacto} */

export const metadata: Metadata = buildPageMetadata('contacto');

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Navegación principal} */}
      <StageNav />

      {/* {Hero de contacto} */}
      <ContactoHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
