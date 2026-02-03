'use client';

import PageHero from '@/components/common/PageHero';

/* {EventosPrivadosHero – hero fullscreen con imagen de fondo} */
/* {Responsable de: presentación impactante de la sección de eventos privados} */
/* {Incluye: imagen de fondo, PageHero reutilizable, flecha de scroll animada} */
export default function EventosPrivadosHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative flex h-dvh w-full items-center justify-center overflow-hidden bg-black">
      {/* {Video de fondo con overlay} */}
      <div className="absolute inset-0 z-0">
        <video autoPlay muted loop playsInline className="h-full w-full object-cover" poster="/botanic-video-1.webm">
          <source src="/botanic-video-1.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 z-10 bg-linear-to-b from-black/80 via-black/70 to-black/95" />
      </div>

      {/* {Contenido central - reutiliza PageHero} */}
      <div className="relative z-20 flex h-dvh w-full items-center justify-center">
        <PageHero pageKey="eventosPrivados" variant="compact" className="my-0! justify-center! py-0!" />
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
