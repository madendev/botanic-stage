import BrandLogo from "./brand/BrandLogo";
import StageButton from "./navigation/StageButton";
import { ANIMATION_DELAYS } from "@/config/animationDelays";

/* {MainStage – Hero principal con logo de marca y acciones} */
/* {Responsable de: layout centrado, presentación del logo, botones CTA} */
/* {Animación: entrada escalonada (fade-in con delay progresivo)} */
export default function MainStage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      {/* {Logo animado de la marca} */}
      <BrandLogo delay={ANIMATION_DELAYS.logo} />

      {/* {Acciones principales (botones CTA)} */}
      <div className="mt-12 flex flex-col items-center gap-4">
        {/* {Botón primario: acceso a programación} */}
        <StageButton label="ENTRADAS" href="/programacion" variant="primary" delay={ANIMATION_DELAYS.buttonPrimary} />

        {/* {Botón secundario: contacto vía WhatsApp} */}
        <StageButton label="RESERVAS" href="https://wa.me/XXXXXXXXX" target="_blank" delay={ANIMATION_DELAYS.buttonSecondary} />
      </div>
    </section>
  );
}
