"use client";

import { useState, useEffect } from "react";
import StageLink from "./StageLink";
import MobileMenu from "./MobileMenu";

/* {Stage navigation – desktop + mobile controller} */
export default function StageNav() {
  console.log("StageNav render");

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log("isMenuOpen:", isMenuOpen);
  }, [isMenuOpen]);

  return (
    <>
      {/* {Mobile menu icon} */}
      <div className="fixed top-6 right-6 z-100 block lg:hidden">
        <button
          aria-label="Open menu"
          onClick={() => {
            console.log("MENU BUTTON CLICK");
            setIsMenuOpen(true);
          }}
          className="
            font-ui
            text-white
            text-3xl
            cursor-pointer
            hover:scale-110
            transition
          "
        >
          ☰
        </button>
      </div>

      {/* {Mobile menu overlay} */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => {
          console.log("MENU CLOSE");
          setIsMenuOpen(false);
        }}
      />

      {/* {Desktop navigation} */}
      <div className="hidden lg:block">
        <nav className="fixed top-10 left-12 z-20">
          <StageLink href="#eventos" label="EVENTOS" />
        </nav>
      </div>
    </>
  );
}
