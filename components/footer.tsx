import Link from "next/link"
import { ArrowUp, ArrowUpRight } from "lucide-react"
import { SocialRow } from "@/components/social-dock"
import { Magnetic } from "@/components/motion/magnetic"
import { Reveal } from "@/components/motion/reveal"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border/60 pt-20 pb-10">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="section-kicker">Contact</span>
            <p className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.055em] text-foreground sm:text-6xl">
              Building with agents too?
              <span className="block text-gradient">Let&apos;s compare loops.</span>
            </p>
          </div>
          <Magnetic>
            <a
              href="mailto:jonathangobiel13@gmail.com"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-foreground px-7 text-sm font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              jonathangobiel13@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Magnetic>
        </Reveal>

        <div className="mt-16 flex flex-col gap-6 border-t border-border/60 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <SocialRow />
          <div className="flex items-center gap-4">
            <p className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-muted-foreground">
              © {year} Jonathan Gobiel
            </p>
            <Link
              href="/#home"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-card/80 text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
              aria-label="Back to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
