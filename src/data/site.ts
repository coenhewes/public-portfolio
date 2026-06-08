export const site = {
  name: "Coen Hewes",
  title: "Coen Hewes | AI products, SaaS platforms, technical systems",
  description:
    "Self-taught developer and technical sales executive building AI-powered applications with Next.js, React, Python, FastAPI, and Vertex AI. Shipped Parallax, Cornerman, Forge Logbooks, and more.",
  tagline: "Building practical AI products from messy workflows.",
  location: "Melbourne, VIC",
  email: "coenhewes@outlook.com",
  github: "https://github.com/coenhewes",
  linkedin: "https://www.linkedin.com/in/coenhewes/",
  lookingFor:
    "Open to founding engineer, solutions architect, and technical product roles.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://coenhewes.com",
} as const;

export const stack = [
  "Python",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "FastAPI",
  "Vercel",
  "Git",
  "Vertex AI",
  "Stripe",
  "WebSockets",
] as const;
