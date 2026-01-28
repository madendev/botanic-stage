"use client";

import { useEffect } from "react";
import StageLink from "./StageLink";

/* {Props del menú mobile} */
type MobileMenuProps = {
  /* {Estado: abierto/cerrado} */
  isOpen: boolean;
  /* {Callback para cerrar el menú} */
  onClose: () => void;
  /* {Callback para cierre por tecla Escape} */
  onEscape: () => void;
};

/* {MobileMenu – overlay fullscreen con navegación} */
/* {Responsable de: menú superpuesto, backdrop con blur, enlaces de navegación} */
/* {Cierres: backdrop click, botón X, enlaces, tecla Escape} */
/* {Visible: solo en pantallas < lg (1024px)} */
export default function MobileMenu({ isOpen, onClose, onEscape }: MobileMenuProps) {
  /* {Maneja cierre con tecla Escape} */
  // {Cierra menú con tecla Escape}
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onEscape();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onEscape]);

  if (!isOpen) return null;

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 z-200 lg:hidden">
      {/* {Backdrop semi-opaco con blur – cierra al click} */}
      <div
        className="
          absolute inset-0
          bg-black/70
          backdrop-blur-xl
        "
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onClose()}
        aria-label="Close menu"
      />

      {/* {Contenido del menú – enlaces de navegación} */}
      <nav
        className="
          relative z-10
          flex min-h-screen flex-col
          items-center justify-center
          gap-8
        "
      >
        <StageLink href="#eventos" label="EVENTOS" onClick={handleLinkClick} />
        <StageLink href="#entradas" label="ENTRADAS" onClick={handleLinkClick} />
        <StageLink href="#privados" label="EVENTOS PRIVADOS" onClick={handleLinkClick} />
        <StageLink href="#contacto" label="CONTACTO" onClick={handleLinkClick} />
      </nav>

      {/* {Botón de cierre (X) – esquina superior derecha} */}
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="
          fixed top-6 right-6 z-210
          font-ui text-white
          text-3xl
          cursor-pointer
          hover:scale-110
          transition
        "
      >
        ✕
      </button>
    </div>
  );
}
