import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PreguntasHero from '@/components/preguntas/PreguntasHero';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Preguntas frecuentes} */

export const metadata: Metadata = buildPageMetadata('preguntas');

export default function PreguntasPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Hero de preguntas} */}
      <PreguntasHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
