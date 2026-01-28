/* {Fuentes del proyecto – importadas desde Google Fonts} */
/* {Utilizadas en: layout raíz, tipografía de marca, UI e interfaces} */

import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";

/* {Geist Sans – fuente principal del sistema (body text)} */
export const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

/* {Geist Mono – fuente monoespaciada (código, valores técnicos)} */
export const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

/* {Montserrat – fuente premium de marca (títulos, headers, navegación)} */
export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600"],
});

/* {Barlow Condensed – fuente secundaria de marca (alternativa, contextos especiales)} */
export const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["300", "400", "500", "600", "700"],
});
