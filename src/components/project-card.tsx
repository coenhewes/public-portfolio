import Link from "next/link";
import { ArrowUpRight, Github, Mail } from "lucide-react";

import { cn } from "../lib/utils";
import { site } from "../data/site";
import type { Project } from "../data/projects";

function sourceRequestHref(projectTitle: string) {
  return `mailto:${site.email}?subject=${encodeURIComponent(`Source access request: ${projectTitle}`)}`;
}

function ProjectActions({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap gap-2">
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        Visit site
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
      {project.openSource && project.repo ? (
        <Link
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent"
        >
          <Github className="h-3.5 w-3.5" />
          Source
        </Link>
      ) : (
        <Link
          href={sourceRequestHref(project.title)}
          className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
        >
          <Mail className="h-3.5 w-3.5" />
          Source on request
        </Link>
      )}
    </div>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "relative -mx-5 -mt-5 mb-4 h-28 overflow-hidden border-b border-border/60 bg-gradient-to-br sm:-mx-6 sm:-mt-6",
        project.accent,
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]" />
      <div className="absolute bottom-4 left-5 flex h-11 w-11 items-center justify-center rounded-md border border-border/80 bg-background/90 text-sm font-semibold backdrop-blur sm:left-6">
        {project.title
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)}
      </div>
    </div>
  );
}

function ProjectImpact({ project }: { project: Project }) {
  if (!project.impact?.length) return null;

  return (
    <ul className="mb-3 space-y-1">
      {project.impact.map((item) => (
        <li
          key={item}
          className="flex items-start gap-2 text-xs text-muted-foreground"
        >
          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "flex flex-col justify-between overflow-hidden rounded-lg border border-border/80 bg-card/80 text-card-foreground shadow-sm transition-colors",
        "hover:border-primary/50 hover:bg-accent/20",
      )}
    >
      <div className="p-5 sm:p-6">
        <ProjectVisual project={project} />
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold leading-tight">
            {project.title}
          </h3>
        </div>
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          {project.tagline}
          {project.openSource && (
            <span className="ml-2 rounded bg-secondary px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-secondary-foreground">
              Open source
            </span>
          )}
        </p>
        <ProjectImpact project={project} />
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        {project.highlights && (
          <div className="mt-4 grid gap-3">
            {project.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-md border border-border/80 bg-background/50 p-3"
              >
                <div className="mb-0.5 text-xs font-semibold">{h.title}</div>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 border-t border-border/60 p-5 sm:p-6">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        <ProjectActions project={project} />
      </div>
    </div>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative flex flex-col gap-6 overflow-hidden rounded-lg border border-primary/30 bg-card/90 p-6 text-card-foreground shadow-sm sm:col-span-2 sm:p-8">
      <div
        className={cn(
          "absolute right-0 top-0 hidden h-full w-1/3 border-l border-border/40 bg-gradient-to-bl sm:block",
          project.accent,
        )}
      />
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-primary/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-primary">
            Lead project
          </span>
          {project.openSource && (
            <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-secondary-foreground">
              Open source
            </span>
          )}
        </div>
        <div className="relative flex flex-wrap items-start justify-between gap-4">
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {project.tagline}
            </p>
          </div>
          <ProjectActions project={project} />
        </div>
      </div>

      <ProjectImpact project={project} />

      <p className="relative max-w-3xl text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.highlights && (
        <div className="relative grid gap-4 sm:grid-cols-3">
          {project.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-md border border-border bg-background/60 p-4"
            >
              <div className="mb-1 text-sm font-semibold">{h.title}</div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="relative flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
