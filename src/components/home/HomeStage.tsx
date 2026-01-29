import HomeStageButton from './HomeStageButton';
import { ANIMATION_DELAYS } from '@/config/animationDelays';
import { ctaButtons } from '@/data/navigation';
import BrandLogo from '../brand/BrandLogo';

/* {HomeStage – Hero principal con logo de marca y acciones} */
/* {Responsable de: layout centrado, presentación del logo, botones CTA} */
/* {Animación: entrada escalonada (fade-in con delay progresivo)} */
/* {Exclusivo de: página home (/) – no reutilizar en otras secciones} */
export default function HomeStage() {
  const delays = [ANIMATION_DELAYS.buttonPrimary, ANIMATION_DELAYS.buttonSecondary];

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      {/* {Logo animado de la marca – escala reducida en mobile} */}
      <div className="w-full scale-75 sm:scale-90 md:scale-100">
        <BrandLogo delay={ANIMATION_DELAYS.logo} />
      </div>

      {/* {Acciones principales (botones CTA)} */}
      <div className="mt-12 flex flex-col items-center gap-4">
        {ctaButtons.map((button, index) => (
          <HomeStageButton key={button.href} label={button.label} href={button.href} variant={button.variant} target={button.target} delay={delays[index]} />
        ))}
      </div>
    </section>
  );
}
