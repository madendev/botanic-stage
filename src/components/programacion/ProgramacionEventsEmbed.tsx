'use client';

import { useEffect, useRef } from 'react';

/* {Componente: Embed de Eventos de Fourvenues} */
/* {Inyecta script externo una sola vez, evitando duplicados en dev mode} */

export default function ProgramacionEventsEmbed() {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Evitar cargar el script múltiples veces (Dev Mode StrictMode)
    if (scriptLoadedRef.current) return;
    scriptLoadedRef.current = true;

    const SCRIPT_URL = 'https://www.fourvenues.com/assets/iframe/botanic-algeciras/';

    // Verificar si el script ya existe en el DOM
    if (document.querySelector(`script[src="${SCRIPT_URL}"]`)) return;

    // Crear e inyectar el script
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // No limpiar scripts en desmontaje para evitar recargas innecesarias
      // (Fourvenues maneja el ciclo de vida internamente)
    };
  }, []);

  return (
    <section className="relative z-10 w-full pb-12">
      <div className="mx-auto max-w-7xl">
        {/* {ID 'fourvenues-iframe' es REQUERIDO por el script} */}
        <div id="fourvenues-iframe" className="w-full" />
      </div>
    </section>
  );
}
