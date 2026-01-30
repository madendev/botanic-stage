import BrandTitle from '@/components/brand/BrandTitle';

/* {Hero de programación: destaca la agenda y entradas} */
/* {Recibe título y descripción desde los datos centralizados} */

interface ProgramacionHeroProps {
  title: string;
  description: string;
}

export default function ProgramacionHero({ title, description }: ProgramacionHeroProps) {
  return (
    <section className="mx-auto flex min-h-[50vh] w-full max-w-5xl flex-col items-center justify-center text-center">
      <p className="text-xs tracking-[0.35em] text-white/60 uppercase">Entradas</p>
      <div className="mt-8">
        <BrandTitle as="h2" className="text-lg text-white sm:text-4xl lg:text-5xl">
          {title}
        </BrandTitle>
      </div>
      <p className="mt-8 max-w-2xl text-base text-white/70">{description}</p>
      <div></div>
    </section>
  );
}
