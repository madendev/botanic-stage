import WhatsAppButton from '@/components/actions/WhatsAppButton';
import StageNav from '@/components/navigation/StageNav';
import ProgramacionHero from '@/components/programacion/ProgramacionHero';

/* {Página principal (home)} */
/* {Orquesta los componentes principales: navegación, stage y acciones globales} */
/* {Estructura: StageNav (fija) > MainStage (hero) > WhatsAppButton (flotante)} */
export default function HomePage() {
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
