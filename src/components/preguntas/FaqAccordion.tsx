'use client';

import { useState } from 'react';
import FaqItem from './FaqItem';
import type { Faq } from '@/data/faqs';

/* {Props del componente FaqAccordion} */
type FaqAccordionProps = {
  /* {Array de preguntas frecuentes} */
  faqs: Faq[];
};

/* {FaqAccordion – contenedor del acordeón de FAQs} */
/* {Responsable de: gestionar estado de apertura (solo una abierta a la vez)} */
/* {Ubicación: columna derecha en desktop} */
export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  /* {Toggle: abre/cierra una pregunta} */
  const handleToggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <div className="flex w-full flex-col gap-6">
      {faqs.map(faq => (
        <FaqItem key={faq.id} id={faq.id} question={faq.question} answer={faq.answer} isOpen={openId === faq.id} onToggle={() => handleToggle(faq.id)} />
      ))}
    </div>
  );
}
