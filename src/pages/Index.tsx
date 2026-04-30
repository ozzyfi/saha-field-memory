import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CTAButton } from "@/components/CTAButton";
import { SectionLabel } from "@/components/SectionLabel";

const heroBadges = [
  "Veriniz sizde kalır",
  "Kendi AI'ınızı getirin",
  "WhatsApp + mobil + form",
  "2–4 haftada pilot",
];

const previewCards = [
  {
    title: "Saha mesajı geldi",
    tag: "WhatsApp",
    body: "Kat görevlisi: Oda 304 klima yine soğutmuyor, fotoğraf ekledim.",
  },
  {
    title: "Kayıt yapılandırıldı",
    tag: "AI-ready",
    body: "Lokasyon: Oda 304 · Konu: Klima arızası · Kanıt: Fotoğraf · Aksiyon: Teknik görev · Hafıza: Oda geçmişi",
  },
  {
    title: "AI ile sorgulanabilir",
    tag: "Claude / ChatGPT / Local",
    body: "Son 6 ayda Oda 304'te tekrar eden teknik ve misafir şikâyetlerini göster.",
  },
];

const flowItems = ["Görev", "Kanıt", "Kapanış", "Hafıza"];

const problems = [
  { title: "Dağınık", body: "Görev, fotoğraf, form — hepsi ayrı kanallarda." },
  { title: "Eksik", body: "Kapanışlarda sonuç, kanıt veya kök neden çoğu zaman yok." },
  { title: "Denetlenemez", body: "Kim ne yaptı, hangi AI hangi veriye baktı — belirsiz." },
  { title: "AI okuyamaz", body: "Kirli veri, yapay zekânın güvenilir kullanabileceği yapıda değil." },
];

const steps = [
  {
    n: "1",
    title: "Topla",
    body: "Ekibiniz alışkanlıklarını değiştirmiyor. WhatsApp mesajı, mobil fotoğraf, sesli not, form — hepsi saha.team'e akar.",
  },
  {
    n: "2",
    title: "Yapılandır",
    body: "Gelen veri otomatik olarak görev, lokasyon, kanıt, aksiyon ve ekipman hafızasına dönüşür. Örnek: \"Rulman değişti, ses düzeldi\" → işlem kaydı + parça + sonuç + ekipman geçmişi.",
  },
  {
    n: "3",
    title: "Sorgula",
    body: "Şirketinizin izin verdiği AI ile saha verilerinize soru sorabilirsiniz. ChatGPT, Claude, Copilot, Gemini veya kendi modeliniz — seçim sizin.",
  },
];

const modules = [
  {
    name: "ToolA Bakım",
    body: "Teknik servis ve tesis ekipleri için. Arıza kaydı, parça takibi, ekipman geçmişi ve kapanış.",
    tags: [
      { label: "Arıza", tone: "blue" },
      { label: "Ekipman", tone: "blue" },
    ],
  },
  {
    name: "saha.team Denetim",
    body: "Kalite, HSE ve raf kontrol ekipleri için. Kontrol listesi, fotoğraf kanıtı, uygunsuzluk ve aksiyon.",
    tags: [
      { label: "HSE", tone: "teal" },
      { label: "Kalite", tone: "teal" },
    ],
  },
  {
    name: "saha.team Operasyon",
    body: "Konaklama, perakende, F&B ve lojistik ekipleri için. Görev, vardiya, lokasyon ve misafir talebi.",
    tags: [
      { label: "Vardiya", tone: "amber" },
      { label: "Lokasyon", tone: "amber" },
    ],
  },
] as const;

const qualityIssues = [
  { label: "Eksik kök nedenler", count: 49 },
  { label: "Kanıtsız kapanan işler", count: 18 },
  { label: "Ekipmana bağlanmamış fotoğraflar", count: 12 },
  { label: "Belirsiz lokasyonlar", count: 7 },
];

const aiClients = [
  "Claude — MCP",
  "ChatGPT — Connector",
  "Copilot — M365",
  "Gemini — API",
  "Azure OpenAI",
  "Local LLM — On-prem",
];

const questions = [
  "Son 30 günde en çok tekrar eden saha problemi ne?",
  "Bu ekipmanda daha önce hangi parça değiştirilmiş?",
  "Hangi işler kanıtsız veya eksik kapanmış?",
];

const securityItems = [
  { title: "Rol bazlı erişim", body: "Kullanıcı, ekip ve lokasyon bazında yetkilendirme." },
  { title: "AI client kontrolü", body: "Hangi modelin hangi veriye bakacağını siz yönetirsiniz." },
  { title: "Kaynaklı cevaplar", body: "Her yanıt, dayandığı kayıt veya fotoğrafı gösterir." },
  { title: "On-prem seçeneği", body: "Veri dışarı çıkmasın isteyenler için yerel model desteği." },
];

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="container-page pt-16 pb-20" id="urun">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-6">
            <SectionLabel>AI-ready saha operasyonu</SectionLabel>
            <h1 className="font-serif-display text-5xl md:text-6xl lg:text-[64px] leading-[1.02] tracking-tight">
              Sahadan gelen veriyi <span className="text-accent-red">AI'ın kullanabileceği</span> operasyon hafızasına dönüştürün.
            </h1>
            <p className="mt-6 max-w-[540px] text-base md:text-[17px] text-muted-foreground leading-relaxed">
              WhatsApp mesajları, fotoğraflar, sesli notlar ve formlar artık kaybolmuyor.
              saha.team bunları görev, kanıt, aksiyon ve kapanış kayıtlarına çevirir; siz de
              şirketinizin AI'ıyla bu veriye anında soru sorabilirsiniz.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CTAButton variant="primary">Demo Planla</CTAButton>
              <CTAButton variant="outline">Pilot Başlat</CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {heroBadges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center h-8 px-3 rounded-full bg-surface border border-border text-xs text-muted-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* HERO PREVIEW CARD */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-border bg-background p-5 md:p-6 shadow-[0_1px_0_rgba(0,0,0,0.02),0_20px_40px_-30px_rgba(0,0,0,0.15)]">
              <div className="flex items-start justify-between pb-4 border-b border-border">
                <div>
                  <div className="text-[13px] font-medium">Rixos Workspace</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Field memory stream</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-[0.12em] text-muted-foreground">Data Quality</div>
                  <div className="font-serif-display text-2xl leading-none mt-1 text-accent-red">87%</div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
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

              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-2">
                {flowItems.map((f) => (
                  <div
                    key={f}
                    className="text-center text-[11px] uppercase tracking-[0.12em] text-muted-foreground py-2 rounded-md bg-surface border border-border"
                  >
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* SORUN */}
      <section className="container-page py-24">
        <H2>Asıl operasyon bilgisi ERP'de değil, sahada kalıyor.</H2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Teknik arıza notları, vardiya kayıtları, müşteri talepleri — bunların büyük
          çoğunluğu WhatsApp'ta veya çalışanların zihninde. Düzenlenmemiş veri, AI
          tarafından kullanılamaz.
        </p>
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
        <H2>Dağınık veri girer. AI-ready hafıza çıkar.</H2>
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
        <H2>Tek platformdan başlayın, ihtiyaca göre genişleyin.</H2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          İlk pilot için bir ekip ve bir modül seçin. Sistem aynı; şablonlar farklı.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-border bg-background p-6 flex flex-col h-full min-h-[220px]"
            >
              <div className="flex flex-wrap gap-1.5">
                {m.tags.map((t) => (
                  <span
                    key={t.label}
                    className={`inline-flex items-center h-6 px-2.5 rounded-full text-[11px] font-medium ${toneClass(t.tone)}`}
                  >
                    {t.label}
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
          <H2>AI'dan önce saha verinizin kalitesini görün.</H2>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
            Çoğu sistem sadece veri toplar. saha.team eksik, belirsiz veya kanıtsız saha
            kayıtlarını tespit eder ve veriyi AI'ın gerçekten kullanabileceği kaliteye
            getirir.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="md:col-span-2 rounded-xl border border-border bg-background p-8 flex flex-col justify-between">
              <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
                Veri Kalitesi Skoru
              </div>
              <div className="mt-6">
                <div className="font-serif-display text-7xl md:text-8xl leading-none text-accent-red">
                  87%
                </div>
                <div className="mt-3 text-sm text-muted-foreground">AI-ready kayıt kalitesi</div>
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
        <H2>Hangi AI'ı kullanacağınızı siz seçin.</H2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          saha.team kendi modelini dayatmaz. Verinizi düzenler ve şirketinizin izin
          verdiği modele güvenli şekilde açar.
        </p>
        <p className="mt-3 max-w-2xl text-sm text-muted-foreground leading-relaxed">
          Mobil uygulamadaki saha ekipleri de yalnızca şirketinizin izin verdiği AI ile
          çalışır.
        </p>
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
        <H2>Yöneticiler ve ekip liderleri anında cevap alır.</H2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Rol bazlı erişimle, herkes yalnızca kendi verisine ulaşır. Her yanıt kaynağını
          gösterir.
        </p>
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
        <H2>Veri kontrolünüz hiç elinizden çıkmaz.</H2>
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
            Tek ekip, tek modül, <span className="text-accent-red">2–4 hafta.</span>
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Küçük başlayın. Bir saha akışınızı AI-ready hafızaya dönüştürelim. Sistemin
            işe yaradığını gördükten sonra genişlersiniz.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <CTAButton variant="primary">Demo Planla</CTAButton>
            <CTAButton variant="outline">Pilot Başlat</CTAButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
