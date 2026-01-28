import { BrandLogo, StageButton } from "@/components";

/* {Main stage – centered brand + actions} */
export default function MainStage() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6 text-center">
      {/* {Brand logo} */}
      <BrandLogo delay={0} />
      {/* {Main stage actions} */}
      <div className="mt-12 flex flex-col items-center gap-4">
        <StageButton label="ENTRADAS" href="/programacion" variant="primary" delay={200} />

        <StageButton label="RESERVAS" href="https://wa.me/XXXXXXXXX" target="_blank" delay={350} />
      </div>
    </section>
  );
}
