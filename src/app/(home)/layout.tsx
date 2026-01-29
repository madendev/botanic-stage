import type { ReactNode } from 'react';
import '../globals.css';

/* {Props del layout home} */
type HomeLayoutProps = {
  children: ReactNode;
};

/* {Layout para la página home} */
/* {Responsable de: estilos globales, contenido de home} */
/* {Metadata: proporcionada por root layout desde src/data/pages.ts} */
export default function HomeLayout({ children }: HomeLayoutProps) {
  return <>{children}</>;
}
