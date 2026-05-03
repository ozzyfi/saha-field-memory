import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionLabel } from "@/components/SectionLabel";
import { usePilotModal } from "@/components/PilotModalContext";
import { useI18n } from "@/components/I18nContext";

const toneClass = (tone: string) => {
  switch (tone) {
    case "blue":
      return "bg-tag-blue text-tag-blue-foreground";
    case "teal":
      return "bg-tag-teal text-tag-teal-foreground";
    case "amber":
      return "bg-tag-amber text-tag-amber-foreground";
    default:
      return "bg-surface text-foreground";
  }
};

const Divider = () => (
  <div className="container-page">
    <hr className="hr-soft" />
  </div>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-serif-display text-4xl md:text-5xl tracking-tight max-w-3xl leading-[1.05]">
    {children}
  </h2>
);

const Index = () => {
  const { openModal } = usePilotModal();
  const { t } = useI18n();

  const heroBadges = [
    t("hero.badge.1"),
    t("hero.badge.2"),
    t("hero.badge.3"),
    t("hero.badge.4"),
  ].filter(Boolean);

  const previewCards = [
    { title: t("preview.card1.title"), tag: t("preview.card1.tag"), body: t("preview.card1.body") },
    { title: t("preview.card2.title"), tag: t("preview.card2.tag"), body: t("preview.card2.body") },
    { title: t("preview.card3.title"), tag: t("preview.card3.tag"), body: t("preview.card3.body") },
  ];

  const flowItems = [
    t("preview.flow.1"),
    t("preview.flow.2"),
    t("preview.flow.3"),
    t("preview.flow.4"),
  ];

  const problems = [
    { title: t("problem.1.title"), body: t("problem.1.body") },
    { title: t("problem.2.title"), body: t("problem.2.body") },
    { title: t("problem.3.title"), body: t("problem.3.body") },
    { title: t("problem.4.title"), body: t("problem.4.body") },
  ];

  const steps = [
    { n: "1", title: t("how.1.title"), body: t("how.1.body") },
    { n: "2", title: t("how.2.title"), body: t("how.2.body") },
    { n: "3", title: t("how.3.title"), body: t("how.3.body") },
  ];

  const modules = [
    {
      name: t("mod.1.name"),
      body: t("mod.1.body"),
      tags: [
        { label: t("mod.1.tag1"), tone: "blue" },
        { label: t("mod.1.tag2"), tone: "blue" },
      ],
    },
    {
      name: t("mod.2.name"),
      body: t("mod.2.body"),
      tags: [
        { label: t("mod.2.tag1"), tone: "teal" },
        { label: t("mod.2.tag2"), tone: "teal" },
      ],
    },
    {
      name: t("mod.3.name"),
      body: t("mod.3.body"),
      tags: [
        { label: t("mod.3.tag1"), tone: "amber" },
        { label: t("mod.3.tag2"), tone: "amber" },
      ],
    },
  ];

  const qualityIssues = [
    { label: t("dq.issue.1"), count: 49 },
    { label: t("dq.issue.2"), count: 18 },
    { label: t("dq.issue.3"), count: 12 },
    { label: t("dq.issue.4"), count: 7 },
  ];

  const aiClients = [
    "Claude — MCP",
    "ChatGPT — Connector",
    "Copilot — M365",
    "Gemini — API",
    "Azure OpenAI",
    "Local LLM — On-prem",
  ];

  const questions = [t("q.1"), t("q.2"), t("q.3")];

  const securityItems = [
    { title: t("sec.1.title"), body: t("sec.1.body") },
    { title: t("sec.2.title"), body: t("sec.2.body") },
    { title: t("sec.3.title"), body: t("sec.3.body") },
    { title: t("sec.4.title"), body: t("sec.4.body") },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="container-page pt-16 pb-20" id="urun">
        {/* Üst: başlık + açıklama + butonlar + badge'ler — ortalanmış, dar */}
        <div className="max-w-[680px] mx-auto flex flex-col items-center text-center">
          <SectionLabel>{t("hero.eyebrow")}</SectionLabel>
          <h1 className="font-serif-display text-[44px] md:text-5xl lg:text-[56px] leading-[1.05] tracking-tight">
            {t("hero.title.before")}
            <span className="text-accent-red">{t("hero.title.accent")}</span>
            {t("hero.title.after")}
          </h1>
          <p className="mt-5 max-w-[520px] text-[15px] md:text-base text-muted-foreground leading-relaxed">
            {t("hero.desc")}
          </p>
          <div className="mt-7 flex flex-wrap gap-3 justify-center">
            <CTAButton variant="primary" onClick={openModal}>{t("cta.demo")}</CTAButton>
            <CTAButton variant="outline" onClick={openModal}>{t("cta.pilot")}</CTAButton>
          </div>
          <div className="mt-7 flex flex-wrap gap-2 justify-center">
            {heroBadges.map((b) => (
              <span
                key={b}
                className="inline-flex items-center h-7 px-2.5 rounded-full bg-surface border border-border text-[11px] text-muted-foreground"
              >
                {b}
              </span>
            ))}
          </div>
        </div>

        {/* Alt: demo widget — geniş */}
        <div className="mt-14 max-w-[860px] mx-auto">
          <div className="rounded-2xl border border-border bg-background p-5 md:p-6 shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_40px_-30px_rgba(0,0,0,0.15)]">
            <div className="flex items-start justify-between pb-4 border-b border-border">
              <div>
                <div className="text-[13px] font-medium">{t("preview.workspace")}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{t("preview.subtitle")}</div>
              </div>
              <div className="text-right">
                <div className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{t("preview.dq")}</div>
                <div className="font-serif-display text-2xl leading-none mt-1 text-accent-red">87%</div>
              </div>
            </div>

            <div className="mt-4 space-y-2.5">
              {previewCards.map((c) => (
                <div key={c.title} className="rounded-lg border border-border bg-surface/60 p-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-[13px] font-medium">{c.title}</div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-background border border-border text-muted-foreground whitespace-nowrap">
                      {c.tag}
                    </span>
                  </div>
                  <p className="mt-1.5 text-[12.5px] text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-4 gap-2">
              {flowItems.map((f) => (
                <div
                  key={f}
                  className="text-center text-[10px] md:text-[11px] uppercase tracking-[0.12em] text-muted-foreground py-2 rounded-md bg-surface border border-border"
                >
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* SORUN */}
      <section className="container-page py-24">
        <H2>{t("problem.title")}</H2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{t("problem.desc")}</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div key={p.title} className="rounded-xl border border-border bg-surface p-6 h-full flex flex-col">
              <div className="text-base font-medium">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* NASIL ÇALIŞIR */}
      <section className="container-page py-24">
        <H2>{t("how.title")}</H2>
        <div className="mt-12 max-w-3xl">
          {steps.map((s, i) => (
            <div key={s.n}>
              <div className="flex gap-5 py-8">
                <div className="flex-shrink-0 w-9 h-9 rounded-full border border-border flex items-center justify-center text-sm font-medium">
                  {s.n}
                </div>
                <div>
                  <div className="text-lg font-medium">{s.title}</div>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              </div>
              {i < steps.length - 1 && <hr className="hr-soft" />}
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* MODÜLLER */}
      <section className="container-page py-24" id="moduller">
        <H2>{t("modules.title")}</H2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{t("modules.desc")}</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-border bg-background p-6 flex flex-col h-full min-h-[220px]"
            >
              <div className="flex flex-wrap gap-1.5">
                {m.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`inline-flex items-center h-6 px-2.5 rounded-full text-[11px] font-medium ${toneClass(tag.tone)}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-lg font-medium">{m.name}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VERİ KALİTESİ */}
      <section className="bg-surface-warm border-y border-border mt-24">
        <div className="container-page py-24">
          <H2>{t("dq.title")}</H2>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{t("dq.desc")}</p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 rounded-xl border border-border bg-background p-8 flex flex-col justify-between">
              <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                {t("dq.scoreLabel")}
              </div>
              <div className="mt-6">
                <div className="font-serif-display text-7xl md:text-8xl leading-none text-accent-red">
                  87%
                </div>
                <div className="mt-3 text-sm text-muted-foreground">{t("dq.scoreSub")}</div>
              </div>
            </div>

            <div className="md:col-span-3 rounded-xl border border-border bg-background p-2">
              <ul className="divide-y divide-border">
                {qualityIssues.map((q) => (
                  <li
                    key={q.label}
                    className="flex items-center justify-between px-4 py-4"
                  >
                    <span className="text-[15px]">{q.label}</span>
                    <span className="font-serif-display text-2xl text-accent-red">{q.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BRING YOUR OWN AI */}
      <section className="container-page py-24" id="ai-clients">
        <H2>{t("ai.title")}</H2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{t("ai.desc")}</p>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">{t("ai.desc2")}</p>
        <div className="mt-10 flex flex-wrap gap-2">
          {aiClients.map((c) => (
            <span
              key={c}
              className="inline-flex items-center h-9 px-4 rounded-full bg-surface border border-border text-sm text-foreground/80"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <Divider />

      {/* SAHA VERİNİZE SORU SORUN */}
      <section className="container-page py-24">
        <H2>{t("q.title")}</H2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{t("q.desc")}</p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {questions.map((q) => (
            <div key={q} className="rounded-xl border border-border bg-surface p-6 h-full flex">
              <p className="font-serif-display text-xl leading-snug">"{q}"</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* GÜVENLİK */}
      <section className="container-page py-24" id="guvenlik">
        <H2>{t("sec.title")}</H2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityItems.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-background p-6 h-full flex flex-col">
              <div className="text-base font-medium">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="container-page py-24">
        <div className="rounded-2xl border border-border bg-surface-warm p-10 md:p-16 text-center">
          <h2 className="font-serif-display text-4xl md:text-5xl tracking-tight leading-[1.05]">
            {t("final.title.before")}
            <span className="text-accent-red">{t("final.title.accent")}</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            {t("final.desc")}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <CTAButton variant="primary" onClick={openModal}>{t("cta.demo")}</CTAButton>
            <CTAButton variant="outline" onClick={openModal}>{t("cta.pilot")}</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
