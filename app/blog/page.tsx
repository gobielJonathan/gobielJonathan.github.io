import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Clock3 } from "lucide-react"
import { getAllBlogPosts, type BlogPost } from "@/lib/blogs"
import { Reveal } from "@/components/motion/reveal"
import { Spotlight } from "@/components/motion/spotlight"
import { SplitWords } from "@/components/motion/split-words"
import { AI_SERIES, jsonLd, personId, site, siteUrl, websiteId } from "@/lib/site"

export const metadata: Metadata = {
  title: "Blog — AI Loop Engineering, Frontend & Web Performance",
  description:
    "Field notes from Jonathan Gobiel on AI loop engineering, multi-agent teams for frontend codebases, AI code review, Next.js performance, and React architecture.",
  keywords: [
    "AI loop engineering",
    "AI agents for frontend",
    "AI code review",
    "Next.js blog",
    "web performance guides",
    "React engineering blog",
  ],
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    type: "website",
    title: "Blog — AI Loop Engineering, Frontend & Web Performance | Jonathan Gobiel",
    description:
      "Field notes on AI loop engineering, agent teams, AI code review, and frontend performance from a product engineer.",
    url: "/blog",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — AI Loop Engineering, Frontend & Web Performance | Jonathan Gobiel",
    description:
      "Field notes on AI loop engineering, agent teams, AI code review, and frontend performance from a product engineer.",
  },
}

const AI_SET = new Set<string>(AI_SERIES)

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Reveal delay={(index % 2) * 0.06} y={24} className="h-full">
      <Spotlight className="group h-full rounded-[1.5rem] border border-border/70 bg-card/85 transition-transform duration-500 hover:-translate-y-1">
        <Link href={`/blog/${post.slug}`} className="flex h-full flex-col p-5 sm:p-6">
          {post.heroUrl ? (
            <div className="relative mb-5 h-44 overflow-hidden rounded-[1.1rem] border border-border/70">
              <Image
                src={post.heroUrl}
                alt={`${post.title} cover image`}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
              />
            </div>
          ) : null}
          <div className="flex items-center justify-between gap-4">
            <span className="chip">{post.mainKeyword || "engineering"}</span>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Clock3 className="h-3.5 w-3.5" />
              {post.readingMinutes} min
            </span>
          </div>
          <h2 className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.04em] text-foreground sm:text-[1.7rem]">
            {post.title}
          </h2>
          <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{post.metaDescription || post.excerpt}</p>
          <div className="mt-6 flex items-center justify-between">
            <time dateTime={post.updatedAt} className="font-mono text-[0.64rem] uppercase tracking-[0.2em] text-muted-foreground">
              {formatDate(post.updatedAt)}
            </time>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-foreground">
              <span className="link-draw">Read</span>
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
            </span>
          </div>
        </Link>
      </Spotlight>
    </Reveal>
  )
}

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  const aiPosts = posts.filter((p) => AI_SET.has(p.slug))
  const otherPosts = posts.filter((p) => !AI_SET.has(p.slug))

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        "@id": `${siteUrl}/blog#blog`,
        url: `${siteUrl}/blog`,
        name: "Jonathan Gobiel's blog",
        description: "Field notes on AI loop engineering, agent teams, AI code review, and frontend performance.",
        inLanguage: "en-US",
        isPartOf: { "@id": websiteId },
        author: { "@type": "Person", "@id": personId, name: site.name, url: siteUrl },
        blogPost: posts.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          url: `${siteUrl}/blog/${p.slug}`,
          datePublished: p.updatedAt,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
        ],
      },
    ],
  }

  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-6 sm:pt-36">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLd(graph)} />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <header className="max-w-4xl">
          <p className="section-kicker">Writing desk · {posts.length} posts</p>
          <h1 className="mt-4 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.065em] text-foreground sm:text-7xl">
            <SplitWords text="Notes from" className="block" />
            <SplitWords text="the loop." className="block" wordClassName="text-gradient" delay={0.15} />
          </h1>
          <Reveal delay={0.3}>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              How I build frontend software with AI agent teams, plus the performance and architecture lessons that came
              before them.
            </p>
          </Reveal>
        </header>

        {aiPosts.length ? (
          <>
            <Reveal className="mt-16 flex items-center gap-4">
              <span className="section-kicker text-primary">AI loop engineering</span>
              <div className="h-px flex-1 bg-border/70" />
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                {aiPosts.length} posts
              </span>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {aiPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </>
        ) : null}

        {otherPosts.length ? (
          <>
            <Reveal className="mt-20 flex items-center gap-4">
              <span className="section-kicker">Frontend, performance &amp; more</span>
              <div className="h-px flex-1 bg-border/70" />
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">
                {otherPosts.length} posts
              </span>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {otherPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </section>
  )
}
