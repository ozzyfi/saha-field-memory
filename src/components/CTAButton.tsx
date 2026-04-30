import { ReactNode } from "react";

type Variant = "primary" | "outline";

interface Props {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  className?: string;
}

export const CTAButton = ({ children, variant = "primary", href = "#", className = "" }: Props) => {
  const base =
    "inline-flex items-center justify-center h-10 px-5 rounded-md text-sm font-medium transition-colors";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:bg-foreground/85"
      : "border border-border bg-background text-foreground hover:bg-surface";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
};
