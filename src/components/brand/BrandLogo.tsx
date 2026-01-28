import BrandLogoSvg from "./BrandLogoSvg";

type BrandLogoProps = {
  delay?: number;
};

/* {BrandLogo – animated wrapper for brand SVG} */
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
      {/* {Logo container – fluid scale, smooth resize} */}
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
