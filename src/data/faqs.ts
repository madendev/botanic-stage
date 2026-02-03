/* {Preguntas frecuentes – FAQs} */
/* {Datos centralizados de preguntas y respuestas} */

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    id: 'horarios',
    question: '¿Cuáles son los horarios de apertura?',
    answer:
      'Botanic abre todos los dias. De lunes a viernes a las 8:30 y sabados y domingo a las 9:00. Viernes, Sabados y visperas de festivos cerramos a las 4:00 y el resto de dias a las 03:00. Los horarios pueden variar según eventos especiales.',
  },
  {
    id: 'entradas',
    question: '¿Cómo puedo conseguir entradas?',
    answer:
      'Puedes adquirir tus entradas de forma anticipada a través de nuestra web en la sección de Programación. También puedes comprarlas directamente en taquilla el mismo día del evento, sujeto a disponibilidad.',
  },
  {
    id: 'edad-minima',
    question: '¿Cuál es la edad mínima para entrar?',
    answer:
      'La edad mínima para acceder a Botanic es de 18 años. Es obligatorio presentar DNI o documento identificativo válido en la entrada. No se permite el acceso a menores de edad bajo ninguna circunstancia.',
  },
  {
    id: 'dress-code',
    question: '¿Existe algún código de vestimenta?',
    answer:
      'En Botanic apostamos por un ambiente relajado pero cuidado. Recomendamos evitar ropa deportiva y calzado tipo chanclas. El estilo casual-elegante es perfecto para disfrutar de la noche en nuestro espacio.',
  },
  {
    id: 'reservas',
    question: '¿Puedo reservar mesa o zona VIP?',
    answer:
      'Sí, ofrecemos servicio de reserva de mesas y zonas VIP para grupos. Puedes contactarnos a través de WhatsApp o el formulario de contacto con al menos 48 horas de antelación. Nuestro equipo te informará de disponibilidad y tarifas.',
  },
  {
    id: 'eventos-privados',
    question: '¿Organizáis eventos privados?',
    answer:
      'Por supuesto. Botanic es el espacio perfecto para celebraciones privadas, cumpleaños, eventos de empresa y presentaciones. Consulta nuestra sección de Eventos Privados o contáctanos para recibir un presupuesto personalizado.',
  },
  {
    id: 'parking',
    question: '¿Hay aparcamiento cercano?',
    answer: 'Botanic está ubicado en el centro de Algeciras con varias opciones de aparcamiento público en las inmediaciones.',
  },
  {
    id: 'consumicion',
    question: '¿Cuál es el precio medio de las consumiciones?',
    answer:
      'Nuestros precios son competitivos y acordes al sector. Las copas rondan entre 6€ y 10€, y disponemos de carta de cócteles premium. También ofrecemos botellas y packs para grupos con precios especiales.',
  },
  {
    id: 'musica',
    question: '¿Qué tipo de música soléis poner?',
    answer:
      'En Botanic apostamos por la variedad musical. Nuestro tardeo es indie pop y alternativo, mientras que por la noche apostamos por mainstream, comercial y sesiones de DJ en directo. Consulta nuestra programación para conocer los eventos específicos.',
  },
  {
    id: 'rrss',
    question: '¿Dónde puedo seguir la actualidad de Botanic?',
    answer:
      'Estamos muy activos en redes sociales. Síguenos en Instagram, TikTok, Facebook y Twitch como @botanic.algeciras para estar al día de nuestra programación, promociones y novedades. También puedes suscribirte a nuestra newsletter.',
  },
];
