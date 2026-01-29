import WhatsAppIcon from '@/components/icons/WhatsAppIcon';

/* {WhatsAppButton – botón flotante de contacto} */
/* {Responsable de: enlace directo a WhatsApp} */
/* {Ubicación: esquina inferior derecha (fixed bottom-6 right-6)} */
/* {Siempre visible en todas las resoluciones} */
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34603713000?text=Hola%20vengo%20desde%20el%20sitio%20web%20oficial%20y%20necesito%20informacion%20sobre..."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed right-6 bottom-6 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur transition hover:scale-105 hover:bg-black/80">
      <div className="size-6 [&>svg]:size-full [&>svg]:fill-current">
        <WhatsAppIcon />
      </div>
    </a>
  );
}
