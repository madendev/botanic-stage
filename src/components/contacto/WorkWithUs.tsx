import BrandTitle from '@/components/brand/BrandTitle';
import { businessInfo } from '@/data/business';

/* {WorkWithUs – bloque de reclutamiento} */
/* {Responsable de: invitar a candidatos a enviar CV} */
/* {Estilo: texto editorial, botón outline} */
export default function WorkWithUs() {
  const cvEmail = businessInfo.email.rrhh;

  return (
    <div className="flex w-full flex-col gap-6">
      {/* {Título} */}
      <BrandTitle as="h2" className="text-lg font-semibold sm:text-xl lg:text-2xl">
        Trabaja con nosotros
      </BrandTitle>

      {/* {Descripción} */}
      <div className="flex flex-col gap-3 text-white/70">
        <p className="text-base sm:text-lg">¿Quieres formar parte del equipo Botanic?</p>
        <p className="text-base sm:text-lg">Si te gusta la música, el trato con la gente y el mundo de la noche, este es tu sitio.</p>
      </div>

      {/* {Botón: Dejanos tu CV} */}
      <a
        href={`mailto:${cvEmail}?subject=Candidatura%20espontánea`}
        className="inline-block w-full border border-white/30 py-4 text-center text-sm font-medium tracking-[0.2em] text-white uppercase transition-colors hover:border-white hover:bg-white/5 sm:w-auto sm:px-12">
        Dejanos tu CV
      </a>
    </div>
  );
}
