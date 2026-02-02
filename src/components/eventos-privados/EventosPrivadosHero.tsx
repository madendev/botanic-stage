'use client';

import BrandTitle from '@/components/brand/BrandTitle';

/* {EventosPrivadosHero – hero fullscreen con imagen de fondo} */
/* {Responsable de: presentación impactante de la sección de eventos privados} */
/* {Incluye: imagen de fondo, H1 centrado, flecha de scroll animada} */
export default function EventosPrivadosHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      {/* {Imagen de fondo con overlay} */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="h-full w-full bg-gradient-to-br from-zinc-900 to-black" />
      </div>

      {/* {Contenido central} */}
      <div className="relative z-20 flex flex-col items-center justify-center px-6 text-center">
        <BrandTitle as="h1" className="text-4xl font-bold sm:text-5xl lg:text-7xl">
          Eventos Privados
        </BrandTitle>
        <p className="mt-6 max-w-2xl text-base text-white/70 sm:text-lg lg:text-xl">Celebra tus momentos especiales en un espacio único</p>
      </div>

      {/* {Flecha de scroll animada} */}
      <button
        onClick={scrollToContent}
        aria-label="Desplazar hacia abajo"
        className="absolute bottom-12 left-1/2 z-20 -translate-x-1/2 animate-bounce transition-opacity hover:opacity-70">
        <svg className="h-8 w-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}
