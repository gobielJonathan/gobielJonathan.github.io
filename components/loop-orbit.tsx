"use client"

import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { loopStages } from "@/lib/loop"

type LoopOrbitProps = {
  step: number
  onSelect: (index: number) => void
  onHoverChange?: (hovering: boolean) => void
}

const COUNT = loopStages.length
const RADIUS = 42 // % of the square container

function nodePosition(index: number) {
  const angle = (index / COUNT) * Math.PI * 2 - Math.PI / 2
  return { left: `${50 + RADIUS * Math.cos(angle)}%`, top: `${50 + RADIUS * Math.sin(angle)}%` }
}

/**
 * The hero's signature: the delivery loop drawn as an orbit.
 * A signal travels node to node; the human gate is the one amber stop.
 */
export default function LoopOrbit({ step, onSelect, onHoverChange }: LoopOrbitProps) {
  const reduce = useReducedMotion()
  const active = ((step % COUNT) + COUNT) % COUNT
  const stage = loopStages[active]
  const circumference = 2 * Math.PI * 42

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[460px] select-none"
      onPointerEnter={() => onHoverChange?.(true)}
      onPointerLeave={() => onHoverChange?.(false)}
    >
      {/* rings */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
        <defs>
          <linearGradient id="loop-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--loop))" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="0.35" />
        <motion.circle
          cx="50"
          cy="50"
          r="42"
          fill="none"
          stroke="url(#loop-stroke)"
          strokeWidth="0.9"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          strokeDasharray={circumference}
          initial={false}
          animate={{ strokeDashoffset: circumference * (1 - active / COUNT) }}
          transition={{ duration: active === 0 ? 0.5 : 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
        <g className="origin-center animate-orbit" style={{ transformBox: "fill-box" }}>
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="hsl(var(--loop) / 0.55)"
            strokeWidth="0.3"
            strokeDasharray="0.6 2.2"
          />
        </g>
        <circle cx="50" cy="50" r="22" fill="hsl(var(--card) / 0.7)" stroke="hsl(var(--border))" strokeWidth="0.3" />
      </svg>

      {/* traveling signal */}
      <motion.div
        aria-hidden
        className="absolute inset-0"
        initial={false}
        animate={{ rotate: step * (360 / COUNT) }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 40, damping: 14 }}
      >
        <span
          className="absolute left-1/2 top-[8%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[hsl(var(--loop))] shadow-[0_0_18px_4px_hsl(var(--loop)/0.55)]"
        />
      </motion.div>

      {/* center readout */}
      <div className="absolute inset-[29%] flex flex-col items-center justify-center text-center">
        <span className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-muted-foreground">loop status</span>
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={stage.id}
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2"
          >
            <p
              className={`font-display text-xl font-semibold tracking-[-0.04em] sm:text-2xl ${
                stage.human ? "text-[hsl(var(--accent))]" : "text-foreground"
              }`}
            >
              {stage.label}
            </p>
            <p className="mx-auto mt-1 hidden max-w-[11rem] text-[0.72rem] leading-snug text-muted-foreground sm:block">
              {stage.status}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* nodes */}
      {loopStages.map((s, i) => {
        const isActive = i === active
        const pos = nodePosition(i)
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => onSelect(i)}
            onFocus={() => onSelect(i)}
            aria-pressed={isActive}
            aria-label={`${s.label}: ${s.detail}`}
            className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full focus-visible:outline-offset-4"
            style={pos}
          >
            <span className="relative flex items-center justify-center">
              {isActive && s.human ? (
                <span className="absolute h-10 w-10 rounded-full bg-[hsl(var(--accent)/0.45)] animate-pulse-ring" />
              ) : null}
              <motion.span
                initial={false}
                animate={{ scale: isActive ? 1 : 0.82 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`relative whitespace-nowrap rounded-full border px-3 py-1.5 font-mono text-[0.62rem] uppercase tracking-[0.16em] shadow-sm backdrop-blur-sm transition-colors duration-300 sm:text-[0.68rem] ${
                  isActive
                    ? s.human
                      ? "border-[hsl(var(--accent))] bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                      : "border-primary bg-primary text-primary-foreground"
                    : s.human
                      ? "border-[hsl(var(--accent)/0.6)] bg-card/90 text-foreground group-hover:border-[hsl(var(--accent))]"
                      : "border-border bg-card/90 text-muted-foreground group-hover:border-primary/60 group-hover:text-foreground"
                }`}
              >
                {s.label}
              </motion.span>
            </span>
          </button>
        )
      })}
    </div>
  )
}
