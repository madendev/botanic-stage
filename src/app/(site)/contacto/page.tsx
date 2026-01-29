import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import ContactoHero from '@/components/contacto/ContactoHero';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Contacto} */

export const metadata: Metadata = buildPageMetadata('contacto');

export default function ContactoPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero de contacto} */}
      <ContactoHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
