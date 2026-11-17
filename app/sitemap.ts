import type { MetadataRoute } from "next"
import { getAllBlogPosts } from "@/lib/blogs"
import { siteUrl } from "@/lib/site"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllBlogPosts()
  const latestPost = posts.reduce<Date | undefined>((latest, post) => {
    if (!post.publishedAt) return latest
    const d = new Date(post.publishedAt)
    return !latest || d > latest ? d : latest
  }, undefined)

  const pages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: latestPost ?? new Date(),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/me.jpg`],
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: latestPost ?? new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ]

  // Posts without a "Published:" line fall back to file mtime, which on CI is just the
  // checkout time, so leave lastModified off for them rather than report a fake date.
  const blogPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    ...(post.publishedAt ? { lastModified: new Date(post.publishedAt) } : {}),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...pages, ...blogPages]
}
