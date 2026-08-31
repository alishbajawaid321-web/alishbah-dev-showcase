import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import portrait from "@/assets/alishbah-portrait.jpg";

const floatingPills = [
  { label: "HTML5", className: "left-0 top-[22%] -rotate-6" },
  { label: "CSS3", className: "right-0 top-[12%] rotate-6" },
  { label: "JavaScript", className: "right-2 bottom-[26%] -rotate-3" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-40">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.35]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 accent-glow opacity-40"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
              Available for frontend work
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Hi, I'm Alishbah —<br />
              <span className="text-accent">Frontend Web Developer</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Turning ideas into responsive web experiences. I'm an aspiring frontend developer
              building clean, modern websites while studying BS Chemistry at the University of
              Karachi. Trained in Web Development with AI through Bano Qabil, I'm actively growing
              my professional experience through real projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-ink-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                View My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
              >
                Let's Work Together
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p className="mt-8 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={15} className="text-accent" />
              Karachi, Pakistan
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <span
              className="pointer-events-none absolute -top-6 left-1/2 hidden -translate-x-1/2 select-none font-display text-[7rem] font-bold leading-none tracking-tighter text-foreground/[0.05] sm:block lg:text-[9rem]"
              aria-hidden="true"
            >
              DEV
            </span>

            <div className="relative">
              <div className="relative mx-auto aspect-4/5 w-full overflow-hidden rounded-[3rem] rounded-t-full bg-gradient-to-b from-accent/25 to-accent/5 p-1.5">
                <img
                  src={portrait}
                  alt="Alishbah, frontend web developer"
                  width={1024}
                  height={1280}
                  className="h-full w-full rounded-[2.75rem] rounded-t-full object-cover object-top"
                />
              </div>

              {floatingPills.map((pill, i) => (
                <span
                  key={pill.label}
                  style={{ animationDelay: `${i * 160}ms` }}
                  className={`absolute ${pill.className} animate-fade-in rounded-full border border-border bg-card px-4 py-2 font-mono text-xs font-semibold shadow-soft`}
                >
                  {pill.label}
                </span>
              ))}

              <div className="absolute -bottom-6 left-1/2 w-[min(20rem,90%)] -translate-x-1/2 rounded-2xl border border-border bg-card p-4 shadow-lift">
                <pre className="overflow-hidden font-mono text-[11px] leading-relaxed text-muted-foreground">
                  <code>
                    {"const alishbah = {\n  role: 'Frontend Developer',\n  focus: 'responsive UI',\n};"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
