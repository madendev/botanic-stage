import { Metadata } from 'next';
import StageNav from '@/components/navigation/StageNav';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import PreguntasHero from '@/components/preguntas/PreguntasHero';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Preguntas frecuentes} */

export const metadata: Metadata = buildPageMetadata('preguntas');

export default function PreguntasPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Navegación principal} */}
      <StageNav />

      {/* {Hero de preguntas} */}
      <PreguntasHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
