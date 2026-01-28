/* {Floating WhatsApp button – global action} */
export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/34603713000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="
        fixed bottom-6 right-6 z-30
        flex h-12 w-12 items-center justify-center
        rounded-full
        bg-black/70 text-white
        backdrop-blur
        transition hover:scale-105 hover:bg-black/80
      "
    >
      💬
    </a>
  );
}
