import { Metadata } from 'next';
import WhatsAppButton from '@/components/actions/WhatsAppButton';
import HomeStage from '@/components/home/HomeStage';
import HomeStageNav from '@/components/home/HomeStageNav';
import HomeFooter from '@/components/home/HomeFooter';
import { buildPageMetadata } from '@/lib/metadata';

/* {Página principal (home)} */
/* {Orquesta los componentes principales: navegación, stage y acciones globales} */
/* {Estructura: HomeStageNav (fija) > HomeStage (hero) > WhatsAppButton (flotante)} */

export const metadata: Metadata = buildPageMetadata('home');

export default function HomePage() {
  return (
    <>
      <main className="relative w-full">
        {/* {Navegación: desktop + mobile overlay} */}
        <HomeStageNav />

        {/* {Stage principal: logo de marca + botones de acción} */}
        <HomeStage />

        {/* {Botón flotante de WhatsApp} */}
        <WhatsAppButton />
      </main>

      {/* {Footer: redes, dirección, enlaces legales} */}
      <HomeFooter />
    </>
  );
}
