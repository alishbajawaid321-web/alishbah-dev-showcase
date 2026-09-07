import { ArrowRight, LayoutTemplate, MonitorSmartphone, PenTool, Rocket, UserRound } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const services = [
  {
    icon: LayoutTemplate,
    title: "Frontend Web Development",
    body: "Building modern frontend websites with clean layouts and interactive user experiences.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Websites",
    body: "Creating websites that adapt smoothly to mobile, tablet, and desktop screens.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    body: "Designing attractive, focused landing pages for businesses, products, services, and personal brands.",
  },
  {
    icon: UserRound,
    title: "Portfolio Websites",
    body: "Creating modern personal and professional portfolio websites that showcase skills, projects, and experience.",
  },
  {
    icon: PenTool,
    title: "Website Redesign",
    body: "Improving the visual appearance, responsiveness, structure, and user experience of existing websites.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Services"
          title="What I can build for you"
          description="Practical frontend work, delivered with care and attention to detail."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 3) * 80}>
              <div className="group relative h-full overflow-hidden rounded-md border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 accent-glow opacity-0 transition-opacity duration-300 group-hover:opacity-70"
                  aria-hidden="true"
                />
                <span className="relative grid h-12 w-12 place-items-center rounded-md bg-accent text-accent-foreground transition-transform duration-300 group-hover:-rotate-6">
                  <service.icon size={21} />
                </span>
                <h3 className="relative mt-5 text-lg font-bold">{service.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-10 grid gap-5 rounded-md border border-accent bg-accent p-8 text-accent-foreground sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="font-display text-xl font-bold sm:text-2xl">
              Have a project in mind? Let's build it together.
            </p>
            <a
              href="#contact"
               className="group inline-flex w-fit items-center gap-2 rounded-md bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              Start a conversation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
