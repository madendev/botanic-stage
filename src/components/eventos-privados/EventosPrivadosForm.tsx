'use client';

import { useState } from 'react';
import { businessInfo } from '@/data/business';

/* {EventosPrivadosForm – formulario específico para eventos privados} */
/* {Responsable de: capturar solicitudes de eventos privados} */
/* {Estilo: inputs minimalistas con línea, botón outline} */
export default function EventosPrivadosForm() {
  const whatsappNumber = businessInfo.whatsapp.number;
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    tipoCelebracion: '',
    diaEvento: '',
    tramoHorario: '',
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hola, vengo de ${businessInfo.siteUrl} soy ${formData.nombre} ${formData.apellidos} y quiero celebrar un ${formData.tipoCelebracion} el día ${formData.diaEvento} al ${formData.tramoHorario}.`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto flex w-full max-w-2xl flex-col gap-8">
      {/* {Campo: Nombre} */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ep-name" className="text-xs tracking-[0.2em] text-white/60 uppercase">
          Nombre *
        </label>
        <input
          type="text"
          id="ep-name"
          name="nombre"
          required
          value={formData.nombre}
          onChange={handleChange}
          className="border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
          placeholder="Tu nombre"
        />
      </div>

      {/* {Campo: Apellidos} */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ep-lastname" className="text-xs tracking-[0.2em] text-white/60 uppercase">
          Apellidos *
        </label>
        <input
          type="text"
          id="ep-lastname"
          name="apellidos"
          required
          value={formData.apellidos}
          onChange={handleChange}
          className="border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
          placeholder="Tus apellidos"
        />
      </div>

      {/* {Campo: Tipo de celebración} */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ep-event" className="text-xs tracking-[0.2em] text-white/60 uppercase">
          Tipo de celebración *
        </label>
        <input
          type="text"
          id="ep-event"
          name="tipoCelebracion"
          required
          value={formData.tipoCelebracion}
          onChange={handleChange}
          className="border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
          placeholder="Cumpleaños, empresa, presentación..."
        />
      </div>

      {/* {Campo: Día del evento} */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ep-date" className="text-xs tracking-[0.2em] text-white/60 uppercase">
          Día del evento *
        </label>
        <input
          type="date"
          id="ep-date"
          name="diaEvento"
          required
          value={formData.diaEvento}
          onChange={handleChange}
          className="border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
        />
      </div>

      {/* {Campo: Tramo horario} */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ep-slot" className="text-xs tracking-[0.2em] text-white/60 uppercase">
          Tramo horario *
        </label>
        <select
          id="ep-slot"
          name="tramoHorario"
          required
          value={formData.tramoHorario}
          onChange={handleChange}
          className="border-b border-white/20 bg-transparent pb-3 text-base text-white transition-colors outline-none focus:border-white/50">
          <option value="" disabled>
            Selecciona un tramo
          </option>
          <option value="Desayuno (09 - 11)">Desayuno (09 - 11)</option>
          <option value="Brunch (11 - 14)">Brunch (11 - 14)</option>
          <option value="Almuerzo (14 - 17)">Almuerzo (14 - 17)</option>
          <option value="Merienda (17 - 20)">Merienda (17 - 20)</option>
          <option value="Cena (20 - 23)">Cena (20 - 23)</option>
        </select>
      </div>

      {/* {Checkbox: Política de privacidad} */}
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          id="ep-privacy"
          name="privacy"
          required
          checked={formData.privacy}
          onChange={handleChange}
          className="mt-1 h-4 w-4 cursor-pointer border-white/20 bg-transparent"
        />
        <label htmlFor="ep-privacy" className="text-sm text-white/60">
          He leído y acepto la{' '}
          <a href="/privacidad" className="underline transition-colors hover:text-white">
            política de privacidad
          </a>
        </label>
      </div>

      {/* {Botón: Enviar} */}
      <button
        type="submit"
        className="w-full border border-white/30 py-4 text-sm font-medium tracking-[0.2em] text-white uppercase transition-colors hover:border-white hover:bg-white/5 sm:w-auto sm:px-12">
        Enviar solicitud
      </button>
    </form>
  );
}
