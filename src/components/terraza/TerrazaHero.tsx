/* {Hero de terraza: resalta el espacio al aire libre} */
export default function TerrazaHero() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-center px-6 py-24">
      <p className="text-xs tracking-[0.35em] text-white/60 uppercase">Terrace</p>
      <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Terraza panorámica</h1>
      <p className="mt-4 max-w-2xl text-base text-white/70">
        {/* {Contenido provisional para la terraza} */}
        Atardeceres, cócteles botánicos y vistas privilegiadas de la ciudad.
      </p>
    </section>
  );
}
