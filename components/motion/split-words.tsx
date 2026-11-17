"use client"

import { motion } from "framer-motion"

type SplitWordsProps = {
  text: string
  className?: string
  wordClassName?: string
  delay?: number
  stagger?: number
}

/** Each word rises out of a clipped line, one after another. */
export function SplitWords({ text, className, wordClassName, delay = 0, stagger = 0.06 }: SplitWordsProps) {
  const words = text.split(" ")
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.08em] align-bottom">
          <motion.span
            className={`inline-block ${wordClassName ?? ""}`}
            initial={{ y: "110%", rotate: 4 }}
            animate={{ y: "0%", rotate: 0 }}
            transition={{ duration: 0.75, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 ? "\u00a0" : null}
        </span>
      ))}
    </span>
  )
}
