/* {Datos centralizados del negocio} */

const buildWhatsAppUrl = (number: string, message: string) => `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

export const businessInfo = {
  name: 'Botanic Algeciras',
  siteUrl: 'https://botanicalgeciras.com',
  address: {
    main: 'Avd/ Capitan Ontañon, Edif. Plaza Mayor - 11202 Algeciras',
    contact: 'Avd/ Capitan Ontañon, Edif. Plaza Mayor - 11202 Algeciras',
  },
  maps: {
    mainUrl: 'https://maps.google.com/?q=Botanic+Algeciras',
    contactUrl: 'https://maps.google.com/?q=Botanic+Algeciras',
  },
  phone: {
    main: '+34 603 71 30 00',
    eventos: '+34 603 71 30 00',
  },
  whatsapp: {
    number: '34603713000',
    defaultMessage: 'Hola vengo desde botanicalgeciras.com y necesito informacion sobre...',
    url: buildWhatsAppUrl('34603713000', 'Hola vengo desde botanicalgeciras.com y necesito informacion sobre...'),
  },
  email: {
    rrhh: 'rrhh@botanicalgeciras.com',
  },
};
