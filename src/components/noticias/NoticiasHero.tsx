/* {Hero de noticias: novedades y anuncios} */
export default function NoticiasHero() {
  return (
    <section className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-start justify-center">
      <p className="text-xs tracking-[0.35em] text-white/60 uppercase">Noticias</p>
      <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Últimas novedades</h1>
      <p className="mt-4 max-w-2xl text-base text-white/70">
        {/* {Contenido provisional para noticias} */}
        Lanzamientos, colaboraciones y anuncios especiales del stage.
      </p>
    </section>
  );
}
