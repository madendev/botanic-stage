import StageNav from '@/components/navigation/StageNav';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import ClubHero from '@/components/club/ClubHero';

/* {Página: Music Bar} */
export default function ClubPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* {Navegación principal} */}
      <StageNav />

      {/* {Hero del club} */}
      <ClubHero />

      {/* {Botón flotante de WhatsApp} */}
      <WhatsAppButton />
    </main>
  );
}
