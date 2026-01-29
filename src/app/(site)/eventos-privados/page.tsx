import StageNav from '@/components/navigation/StageNav';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import EventosPrivadosHero from '@/components/eventos-privados/EventosPrivadosHero';

/* {Página: Eventos privados} */
export default function EventosPrivadosPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Navegación principal} */}
      <StageNav />

      {/* {Hero de eventos privados} */}
      <EventosPrivadosHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
