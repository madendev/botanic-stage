/* {Hero de la home: conserva la identidad del MainStage original} */
export default function HomeHero() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-center px-6 py-24">
      <p className="text-xs tracking-[0.35em] text-white/60 uppercase">Bienvenido</p>
      <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Botanic Stage</h1>
      <p className="mt-4 max-w-2xl text-base text-white/70">
        {/* {Descripción de marca para la home} */}
        El escenario donde la música, la naturaleza y la cultura se encuentran.
      </p>
    </section>
  );
}
