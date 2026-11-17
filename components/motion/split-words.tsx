import type { CSSProperties } from "react"

type SplitWordsProps = {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
}

/**
 * Each word rises out of a clipped line, one after another.
 * Pure CSS (see .word-rise in globals.css): it renders on the server and starts on
 * first paint, so headings never wait for hydration (good for LCP) and the
 * reduced-motion rule in globals.css shows them instantly.
 */
export function SplitWords({ text, className, wordClassName, delay = 0, stagger = 0.06 }: SplitWordsProps) {
  const words = text.split(" ")
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <span
            className={`word-rise inline-block ${wordClassName ?? ""}`}
            style={{ "--word-delay": `${delay + i * stagger}s` } as CSSProperties}
          >
            {word}
          </span>
          {i < words.length - 1 ? "\u00a0" : null}
        </span>
      ))}
    </span>
  )
}
