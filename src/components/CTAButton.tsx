import { ReactNode } from "react";

type Variant = "primary" | "outline";

interface Props {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  type?: "button" | "submit";
  as?: "a" | "button";
}

export const CTAButton = ({
  children,
  variant = "primary",
  href = "#",
  className = "",
  onClick,
  type,
  as,
}: Props) => {
  const base =
    "inline-flex items-center justify-center h-10 px-5 rounded-md text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-foreground/85"
      : "border border-border bg-background text-foreground hover:bg-surface";

  const tag = as ?? (onClick ? "button" : "a");

  if (tag === "button") {
    return (
      <button
        type={type ?? "button"}
        onClick={onClick}
        className={`${base} ${styles} ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
};
