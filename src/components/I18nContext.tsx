import { createContext, useContext, useState, ReactNode, useEffect } from "react";

export type Lang = "tr" | "en";

type Dict = Record<string, string>;

const tr: Dict = {
  "nav.product": "Ürün",
  "nav.modules": "Modüller",
  "nav.aiClients": "AI Clients",
  "nav.security": "Güvenlik",
  "cta.demo": "Demo Planla",
  "cta.pilot": "Pilot Başlat",

  "hero.eyebrow": "AI-ready saha verisi",
  "hero.title.before": "Sahadan gelen veriyi ",
  "hero.title.accent": "AI'ın kullanabileceği",
  "hero.title.after": " operasyon hafızasına dönüştürün.",
  "hero.desc":
    "WhatsApp mesajı, fotoğraf, sesli not — saha.team bunları yapılandırır ve şirketinizin izin verdiği AI ile sorgulanabilir hale getirir.",
  "hero.badge.1": "Veriniz sizde kalır",
  "hero.badge.2": "2–4 haftada pilot",
  "hero.badge.3": "",
  "hero.badge.4": "",

  "preview.workspace": "Demo Workspace",
  "preview.subtitle": "Field memory stream",
  "preview.dq": "Data Quality",
  "preview.card1.title": "Saha mesajı geldi",
  "preview.card1.tag": "WhatsApp",
  "preview.card1.body": "Kat görevlisi: Oda 304 klima yine soğutmuyor, fotoğraf ekledim.",
  "preview.card2.title": "Kayıt yapılandırıldı",
  "preview.card2.tag": "AI-ready",
  "preview.card2.body":
    "Lokasyon: Oda 304 · Konu: Klima arızası · Kanıt: Fotoğraf · Aksiyon: Teknik görev · Hafıza: Oda geçmişi",
  "preview.card3.title": "AI ile sorgulanabilir",
  "preview.card3.tag": "Claude / ChatGPT / Local",
  "preview.card3.body":
    "Son 6 ayda Oda 304'te tekrar eden teknik ve misafir şikâyetlerini göster.",
  "preview.flow.1": "Görev",
  "preview.flow.2": "Kanıt",
  "preview.flow.3": "Kapanış",
  "preview.flow.4": "Hafıza",

  "problem.title": "Asıl operasyon bilgisi ERP'de değil, sahada kalıyor.",
  "problem.desc":
    "Teknik arıza notları, vardiya kayıtları, müşteri talepleri — bunların büyük çoğunluğu WhatsApp'ta veya çalışanların zihninde. Düzenlenmemiş veri, AI tarafından kullanılamaz.",
  "problem.1.title": "Dağınık",
  "problem.1.body": "Görev, fotoğraf, form — hepsi ayrı kanallarda.",
  "problem.2.title": "Eksik",
  "problem.2.body": "Kapanışlarda sonuç, kanıt veya kök neden çoğu zaman yok.",
  "problem.3.title": "Denetlenemez",
  "problem.3.body": "Kim ne yaptı, hangi AI hangi veriye baktı — belirsiz.",
  "problem.4.title": "AI okuyamaz",
  "problem.4.body": "Kirli veri, yapay zekânın güvenilir kullanabileceği yapıda değil.",

  "how.title": "Dağınık veri girer. AI-ready hafıza çıkar.",
  "how.1.title": "Topla",
  "how.1.body":
    "Ekibiniz alışkanlıklarını değiştirmiyor. WhatsApp mesajı, mobil fotoğraf, sesli not, form — hepsi saha.team'e akar.",
  "how.2.title": "Yapılandır",
  "how.2.body":
    "Gelen veri otomatik olarak görev, lokasyon, kanıt, aksiyon ve ekipman hafızasına dönüşür. Örnek: \"Rulman değişti, ses düzeldi\" → işlem kaydı + parça + sonuç + ekipman geçmişi.",
  "how.3.title": "Sorgula",
  "how.3.body":
    "Şirketinizin izin verdiği AI ile saha verilerinize soru sorabilirsiniz. ChatGPT, Claude, Copilot, Gemini veya kendi modeliniz — seçim sizin.",

  "modules.title": "Tek platformdan başlayın, ihtiyaca göre genişleyin.",
  "modules.desc":
    "İlk pilot için bir ekip ve bir modül seçin. Sistem aynı; şablonlar farklı.",
  "mod.1.name": "ToolA Bakım",
  "mod.1.body":
    "Teknik servis ve tesis ekipleri için. Arıza kaydı, parça takibi, ekipman geçmişi ve kapanış.",
  "mod.1.tag1": "Arıza",
  "mod.1.tag2": "Ekipman",
  "mod.2.name": "saha.team Denetim",
  "mod.2.body":
    "Kalite, HSE ve raf kontrol ekipleri için. Kontrol listesi, fotoğraf kanıtı, uygunsuzluk ve aksiyon.",
  "mod.2.tag1": "HSE",
  "mod.2.tag2": "Kalite",
  "mod.3.name": "saha.team Operasyon",
  "mod.3.body":
    "Konaklama, perakende, F&B ve lojistik gibi lokasyon bazlı ekipler için. Görev, vardiya, lokasyon ve misafir/müşteri talebi.",
  "mod.3.tag1": "Vardiya",
  "mod.3.tag2": "Lokasyon",

  "dq.title": "AI'dan önce saha verinizin kalitesini görün.",
  "dq.desc":
    "Çoğu sistem sadece veri toplar. saha.team eksik, belirsiz veya kanıtsız saha kayıtlarını tespit eder ve veriyi AI'ın gerçekten kullanabileceği kaliteye getirir.",
  "dq.scoreLabel": "Veri Kalitesi Skoru",
  "dq.scoreSub": "AI-ready kayıt kalitesi",
  "dq.issue.1": "Eksik kök nedenler",
  "dq.issue.2": "Kanıtsız kapanan işler",
  "dq.issue.3": "Ekipmana bağlanmamış fotoğraflar",
  "dq.issue.4": "Belirsiz lokasyonlar",

  "ai.title": "Hangi AI'ı kullanacağınızı siz seçin.",
  "ai.desc":
    "saha.team kendi modelini dayatmaz. Verinizi düzenler ve şirketinizin izin verdiği modele güvenli şekilde açar.",
  "ai.desc2":
    "Mobil uygulamadaki saha ekipleri de yalnızca şirketinizin izin verdiği AI ile çalışır.",

  "q.title": "Yöneticiler ve ekip liderleri anında cevap alır.",
  "q.desc":
    "Rol bazlı erişimle, herkes yalnızca kendi verisine ulaşır. Her yanıt kaynağını gösterir.",
  "q.1": "Son 30 günde en çok tekrar eden saha problemi ve nedeni ne?",
  "q.2": "Bu ekipmanda daha önce hangi parça değiştirilmiş?",
  "q.3": "Hangi işler kanıtsız veya eksik kapanmış?",

  "sec.title": "Veri kontrolünüz hiç elinizden çıkmaz.",
  "sec.1.title": "Rol bazlı erişim",
  "sec.1.body": "Kullanıcı, ekip ve lokasyon bazında yetkilendirme.",
  "sec.2.title": "AI erişim kontrolü",
  "sec.2.body": "Hangi modelin hangi veriye bakacağını siz yönetirsiniz.",
  "sec.3.title": "Kaynaklı cevaplar",
  "sec.3.body": "Her yanıt, dayandığı kayıt veya fotoğrafı gösterir.",
  "sec.4.title": "On-prem / yerel kurulum",
  "sec.4.body": "Veri dışarı çıkmasın isteyenler için yerel model desteği.",

  "final.title.before": "Tek ekip, tek modül, ",
  "final.title.accent": "2–4 hafta.",
  "final.desc":
    "Küçük başlayın. Bir saha akışınızı AI-ready hafızaya dönüştürelim. Sistemin işe yaradığını gördükten sonra genişlersiniz.",

  "footer.address.l1": "Teknopark İstanbul",
  "footer.address.l2": "Pendik, İstanbul",
  "footer.copy": "© 2026 saha.team",

  "modal.eyebrow": "2–4 haftalık pilot",
  "modal.title": "Pilotunuzu başlatın",
  "modal.subtitle": "24 saat içinde size dönüş yapacağız.",
  "modal.name": "Ad Soyad",
  "modal.name.ph": "Ahmet Yılmaz",
  "modal.company": "Şirket",
  "modal.company.ph": "Şirket adı",
  "modal.phone": "Telefon",
  "modal.phone.ph": "+90 5xx xxx xx xx",
  "modal.email": "E-posta",
  "modal.email.ph": "email@sirket.com",
  "modal.submit": "Pilot Talebi Gönder →",
  "modal.submitting": "Gönderiliyor...",
  "modal.close": "Kapat",
  "modal.success.title": "Pilot talebiniz alındı",
  "modal.success.desc": "24 saat içinde size dönüş yapacağız.",
  "modal.err.name": "Ad soyad gerekli",
  "modal.err.nameMax": "Ad soyad en fazla 100 karakter olabilir",
  "modal.err.company": "Şirket adı gerekli",
  "modal.err.companyMax": "Şirket adı en fazla 120 karakter olabilir",
  "modal.err.phone": "Telefon gerekli",
  "modal.err.phoneMax": "Telefon en fazla 30 karakter olabilir",
  "modal.err.phoneFormat": "Geçerli bir telefon girin",
  "modal.err.email": "Geçerli bir e-posta girin",
  "modal.err.emailMax": "E-posta en fazla 255 karakter olabilir",
  "modal.err.submit": "Gönderim başarısız",
  "modal.err.submitDesc": "Lütfen tekrar deneyin veya info@toola.net adresine yazın.",
};

const en: Dict = {
  "nav.product": "Product",
  "nav.modules": "Modules",
  "nav.aiClients": "AI Clients",
  "nav.security": "Security",
  "cta.demo": "Book a Demo",
  "cta.pilot": "Start Pilot",

  "hero.eyebrow": "AI-ready field data",
  "hero.title.before": "Turn field data into ",
  "hero.title.accent": "AI-ready",
  "hero.title.after": " operations memory.",
  "hero.desc":
    "WhatsApp, photos, voice notes — structured and queryable by the AI your company has approved.",
  "hero.badge.1": "Your data stays with you",
  "hero.badge.2": "Pilot in 2–4 weeks",
  "hero.badge.3": "",
  "hero.badge.4": "",

  "preview.workspace": "Demo Workspace",
  "preview.subtitle": "Field memory stream",
  "preview.dq": "Data Quality",
  "preview.card1.title": "Field message received",
  "preview.card1.tag": "WhatsApp",
  "preview.card1.body":
    "Housekeeping: Room 304 AC isn't cooling again, attached a photo.",
  "preview.card2.title": "Record structured",
  "preview.card2.tag": "AI-ready",
  "preview.card2.body":
    "Location: Room 304 · Topic: AC fault · Evidence: Photo · Action: Tech task · Memory: Room history",
  "preview.card3.title": "Queryable by AI",
  "preview.card3.tag": "Claude / ChatGPT / Local",
  "preview.card3.body":
    "Show recurring technical and guest complaints in Room 304 over the last 6 months.",
  "preview.flow.1": "Task",
  "preview.flow.2": "Evidence",
  "preview.flow.3": "Closure",
  "preview.flow.4": "Memory",

  "problem.title": "The real ops knowledge isn't in the ERP — it's in the field.",
  "problem.desc":
    "Technical fault notes, shift records, customer requests — most of them live in WhatsApp or in people's heads. Unstructured data can't be used by AI.",
  "problem.1.title": "Scattered",
  "problem.1.body": "Tasks, photos, forms — all in separate channels.",
  "problem.2.title": "Incomplete",
  "problem.2.body": "Closures often lack outcome, evidence or root cause.",
  "problem.3.title": "Unauditable",
  "problem.3.body": "Who did what, which AI saw which data — unclear.",
  "problem.4.title": "AI can't read it",
  "problem.4.body": "Dirty data isn't in a shape AI can reliably use.",

  "how.title": "Messy data in. AI-ready memory out.",
  "how.1.title": "Capture",
  "how.1.body":
    "Your team doesn't change habits. WhatsApp messages, mobile photos, voice notes, forms — all flow into saha.team.",
  "how.2.title": "Structure",
  "how.2.body":
    "Incoming data is automatically turned into tasks, locations, evidence, actions and equipment memory. Example: \"Bearing replaced, noise gone\" → work record + part + outcome + equipment history.",
  "how.3.title": "Query",
  "how.3.body":
    "Ask questions to your field data using whichever AI your company allows. ChatGPT, Claude, Copilot, Gemini or your own model — your choice.",

  "modules.title": "Start on one platform, expand as you need.",
  "modules.desc":
    "For your first pilot, pick one team and one module. Same system; different templates.",
  "mod.1.name": "ToolA Maintenance",
  "mod.1.body":
    "For technical service and facility teams. Fault tickets, part tracking, equipment history and closure.",
  "mod.1.tag1": "Faults",
  "mod.1.tag2": "Equipment",
  "mod.2.name": "saha.team Audit",
  "mod.2.body":
    "For quality, HSE and shelf control teams. Checklists, photo evidence, non-conformities and actions.",
  "mod.2.tag1": "HSE",
  "mod.2.tag2": "Quality",
  "mod.3.name": "saha.team Operations",
  "mod.3.body":
    "For location-based teams in hospitality, retail, F&B and logistics. Tasks, shifts, locations and guest/customer requests.",
  "mod.3.tag1": "Shift",
  "mod.3.tag2": "Location",

  "dq.title": "See the quality of your field data before AI does.",
  "dq.desc":
    "Most systems just collect data. saha.team detects incomplete, ambiguous or unverified field records and brings the data to a quality level AI can actually use.",
  "dq.scoreLabel": "Data Quality Score",
  "dq.scoreSub": "AI-ready record quality",
  "dq.issue.1": "Missing root causes",
  "dq.issue.2": "Closures without evidence",
  "dq.issue.3": "Photos not linked to equipment",
  "dq.issue.4": "Ambiguous locations",

  "ai.title": "You choose which AI to use.",
  "ai.desc":
    "saha.team doesn't impose a model. It structures your data and securely opens it to whichever model your company permits.",
  "ai.desc2":
    "Field teams on the mobile app also only work with the AI your company has approved.",

  "q.title": "Managers and team leads get instant answers.",
  "q.desc":
    "With role-based access, everyone only reaches their own data. Every answer cites its source.",
  "q.1": "What's the most recurring field issue in the last 30 days and why?",
  "q.2": "Which parts have been replaced on this equipment before?",
  "q.3": "Which jobs were closed without evidence or incomplete?",

  "sec.title": "You never lose control of your data.",
  "sec.1.title": "Role-based access",
  "sec.1.body": "Permissions per user, team and location.",
  "sec.2.title": "AI access control",
  "sec.2.body": "You decide which model can see which data.",
  "sec.3.title": "Sourced answers",
  "sec.3.body": "Every reply shows the record or photo it relies on.",
  "sec.4.title": "On-prem / local deployment",
  "sec.4.body": "Local model support for those who don't want data to leave.",

  "final.title.before": "One team, one module, ",
  "final.title.accent": "2–4 weeks.",
  "final.desc":
    "Start small. Let's turn one of your field flows into AI-ready memory. Once you see it works, you expand.",

  "footer.address.l1": "Teknopark İstanbul",
  "footer.address.l2": "Pendik, İstanbul",
  "footer.copy": "© 2026 saha.team",

  "modal.eyebrow": "2–4 week pilot",
  "modal.title": "Start your pilot",
  "modal.subtitle": "We'll get back to you within 24 hours.",
  "modal.name": "Full Name",
  "modal.name.ph": "Jane Doe",
  "modal.company": "Company",
  "modal.company.ph": "Company name",
  "modal.phone": "Phone",
  "modal.phone.ph": "+1 555 555 5555",
  "modal.email": "Email",
  "modal.email.ph": "email@company.com",
  "modal.submit": "Send Pilot Request →",
  "modal.submitting": "Sending...",
  "modal.close": "Close",
  "modal.success.title": "Pilot request received",
  "modal.success.desc": "We'll get back to you within 24 hours.",
  "modal.err.name": "Full name is required",
  "modal.err.nameMax": "Full name must be at most 100 characters",
  "modal.err.company": "Company name is required",
  "modal.err.companyMax": "Company name must be at most 120 characters",
  "modal.err.phone": "Phone is required",
  "modal.err.phoneMax": "Phone must be at most 30 characters",
  "modal.err.phoneFormat": "Enter a valid phone number",
  "modal.err.email": "Enter a valid email",
  "modal.err.emailMax": "Email must be at most 255 characters",
  "modal.err.submit": "Submission failed",
  "modal.err.submitDesc": "Please try again or reach us at info@toola.net.",
};

const dictionaries: Record<Lang, Dict> = { tr, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (typeof window === "undefined") return "tr";
    const saved = window.localStorage.getItem("saha.lang");
    return saved === "en" || saved === "tr" ? saved : "tr";
  });

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("saha.lang", l);
    } catch {
      // ignore
    }
  };

  const t = (key: string) => dictionaries[lang][key] ?? key;

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
