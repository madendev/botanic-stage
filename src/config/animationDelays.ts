/* {Configuración centralizada de delays de animaciones} */
/* {Garantiza consistencia y facilita el ajuste global de tiempos} */
/* {Utilizado en: MainStage (fade-in staggered)} */
export const ANIMATION_DELAYS = {
  logo: 0 /* {Entrada del logo sin delay} */,
  buttonPrimary: 200 /* {Botón principal (ENTRADAS)} */,
  buttonSecondary: 350 /* {Botón secundario (RESERVAS)} */,
} as const;
