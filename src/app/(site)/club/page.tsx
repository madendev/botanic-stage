import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import ClubHero from '@/components/club/ClubHero';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Music Bar} */

export const metadata: Metadata = buildPageMetadata('club');

export default function ClubPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero del club} */}
      <ClubHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
