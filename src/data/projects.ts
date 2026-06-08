export type Project = {
  title: string;
  href: string;
  repo?: string;
  description: string;
  tagline: string;
  stack: string[];
  openSource?: boolean;
  featured?: boolean;
  highlights?: { title: string; description: string }[];
};

export const projects: Project[] = [
  {
    title: "Cornerman",
    href: "https://trycornerman.com/",
    repo: "https://github.com/coenhewes/cornerman",
    tagline: "Prep-aware AI coaching for job interviews.",
    description:
      "A web SaaS product for candidates to upload a resume and job description, generate a personalized prep plan, run AI practice interviews, and use private live coaching during real interviews. The active codebase is a Next.js frontend with a FastAPI backend, WebSocket sessions, Clerk auth, Stripe billing, Postgres persistence, and Deepgram-powered transcription.",
    stack: [
      "Next.js 16",
      "React 19",
      "FastAPI",
      "WebSockets",
      "Deepgram",
      "MiniMax M2.7",
      "Postgres",
      "Clerk",
      "Stripe",
      "Render",
    ],
    featured: true,
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
    title: "Parallax",
    href: "https://tryparallax.app/",
    repo: "https://github.com/coenhewes/parallax",
    tagline: "Ambient meeting intelligence for sales teams.",
    description:
      "A multi-surface sales coaching platform with a native Swift macOS client for live coaching, a Chrome extension prototype for Google Meet, a Zoom App sidebar prototype, a visible meeting-bot prototype, and Parallax Command for team analytics and coaching signals.",
    stack: [
      "Swift 6",
      "macOS",
      "FastAPI",
      "Next.js 16",
      "React 19",
      "Zoom Apps SDK",
      "Deepgram",
      "MiniMax M2.7",
      "Firebase",
      "PostHog",
    ],
    featured: true,
    highlights: [
      {
        title: "Native client",
        description:
          "Swift macOS app handles live coaching, transcription, overlay UI, training sessions, and Command sync.",
      },
      {
        title: "Meeting surfaces",
        description:
          "Prototypes cover Chrome in-tab coaching, Zoom sidebar coaching, and a visible Google Meet bot.",
      },
      {
        title: "Parallax Command",
        description:
          "FastAPI backend and Next.js portal support live sessions, team analytics, and manager coaching workflows.",
      },
    ],
  },
  {
    title: "Forge Logbooks",
    href: "https://forgelogbooks.com/",
    repo: "https://github.com/coenhewes/logbookforgeprod",
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
    openSource: true,
  },
];
