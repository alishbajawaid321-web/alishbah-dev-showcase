import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import portrait from "@/assets/alishbah-portrait.jpg";

const floatingPills = [
  { label: "HTML5", className: "left-0 top-[22%] -rotate-6" },
  { label: "CSS3", className: "right-0 top-[12%] rotate-6" },
  { label: "JavaScript", className: "right-2 bottom-[26%] -rotate-3" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] overflow-hidden border-b border-border pt-28 sm:pt-32 lg:pt-36">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-[0.35]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-20 right-0 h-[36rem] w-[36rem] accent-glow opacity-55"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-8 lg:pb-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.18fr_0.82fr] lg:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 border-l-2 border-accent pl-3 font-mono text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" aria-hidden="true" />
              Available for frontend work
            </span>

            <h1 className="mt-7 max-w-3xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-[4.8rem]">
              Alishbah builds<br />
              <span className="text-accent">responsive web experiences.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Hi, I'm Alishbah — an aspiring frontend developer
              building clean, modern websites while studying BS Chemistry at the University of
              Karachi. Trained in Web Development with AI through Bano Qabil, I'm actively growing
              my professional experience through real projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift"
              >
                View My Work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:text-accent"
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

          <div className="relative mx-auto w-full max-w-sm lg:ml-auto lg:max-w-[29rem]">
            <span
              className="pointer-events-none absolute -left-36 top-10 hidden -rotate-90 select-none font-display text-[6rem] font-bold leading-none text-foreground/[0.045] lg:block"
              aria-hidden="true"
            >
              DEVELOP
            </span>

            <div className="relative">
              <div className="relative mx-auto aspect-4/5 w-full overflow-hidden rounded-md border border-accent/30 bg-accent-soft p-1.5 shadow-lift">
                <img
                  src={portrait}
                  alt="Alishbah, frontend web developer"
                  width={1024}
                  height={1280}
                  className="h-full w-full rounded-sm object-cover object-top"
                />
              </div>

              {floatingPills.map((pill, i) => (
                <span
                  key={pill.label}
                  style={{ animationDelay: `${i * 160}ms` }}
                  className={`absolute ${pill.className} animate-fade-in rounded-md border border-accent/20 bg-card px-4 py-2 font-mono text-xs font-semibold text-accent shadow-soft`}
                >
                  {pill.label}
                </span>
              ))}

              <div className="absolute -bottom-8 -left-6 w-[min(20rem,90%)] rounded-md border border-border bg-card p-4 shadow-lift sm:-left-10">
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
