import Link from "next/link"
import { ArrowUp } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              YourName
            </Link>
            <p className="text-muted-foreground mt-2 max-w-md">
              A passionate Full Stack Developer specializing in building exceptional digital experiences.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <Link
              href="#"
              className="bg-primary text-primary-foreground h-10 w-10 rounded-full flex items-center justify-center mb-4 hover:bg-primary/90 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="h-5 w-5" />
            </Link>
            <p className="text-muted-foreground text-sm">© {currentYear} Your Name. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

