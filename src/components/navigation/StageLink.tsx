type StageLinkProps = {
  href: string;
  label: string;
  onClick?: () => void;
  className?: string;
};

/* {StageLink – spaced navigation link} */
export default function StageLink({ href, label, onClick, className = "" }: StageLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        font-ui
        uppercase
        tracking-[0.8em]
        text-lg
        text-white/80
        hover:text-white
        transition
        cursor-pointer
        ${className}
      `}
    >
      {label.slice(0, -1)}
      <span className="tracking-normal">{label.slice(-1)}</span>
    </a>
  );
}
