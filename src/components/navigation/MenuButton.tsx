/* {Props del botón de menú genérico} */
type MenuButtonProps = {
  /* {Callback al hacer click} */
  onClick: () => void;
  /* {Clases Tailwind adicionales} */
  className?: string;
};

/* {MenuButton – botón genérico para abrir menú} */
/* {Responsable de: toggle visual del menú (flexible, sin posicionamiento fijo)} */
/* {Reutilizable en header, hero, o cualquier contexto} */
export default function MenuButton({ onClick, className = '' }: MenuButtonProps) {
  return (
    <button aria-label="Abrir menú" onClick={onClick} className={`font-ui cursor-pointer text-4xl text-white transition hover:scale-110 ${className}`}>
      ☰
    </button>
  );
}
