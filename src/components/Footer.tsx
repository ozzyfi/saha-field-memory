import { Logo } from "@/components/Logo";
import { useI18n } from "@/components/I18nContext";

export const Footer = () => {
  const { t } = useI18n();
  const links = [
    { label: t("nav.product"), href: "#urun" },
    { label: t("nav.modules"), href: "#moduller" },
    { label: t("nav.aiClients"), href: "#ai-clients" },
    { label: t("nav.security"), href: "#guvenlik" },
  ];
  return (
    <footer className="border-t border-border mt-24">
      <div className="container-page py-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        <div className="text-foreground">
          <Logo />
          <div className="mt-2 text-xs text-muted-foreground">{t("footer.copy")}</div>
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
          {t("footer.address.l1")}
          <br />
          {t("footer.address.l2")}
        </div>
      </div>
    </footer>
  );
};
