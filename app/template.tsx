import type { ReactNode } from "react"

/**
 * Re-mounts on every navigation, so the CSS entrance (.page-enter in globals.css)
 * replays per route. CSS-only: no hydration wait, and transforms don't count toward CLS.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-enter">{children}</div>
}
