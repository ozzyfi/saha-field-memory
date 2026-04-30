import { useI18n } from "./I18nContext";

export const LangSwitcher = () => {
  const { lang, setLang } = useI18n();
  const Btn = ({ code, label }: { code: "tr" | "en"; label: string }) => {
    const active = lang === code;
    return (
      <button
        type="button"
        onClick={() => setLang(code)}
        aria-pressed={active}
        className={`h-7 px-2 text-[11px] font-medium uppercase tracking-[0.1em] rounded-sm transition-colors ${
          active
            ? "text-foreground"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        {label}
      </button>
    );
  };
  return (
    <div className="inline-flex items-center border border-border rounded-md overflow-hidden">
      <Btn code="tr" label="TR" />
      <span className="w-px h-4 bg-border" />
      <Btn code="en" label="EN" />
    </div>
  );
};
