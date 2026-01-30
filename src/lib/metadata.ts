import { Metadata, Viewport } from 'next';
import { SITE_NAME } from '@/data/site';
import { pagesData } from '@/data/pages';

interface MetadataConfig {
  sectionTitle?: string;
  description: string;
}

export function createMetadata({ sectionTitle, description }: MetadataConfig): Metadata {
  const title = sectionTitle ? `${sectionTitle} | ${SITE_NAME}` : SITE_NAME;

  return {
    title,
    description,
  };
}

/**
 * {Construye metadata de Next.js a partir de una pageKey}
 * {Lee sectionTitle y description de src/data/pages.ts}
 * {Compone el title con el SITE_NAME de src/data/site.ts}
 * {Patrón: [Sección] | Sitio o solo Sitio si no hay sección}
 */
export function buildPageMetadata(pageKey: string): Metadata {
  const pageData = pagesData[pageKey];

  if (!pageData) {
    console.warn(`[buildPageMetadata] pageKey "${pageKey}" no encontrado en pagesData`);
    return {
      title: SITE_NAME,
      description: 'Página no encontrada',
    };
  }

  return createMetadata({
    sectionTitle: pageData.sectionTitle,
    description: pageData.description,
  });
}

/**
 * {Construye viewport configuration}
 * {Define themeColor según preferencia de color del sistema}
 */
export function buildPageViewport(): Viewport {
  return {
    themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#000000' },
      { media: '(prefers-color-scheme: dark)', color: '#ffffff' },
    ],
  };
}
