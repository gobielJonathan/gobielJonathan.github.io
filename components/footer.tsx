import Link from "next/link"
import { ArrowUp, Heart } from "lucide-react"
import { SocialRow } from "@/components/social-dock"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border/40 bg-background/60 backdrop-blur-xl py-12 overflow-hidden">
      {/* subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] h-[100px] bg-primary/5 blur-[80px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div>
            <Link href="/" className="text-lg font-bold text-gradient">
              Jonathan Gobiel
            </Link>
            <p className="text-xs text-muted-foreground mt-1 max-w-xs">
              Full Stack Engineer crafting exceptional digital experiences.
            </p>
          </div>

          {/* Social links — always visible in footer */}
          <SocialRow />

          {/* Right */}
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              © {year} — Made with <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 mx-0.5" /> in Jakarta
            </p>
            <Link
              href="#home"
              className="p-2 rounded-full border border-primary/30 bg-primary/5 hover:bg-primary/10 text-primary transition-all duration-200 hover:-translate-y-0.5"
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



