import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Full Stack Developer Portfolio in Indonesia",
  description:
    "Explore a full stack developer portfolio in Indonesia. Review Next.js, React, and Node.js case studies, work experience, and engineering outcomes.",
}

export default function Home() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Jonathan Gobiel",
    url: "https://www.gobiel.online",
    image: "https://www.gobiel.online/me.jpg",
    jobTitle: "Full Stack Engineer",
    sameAs: [
      "https://github.com/gobielJonathan",
      "https://www.linkedin.com/in/jonathan-gobiel/",
      "https://x.com/gobiel__",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "Node.js",
      "TypeScript",
      "Web Performance",
      "Frontend Architecture",
    ],
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Footer />
    </div>
  )
}


