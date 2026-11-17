import { ogSize, renderOgCard } from "@/lib/og/card"

export const alt = "Jonathan Gobiel's blog: AI loop engineering, frontend and web performance"
export const size = ogSize
export const contentType = "image/png"

export default function BlogOpengraphImage() {
  return renderOgCard({ eyebrow: "Blog · gobiel.online/blog", title: "Notes from the loop: AI agents, frontend and performance." })
}
