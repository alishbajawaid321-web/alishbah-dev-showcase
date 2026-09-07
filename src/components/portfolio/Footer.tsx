import { Mail, Phone } from "lucide-react";
import { contact, navLinks } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <a href="#home" className="font-display text-xl font-bold tracking-tight">
            ALISHBAH
          </a>
          <p className="mt-2 text-sm text-ink-foreground/70">Frontend Web Developer</p>
          <p className="mt-4 max-w-xs text-sm text-ink-foreground/60">
            Turning ideas into responsive web experiences.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-ink-foreground/60">
            Quick links
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-ink-foreground/80 transition-colors hover:text-ink-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-widest text-ink-foreground/60">
            Get in touch
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 text-ink-foreground/80 transition-colors hover:text-ink-foreground"
              >
                <Mail size={15} />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 text-ink-foreground/80 transition-colors hover:text-ink-foreground"
              >
                <Phone size={15} />
                {contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-foreground/10">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-ink-foreground/60 sm:px-8">
          © 2026 Alishbah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
