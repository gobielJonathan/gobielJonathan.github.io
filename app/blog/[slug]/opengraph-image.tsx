import { getBlogPostBySlug, getBlogSlugs } from "@/lib/blogs"
import { ogSize, renderOgCard } from "@/lib/og/card"

export const alt = "Blog post by Jonathan Gobiel"
export const size = ogSize
export const contentType = "image/png"

export async function generateStaticParams() {
  const slugs = await getBlogSlugs()
  return slugs.map((slug) => ({ slug }))
}

export default async function PostOpengraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await getBlogPostBySlug(slug)
  return renderOgCard({
    eyebrow: post?.mainKeyword || "Blog",
    title: post?.title ?? "Jonathan Gobiel",
    footer: `gobiel.online/blog`,
  })
}
