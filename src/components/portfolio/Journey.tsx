import { Reveal, SectionHeading } from "./Reveal";

const steps = [
  {
    title: "Web Development with AI — Bano Qabil",
    body: "Completed course covering practical, hands-on web development.",
  },
  {
    title: "Portfolio Development",
    body: "Created and deployed three website projects: Crave Hub, Fresh Cart, and Lumera.",
  },
  {
    title: "Frontend Development",
    body: "Applied for frontend development opportunities while continuing to build.",
  },
  {
    title: "Client Project",
    body: "Currently developing an Online Quran Tutor website for a client.",
  },
];

export function Journey() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Journey"
          title="My Development Journey"
          description="A truthful look at how my frontend experience is building up, step by step."
        />

        <ol className="relative mt-12 space-y-4 border-l border-border pl-6 sm:pl-8">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80} className="relative">
              <span
                className="absolute -left-[1.85rem] top-6 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-background sm:-left-[2.35rem]"
                aria-hidden="true"
              />
              <div className="rounded-3xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="font-mono text-xs font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 text-lg font-bold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
