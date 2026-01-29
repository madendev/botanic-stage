import MenuButton from './MenuButton';

/* {Props del botón hamburguesa} */
type HamburgerButtonProps = {
  /* {Callback al hacer click} */
  onClick: () => void;
};

/* {HamburgerButton – botón de toggle para menú mobile (fixed position)} */
/* {Responsable de: toggle visual del menú mobile en home} */
/* {Visible: solo en pantallas < lg (1024px)} */
/* {Reutiliza: MenuButton con posicionamiento fijo} */
export default function HamburgerButton({ onClick }: HamburgerButtonProps) {
  return (
    <div className="fixed top-6 right-6 z-100 block lg:hidden">
      <MenuButton onClick={onClick} />
    </div>
  );
}
