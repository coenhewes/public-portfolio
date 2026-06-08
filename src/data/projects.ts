export type Project = {
  title: string;
  href: string;
  repo?: string;
  description: string;
  tagline: string;
  stack: string[];
  openSource?: boolean;
  featured?: boolean;
  accent: string;
  impact?: string[];
  highlights?: { title: string; description: string }[];
};

export const projects: Project[] = [
  {
    title: "Parallax",
    href: "https://tryparallax.app/",
    tagline: "Ambient meeting intelligence for sales teams.",
    description:
      "A multi-surface sales coaching platform with a native Swift macOS client, Command web portal, Chrome extension prototype, Zoom App sidebar, and meeting-bot prototype. I fine-tuned a Qwen model with LoRA adapters on Google Cloud Vertex AI to specialize it for sales methodology coaching, including MEDDICC and Triangle Selling, and deployed it as a production GCP endpoint.",
    stack: [
      "Swift 6",
      "macOS",
      "FastAPI",
      "Next.js 16",
      "React 19",
      "Zoom Apps SDK",
      "Deepgram",
      "Qwen",
      "LoRA",
      "Vertex AI",
      "GCP",
      "Firebase",
      "PostHog",
    ],
    accent: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    impact: [
      "Multi-surface production platform",
      "Custom fine-tuned LLM on Vertex AI",
      "Native macOS + web + Zoom integrations",
    ],
    featured: true,
    highlights: [
      {
        title: "Native client",
        description:
          "Swift macOS app handles live coaching, transcription, overlay UI, training sessions, and Command sync.",
      },
      {
        title: "Fine-tuned model",
        description:
          "Qwen fine-tuned with LoRA adapters on Vertex AI for MEDDICC and Triangle Selling coaching.",
      },
      {
        title: "Parallax Command",
        description:
          "FastAPI backend and Next.js portal support live sessions, team analytics, and manager coaching workflows.",
      },
    ],
  },
  {
    title: "Cornerman",
    href: "https://trycornerman.com/",
    tagline: "Prep-aware AI coaching for job interviews.",
    description:
      "A web SaaS product for candidates to upload a resume and job description, generate a personalized prep plan, run AI practice interviews, and use private live coaching during real interviews. The active codebase is a Next.js frontend with a FastAPI backend, WebSocket sessions, Clerk auth, Stripe billing, Postgres persistence, and Deepgram-powered transcription.",
    stack: [
      "Next.js 16",
      "React 19",
      "FastAPI",
      "WebSockets",
      "Deepgram",
      "Vercel AI SDK",
      "Postgres",
      "Clerk",
      "Stripe",
      "Render",
    ],
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
    impact: [
      "Full SaaS with auth, billing, and subscriptions",
      "Real-time WebSocket coaching sessions",
      "End-to-end prep-to-review workflow",
    ],
    highlights: [
      {
        title: "Personalized prep",
        description:
          "Resume + job description input creates role-specific strengths, gaps, likely questions, and stories to prepare.",
      },
      {
        title: "Live coaching",
        description:
          "Real-time browser sessions transcribe active audio and surface short coaching cues without a meeting bot.",
      },
      {
        title: "Review loop",
        description:
          "Session reviews turn transcripts into summaries, suggestions, follow-up recommendations, and practice steps.",
      },
    ],
  },
  {
    title: "Forge Logbooks",
    href: "https://forgelogbooks.com/",
    tagline: "Print-on-demand training logbooks for serious lifters.",
    description:
      "A production storefront for custom print-on-demand training logbooks. It powers the live site, catalogue, customizer, cart, Stripe checkout, Lulu print pipeline, generated PDFs, customer dashboard, SEO blog, admin tooling, support flows, and transactional/marketing email.",
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind",
      "Supabase",
      "Stripe",
      "Lulu Print API",
      "pdf-lib",
      "pdfkit",
      "UploadThing",
      "Resend",
      "Mailgun",
      "Klaviyo",
      "Zustand",
    ],
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
    impact: [
      "Live storefront processing real payments",
      "Automated PDF generation and print fulfillment",
      "Admin, support, and marketing automation",
    ],
    highlights: [
      {
        title: "Customizer",
        description:
          "Customers design training logbooks with live previews before checkout.",
      },
      {
        title: "Print pipeline",
        description:
          "Stripe checkout, Lulu Print API integration, and generated PDFs handle fulfillment end to end.",
      },
      {
        title: "Operations stack",
        description:
          "Admin tooling, customer dashboard, support flows, and transactional email keep the business running.",
      },
    ],
  },
  {
    title: "Forge Blog",
    href: "https://www.forgelogbooks.com/blog",
    repo: "https://github.com/coenhewes/forgeblog",
    tagline: "Agent-ready Next.js blog with scheduled publishing.",
    description:
      "An open-source Next.js blog template with automated scheduled publishing and a built-in agent skill layer. Posts live in one TypeScript file, future-dated posts go live on daily rebuilds, and /skill.md plus /skill.json let LLM agents write and schedule posts autonomously.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind 4",
      "GitHub Actions",
      "Vercel",
      "JSON-LD",
    ],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
    impact: [
      "Open-source template with agent skill layer",
      "Scheduled publishing via GitHub Actions",
      "JSON-LD and SEO-ready out of the box",
    ],
    openSource: true,
    highlights: [
      {
        title: "Agent skill layer",
        description:
          "/skill.md and /skill.json let LLM agents write and schedule posts autonomously.",
      },
      {
        title: "Scheduled publishing",
        description:
          "Future-dated posts go live automatically on daily rebuilds.",
      },
      {
        title: "Single-file content",
        description:
          "Posts live in one TypeScript file for simple version control and fast iteration.",
      },
    ],
  },
];
