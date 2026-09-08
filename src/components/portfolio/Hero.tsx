import { ArrowRight, ArrowUpRight, MapPin, Mail, Code2 } from "lucide-react";

const stack = ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git"];

const buildList = [
  "Modern business websites",
  "Responsive, mobile-first layouts",
  "Landing pages that convert",
  "Portfolio websites",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border pt-28 sm:pt-32 lg:pt-36"
    >
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.3]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 right-[-8rem] h-[30rem] w-[30rem] accent-glow opacity-50 sm:h-[36rem] sm:w-[36rem]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-8 lg:pb-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div className="min-w-0">
            <span className="inline-flex max-w-full items-center gap-2 border-l-2 border-accent pl-3 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground sm:text-xs">
              <span className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-accent" aria-hidden="true" />
              <span className="min-w-0">Available for frontend work &amp; client projects</span>
            </span>

            <h1 className="mt-6 text-[2.1rem] font-bold leading-[1.08] sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
              Hi, I&apos;m Alishbah
              <span className="mt-2 block text-accent">Frontend Web Developer</span>
            </h1>

            <p className="mt-5 max-w-xl text-[0.975rem] leading-relaxed text-muted-foreground sm:text-lg">
              I design and build modern, responsive websites, landing pages, and portfolio sites
              with clean, user-friendly frontend experiences. I&apos;m continuously improving my
              development skills and building real-world projects — including live client work.
            </p>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {buildList.map((item) => (
                <li key={item} className="flex min-w-0 items-start gap-2 text-sm text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="min-w-0">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                View My Projects
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Let&apos;s Work Together
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
              >
                <Mail size={16} />
                Contact Me
              </a>
            </div>

            <p className="mt-7 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={15} className="shrink-0 text-accent" />
              Karachi, Pakistan — available remotely
            </p>
          </div>

          <div className="relative min-w-0">
            <div className="overflow-hidden rounded-lg border border-border bg-ink shadow-lift">
              <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" aria-hidden="true" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" aria-hidden="true" />
                <span className="ml-2 truncate font-mono text-[11px] text-ink-foreground/60">
                  alishbah.developer.js
                </span>
              </div>
              <pre className="overflow-x-auto px-4 py-5 font-mono text-[11px] leading-relaxed text-ink-foreground/85 sm:text-xs">
                <code>{`const alishbah = {
  role: "Frontend Web Developer",
  builds: ["websites", "landing pages",
           "portfolios"],
  focus: "responsive, clean UI",
  learning: "always",
  status: "open to work",
};`}</code>
              </pre>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-md border border-border bg-card p-4 shadow-soft">
                <span className="grid h-9 w-9 place-items-center rounded-sm bg-accent-soft text-accent">
                  <Code2 size={17} />
                </span>
                <p className="mt-3 text-sm font-semibold">4 websites built</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Three deployed live, one client project in progress
                </p>
              </div>
              <div className="rounded-md border border-border bg-card p-4 shadow-soft">
                <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
                  Tech stack
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] text-muted-foreground"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
