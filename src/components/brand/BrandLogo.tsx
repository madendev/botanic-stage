import BrandIsologoSvg from './BrandIsologoSvg';
import BrandSubtitle from './BrandSubtitle';
import BrandTitle from './BrandTitle';

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
    <div style={{ animationDelay: `${delay}ms` }} className="animate-stage-fade-in relative flex items-center justify-center select-none">
      {/* {Contenedor del logo – escala fluida con clamp} */}
      <div
        className="flex flex-col items-center justify-center fill-current text-white transition-all duration-700 ease-out"
        style={{
          width: 'clamp(260px, 65vw, 420px)',
        }}>
        <BrandIsologoSvg className="size-28" />
        <BrandTitle className="text-[38px]" as="h1">
          Botanic
        </BrandTitle>
        <BrandSubtitle className="text-[10px] font-bold" as="h3">
          Algeciras
        </BrandSubtitle>
      </div>
    </div>
  );
}
