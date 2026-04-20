import { experience } from "~/data/experience";

const specialties = [
  {
    title: "Sales Strategy & Execution",
    description: "Navigating complex B2B sales cycles end-to-end.",
  },
  {
    title: "Revenue Operations",
    description: "Aligning sales, marketing, and customer success.",
  },
  {
    title: "CRM Customization",
    description: "Salesforce, HubSpot, and adjacent platforms.",
  },
  {
    title: "Sales Analytics & Reporting",
    description: "Python and SQL for data-driven pipeline insights.",
  },
  {
    title: "Sales Enablement Tooling",
    description: "Internal apps built with JavaScript and React.",
  },
  {
    title: "Process Automation",
    description: "Python scripting and integrations across the stack.",
  },
  {
    title: "Pipeline Management & Forecasting",
    description: "Predictable revenue growth and accurate forecasts.",
  },
  {
    title: "Sales Tech Stack Optimization",
    description: "Cutting tool sprawl and boosting team productivity.",
  },
];

export default function RevOpsPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col px-6 pb-24 pt-28">
      <section className="mb-12">
        <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Enterprise Sales & Revenue Operations
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          I drive revenue growth and optimize sales processes through a blend
          of technical expertise and strategic sales experience. Below is what
          I specialize in, and where I&apos;ve done it.
        </p>
      </section>

      <section className="mb-16">
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

      <section>
        <h2 className="mb-4 text-xl font-semibold tracking-tight">
          Experience
        </h2>
        <ol className="space-y-6 border-l border-border pl-6">
          {experience.map((entry) => (
            <li key={`${entry.company}-${entry.period}`} className="relative">
              <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border border-border bg-background" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">
                  {entry.role}
                  <span className="text-muted-foreground"> · {entry.company}</span>
                </h3>
                <span className="text-xs text-muted-foreground">
                  {entry.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {entry.summary}
              </p>
              {entry.bullets && (
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}
