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
    tagline: "Real-time AI coaching for job interviews.",
    description:
      "Open a coaching tab alongside your interview; the browser captures tab/system audio + mic, streams to Deepgram, and a FastAPI + MiniMax engine whispers coaching cues on screen — stories to tell, frameworks to reach for, salary anchors, closing questions. No bot joins the call. The interviewer never sees it.",
    stack: [
      "Next.js 16",
      "React 19",
      "FastAPI",
      "Deepgram",
      "MiniMax",
      "Postgres (Neon)",
      "Clerk",
      "Stripe",
    ],
    featured: true,
    highlights: [
      {
        title: "Personalized prep",
        description:
          "Resume + job listing → a battle plan with strengths, gaps, verbatim stories, and salary anchors.",
      },
      {
        title: "Live in-browser coaching",
        description:
          "Tab/system audio + mic captured via getDisplayMedia, streamed over WebSocket for sub-2s hints.",
      },
      {
        title: "Debrief & training mode",
        description:
          "Post-interview summary, follow-up note draft, and a practice mode with an AI interviewer.",
      },
    ],
  },
  {
    title: "Parallax",
    href: "https://tryparallax.app/",
    repo: "https://github.com/coenhewes/parallax",
    tagline: "Ambient meeting intelligence for sales teams.",
    description:
      "A desktop app that detects when you join Zoom, Meet, Teams, Webex, or Around and surfaces real-time coaching in a minimal overlay. No bot, no recording notification, no host permission. Managers get team analytics and coaching signals through Parallax Command, a multi-tenant web portal.",
    stack: [
      "Python",
      "PyQt6",
      "Deepgram",
      "MiniMax",
      "Next.js 15",
      "FastAPI",
      "SQLite",
    ],
    featured: true,
    highlights: [
      {
        title: "Three sales modes",
        description:
          "P.L.A.N. + Triangle Selling, Sales Onboarding for new reps, and full MEDDICC tracking.",
      },
      {
        title: "Live HUD",
        description:
          "Talk ratio bar, framework checklist, monologue timer, and a rescue button for the next move.",
      },
      {
        title: "Parallax Command",
        description:
          "Multi-tenant manager portal with team analytics, rep coaching signals, and adoption tracking.",
      },
    ],
  },
  {
    title: "Forge Logbooks",
    href: "https://forgelogbooks.com/",
    repo: "https://github.com/coenhewes/logbookforgeprod",
    tagline: "Custom physical logbooks for serious lifters.",
    description:
      "Program-specific paper logbooks that let lifters train phone-free and surface the data that actually drives progress. Ships in 72 hours with a PDF backup.",
    stack: ["Next.js", "Stripe", "Tailwind", "Print fulfillment"],
  },
  {
    title: "Forge Blog",
    href: "https://public-portfolio-chi.vercel.app/",
    repo: "https://github.com/coenhewes/forgeblog",
    tagline: "Agent-ready Next.js blog with scheduled publishing.",
    description:
      "Write posts in a single TypeScript file, date them, and a daily cron rebuild publishes them automatically. Ships with an agent skill layer (/skill.md + /skill.json) so any LLM can write and schedule posts autonomously. Powers the blogs on forgelogbooks.com and trycornerman.com.",
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind",
      "GitHub Actions",
      "JSON-LD",
    ],
    openSource: true,
  },
];
