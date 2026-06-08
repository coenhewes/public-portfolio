export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: "Senior Enterprise Account Executive",
    company: "Branch",
    period: "Nov 2024 – Feb 2026",
    bullets: [
      "Partnered with Solution Architects to deliver technical POCs that increased deal conversion rates by 25%; frequently stepped in as a Sales Engineer to lead technical discovery and solution design for complex accounts.",
      "Collaborated with enterprise marketing teams to architect solutions for mobile attribution and deep linking, translating technical requirements into business value.",
      "Closed deals with Nine Entertainment and News Corp, leveraging MEDDICC to shorten 6–9 month sales cycles by 20%.",
      "Generated pipeline via consultative discovery calls with C-level executives, increasing qualified leads by 40%.",
    ],
  },
  {
    role: "Enterprise Account Executive",
    company: "Supermetrics",
    period: "Oct 2022 – Oct 2024",
    bullets: [
      "Exceeded $300K quarterly ARR targets consistently across 8 consecutive quarters; achieved Presidents Club as top outbound performer.",
      "Led technical discovery sessions to map data requirements and architecture for enterprise data consolidation initiatives involving 150+ data sources.",
      "Closed company record for largest outbound deal at A$185,000 ARR; secured high-value enterprise contracts with Myer, Wesfarmers, and Australian Broadcasting Corporation.",
      "Managed full sales cycle from prospecting through contract negotiation, averaging 6–12 month enterprise sales cycles.",
    ],
  },
  {
    role: "Enterprise Account Executive",
    company: "Whispir",
    period: "Aug 2021 – Oct 2022",
    bullets: [
      "Sold a cloud-based enterprise communications platform unifying email, SMS, voice, video, and web chat channels.",
      "Focused on partner relationship management and consultative selling to drive adoption of omni-channel communication solutions.",
    ],
  },
  {
    role: "Account Executive, JAPAC",
    company: "Brandwatch",
    period: "Jan 2018 – Aug 2021",
    bullets: [
      "Sold social listening and consumer intelligence SaaS leveraging AI/ML for brand insights across Japan and APAC.",
      "Consistently exceeded $200K quarterly ARR targets across all quarters from FY19–FY21; achieved Presidents Club.",
      "Articulated the technical value of AI/ML-driven social sentiment analysis to engineering and product stakeholders to drive enterprise adoption.",
      "Ranked #1 outbound rep globally in FY19 Q3; pioneered territory development strategies across Japan and APAC.",
    ],
  },
  {
    role: "Sales Executive",
    company: "National Australia Bank",
    period: "Jan 2017 – Jan 2018",
    bullets: [
      "Consistently achieved monthly sales targets within the financial services division.",
    ],
  },
];
