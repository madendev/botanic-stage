import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import StageNav from '@/components/navigation/StageNav';
import ProgramacionHero from '@/components/programacion/ProgramacionHero';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página: Programación} */
/* {Orquesta los componentes principales: navegación, programación y acciones globales} */
/* {Estructura: StageNav (fija) > ProgramacionHero > WhatsAppButton (flotante)} */

export const metadata: Metadata = buildPageMetadata('programacion');

export default function ProgramacionPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Navegación: desktop + mobile overlay} */}
      <StageNav />

      {/* {Stage principal: logo de marca + botones de acción} */}
      <ProgramacionHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
