import "server-only"

import { cache } from "react"
import { promises as fs } from "fs"
import path from "path"

export type BlogPost = {
  slug: string
  title: string
  metaDescription: string
  mainKeyword: string
  source?: string
  content: string
  excerpt: string
  readingMinutes: number
  updatedAt: string
  heroUrl?: string
}

const BLOGS_DIR = path.join(process.cwd(), "blogs")

function parsePostFile(raw: string) {
  const lines = raw.split(/\r?\n/)

  const titleLine = lines.find((line) => line.trim().startsWith("# "))?.trim() ?? ""
  const title = titleLine.replace(/^#\s+/, "").trim() || "Untitled"

  const metaDescription =
    lines.find((line) => line.trim().startsWith("Meta Description:"))?.replace("Meta Description:", "").trim() ?? ""

  const mainKeyword =
    lines.find((line) => line.trim().startsWith("Main Keyword:"))?.replace("Main Keyword:", "").trim() ?? ""

  const source =
    lines.find((line) => line.trim().startsWith("Source:"))?.replace("Source:", "").trim() ?? undefined

  let bodyStart = 0
  for (let i = 0; i < lines.length; i += 1) {
    const trimmed = lines[i].trim()

    if (!trimmed) {
      continue
    }

    if (
      trimmed.startsWith("# ") ||
      trimmed.startsWith("Meta Description:") ||
      trimmed.startsWith("Main Keyword:") ||
      trimmed.startsWith("Source:")
    ) {
      continue
    }

    bodyStart = i
    break
  }

  const content = lines.slice(bodyStart).join("\n").trim()

  const firstParagraph =
    content
      .split(/\n\s*\n/)
      .map((chunk) => chunk.trim())
      .find((chunk) => chunk && !chunk.startsWith("##") && !chunk.startsWith("-") && !chunk.startsWith("```")) ?? ""

  const excerpt = firstParagraph.slice(0, 220)
  const wordCount = content.split(/\s+/).filter(Boolean).length
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 220))

  return {
    title,
    metaDescription,
    mainKeyword,
    source,
    content,
    excerpt,
    readingMinutes,
  }
}

export const getAllBlogPosts = cache(async (): Promise<BlogPost[]> => {
  const entries = await fs.readdir(BLOGS_DIR, { withFileTypes: true })
  const dirs = entries.filter((entry) => entry.isDirectory())

  const posts = await Promise.all(
    dirs.map(async (dir) => {
      const slug = dir.name
      const postPath = path.join(BLOGS_DIR, slug, "post.md")
      const heroPath = path.join(BLOGS_DIR, slug, "hero.png")
      const stats = await fs.stat(postPath)
      const raw = await fs.readFile(postPath, "utf8")
      const parsed = parsePostFile(raw)

      let heroUrl: string | undefined
      try {
        await fs.access(heroPath)
        heroUrl = `/blog-assets/${slug}`
      } catch {
        heroUrl = undefined
      }

      return {
        slug,
        updatedAt: stats.mtime.toISOString(),
        heroUrl,
        ...parsed,
      }
    }),
  )

  return posts.sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt))
})

export const getBlogPostBySlug = cache(async (slug: string): Promise<BlogPost | null> => {
  const safeSlug = slug.replace(/[^a-zA-Z0-9-_]/g, "")

  if (!safeSlug) {
    return null
  }

  const postPath = path.join(BLOGS_DIR, safeSlug, "post.md")
  const heroPath = path.join(BLOGS_DIR, safeSlug, "hero.png")

  try {
    const stats = await fs.stat(postPath)
    const raw = await fs.readFile(postPath, "utf8")
    const parsed = parsePostFile(raw)

    let heroUrl: string | undefined
    try {
      await fs.access(heroPath)
      heroUrl = `/blog-assets/${safeSlug}`
    } catch {
      heroUrl = undefined
    }

    return {
      slug: safeSlug,
      updatedAt: stats.mtime.toISOString(),
      heroUrl,
      ...parsed,
    }
  } catch {
    return null
  }
})

export async function getBlogSlugs(): Promise<string[]> {
  const posts = await getAllBlogPosts()
  return posts.map((post) => post.slug)
}
