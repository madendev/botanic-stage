/* {Configuración centralizada de todas las páginas del site} */
/* {Información de secciones: clave, título, descripción y ruta} */

export interface PageData {
  key: string;
  sectionTitle?: string;
  label?: string;
  description: string;
  href: string;
}

export const pagesData: Record<string, PageData> = {
  home: {
    key: 'home',
    sectionTitle: undefined,
    label: 'Bienvenido',
    description: 'Descubre Botanic Music, Terrace & Drinks, un espacio premium de música en vivo, cócteles y experiencias exclusivas. Tu escenario favorito.',
    href: '/',
  },

  club: {
    key: 'club',
    sectionTitle: 'Music Bar',
    label: 'Club',
    description: 'Explora nuestro music bar premium con la mejor música en vivo, cócteles artesanales y un ambiente inigualable.',
    href: '/club',
  },

  contacto: {
    key: 'contacto',
    sectionTitle: 'Contacto',
    label: 'Contacto',
    description: 'Ponte en contacto con nosotros. Reservas, eventos especiales y consultas en Botanic Music, Terrace & Drinks.',
    href: '/contacto',
  },

  eventosPrivados: {
    key: 'eventosPrivados',
    sectionTitle: 'Celebraciones',
    label: 'Eventos Privados',
    description: 'Organiza tu evento privado en Botanic Music, Terrace & Club. Cócteles personalizados, música en vivo y espacios exclusivos.',
    href: '/eventos-privados',
  },

  noticias: {
    key: 'noticias',
    sectionTitle: 'Noticias',
    label: 'Blog',
    description: 'Mantente actualizado con las últimas noticias, eventos y novedades de Botanic Music, Terrace & Club.',
    href: '/noticias',
  },

  preguntas: {
    key: 'preguntas',
    sectionTitle: 'Preguntas',
    label: 'Preguntas Frecuentes',
    description: 'Resuelve tus dudas sobre Botanic Music, Terrace & Club, horarios, reservas y eventos.',
    href: '/preguntas',
  },

  programacion: {
    key: 'programacion',
    sectionTitle: 'Programación',
    label: 'Entradas',
    description: 'Consulta nuestra programación de música en vivo, artistas y eventos especiales en Botanic Music, Terrace & Club.',
    href: '/programacion',
  },

  terraza: {
    key: 'terraza',
    sectionTitle: 'Terrace',
    label: 'Terraza',
    description: 'Disfruta de nuestra terraza premium con vistas, música en vivo y ambiente exclusivo.',
    href: '/terraza',
  },
};
