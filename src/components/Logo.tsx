type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <img
    src="/brand/saha-team-logo-trimmed.png"
    alt="saha.team"
    className={`block w-auto h-[34px] md:h-[38px] object-contain ${className ?? ""}`}
  />
);
