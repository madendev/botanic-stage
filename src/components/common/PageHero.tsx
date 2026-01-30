import BrandTitle from '@/components/brand/BrandTitle';
import BrandIsologoSvg from '@/components/brand/BrandIsologoSvg';
import { pagesData } from '@/data/pages';

/* {Props del componente PageHero} */
type PageHeroProps = {
  /* {Clave de la página desde pagesData} */
  pageKey: string;
  /* {Variante: default (min-h-screen) o compact (min-h-[50vh])} */
  variant?: 'default' | 'compact';
};

/* {PageHero – componente hero genérico y reutilizable} */
/* {Responsable de: renderizar hero con datos centralizados de pagesData} */
/* {Obtiene sectionTitle y description automáticamente} */
export default function PageHero({ pageKey, variant = 'default' }: PageHeroProps) {
  const pageData = pagesData[pageKey];

  if (!pageData) {
    console.warn(`[PageHero] pageKey "${pageKey}" no encontrado en pagesData`);
    return null;
  }

  const isCompact = variant === 'compact';

  return (
    <section
      className={`mx-auto flex w-full max-w-5xl flex-col justify-end ${isCompact ? 'my-8 min-h-[35vh] items-center text-center sm:min-h-[25vh] md:mb-12 md:min-h-[35vh]' : 'min-h-screen items-start'}`}>
      {pageData.label && <p className="text-xs tracking-[0.35em] text-white/60 uppercase">{pageData.label}</p>}

      <div className={pageData.label ? 'mt-4' : ''}>
        <BrandTitle as="h1" className={`font-semibold text-white ${isCompact ? 'text-lg sm:text-3xl lg:text-5xl' : 'text-4xl sm:text-5xl'}`}>
          {pageData.sectionTitle || pageData.key}
        </BrandTitle>
      </div>

      {pageData.description && <p className={`max-w-xl text-sm text-white/70 ${pageData.label ? 'mt-4' : 'mt-2'}`}>{pageData.description}</p>}

      <div className="mt-6 flex w-full justify-center">
        <BrandIsologoSvg className="h-8 w-auto fill-current text-white/70" />
      </div>
    </section>
  );
}
