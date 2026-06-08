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
      "Deepgram transcription, MiniMax/Qwen integrations, Vercel AI workflows, retrieval, and agent skill layers.",
  },
  {
    title: "Cloud & Deployments",
    description:
      "Vercel, Render, GitHub Actions, scheduled deploys, webhooks, and pragmatic observability.",
  },
  {
    title: "Product Architecture",
    description:
      "Turning messy user workflows into shipped SaaS surfaces, admin tooling, billing, auth, and support systems.",
  },
];

export default function DevelopmentPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-24 pt-28">
      <section className="mb-12">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Software Development
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          I build modern full-stack products: web apps, native desktop surfaces,
          AI coaching systems, storefronts, admin portals, and the cloud
          infrastructure behind them.
        </p>
      </section>

      <section>
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
    </main>
  );
}
