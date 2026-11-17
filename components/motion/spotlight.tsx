"use client"

import type { HTMLAttributes, PointerEvent } from "react"

/** Card whose border and wash follow the pointer (see .spotlight in globals.css). */
export function Spotlight({ className, children, ...rest }: HTMLAttributes<HTMLDivElement>) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`)
    el.style.setProperty("--my", `${e.clientY - rect.top}px`)
  }
  return (
    <div onPointerMove={onMove} className={`spotlight ${className ?? ""}`} {...rest}>
      {children}
    </div>
  )
}
