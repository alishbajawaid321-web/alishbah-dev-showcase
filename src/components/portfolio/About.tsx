import { CheckCircle2, GraduationCap, Loader2, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const growth = [
  "Web Development with AI — Bano Qabil",
  "Portfolio Projects",
  "Client Project",
  "Frontend Web Development — Bano Qabil",
];

const webEducation = [
  {
    icon: Sparkles,
    program: "Web Development with AI",
    institute: "Bano Qabil",
    status: "Completed",
    done: true,
    meta: "Practical training in building and deploying modern websites.",
  },
  {
    icon: Loader2,
    program: "Frontend Web Development",
    institute: "Bano Qabil",
    status: "Currently Enrolled",
    done: false,
    meta: "Ongoing course strengthening my frontend development skills.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Building my career as a Frontend Web Developer."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I&apos;m Alishbah, an aspiring frontend web developer focused on building modern,
              responsive websites. I completed a Web Development with AI course at Bano Qabil and
              I&apos;m currently enrolled in their Frontend Web Development course to sharpen my
              skills further.
            </p>
            <p>
              I&apos;ve created and deployed multiple website projects, and I&apos;m gaining
              practical, real-world experience through a current client project. Every project is
              built with clean structure, careful layout, and a mobile-first mindset.
            </p>
            <p>
              Alongside development, I&apos;m completing a BS Chemistry degree at the University of
              Karachi (expected 2028). My university studies run in parallel — web development is
              the career I&apos;m actively building.
            </p>
            <p className="border-l-2 border-accent bg-accent-soft p-5 text-sm text-foreground">
              I&apos;m pursuing my university education while actively building my career as a
              Frontend Web Developer — and I&apos;m available for client work today.
            </p>
          </Reveal>

          <Reveal delay={100} className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-widest text-accent">
              Currently Learning &amp; Growing
            </h3>
            <ol className="space-y-3">
              {growth.map((step, i) => (
                <li
                  key={step}
                  className="group flex items-center gap-3 rounded-md border border-border bg-card px-4 py-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-sm bg-secondary font-mono text-xs font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-sm font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div id="education" className="mt-16 scroll-mt-24 sm:mt-20">
          <Reveal>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Education &amp; Learning</h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              My web development training is the foundation of my professional work; my university
              degree runs alongside it.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h4 className="mt-8 font-display text-sm font-bold uppercase tracking-widest text-accent">
              Web Development Education
            </h4>
          </Reveal>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {webEducation.map((item, i) => (
              <Reveal key={item.program} delay={i * 90}>
                <article className="h-full rounded-md border border-accent/30 bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-md bg-accent-soft text-accent">
                      <item.icon size={20} className={item.done ? "" : "animate-spin"} />
                    </span>
                    <span
                      className={`inline-flex min-w-0 items-center gap-1.5 justify-self-start rounded-full px-3 py-1 text-xs font-semibold ${
                        item.done
                          ? "bg-secondary text-foreground"
                          : "bg-accent text-accent-foreground"
                      }`}
                    >
                      {item.done ? <CheckCircle2 size={12} /> : null}
                      <span className="truncate">{item.status}</span>
                    </span>
                  </div>
                  <h5 className="mt-4 text-lg font-bold">{item.program}</h5>
                  <p className="mt-1 text-sm font-medium text-accent">{item.institute}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{item.meta}</p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <h4 className="mt-10 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Academic Education
            </h4>
          </Reveal>
          <Reveal delay={120}>
            <article className="mt-4 rounded-md border border-border bg-secondary/40 p-5 sm:p-6">
              <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-card text-muted-foreground">
                  <GraduationCap size={18} />
                </span>
                <div className="min-w-0">
                  <h5 className="text-base font-bold sm:text-lg">BS Chemistry</h5>
                  <p className="mt-1 text-sm text-muted-foreground">University of Karachi</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Currently studying · Expected graduation 2028
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
