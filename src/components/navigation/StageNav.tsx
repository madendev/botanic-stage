import StageLink from "./StageLink";

/* {Stage navigation – refined presence version} */
export default function StageNav() {
  return (
    <>
      {/* {Mobile menu icon – visible until lg} */}
      <div className="fixed top-6 right-6 z-30 block lg:hidden">
        <button aria-label="Open menu" className="font-ui text-white/90 hover:text-white transition text-3xl">
          ☰
        </button>
      </div>

      {/* {Desktop navigation – visible from lg} */}
      <div className="hidden lg:block">
        {/* {Top left} */}
        <nav className="fixed top-10 left-12 z-20">
          <StageLink href="#eventos" label="EVENTOS" />
        </nav>

        {/* {Top center} */}
        <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-20">
          <StageLink href="#entradas" label="ENTRADAS Y RESERVAS" />
        </nav>

        {/* {Top right} */}
        <nav className="fixed top-10 right-12 z-20">
          <StageLink href="#about" label="ABOUT" />
        </nav>

        {/* {Bottom left} */}
        <nav className="fixed bottom-10 left-12 z-20">
          <StageLink href="#preguntas" label="PREGUNTAS" />
        </nav>

        {/* {Bottom center} */}
        <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20">
          <StageLink href="#privados" label="EVENTOS PRIVADOS" />
        </nav>

        {/* {Bottom right} */}
        <nav className="fixed bottom-10 right-12 z-20">
          <StageLink href="#contacto" label="CONTACTO" />
        </nav>
      </div>
    </>
  );
}
