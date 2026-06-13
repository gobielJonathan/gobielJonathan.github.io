import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Clock3 } from "lucide-react"
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blogs"
import { BlogMarkdownRenderer } from "@/components/blog-markdown-renderer"

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

  return {
    title: post.title,
    description: post.metaDescription || post.excerpt,
    keywords: post.mainKeyword ? [post.mainKeyword] : undefined,
    authors: [{ name: "Jonathan Gobiel", url: "https://www.gobiel.online" }],
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.updatedAt,
      modifiedTime: post.updatedAt,
      authors: ["Jonathan Gobiel"],
      tags: post.mainKeyword ? [post.mainKeyword] : undefined,
      images: post.heroUrl
        ? [{ url: post.heroUrl, alt: `${post.title} cover image` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: post.heroUrl ? [post.heroUrl] : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    datePublished: post.updatedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: "Jonathan Gobiel",
      url: "https://www.gobiel.online",
    },
    publisher: {
      "@type": "Person",
      name: "Jonathan Gobiel",
      url: "https://www.gobiel.online",
    },
    url: `https://www.gobiel.online/blog/${post.slug}`,
    ...(post.heroUrl ? { image: `https://www.gobiel.online${post.heroUrl}` } : {}),
    keywords: post.mainKeyword,
    inLanguage: "en-US",
  }

  return (
    <section className="relative overflow-hidden px-5 pb-24 pt-28 sm:px-6 sm:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="absolute inset-0 mesh-bg" />

      <article className="relative z-10 mx-auto w-full max-w-4xl panel rounded-[2rem] p-6 sm:p-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-background"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>

        <p className="section-kicker mt-6">{post.mainKeyword || "engineering note"}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.06em] text-foreground sm:text-6xl">
          {post.title}
        </h1>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
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
