const specialties = [
  {
    title: "Python",
    description:
      "Backend services, data pipelines, and the real-time audio/LLM stack powering Cornerman and Parallax.",
  },
  {
    title: "TypeScript",
    description:
      "End-to-end type safety across Next.js apps, APIs, and internal tooling.",
  },
  {
    title: "React & Next.js",
    description:
      "App Router, server components, and streaming UIs for production webapps.",
  },
  {
    title: "Tailwind CSS",
    description:
      "Responsive, accessible, design-system-friendly interfaces — fast.",
  },
  {
    title: "SQL & Postgres",
    description:
      "Schema design, analytical queries, and keeping the data layer honest.",
  },
  {
    title: "AI & LLMs",
    description:
      "Real-time transcription, streaming inference, RAG, and agent skill layers.",
  },
  {
    title: "DevOps",
    description:
      "Vercel, GitHub Actions, cron-based deploys, and pragmatic observability.",
  },
  {
    title: "Git",
    description: "Version control, code review, and collaboration discipline.",
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
          I build modern full-stack products — web apps, desktop tools, and the
          AI infrastructure behind them. Here&apos;s what I work with day to
          day.
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
