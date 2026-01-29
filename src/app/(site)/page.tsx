import WhatsAppButton from '@/components/actions/WhatsAppButton';
import MainStage from '@/components/MainStage';
import StageNav from '@/components/navigation/StageNav';
import HomeFooter from '@/components/home/HomeFooter';

/* {Página principal (home)} */
/* {Orquesta los componentes principales: navegación, stage y acciones globales} */
/* {Estructura: StageNav (fija) > MainStage (hero) > WhatsAppButton (flotante)} */
export default function HomePage() {
  return (
    <>
      <main className="relative w-full">
        {/* {Navegación: desktop + mobile overlay} */}
        <StageNav />

        {/* {Stage principal: logo de marca + botones de acción} */}
        <MainStage />

        {/* {Botón flotante de WhatsApp} */}
        <WhatsAppButton />
      </main>

      {/* {Footer: redes, dirección, enlaces legales} */}
      <HomeFooter />
    </>
  );
}
