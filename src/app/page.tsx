import Link from "next/link";

import { Button } from "../components/ui/button";
import { FeaturedProjectCard, ProjectCard } from "../components/project-card";
import { experience } from "../data/experience";
import { projects } from "../data/projects";
import { site, stack } from "../data/site";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-28">
      <section className="mb-16 grid gap-8 border-b border-border pb-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            {site.location} · AI products, SaaS platforms, technical systems
          </p>
          <h1 className="mb-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            {site.name}
          </h1>
          <p className="mb-5 max-w-3xl text-4xl italic tracking-tight text-foreground/90 sm:text-5xl">
            {site.tagline}
          </p>
          <p className="mb-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            I am a self-taught developer and technical sales executive building
            AI-powered applications and modern web platforms with Next.js,
            React, Python, FastAPI, Vertex AI, and production SaaS tooling.
          </p>
          <p className="mb-7 max-w-2xl text-sm font-medium text-foreground/80">
            {site.lookingFor}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href={`mailto:${site.email}`}>Get in touch</Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["8+", "years in SaaS, data, and analytics"],
            ["4", "production portfolio projects"],
            ["3x", "Presidents Club winner"],
          ].map(([value, label]) => (
            <div
              key={value}
              className="rounded-md border border-border bg-card/80 p-4"
            >
              <div className="text-2xl font-semibold tracking-tight">
                {value}
              </div>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mb-16 scroll-mt-28">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Shipped products, not prototypes
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project) =>
            project.featured ? (
              <FeaturedProjectCard key={project.title} project={project} />
            ) : (
              <ProjectCard key={project.title} project={project} />
            ),
          )}
        </div>
      </section>

      <section id="experience" className="mb-16 scroll-mt-28">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <p className="text-sm text-muted-foreground">
            Technical discovery, solution architecture, and SaaS execution
          </p>
        </div>
        <ol className="space-y-6 border-l border-border pl-6">
          {experience.map((entry) => (
            <li key={`${entry.company}-${entry.period}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border border-border bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">
                  {entry.role}
                  <span className="text-muted-foreground">
                    {" "}
                    · {entry.company}
                  </span>
                </h3>
                <span className="text-xs text-muted-foreground">
                  {entry.period}
                </span>
              </div>
              <ul className="mt-2 space-y-1.5">
                {entry.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/70" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section id="stack" className="scroll-mt-28">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Stack</h2>
          <Link
            href="/dev"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            How I build →
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-border bg-card/80 px-3 py-1.5 font-mono text-sm text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
