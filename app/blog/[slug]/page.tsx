import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock3 } from "lucide-react"
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blogs"
import { BlogMarkdownRenderer } from "@/components/blog-markdown-renderer"
import { jsonLd, personId, site, siteUrl, websiteId } from "@/lib/site"

type BlogPostPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = await getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: "Post not found",
    }
  }

  const description = post.metaDescription || post.excerpt
  const keywords = [post.mainKeyword, ...(post.tags ?? []), "Jonathan Gobiel"].filter(Boolean) as string[]

  return {
    title: post.title,
    description,
    keywords,
    authors: [{ name: site.name, url: siteUrl }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description,
      type: "article",
      url: `/blog/${post.slug}`,
      siteName: site.name,
      locale: site.locale,
      publishedTime: post.updatedAt,
      modifiedTime: post.updatedAt,
      authors: [siteUrl],
      tags: keywords,
      // image: app/blog/[slug]/opengraph-image.tsx
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      creator: site.twitterHandle,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const postUrl = `${siteUrl}/blog/${post.slug}`
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${postUrl}#article`,
        headline: post.title,
        description: post.metaDescription || post.excerpt,
        datePublished: post.updatedAt,
        dateModified: post.updatedAt,
        url: postUrl,
        mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
        image: `${postUrl}/opengraph-image`,
        author: { "@type": "Person", "@id": personId, name: site.name, url: siteUrl, sameAs: [...site.sameAs] },
        publisher: { "@type": "Person", "@id": personId, name: site.name, url: siteUrl },
        isPartOf: { "@id": websiteId },
        keywords: [post.mainKeyword, ...(post.tags ?? [])].filter(Boolean).join(", "),
        wordCount: post.content.split(/\s+/).filter(Boolean).length,
        timeRequired: `PT${post.readingMinutes}M`,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
        ],
      },
    ],
  }

  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-6 sm:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(graph)}
      />
      <div className="absolute inset-0 mesh-bg" />

      <article className="relative z-10 mx-auto w-full max-w-4xl panel rounded-[2rem] p-6 sm:p-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
        >
          <ArrowLeft className="h-4 w-4" />
          All posts
        </Link>

        <p className="section-kicker mt-6">{post.mainKeyword || "engineering note"}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.06em] text-foreground sm:text-6xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          {post.tags?.length ? (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-border/70 bg-card/70 px-2.5 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <span className="inline-flex items-center gap-1">
            <Clock3 className="h-4 w-4" />
            {post.readingMinutes} min read
          </span>
          <time dateTime={post.updatedAt}>
            {new Date(post.updatedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          {post.source ? (
            <a
              href={post.source}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border/70 px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] text-foreground hover:bg-background"
            >
              Source
            </a>
          ) : null}
        </div>

        {post.heroUrl ? (
          <Image
            src={post.heroUrl}
            alt={`${post.title} cover image`}
            width={1200}
            height={480}
            sizes="(max-width: 768px) 100vw, 896px"
            priority
            className="mt-8 h-56 w-full rounded-[1.25rem] border border-border/70 object-cover sm:h-80"
          />
        ) : null}

        <BlogMarkdownRenderer content={post.content} />
      </article>
    </section>
  )
}
