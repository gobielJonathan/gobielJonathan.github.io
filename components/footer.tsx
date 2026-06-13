import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { SocialRow } from "@/components/social-dock"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-background/70 py-12 backdrop-blur-md">
      <div className="absolute bottom-0 left-1/2 h-[120px] w-[420px] -translate-x-1/2 bg-primary/5 blur-[90px] pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="/" className="font-display text-3xl font-semibold tracking-[-0.05em] text-foreground">
              Jonathan Gobiel
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              Full stack engineer for teams that want the interface, architecture, and release quality to improve together.
            </p>
          </div>

          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:min-w-[420px]">
            <SocialRow />

            <div className="flex items-center gap-4">
              <p className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-muted-foreground">
                © {year}
              </p>
              <Link
                href="#home"
                className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/70 bg-card/80 text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-background"
                aria-label="Back to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



