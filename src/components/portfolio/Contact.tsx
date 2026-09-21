import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send, TriangleAlert } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { contact } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldKey = "name" | "email" | "subject" | "message";
type FormState = Record<FieldKey, string>;
type Errors = Partial<Record<FieldKey, string>>;

const initialForm: FormState = { name: "", email: "", subject: "", message: "" };

const LIMITS: Record<FieldKey, number> = { name: 100, email: 255, subject: 150, message: 2000 };

const FIELD_LABELS: Record<FieldKey, string> = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

function validate(form: FormState): Errors {
  const errors: Errors = {};
  (Object.keys(form) as FieldKey[]).forEach((key) => {
    const value = form[key].trim();
    if (!value) errors[key] = `${FIELD_LABELS[key]} is required.`;
    else if (value.length > LIMITS[key])
      errors[key] = `${FIELD_LABELS[key]} must be under ${LIMITS[key]} characters.`;
  });
  if (!errors.email && form.email.trim() && !EMAIL_RE.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  return errors;
}

const inputClass =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/40";

const EMAILJS_CONFIG = {
  serviceId: "service_vgml2vn",
  templateId: "hm45j4t",
  publicKey: "5NWOi79Kq4YFjZhqb",
};

async function sendEmailNotification(values: FormState) {
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_CONFIG.serviceId,
      template_id: EMAILJS_CONFIG.templateId,
      user_id: EMAILJS_CONFIG.publicKey,
      template_params: {
        name: values.name.trim(),
        from_name: values.name.trim(),
        email: values.email.trim(),
        from_email: values.email.trim(),
        reply_to: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      },
    }),
  });
  if (!response.ok) throw new Error(`EmailJS failed: ${await response.text()}`);
}

export function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const set = (key: FieldKey) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.values(nextErrors).some(Boolean)) return;

    setStatus("sending");
    try {
      await sendEmailNotification(form);

      // Keep a backup copy of the message in the database.
      const { error } = await supabase.from("contact_messages").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim(),
        message: form.message.trim(),
      });
      if (error) console.warn("Database backup save failed:", error.message);

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Submission failed:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Together"
          description="Have a website idea, need a responsive frontend, or want to redesign your existing website? I'd love to hear about your project."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="space-y-4">
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                   className="group flex items-center gap-4 rounded-md border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Mail size={19} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Email
                    </span>
                    <span className="block truncate text-sm font-semibold group-hover:text-accent">
                      {contact.email}
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contact.phone}`}
                   className="group flex items-center gap-4 rounded-md border border-border bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                    <Phone size={19} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Phone
                    </span>
                    <span className="block text-sm font-semibold group-hover:text-accent">
                      {contact.phone}
                    </span>
                  </span>
                </a>
              </li>
               <li className="flex items-center gap-4 rounded-md border border-border bg-card p-5 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent">
                  <MapPin size={19} />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-widest text-muted-foreground">
                    Location
                  </span>
                  <span className="block text-sm font-semibold">{contact.location}</span>
                </span>
              </li>
            </ul>
            <p className="text-sm leading-relaxed text-muted-foreground">
              I usually reply within a day. Whether it's a small landing page or a full redesign,
              feel free to reach out.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <form
              onSubmit={handleSubmit}
              noValidate
               className="rounded-md border border-border bg-card p-6 shadow-soft sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.name}
                    onChange={set("name")}
                    maxLength={LIMITS.name}
                    placeholder="Your name"
                    aria-invalid={Boolean(errors.name)}
                    className={inputClass}
                  />
                  {errors.name ? <p className="mt-1.5 text-xs text-destructive">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    maxLength={LIMITS.email}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className={inputClass}
                  />
                  {errors.email ? (
                    <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
                  ) : null}
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="contact-subject" className="mb-1.5 block text-sm font-medium">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={form.subject}
                  onChange={set("subject")}
                  maxLength={LIMITS.subject}
                  placeholder="What's your project about?"
                  aria-invalid={Boolean(errors.subject)}
                  className={inputClass}
                />
                {errors.subject ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.subject}</p>
                ) : null}
              </div>

              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  value={form.message}
                  onChange={set("message")}
                  maxLength={LIMITS.message}
                  rows={5}
                  placeholder="Tell me a little about what you need…"
                  aria-invalid={Boolean(errors.message)}
                  className={`${inputClass} resize-y`}
                />
                {errors.message ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
                ) : null}
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === "sending" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              {status === "success" ? (
                <p
                  role="status"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent-soft px-4 py-3 text-sm font-medium text-accent"
                >
                  <CheckCircle2 size={16} />
                  Message sent — thank you! I'll get back to you soon.
                </p>
              ) : null}
              {status === "error" ? (
                <p
                  role="alert"
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive"
                >
                  <TriangleAlert size={16} />
                  Something went wrong sending your message. Please email me directly instead.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
