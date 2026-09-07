import { useState } from "react";
import { ArrowUpRight, ExternalLink, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects, type Project } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

function StatusBadge({ project }: { project: Project }) {
  if (project.status === "in-progress") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
        <Loader2 size={12} className="animate-spin" aria-hidden="true" />
        Currently in Development
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-foreground">
      Completed
    </span>
  );
}

function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-border bg-card shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
      <div className="relative aspect-16/11 overflow-hidden bg-secondary">
        <img
          src={project.image}
          alt={`${project.name} — ${project.category} preview`}
          loading="lazy"
          width={1280}
          height={960}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-2.5 py-1 font-mono text-xs font-bold backdrop-blur">
          {project.index}
        </span>
        {project.isClientProject ? (
          <span className="absolute right-4 top-4 rounded-full bg-ink px-3 py-1 text-xs font-semibold text-ink-foreground">
            Client Project
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge project={project} />
        </div>
        <h3 className="mt-3 text-xl font-bold">{project.name}</h3>
        <p className="mt-1 text-sm font-medium text-accent">{project.category}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Live Demo
              <ExternalLink size={14} />
            </a>
          ) : null}
          <button
            type="button"
            onClick={onOpen}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            {project.status === "completed" ? "View Project" : "Project Details"}
            <ArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const completed = projects.filter((p) => !p.isClientProject);
  const client = projects.filter((p) => p.isClientProject);

  return (
    <section id="projects" className="relative scroll-mt-24 bg-surface py-24 sm:py-28">
       <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Websites I've built and deployed"
          description="Each project below is live or in active development — built with HTML, CSS, and JavaScript, and deployed to a real URL."
        />

        <h3 className="mt-12 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Completed Projects
        </h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
          {completed.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 90} className={i === 0 ? "lg:col-span-6" : "lg:col-span-3"}>
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </Reveal>
          ))}
        </div>

        <h3 className="mt-16 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
          Current Client Project
        </h3>
        <div className="mt-5 grid gap-6 md:grid-cols-2">
          {client.map((project) => (
            <Reveal key={project.id}>
              <ProjectCard project={project} onOpen={() => setActive(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto rounded-3xl p-0">
          {active ? (
            <>
              <img
                src={active.image}
                alt={`${active.name} preview`}
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-16/10 w-full rounded-t-3xl object-cover object-top"
              />
              <div className="p-6 sm:p-8">
                <DialogHeader className="text-left">
                  <div className="flex flex-wrap items-center gap-2">
                    <StatusBadge project={active} />
                    {active.isClientProject ? (
                      <span className="rounded-full bg-ink px-3 py-1 text-xs font-semibold text-ink-foreground">
                        Client Project
                      </span>
                    ) : null}
                  </div>
                  <DialogTitle className="mt-3 font-display text-2xl font-bold">
                    {active.name}
                  </DialogTitle>
                  <DialogDescription className="text-sm font-medium text-accent">
                    {active.category}
                  </DialogDescription>
                </DialogHeader>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {active.longDescription}
                </p>

                <h4 className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Technologies
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <h4 className="mt-6 font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                  Key features
                </h4>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {active.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-7 flex flex-wrap gap-3">
                  {active.liveUrl ? (
                    <a
                      href={active.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ink-foreground transition-transform duration-300 hover:-translate-y-0.5"
                    >
                      Live Demo
                      <ExternalLink size={15} />
                    </a>
                  ) : (
                    <span className="rounded-full border border-dashed border-border px-5 py-3 text-sm text-muted-foreground">
                      Live demo available once development is complete
                    </span>
                  )}
                  <a
                    href="#contact"
                    onClick={() => setActive(null)}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
                  >
                    Ask about this project
                    <ArrowUpRight size={15} />
                  </a>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
