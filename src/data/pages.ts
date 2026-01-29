/* {Configuración centralizada de todas las páginas del site} */
/* {Información de secciones: clave, título, descripción y ruta} */

export interface PageData {
  key: string;
  sectionTitle?: string;
  description: string;
  href: string;
}

export const pagesData: Record<string, PageData> = {
  home: {
    key: 'home',
    sectionTitle: undefined,
    description: 'Descubre Botanic Music, Terrace & Drinks, un espacio premium de música en vivo, cócteles y experiencias exclusivas. Tu escenario favorito.',
    href: '/',
  },

  club: {
    key: 'club',
    sectionTitle: 'Club',
    description: 'Explora nuestro music bar premium con la mejor música en vivo, cócteles artesanales y un ambiente inigualable.',
    href: '/club',
  },

  contacto: {
    key: 'contacto',
    sectionTitle: 'Contacto',
    description: 'Ponte en contacto con nosotros. Reservas, eventos especiales y consultas en Botanic Music, Terrace & Drinks.',
    href: '/contacto',
  },

  eventosPrivados: {
    key: 'eventosPrivados',
    sectionTitle: 'Eventos Privados',
    description: 'Organiza tu evento privado en Botanic Music, Terrace & Club. Cócteles personalizados, música en vivo y espacios exclusivos.',
    href: '/eventos-privados',
  },

  noticias: {
    key: 'noticias',
    sectionTitle: 'Noticias',
    description: 'Mantente actualizado con las últimas noticias, eventos y novedades de Botanic Music, Terrace & Club.',
    href: '/noticias',
  },

  preguntas: {
    key: 'preguntas',
    sectionTitle: 'Preguntas Frecuentes',
    description: 'Resuelve tus dudas sobre Botanic Music, Terrace & Club, horarios, reservas y eventos.',
    href: '/preguntas',
  },

  programacion: {
    key: 'programacion',
    sectionTitle: 'Programación',
    description: 'Consulta nuestra programación de música en vivo, artistas y eventos especiales en Botanic Music, Terrace & Club.',
    href: '/programacion',
  },

  terraza: {
    key: 'terraza',
    sectionTitle: 'Terraza',
    description: 'Disfruta de nuestra terraza premium con vistas, música en vivo y ambiente exclusivo.',
    href: '/terraza',
  },
};
