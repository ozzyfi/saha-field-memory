import { CTAButton } from "@/components/CTAButton";

const navLinks = [
  { label: "Ürün", href: "#urun" },
  { label: "Modüller", href: "#moduller" },
  { label: "AI Clients", href: "#ai-clients" },
  { label: "Güvenlik", href: "#guvenlik" },
];

export const Nav = () => (
  <header className="border-b border-border bg-background sticky top-0 z-40">
    <div className="container-page flex items-center justify-between h-16">
      <a href="#" className="text-[15px] font-semibold tracking-tight">
        saha.team
      </a>
      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <CTAButton variant="primary" className="h-9 px-4 text-sm">
        Demo Planla
      </CTAButton>
    </div>
  </header>
);
