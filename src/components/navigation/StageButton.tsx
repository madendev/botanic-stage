type StageButtonProps = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  delay?: number;
  target?: "_self" | "_blank";
};

/* {StageButton – glass action with halo + motion-ready} */
export default function StageButton({ label, href, variant = "secondary", delay = 0, target = "_self" }: StageButtonProps) {
  const isPrimary = variant === "primary";
  const isExternal = target === "_blank";

  return (
    <a
      href={href}
      target={target}
      rel={isExternal ? "noopener noreferrer" : undefined}
      style={{ animationDelay: `${delay}ms` }}
      className={`
        relative
        group
        lg:hidden
        font-ui
        uppercase
        tracking-[0.28em]
        px-9
        py-3.5
        rounded-full
        border
        backdrop-blur-md
        transition-all
        duration-500
        animate-stage-fade-in
        ${
          isPrimary
            ? "border-white/60 text-white bg-white/10 hover:bg-white/20"
            : "border-white/30 text-white/80 hover:border-white/60 hover:text-white"
        }
      `}
    >
      {/* {Halo glow} */}
      <span
        className={`
          pointer-events-none
          absolute inset-0 rounded-full opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
          ${isPrimary ? "shadow-[0_0_40px_rgba(255,255,255,0.35)]" : "shadow-[0_0_28px_rgba(255,255,255,0.18)]"}
        `}
      />

      {/* {Label with last-letter spacing fix} */}
      <span className="relative z-10 inline-block">
        {label.slice(0, -1)}
        <span className="tracking-normal">{label.slice(-1)}</span>
      </span>
    </a>
  );
}
