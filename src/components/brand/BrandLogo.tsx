import BrandLogoSvg from "./BrandLogoSvg";

/* {Props del componente BrandLogo} */
type BrandLogoProps = {
  /* {Delay en ms para la animación de entrada (fade-in)} */
  delay?: number;
};

/* {BrandLogo – wrapper animado del SVG de marca} */
/* {Responsable de: escala fluida, transiciones suaves, entrada animada} */
/* {Animación: fade-in con delay configurable} */
export default function BrandLogo({ delay = 0 }: BrandLogoProps) {
  return (
    <div
      style={{ animationDelay: `${delay}ms` }}
      className="
       relative
    flex
    items-center
    justify-center
    select-none
    animate-stage-fade-in
      "
    >
      {/* {Contenedor del logo – escala fluida con clamp} */}
      <div
        className="
       fill-current
    text-white
    transition-all
    duration-700
    ease-out
        "
        style={{
          width: "clamp(260px, 65vw, 420px)",
        }}
      >
        <BrandLogoSvg />
      </div>
    </div>
  );
}
