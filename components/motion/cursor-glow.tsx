"use client"

import { useEffect, useRef } from "react"

/**
 * A soft gradient that trails the cursor across the page.
 * Skipped on touch devices and when the user prefers reduced motion.
 * Writes only CSS variables inside rAF, so it never triggers React renders.
 */
export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)")
    if (!mq.matches || !ref.current) return
    const el = ref.current
    let frame = 0
    let tx = window.innerWidth / 2
    let ty = window.innerHeight / 3
    let cx = tx
    let cy = ty

    const tick = () => {
      cx += (tx - cx) * 0.12
      cy += (ty - cy) * 0.12
      el.style.setProperty("--gx", `${cx}px`)
      el.style.setProperty("--gy", `${cy}px`)
      if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) {
        frame = requestAnimationFrame(tick)
      } else {
        frame = 0
      }
    }
    const onMove = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
      el.style.opacity = "1"
      if (!frame) frame = requestAnimationFrame(tick)
    }
    const onLeave = () => {
      el.style.opacity = "0"
    }

    window.addEventListener("pointermove", onMove, { passive: true })
    document.documentElement.addEventListener("pointerleave", onLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("pointermove", onMove)
      document.documentElement.removeEventListener("pointerleave", onLeave)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-0 transition-opacity duration-500"
      style={{
        background:
          "radial-gradient(520px circle at var(--gx, 50%) var(--gy, 30%), hsl(var(--primary) / 0.09), hsl(var(--loop) / 0.05) 40%, transparent 70%)",
      }}
    />
  )
}
