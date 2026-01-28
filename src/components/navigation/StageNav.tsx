"use client";

import { useState, useEffect } from "react";
import StageLink from "./StageLink";
import MobileMenu from "./MobileMenu";
import HamburgerButton from "./HamburgerButton";

/* {Stage navigation – controlador de navegación desktop + mobile} */
/* {Responsable de: gestionar estado del menú, toggle de scroll body} */
/* {Renderiza: HamburgerButton (mobile), MobileMenu overlay, Desktop nav (lg+)} */
export default function StageNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* {Previene scroll del body cuando el menú mobile está abierto} */
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* {Botón hamburguesa – solo visible en mobile} */}
      {!isMenuOpen && <HamburgerButton onClick={() => setIsMenuOpen(true)} />}

      {/* {Overlay de menú mobile} */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} onEscape={() => setIsMenuOpen(false)} />

      {/* {Navegación desktop – solo visible en lg+} */}
      <div className="hidden lg:block">
        <nav className="fixed top-10 left-12 z-20">
          <StageLink href="#eventos" label="EVENTOS" />
        </nav>
      </div>
    </>
  );
}
