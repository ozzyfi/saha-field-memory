type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <img
    src="/brand/saha-team-logo-trimmed.png"
    alt="saha.team"
    className={`block w-auto h-5 md:h-6 object-contain ${className ?? ""}`}
  />
);
