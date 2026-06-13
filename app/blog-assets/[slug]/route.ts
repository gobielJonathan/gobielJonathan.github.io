import { promises as fs } from "fs"
import path from "path"

type Params = {
  params: Promise<{ slug: string }>
}

const BLOGS_DIR = path.join(process.cwd(), "blogs")

function sanitizeSlug(input: string) {
  return input.replace(/[^a-zA-Z0-9-_]/g, "")
}

export async function GET(_: Request, { params }: Params) {
  const { slug } = await params
  const safeSlug = sanitizeSlug(slug)

  if (!safeSlug) {
    return new Response("Not found", { status: 404 })
  }

  const heroPath = path.join(BLOGS_DIR, safeSlug, "hero.png")

  try {
    const image = await fs.readFile(heroPath)

    return new Response(image, {
      headers: {
        "Content-Type": "image/png",
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    })
  } catch {
    return new Response("Not found", { status: 404 })
  }
}
