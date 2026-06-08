import type { Metadata } from "next";
import Link from "next/link";

import { site } from "../../data/site";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "How Coen Hewes builds modern full-stack products: web apps, native surfaces, AI coaching systems, storefronts, and cloud infrastructure.",
};

const specialties = [
  {
    title: "Python",
    description:
      "FastAPI services, WebSocket backends, data workflows, and the real-time audio/LLM stack behind Cornerman and Parallax.",
  },
  {
    title: "TypeScript",
    description:
      "End-to-end type safety across Next.js apps, APIs, and internal tooling.",
  },
  {
    title: "React & Next.js",
    description:
      "App Router, server components, dashboards, storefronts, documentation shells, and agent-ready blog templates.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Responsive, accessible, design-system-friendly interfaces — fast.",
  },
  {
    title: "SQL & Postgres",
    description:
      "Schema design, Supabase/Postgres persistence, analytics queries, and operational data models.",
  },
  {
    title: "AI & LLMs",
    description:
      "Deepgram transcription, MiniMax/Qwen integrations, Vercel AI workflows, retrieval, fine-tuning, and agent skill layers.",
  },
  {
    title: "Cloud & Deployments",
    description:
      "Vercel, Render, GCP, GitHub Actions, scheduled deploys, webhooks, and pragmatic observability.",
  },
  {
    title: "Product Architecture",
    description:
      "Turning messy user workflows into shipped SaaS surfaces, admin tooling, billing, auth, and support systems.",
  },
];

const principles = [
  "Start from the workflow, not the framework.",
  "Ship thin vertical slices that prove value early.",
  "Keep auth, billing, and observability in scope from day one.",
  "Prefer boring infrastructure until scale demands otherwise.",
];

export default function DevelopmentPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-16 pt-28">
      <section className="mb-12">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Software Development
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          I build modern full-stack products: web apps, native desktop surfaces,
          AI coaching systems, storefronts, admin portals, and the cloud
          infrastructure behind them.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          <Link href="/#stack" className="underline-offset-4 hover:underline">
            View stack on homepage
          </Link>
          {" · "}
          <Link
            href="/#projects"
            className="underline-offset-4 hover:underline"
          >
            See shipped projects
          </Link>
        </p>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          How I work
        </h2>
        <ul className="space-y-2">
          {principles.map((principle) => (
            <li
              key={principle}
              className="flex items-start gap-2 text-sm text-muted-foreground"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {principle}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Specialties
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="rounded-md border border-border bg-card p-4"
            >
              <div className="mb-1 text-sm font-semibold">{item.title}</div>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-md border border-border bg-card/60 p-6">
        <p className="text-sm text-muted-foreground">
          {site.lookingFor}{" "}
          <Link
            href={`mailto:${site.email}`}
            className="text-foreground underline-offset-4 hover:underline"
          >
            Get in touch
          </Link>
          .
        </p>
      </section>
    </main>
  );
}
