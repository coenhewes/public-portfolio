import Link from "next/link";

import { Button } from "../components/ui/button";
import { FeaturedProjectCard, ProjectCard } from "../components/project-card";
import { projects } from "../data/projects";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-24 pt-28">
      <section className="mb-16 flex flex-col items-center text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          Hi, my name is Coen
        </h1>
        <p className="mb-6 max-w-xl text-muted-foreground">
          I am a full-stack developer and revenue operations professional. I
          build products at the intersection of software and go-to-market.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              Download Resume
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="mailto:coenhewes@proton.me">Get in touch</Link>
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">
            What I&apos;m building now
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
            src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
            alt="Git"
          />
        </div>
      </section>
    </main>
  );
}
