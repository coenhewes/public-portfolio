export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets?: string[];
};

// TODO: Replace with actual work history. Keep entries in reverse-chronological order.
export const experience: ExperienceEntry[] = [
  {
    role: "Founder",
    company: "Cornerman & Parallax",
    period: "2025 — Present",
    summary:
      "Building real-time AI coaching products for job seekers and sales teams.",
    bullets: [
      "Shipped Cornerman: a webapp that coaches candidates live on Zoom, Teams, Meet, and phone interviews.",
      "Shipped Parallax: ambient desktop meeting intelligence with a multi-tenant manager portal.",
      "Own product, engineering, and GTM end-to-end.",
    ],
  },
  {
    role: "Founder",
    company: "Forge Logbooks",
    period: "2024 — Present",
    summary:
      "Physical training logbooks for serious lifters, with a fulfillment pipeline built on Next.js and Stripe.",
  },
  {
    role: "Revenue Operations",
    company: "Add previous role",
    period: "YYYY — YYYY",
    summary:
      "Replace this entry with a real past role: sales ops / revops / enterprise AE work, with 1–2 concrete outcomes (pipeline sourced, cycle time reduced, process shipped).",
  },
];
