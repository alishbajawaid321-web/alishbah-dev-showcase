import { GraduationCap, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const growth = [
  "BS Chemistry",
  "Web Development with AI",
  "Portfolio Projects",
  "Client Project",
  "Frontend Development",
];

const education = [
  {
    icon: GraduationCap,
    institute: "University of Karachi",
    program: "BS Chemistry",
    meta: ["Currently in 4th semester", "Expected graduation: 2028"],
  },
  {
    icon: Sparkles,
    institute: "Bano Qabil",
    program: "Web Development with AI",
    meta: ["Completed", "Focused on practical web development skills"],
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="I create thoughtful, responsive websites — and I'm still growing every day."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              I'm a 4th-semester BS Chemistry student at the University of Karachi, expected to
              graduate in 2028. Alongside my university studies, I developed a strong interest in
              web development and recently completed a Web Development with AI course from Bano
              Qabil.
            </p>
            <p>
              Since then I've been building websites to strengthen my frontend skills. I have
              completed and deployed three website projects, and I'm currently gaining real-world
              experience by developing a website for a client.
            </p>
            <p className="rounded-2xl border border-border bg-card p-5 text-sm text-foreground shadow-soft">
              My completed portfolio projects have helped me gain practical experience with website
              deployment and frontend development. I am continuing to strengthen my development
              skills through hands-on projects and my current client work.
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
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-secondary font-mono text-xs font-bold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-sm font-medium">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>

        <div id="education" className="mt-20 scroll-mt-24">
          <Reveal>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">Education</h3>
          </Reveal>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {education.map((item, i) => (
              <Reveal key={item.institute} delay={i * 90}>
                <article className="h-full rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-soft text-accent">
                    <item.icon size={20} />
                  </span>
                  <h4 className="mt-4 text-lg font-bold">{item.institute}</h4>
                  <p className="mt-1 text-sm font-medium text-accent">{item.program}</p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    {item.meta.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
