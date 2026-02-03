'use client';

/* {Props del componente FaqItem} */
type FaqItemProps = {
  /* {ID único de la pregunta} */
  id: string;
  /* {Texto de la pregunta} */
  question: string;
  /* {Texto de la respuesta} */
  answer: string;
  /* {Estado: está abierta esta pregunta?} */
  isOpen: boolean;
  /* {Callback para toggle} */
  onToggle: () => void;
};

/* {FaqItem – item individual de pregunta/respuesta con acordeón} */
/* {Responsable de: renderizar una FAQ con animación de apertura/cierre} */
/* {Icono: + cerrado, - abierto} */
export default function FaqItem({ id, question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-white/10 pb-6">
      {/* {Botón de pregunta} */}
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
        className="flex w-full items-start justify-between gap-4 text-left transition-colors hover:text-white">
        {/* {Texto de la pregunta} */}
        <span className="text-base font-medium text-white/90 sm:text-lg">{question}</span>

        {/* {Icono +/- } */}
        <span className="flex h-6 w-6 shrink-0 items-center justify-center text-xl text-white/60">{isOpen ? '−' : '+'}</span>
      </button>

      {/* {Respuesta con animación} */}
      <div id={`faq-answer-${id}`} className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? 'mt-4 max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-sm leading-relaxed text-white/60 sm:text-base">{answer}</p>
      </div>
    </div>
  );
}
