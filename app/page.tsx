import type { Metadata } from "next"
import Hero from "@/components/hero"
import AgentLoop from "@/components/agent-loop"
import Writing, { type WritingPost } from "@/components/writing"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import About from "@/components/about"
import Footer from "@/components/footer"
import { getAllBlogPosts } from "@/lib/blogs"
import { AI_SERIES, jsonLd, personId, site, siteUrl, websiteId } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
}

export default async function Home() {
  const all = await getAllBlogPosts()
  const bySlug = new Map(all.map((p) => [p.slug, p]))
  const series: WritingPost[] = AI_SERIES.flatMap((slug) => {
    const p = bySlug.get(slug)
    return p
      ? [
          {
            slug: p.slug,
            title: p.title,
            description: p.metaDescription || p.excerpt,
            keyword: p.mainKeyword || "AI engineering",
            readingMinutes: p.readingMinutes,
            updatedAt: p.updatedAt,
          },
        ]
      : []
  })

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: site.name,
        url: siteUrl,
        image: `${siteUrl}/me.jpg`,
        email: `mailto:${site.email}`,
        jobTitle: site.jobTitle,
        description: site.description,
        worksFor: { "@type": "Organization", name: site.employer },
        alumniOf: { "@type": "CollegeOrUniversity", name: "Bina Nusantara University" },
        address: { "@type": "PostalAddress", addressLocality: "Jakarta", addressCountry: "ID" },
        sameAs: [...site.sameAs],
        knowsAbout: [
          "AI loop engineering",
          "Multi-agent AI systems",
          "AI-assisted code review",
          "End-to-end test automation",
          "Frontend engineering",
          "Next.js",
          "React",
          "TypeScript",
          "Web performance",
        ],
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: siteUrl,
        name: site.name,
        description: site.shortDescription,
        inLanguage: "en-US",
        publisher: { "@id": personId },
        author: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profile`,
        url: siteUrl,
        name: site.title,
        isPartOf: { "@id": websiteId },
        mainEntity: { "@id": personId },
      },
    ],
  }

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />
      <Hero />
      <AgentLoop />
      <Writing posts={series} />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </div>
  )
}
