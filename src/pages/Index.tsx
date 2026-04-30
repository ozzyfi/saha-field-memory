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

const problems = [
  { title: "Dağınık", body: "Görev, fotoğraf, form — hepsi ayrı kanallarda." },
  { title: "Eksik", body: "Kapanışlarda sonuç, kanıt veya kök neden çoğu zaman yok." },
  { title: "Denetlenemez", body: "Kim ne yaptı, hangi AI hangi veriye baktı — belirsiz." },
  { title: "AI okuyamaz", body: "Kirli veri, yapay zekanın güvenilir kullanabileceği yapıda değil." },
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
    body: "Gelen veri otomatik olarak görev, lokasyon, kanıt, aksiyon ve ekipman hafızasına dönüşür. Örnek: 'Rulman değişti, ses düzeldi' → işlem kaydı + parça + sonuç + ekipman geçmişi.",
  },
  {
    n: "3",
    title: "Sorgula",
    body: "Şirketinizin izin verdiği AI ile saha verilerinize soru sorabilirsiniz. ChatGPT, Claude, Copilot, Gemini veya kendi modeliniz — seçim sizin.",
  },
];

const modules = [
  {
    name: "Bakım",
    body: "Teknik servis ve tesis ekipleri için. Arıza kaydı, parça takibi, ekipman geçmişi ve kapanış.",
    tags: [
      { label: "Arıza", tone: "blue" },
      { label: "Ekipman", tone: "blue" },
    ],
  },
  {
    name: "Denetim",
    body: "Kalite, HSE ve raf kontrol ekipleri için. Kontrol listesi, fotoğraf kanıtı, uygunsuzluk ve aksiyon.",
    tags: [
      { label: "HSE", tone: "teal" },
      { label: "Kalite", tone: "teal" },
    ],
  },
  {
    name: "Operasyon",
    body: "Konaklama, perakende, F&B ve lojistik ekipleri için. Görev, vardiya, lokasyon ve misafir talebi.",
    tags: [
      { label: "Vardiya", tone: "amber" },
      { label: "Lokasyon", tone: "amber" },
    ],
  },
] as const;

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

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="container-page pt-20 pb-24" id="urun">
        <div className="max-w-3xl">
          <SectionLabel>AI-ready saha operasyonu</SectionLabel>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] leading-[1.1] font-medium tracking-tight">
            Sahadan gelen veriyi AI'ın kullanabileceği hafızaya dönüştürün.
          </h1>
          <p className="mt-6 max-w-[560px] text-base md:text-lg text-muted-foreground leading-relaxed">
            WhatsApp mesajları, fotoğraflar, sesli notlar ve formlar artık kaybolmuyor.
            saha.team bunları düzenli kayıtlara çevirir; siz de şirketinizin AI'ıyla
            bu veriye anında soru sorabilirsiniz.
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
      </section>

      <Divider />

      {/* SORUN */}
      <section className="container-page py-24">
        <SectionLabel>Sorun</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-3xl leading-[1.15]">
          Asıl operasyon bilgisi ERP'de değil, sahada kalıyor.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Teknik arıza notları, vardiya kayıtları, müşteri talepleri — bunların büyük
          çoğunluğu WhatsApp'ta veya çalışanların zihninde. Düzenlenmemiş veri, AI
          tarafından kullanılamaz.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {problems.map((p) => (
            <div key={p.title} className="rounded-xl bg-surface p-6">
              <div className="text-base font-medium">{p.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* NASIL ÇALIŞIR */}
      <section className="container-page py-24">
        <SectionLabel>Nasıl çalışır</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-3xl leading-[1.15]">
          Dağınık veri girer. AI-ready hafıza çıkar.
        </h2>
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
        <SectionLabel>Modüller</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-3xl leading-[1.15]">
          Tek platformdan başlayın, ihtiyaca göre genişleyin.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          İlk pilot için bir ekip ve bir modül seçin. Sistem aynı; şablonlar farklı.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {modules.map((m) => (
            <div
              key={m.name}
              className="rounded-xl border border-border bg-background p-6 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="text-lg font-medium">{m.name}</div>
                <div className="flex flex-wrap gap-1.5 justify-end">
                  {m.tags.map((t) => (
                    <span
                      key={t.label}
                      className={`inline-flex items-center h-6 px-2.5 rounded-full text-[11px] font-medium ${toneClass(t.tone)}`}
                    >
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* BRING YOUR OWN AI */}
      <section className="container-page py-24" id="ai-clients">
        <SectionLabel>Bring your own AI</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-3xl leading-[1.15]">
          Hangi AI'ı kullanacağınızı siz seçin.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          saha.team kendi modelini dayatmaz. Verinizi düzenler ve şirketinizin izin
          verdiği modele güvenli şekilde açar.
        </p>
        <div className="mt-10 flex flex-wrap gap-2">
          {aiClients.map((c) => (
            <span
              key={c}
              className="inline-flex items-center h-9 px-4 rounded-full bg-surface text-sm text-foreground/80"
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      <Divider />

      {/* SAHA VERİNİZE SORU SORUN */}
      <section className="container-page py-24">
        <SectionLabel>Saha verinize soru sorun</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-3xl leading-[1.15]">
          Yöneticiler ve ekip liderleri anında cevap alır.
        </h2>
        <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">
          Rol bazlı erişimle, herkes yalnızca kendi verisine ulaşır. Her yanıt
          kaynağını gösterir.
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {questions.map((q) => (
            <div key={q} className="rounded-lg bg-surface p-6">
              <p className="text-[15px] leading-relaxed">"{q}"</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* GÜVENLİK */}
      <section className="container-page py-24" id="guvenlik">
        <SectionLabel>Güvenlik ve kontrol</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight max-w-3xl leading-[1.15]">
          Veri kontrolünüz hiç elinizden çıkmaz.
        </h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {securityItems.map((s) => (
            <div key={s.title} className="rounded-xl border border-border bg-background p-6">
              <div className="text-base font-medium">{s.title}</div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="container-page py-24">
        <div className="rounded-2xl border border-border p-10 md:p-14 text-center">
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight leading-[1.15]">
            Tek ekip, tek modül, 2–4 hafta.
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
