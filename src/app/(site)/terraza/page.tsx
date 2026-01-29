import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import TerrazaHero from '@/components/terraza/TerrazaHero';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Terraza} */

export const metadata: Metadata = buildPageMetadata('terraza');

export default function TerrazaPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero de terraza} */}
      <TerrazaHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
