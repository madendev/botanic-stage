import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import NoticiasHero from '@/components/noticias/NoticiasHero';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Noticias} */

export const metadata: Metadata = buildPageMetadata('noticias');

export default function NoticiasPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero de noticias} */}
      <NoticiasHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
