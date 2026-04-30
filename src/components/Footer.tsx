const links = [
  { label: "Ürün", href: "#urun" },
  { label: "Modüller", href: "#moduller" },
  { label: "AI Clients", href: "#ai-clients" },
  { label: "Güvenlik", href: "#guvenlik" },
];

export const Footer = () => (
  <footer className="border-t border-border mt-24">
    <div className="container-page py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      <div className="text-[15px] font-semibold tracking-tight">saha.team</div>
      <nav className="flex flex-wrap gap-6">
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
      <div className="text-xs text-muted-foreground">© 2026 saha.team</div>
    </div>
  </footer>
);
