import { ogSize, renderOgCard } from "@/lib/og/card"

export const alt = "Jonathan Gobiel, product engineer building software with AI agents in the loop"
export const size = ogSize
export const contentType = "image/png"

export default function OpengraphImage() {
  return renderOgCard({ eyebrow: "Product engineer · Jakarta", title: "Product engineering with AI agents in the loop." })
}
