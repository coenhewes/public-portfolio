import Link from "next/link";

import { Button } from "../components/ui/button";
import { FeaturedProjectCard, ProjectCard } from "../components/project-card";
import { projects } from "../data/projects";

const experience = [
  {
    role: "Senior Enterprise Account Executive",
    company: "Branch",
    period: "Nov 2024 - Feb 2026",
    summary:
      "Partnered with Solution Architects on technical POCs, led discovery and solution design for complex accounts, and worked on mobile attribution and deep linking programs for enterprise teams.",
  },
  {
    role: "Enterprise Account Executive",
    company: "Supermetrics",
    period: "Oct 2022 - Oct 2024",
    summary:
      "Mapped enterprise data requirements across 150+ marketing data sources, exceeded $300K quarterly ARR targets across 8 consecutive quarters, and closed a company-record A$185K ARR outbound deal.",
  },
  {
    role: "Account Executive, JAPAC",
    company: "Brandwatch",
    period: "Jan 2018 - Aug 2021",
    summary:
      "Sold AI/ML-driven consumer intelligence across Japan and APAC, consistently exceeded $200K quarterly ARR targets, and achieved Presidents Club.",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-24 pt-28">
      <section className="mb-16 grid gap-8 border-b border-border pb-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div>
          <p className="mb-3 text-sm font-medium text-muted-foreground">
            Melbourne, VIC · AI products, SaaS platforms, technical systems
          </p>
          <h1 className="mb-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            Coen Hewes builds practical AI products from messy workflows.
          </h1>
          <p className="mb-7 max-w-2xl text-base leading-relaxed text-muted-foreground">
            I am a self-taught developer and technical sales executive building
            AI-powered applications and modern web platforms with Next.js,
            React, Python, FastAPI, Vertex AI, and production SaaS tooling.
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
              <Link href="mailto:coenhewes@outlook.com">Get in touch</Link>
            </Button>
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["8+", "years in SaaS, data, and analytics"],
            ["4", "production portfolio projects"],
            ["A$185K", "largest outbound ARR deal closed"],
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

      <section className="mb-16">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">
            Parallax leads the portfolio; Forge Blog is the only open-source
            repo.
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

      <section className="mb-16">
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
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {entry.summary}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Stack</h2>
        <div className="flex flex-wrap gap-2">
          <img
            src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54"
            alt="Python"
          />
          <img
            src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
            alt="TypeScript"
          />
          <img
            src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
            alt="React"
          />
          <img
            src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
            alt="Next.js"
          />
          <img
            src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
            alt="TailwindCSS"
          />
          <img
            src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"
            alt="PostgreSQL"
          />
          <img
            src="https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white"
            alt="FastAPI"
          />
          <img
            src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"
            alt="Vercel"
          />
          <img
            src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
            alt="Git"
          />
        </div>
      </section>
    </main>
  );
}
