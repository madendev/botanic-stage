"use client";

import StageLink from "./StageLink";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

/* {MobileMenu – fullscreen glass navigation} */
export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-200 lg:hidden">
      {/* {Backdrop} */}
      <div
        className="
          absolute inset-0
          bg-black/70
          backdrop-blur-xl
          cursor-pointer
        "
        onClick={onClose}
      />

      {/* {Menu content} */}
      <nav
        className="
          relative z-10
          flex min-h-screen flex-col
          items-center justify-center
          gap-8
        "
      >
        <StageLink href="#eventos" label="EVENTOS" onClick={onClose} />
        <StageLink href="#entradas" label="ENTRADAS" onClick={onClose} />
        <StageLink href="#privados" label="EVENTOS PRIVADOS" onClick={onClose} />
        <StageLink href="#contacto" label="CONTACTO" onClick={onClose} />
      </nav>

      {/* {Close button} */}
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
