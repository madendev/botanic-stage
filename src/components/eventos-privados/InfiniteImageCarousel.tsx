'use client';

import { useEffect, useRef, useState } from 'react';

/* {InfiniteImageCarousel – carrusel infinito y automático de imágenes} */
/* {Responsable de: mostrar galería de imágenes en loop continuo} */
/* {Autoplay sin botones, responsive} */
export default function InfiniteImageCarousel() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  /* {Imágenes placeholder – reemplazar con imágenes reales} */
  const images = [
    { id: 1, alt: 'Evento 1', color: 'from-purple-900 to-purple-700' },
    { id: 2, alt: 'Evento 2', color: 'from-blue-900 to-blue-700' },
    { id: 3, alt: 'Evento 3', color: 'from-pink-900 to-pink-700' },
    { id: 4, alt: 'Evento 4', color: 'from-green-900 to-green-700' },
    { id: 5, alt: 'Evento 5', color: 'from-orange-900 to-orange-700' },
  ];

  /* {Duplicar imágenes para loop infinito} */
  const allImages = [...images, ...images];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;

      /* {Reset cuando llega a la mitad (imágenes duplicadas)} */
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-4 overflow-x-hidden scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {allImages.map((image, index) => (
          <div key={`${image.id}-${index}`} className="h-64 w-80 flex-shrink-0 overflow-hidden rounded-lg sm:h-80 sm:w-96">
            {/* {Placeholder con gradiente – reemplazar con <Image> real} */}
            <div className={`h-full w-full bg-gradient-to-br ${image.color} flex items-center justify-center`}>
              <span className="text-lg font-medium text-white/50">{image.alt}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
