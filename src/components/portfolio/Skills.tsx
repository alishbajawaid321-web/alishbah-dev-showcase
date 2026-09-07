import { Braces, Code2, Github, Layout, MonitorSmartphone, Palette, Rocket, Cloud, Globe } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const skills = [
  { icon: Code2, name: "HTML5", note: "Semantic, accessible page structure." },
  { icon: Palette, name: "CSS3", note: "Modern layouts with Flexbox and Grid." },
  { icon: Braces, name: "JavaScript", note: "Interactive behaviour and DOM work." },
  {
    icon: MonitorSmartphone,
    name: "Responsive Web Design",
    note: "Layouts that adapt from mobile to large desktop.",
  },
  {
    icon: Layout,
    name: "Frontend Web Development",
    note: "Building clean, usable interfaces from scratch.",
  },
  {
    icon: Rocket,
    name: "Website Deployment",
    note: "Taking finished projects from local files to a live URL.",
  },
  {
    icon: Github,
    name: "GitHub",
    note: "Managing project files, repositories, and versions; downloading and working with website project codebases.",
  },
  {
    icon: Cloud,
    name: "Vercel",
    note: "Deploying website projects and publishing live demo links.",
  },
  {
    icon: Globe,
    name: "Netlify",
    note: "Hosting and deploying static websites with live previews.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 bg-surface py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="The tools I build with"
          description="I focus on building responsive, clean, and user-friendly websites using modern frontend technologies."
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => (
            <Reveal as="li" key={skill.name} delay={(i % 3) * 80}>
              <div className="group h-full rounded-md border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-accent-soft text-accent transition-transform duration-300 group-hover:scale-110">
                  <skill.icon size={20} />
                </span>
                <h3 className="mt-4 text-base font-bold">{skill.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{skill.note}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
