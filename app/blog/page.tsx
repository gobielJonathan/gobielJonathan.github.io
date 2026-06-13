import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Clock3 } from "lucide-react"
import { getAllBlogPosts } from "@/lib/blogs"

export const metadata: Metadata = {
  title: "Engineering Blog — React, Next.js & Web Performance",
  description:
    "In-depth guides and case studies from Jonathan Gobiel: Next.js performance optimization, React architecture, Core Web Vitals, and full stack engineering best practices.",
  keywords: [
    "Next.js blog",
    "React engineering blog",
    "web performance guides",
    "Next.js performance optimization",
    "full stack developer blog indonesia",
    "Core Web Vitals tutorial",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "Engineering Blog — React, Next.js & Web Performance | Jonathan Gobiel",
    description:
      "In-depth guides and case studies on Next.js performance, React architecture, and Core Web Vitals from a full stack engineer.",
    url: "/blog",
  },
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.gobiel.online" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.gobiel.online/blog" },
    ],
  }

  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-6 sm:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="absolute inset-0 mesh-bg" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="panel panel-grid rounded-[2rem] p-6 sm:p-10">
          <p className="section-kicker">Writing desk</p>
          <h1 className="mt-3 font-display text-5xl font-semibold tracking-[-0.07em] text-foreground sm:text-7xl">
            Notes from shipped software.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Essays and field notes on frontend architecture, performance, and practical AI coding workflows.
          </p>
        </header>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="panel group flex h-full flex-col rounded-[1.75rem] p-5 sm:p-6">
              {post.heroUrl ? (
                <Image
                  src={post.heroUrl}
                  alt={`${post.title} cover image`}
                  width={800}
                  height={176}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="mb-5 h-44 w-full rounded-[1.2rem] border border-border/70 object-cover"
                />
              ) : null}

              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.24em] text-foreground">
                  {post.mainKeyword || "engineering"}
                </span>
                <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock3 className="h-4 w-4" />
                  {post.readingMinutes} min
                </span>
              </div>

              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-[-0.05em] text-foreground">
                {post.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground sm:text-base">
                {post.metaDescription || post.excerpt}
              </p>

              <div className="mt-6 flex items-center justify-between">
                <time
                  dateTime={post.updatedAt}
                  className="font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground"
                >
                  {new Date(post.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </time>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
                >
                  Read
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
