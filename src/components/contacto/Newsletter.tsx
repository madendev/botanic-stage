'use client';

import { useState } from 'react';
import BrandTitle from '@/components/brand/BrandTitle';

/* {Newsletter – formulario de suscripción a newsletter} */
/* {Responsable de: capturar suscripciones al boletín} */
/* {Estilo: inputs underline, tipografía grande, mobile-first} */
export default function Newsletter() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // {Lógica de suscripción pendiente}
    console.log('Newsletter subscription:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex w-full flex-col gap-8">
      {/* {Título} */}
      <BrandTitle as="h2" className="text-lg font-semibold sm:text-xl lg:text-2xl">
        Suscríbete a nuestra newsletter
      </BrandTitle>

      {/* {Formulario} */}
      <form onSubmit={handleSubmit} className="flex w-full flex-col gap-6">
        {/* {Campo: Nombre} */}
        <div className="flex flex-col gap-2">
          <label htmlFor="newsletter-name" className="text-xs tracking-[0.2em] text-white/60 uppercase">
            Nombre completo *
          </label>
          <input
            type="text"
            id="newsletter-name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
            placeholder="Tu nombre"
          />
        </div>

        {/* {Campo: Email} */}
        <div className="flex flex-col gap-2">
          <label htmlFor="newsletter-email" className="text-xs tracking-[0.2em] text-white/60 uppercase">
            Email *
          </label>
          <input
            type="email"
            id="newsletter-email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="border-b border-white/20 bg-transparent pb-3 text-base text-white placeholder-white/30 transition-colors outline-none focus:border-white/50"
            placeholder="tu@email.com"
          />
        </div>

        {/* {Botón: Suscribirse} */}
        <button
          type="submit"
          className="w-full border border-white/30 py-4 text-sm font-medium tracking-[0.2em] text-white uppercase transition-colors hover:border-white hover:bg-white/5 sm:w-auto sm:px-12">
          Suscribirme
        </button>
      </form>
    </div>
  );
}
