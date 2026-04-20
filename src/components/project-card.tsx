import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";

import { cn } from "../lib/utils";
import type { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col justify-between rounded-lg border border-border bg-card p-5 text-card-foreground transition-colors",
        "hover:border-primary/60 hover:bg-accent/40",
      )}
    >
      <Link
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 rounded-lg"
        aria-label={`Visit ${project.title}`}
      />
      <div className="relative">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold leading-none">
            {project.title}
          </h3>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
        <p className="mb-3 text-sm font-medium text-muted-foreground">
          {project.tagline}
          {project.openSource && (
            <span className="ml-2 rounded bg-secondary px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-secondary-foreground">
              Open source
            </span>
          )}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>
      <div className="relative mt-4 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.repo && (
          <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            aria-label={`${project.title} source on GitHub`}
          >
            <Github className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}

export function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative flex flex-col gap-6 rounded-lg border border-primary/40 bg-card p-6 text-card-foreground sm:col-span-2 sm:p-8">
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded bg-primary/15 px-2 py-0.5 text-[10px] uppercase tracking-wide text-primary">
            Featured
          </span>
          {project.openSource && (
            <span className="rounded bg-secondary px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-secondary-foreground">
              Open source
            </span>
          )}
        </div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              {project.tagline}
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Visit site
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            {project.repo && (
              <Link
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-accent"
              >
                <Github className="h-3.5 w-3.5" />
                Source
              </Link>
            )}
          </div>
        </div>
      </div>

      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      {project.highlights && (
        <div className="grid gap-4 sm:grid-cols-3">
          {project.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-md border border-border bg-background/40 p-4"
            >
              <div className="mb-1 text-sm font-semibold">{h.title}</div>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {h.description}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded border border-border px-2 py-0.5 text-xs text-muted-foreground"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
