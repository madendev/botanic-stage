'use client';

import { useState } from 'react';

/* {EventosPrivadosForm – formulario específico para eventos privados} */
/* {Responsable de: capturar solicitudes de eventos privados} */
/* {Estilo: inputs minimalistas con línea, botón outline} */
export default function EventosPrivadosForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Evento privado form:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
          placeholder="Tu nombre completo"
        />
      </div>

      {/* {Campo: Email} */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ep-email" className="text-xs tracking-[0.2em] text-white/60 uppercase">
          Email *
        </label>
        <input
          type="email"
          id="ep-email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
          placeholder="tu@email.com"
        />
      </div>

      {/* {Campo: Teléfono} */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ep-phone" className="text-xs tracking-[0.2em] text-white/60 uppercase">
          Teléfono
        </label>
        <input
          type="tel"
          id="ep-phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
          placeholder="+34 600 000 000"
        />
      </div>

      {/* {Campo: Mensaje} */}
      <div className="flex flex-col gap-2">
        <label htmlFor="ep-message" className="text-xs tracking-[0.2em] text-white/60 uppercase">
          Cuéntanos sobre tu evento *
        </label>
        <textarea
          id="ep-message"
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="resize-none border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
          placeholder="Tipo de evento, fecha aproximada, número de personas..."
        />
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
