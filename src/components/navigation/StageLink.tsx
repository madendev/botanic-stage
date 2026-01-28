/* {StageLink – navigation link with brand tracking control} */
type StageLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export default function StageLink({ href, label, className = "" }: StageLinkProps) {
  const lastChar = label.slice(-1);
  const rest = label.slice(0, -1);

  return (
    <a
      href={href}
      className={`
        font-ui
        text-lg
        font-medium
        text-white/75
        hover:text-white
        transition
        tracking-[0.8em]
        ${className}
      `}
    >
      {rest}
      <span className="tracking-normal">{lastChar}</span>
    </a>
  );
}
