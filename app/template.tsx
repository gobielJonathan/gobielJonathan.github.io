"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

/** Re-mounts on every navigation, giving each route a soft entrance. */
export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ y: 12 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
