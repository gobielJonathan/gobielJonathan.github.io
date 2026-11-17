export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
  ? process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "")
  : "https://www.gobiel.online"

export const site = {
  name: "Jonathan Gobiel",
  title: "Jonathan Gobiel | Product Engineer Building With AI Agents",
  shortDescription: "Frontend and product engineer building software with multi-agent AI teams and loop engineering.",
  description:
    "Jonathan Gobiel is a frontend and product engineer in Jakarta, Indonesia, who builds multi-agent AI teams and closed feedback loops (AI loop engineering) for shipping frontend code.",
  jobTitle: "Product Engineer",
  employer: "DANA Indonesia",
  email: "jonathangobiel13@gmail.com",
  locale: "en_US",
  twitterHandle: "@gobiel__",
  sameAs: [
    "https://github.com/gobielJonathan",
    "https://www.linkedin.com/in/jonathan-gobiel",
    "https://x.com/gobiel__",
  ],
  keywords: [
    "Jonathan Gobiel",
    "AI loop engineering",
    "multi-agent AI",
    "AI agent team",
    "AI code review",
    "AI QA automation",
    "human in the loop AI development",
    "product engineer",
    "frontend engineer",
    "Next.js developer",
    "React developer",
    "web performance",
    "Jakarta",
    "Indonesia",
  ],
} as const

export const personId = `${siteUrl}/#person`
export const websiteId = `${siteUrl}/#website`

/** The AI loop engineering series, in reading order. */
export const AI_SERIES = [
  "what-is-ai-loop-engineering",
  "ai-agent-team-frontend-codebase",
  "ai-pr-reviewers-useful-not-noisy",
  "ai-qa-loop-mobile-web-e2e",
  "human-in-the-loop-ai-development",
  "day-to-day-dev-efficiency-with-ai",
  "ai-assisted-frontend-performance-work",
] as const

/** Serialize JSON-LD safely for a <script> tag. */
export function jsonLd(data: unknown) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") }
}
