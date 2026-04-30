import { CTAButton } from "@/components/CTAButton";
import { Logo } from "@/components/Logo";
import { usePilotModal } from "@/components/PilotModalContext";
import { useI18n } from "@/components/I18nContext";
import { LangSwitcher } from "@/components/LangSwitcher";

export const Nav = () => {
  const { openModal } = usePilotModal();
  const { t } = useI18n();
  const navLinks = [
    { label: t("nav.product"), href: "#urun" },
    { label: t("nav.modules"), href: "#moduller" },
    { label: t("nav.aiClients"), href: "#ai-clients" },
    { label: t("nav.security"), href: "#guvenlik" },
  ];
  return (
    <header className="border-b border-border bg-background sticky top-0 z-40">
      <div className="container-page flex items-center justify-between h-16 gap-4">
        <a href="#" aria-label="saha.team" className="text-foreground">
          <Logo />
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
        <div className="flex items-center gap-3">
          <LangSwitcher />
          <CTAButton variant="primary" className="h-9 px-4 text-sm" onClick={openModal}>
            {t("cta.demo")}
          </CTAButton>
        </div>
      </div>
    </header>
  );
};
