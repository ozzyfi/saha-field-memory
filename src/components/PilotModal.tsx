import { useEffect, useState } from "react";
import { z } from "zod";
import { usePilotModal } from "./PilotModalContext";
import { toast } from "@/hooks/use-toast";

const pilotSchema = z.object({
  name: z
    .string()
    .trim()
    .nonempty({ message: "Ad soyad gerekli" })
    .max(100, { message: "Ad soyad en fazla 100 karakter olabilir" }),
  company: z
    .string()
    .trim()
    .nonempty({ message: "Şirket adı gerekli" })
    .max(120, { message: "Şirket adı en fazla 120 karakter olabilir" }),
  phone: z
    .string()
    .trim()
    .nonempty({ message: "Telefon gerekli" })
    .max(30, { message: "Telefon en fazla 30 karakter olabilir" })
    .regex(/^[0-9+\s().-]+$/, { message: "Geçerli bir telefon girin" }),
  email: z
    .string()
    .trim()
    .email({ message: "Geçerli bir e-posta girin" })
    .max(255, { message: "E-posta en fazla 255 karakter olabilir" }),
});

type FormState = z.infer<typeof pilotSchema>;
type Errors = Partial<Record<keyof FormState, string>>;

const initial: FormState = { name: "", company: "", phone: "", email: "" };

export const PilotModal = () => {
  const { open, closeModal } = usePilotModal();
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, closeModal]);

  if (!open) return null;

  const update = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = pilotSchema.safeParse(form);
    if (!parsed.success) {
      const fieldErrors: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormState;
        if (!fieldErrors[k]) fieldErrors[k] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Pilot talebiniz alındı",
        description: "24 saat içinde size dönüş yapacağız.",
      });
      setForm(initial);
      setErrors({});
      closeModal();
    }, 400);
  };

  const inputCls =
    "w-full h-11 px-3.5 rounded-md border border-border bg-background text-[15px] placeholder:text-muted-foreground/70 focus:outline-none focus:border-foreground transition-colors";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/30 backdrop-blur-sm"
      onClick={closeModal}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pilot-modal-title"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-border bg-background p-7 md:p-8 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.25)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={closeModal}
          aria-label="Kapat"
          className="absolute top-4 right-4 w-8 h-8 inline-flex items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-surface transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center gap-2.5 text-accent-red">
          <span className="block w-6 h-px bg-accent-red" />
          <span className="text-[11px] font-medium uppercase tracking-[0.16em]">
            2–4 haftalık pilot
          </span>
        </div>

        <h2 id="pilot-modal-title" className="mt-3 font-serif-display text-3xl tracking-tight leading-tight">
          Pilotunuzu başlatın
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          24 saat içinde size dönüş yapacağız.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4" noValidate>
          <div>
            <label htmlFor="pilot-name" className="block text-sm font-medium mb-1.5">
              Ad Soyad
            </label>
            <input
              id="pilot-name"
              type="text"
              value={form.name}
              onChange={update("name")}
              placeholder="Ahmet Yılmaz"
              maxLength={100}
              autoComplete="name"
              className={inputCls}
            />
            {errors.name && <p className="mt-1 text-xs text-accent-red">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="pilot-company" className="block text-sm font-medium mb-1.5">
              Şirket
            </label>
            <input
              id="pilot-company"
              type="text"
              value={form.company}
              onChange={update("company")}
              placeholder="Şirket adı"
              maxLength={120}
              autoComplete="organization"
              className={inputCls}
            />
            {errors.company && <p className="mt-1 text-xs text-accent-red">{errors.company}</p>}
          </div>

          <div>
            <label htmlFor="pilot-phone" className="block text-sm font-medium mb-1.5">
              Telefon
            </label>
            <input
              id="pilot-phone"
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              placeholder="+90 5xx xxx xx xx"
              maxLength={30}
              autoComplete="tel"
              className={inputCls}
            />
            {errors.phone && <p className="mt-1 text-xs text-accent-red">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="pilot-email" className="block text-sm font-medium mb-1.5">
              E-posta
            </label>
            <input
              id="pilot-email"
              type="email"
              value={form.email}
              onChange={update("email")}
              placeholder="email@sirket.com"
              maxLength={255}
              autoComplete="email"
              className={inputCls}
            />
            {errors.email && <p className="mt-1 text-xs text-accent-red">{errors.email}</p>}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full inline-flex items-center justify-center h-12 mt-2 rounded-md bg-accent-red text-accent-red-foreground text-[15px] font-medium hover:bg-accent-red/90 transition-colors disabled:opacity-60"
          >
            {submitting ? "Gönderiliyor..." : "Pilot Talebi Gönder →"}
          </button>
        </form>
      </div>
    </div>
  );
};
