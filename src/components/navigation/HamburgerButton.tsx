/* {Props del botón hamburguesa} */
type HamburgerButtonProps = {
  /* {Callback al hacer click} */
  onClick: () => void;
};

/* {HamburgerButton – botón de toggle para menú mobile} */
/* {Responsable de: toggle visual del menú mobile} */
/* {Visible: solo en pantallas < lg (1024px)} */
export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <div className="fixed top-6 right-6 z-100 block lg:hidden">
      <button aria-label="Open menu" onClick={onClick} className="font-ui cursor-pointer text-3xl text-white transition hover:scale-110">
        ☰
      </button>
    </div>
  );
}
