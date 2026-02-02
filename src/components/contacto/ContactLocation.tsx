import BrandTitle from '@/components/brand/BrandTitle';

/* {ContactLocation – información de ubicación y contacto} */
/* {Responsable de: mostrar dirección física, mapa y teléfono} */
/* {Estilo: tipografía grande, botones outline} */
export default function ContactLocation() {
  const address = 'Calle Alfonso XI, 8, 11201 Algeciras, Cádiz';
  const phone = '+34 603 71 30 00';
  const mapsUrl = 'https://maps.google.com/?q=Botanic+Algeciras';

  return (
    <div className="flex w-full flex-col gap-8">
      {/* {Título} */}
      <BrandTitle as="h2" className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
        Encuéntranos
      </BrandTitle>

      {/* {Dirección} */}
      <div className="flex flex-col gap-3">
        <p className="text-xs tracking-[0.2em] text-white/60 uppercase">Dirección</p>
        <p className="text-base text-white/80 sm:text-lg">{address}</p>
      </div>

      {/* {Botón: Ver en el mapa} */}
      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full border border-white/30 py-4 text-center text-sm font-medium tracking-[0.2em] text-white uppercase transition-colors hover:border-white hover:bg-white/5 sm:w-auto sm:px-12">
        Ver en el mapa
      </a>

      {/* {Teléfono} */}
      <div className="flex flex-col gap-4">
        <p className="text-sm text-white/70">Llámanos a nuestro número de teléfono</p>
        <a
          href={`tel:${phone.replace(/\s/g, '')}`}
          className="inline-block w-full border border-white/30 py-4 text-center text-sm font-medium tracking-[0.2em] text-white uppercase transition-colors hover:border-white hover:bg-white/5 sm:w-auto sm:px-12">
          {phone}
        </a>
      </div>
    </div>
  );
}
