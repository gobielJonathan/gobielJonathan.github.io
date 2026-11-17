"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/motion/reveal"
import { Spotlight } from "@/components/motion/spotlight"

export type WritingPost = {
  slug: string
  title: string
  description: string
  keyword: string
  readingMinutes: number
  updatedAt: string
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })

export default function Writing({ posts }: { posts: WritingPost[] }) {
  if (!posts.length) return null
  const [lead, ...rest] = posts

  return (
    <section id="writing" className="relative py-24 sm:py-32">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">Writing · AI loop engineering series</span>
            <h2 className="section-heading mt-3 max-w-2xl">
              {posts.length} field notes on building software with agent teams.
            </h2>
          </div>
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 self-start text-sm font-semibold text-foreground md:self-auto"
          >
            <span className="link-draw">All posts</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <Reveal className="h-full">
            <Spotlight className="group h-full rounded-[1.6rem] border border-border/70 bg-card/85">
              <Link href={`/blog/${lead.slug}`} className="flex h-full flex-col p-6 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="chip">Part 1 · start here</span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {lead.readingMinutes} min
                  </span>
                </div>
                {/* mini loop glyph */}
                <div aria-hidden className="relative my-10 flex h-36 items-center justify-center">
                  <motion.div
                    className="absolute h-36 w-36 rounded-full border border-dashed border-[hsl(var(--loop)/0.6)]"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="absolute h-24 w-24 rounded-full border border-primary/40 transition-transform duration-700 group-hover:scale-110" />
                  <span className="font-display text-4xl font-semibold tracking-[-0.06em] text-gradient">↻</span>
                </div>
                <h3 className="font-display text-3xl font-semibold leading-tight tracking-[-0.045em] text-foreground sm:text-4xl">
                  {lead.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-7 text-muted-foreground sm:text-base">{lead.description}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read part 1
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Spotlight>
          </Reveal>

          <ol className="flex flex-col gap-3">
            {rest.map((post, i) => (
              <motion.li
                key={post.slug}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "0px 0px -8% 0px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Spotlight className="group rounded-[1.2rem] border border-border/70 bg-card/75 transition-transform duration-300 hover:-translate-y-0.5">
                  <Link href={`/blog/${post.slug}`} className="flex items-start gap-4 p-4 sm:p-5">
                    <span className="mt-1 w-12 shrink-0 font-mono text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                      Part {i + 2}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display text-lg font-semibold leading-snug tracking-[-0.03em] text-foreground sm:text-xl">
                        {post.title}
                      </h3>
                      <p className="mt-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                        {post.keyword} · {post.readingMinutes} min · {formatDate(post.updatedAt)}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>
                </Spotlight>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
