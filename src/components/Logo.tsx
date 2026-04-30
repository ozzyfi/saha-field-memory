type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export const Logo = ({ className, showWordmark = true }: LogoProps) => (
  <span className={`inline-flex items-center gap-2 ${className ?? ""}`}>
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      aria-hidden="true"
      className="shrink-0"
    >
      {/* Top-left: filled */}
      <rect x="1" y="1" width="10" height="10" fill="currentColor" />
      {/* Top-right: outline */}
      <rect
        x="13.5"
        y="1.5"
        width="9"
        height="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Bottom-left: outline */}
      <rect
        x="1.5"
        y="13.5"
        width="9"
        height="9"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Bottom-right: filled */}
      <rect x="13" y="13" width="10" height="10" fill="currentColor" />
    </svg>
    {showWordmark && (
      <span className="text-[15px] font-semibold tracking-tight leading-none">
        saha.team
      </span>
    )}
  </span>
);
