/* {Configuración centralizada de todas las páginas del site} */
/* {Información de secciones: clave, título, descripción y ruta} */

export interface PageData {
  key: string;
  title?: string;
  sectionTitle?: string;
  label?: string;
  description: string;
  href: string;
}

export const pagesData: Record<string, PageData> = {
  home: {
    key: 'home',
    title: 'Botanic Algeciras | Música en directo, tardeo y noches',
    sectionTitle: undefined,
    label: 'Bienvenido',
    description: 'Sala de conciertos y espacio musical en Algeciras. Tardeo indie pop, noches mainstream, DJs y eventos en directo en Botanic Algeciras.',
    href: '/',
  },

  club: {
    key: 'club',
    title: 'Club musical en Algeciras | Tardeo indie y noches en Botanic',
    sectionTitle: 'Music Bar',
    label: 'Club',
    description: 'Vive el tardeo indie pop y las noches mainstream en Botanic Algeciras. Un club musical con identidad, DJs y cultura nocturna.',
    href: '/club',
  },

  contacto: {
    key: 'contacto',
    title: 'Contacto y ubicación | Botanic Algeciras',
    sectionTitle: 'Contacto',
    label: 'Contacto',
    description: 'Encuentra cómo llegar a Botanic Algeciras, horarios y formas de contacto. Música, eventos y noches en el centro de Algeciras.',
    href: '/contacto',
  },

  eventosPrivados: {
    key: 'eventosPrivados',
    title: 'Eventos privados en Algeciras | Botanic',
    sectionTitle: 'Celebraciones',
    label: 'Eventos Privados',
    description: 'Celebra tu evento privado en Botanic Algeciras. Cumpleaños, eventos de empresa, presentaciones y celebraciones con música y ambiente único.',
    href: '/eventos-privados',
  },

  noticias: {
    key: 'noticias',
    title: 'Noticias y actualidad musical | Botanic Algeciras',
    sectionTitle: 'Noticias',
    label: 'Blog',
    description: 'Descubre las últimas noticias, eventos, conciertos y novedades de Botanic Algeciras y su programación musical.',
    href: '/noticias',
  },

  preguntas: {
    key: 'preguntas',
    title: 'Preguntas frecuentes | Botanic Algeciras',
    sectionTitle: 'Preguntas',
    label: 'Preguntas Frecuentes',
    description: 'Horarios, entradas, eventos, ubicación y todo lo que necesitas saber antes de venir a Botanic Algeciras.',
    href: '/preguntas',
  },

  programacion: {
    key: 'programacion',
    title: 'Programación musical en Algeciras | Botanic',
    sectionTitle: 'Programación',
    label: 'Entradas',
    description: 'Consulta la programación de conciertos, tardeo indie pop y noches con DJs en Botanic Algeciras. Agenda musical actualizada.',
    href: '/programacion',
  },

  terraza: {
    key: 'terraza',
    title: 'Terraza con música en Algeciras | Botanic',
    sectionTitle: 'Terrace',
    label: 'Terraza',
    description: 'Disfruta de la terraza de Botanic Algeciras frente al parque. Copas, música y ambiente nocturno en una de las mejores terrazas de la ciudad.',
    href: '/terraza',
  },
};
