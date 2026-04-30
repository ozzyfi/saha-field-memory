import logo from "@/assets/logo.png";

const links = [
  { label: "Ürün", href: "#urun" },
  { label: "Modüller", href: "#moduller" },
  { label: "AI Clients", href: "#ai-clients" },
  { label: "Güvenlik", href: "#guvenlik" },
];

export const Footer = () => (
  <footer className="border-t border-border mt-24">
    <div className="container-page py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      <div>
        <img src={logo} alt="saha.team" className="h-7 w-auto" />
        <div className="mt-2 text-xs text-muted-foreground">© 2026 saha.team</div>
      </div>
      <nav className="flex flex-wrap gap-6 md:justify-center">
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {l.label}
          </a>
        ))}
      </nav>
      <div className="text-xs text-muted-foreground md:text-right leading-relaxed">
        Teknopark İstanbul<br />
        Pendik, İstanbul
      </div>
    </div>
  </footer>
);
