# Lazy Loading Animation Components in Next.js

Meta Description: Learn how to lazy-load Lottie, Framer Motion, and GSAP animation components in Next.js using dynamic imports — with real bundle reduction results.
Main Keyword: lazy loading animation Next.js

Animation libraries are among the heaviest dependencies in any frontend project. Framer Motion, Lottie, GSAP, and Three.js can each add 50–500 KB to your bundle — and if they're eagerly loaded, every user pays that cost even if they never see the animation.

Lazy loading animation components is one of the highest-impact performance wins I've found in production Next.js apps. In one project, it reduced the initial bundle by 79%.

## The Problem With Eager Animation Imports

When you import an animation library at the top of a component that's included in your initial bundle, that entire library ships with the first page load — even if the animation only appears after scroll or interaction.

```
// This ships Lottie to ALL users on initial load
import Lottie from 'lottie-react'
import animationData from '@/animations/hero.json'

export function HeroAnimation() {
  return <Lottie animationData={animationData} />
}
```

If `HeroAnimation` is below the fold, or only visible after a user action, there's no reason to block the initial page load with it.

## The Fix: `next/dynamic` with `ssr: false`

```
import dynamic from 'next/dynamic'

const HeroAnimation = dynamic(
  () => import('@/components/HeroAnimation'),
  {
    ssr: false,
    loading: () => (
      <div className="h-64 w-64 animate-pulse rounded-full bg-muted" />
    ),
  }
)

export function LandingPage() {
  return (
    <section>
      <h1>Welcome</h1>
      <HeroAnimation />
    </section>
  )
}
```

`ssr: false` tells Next.js to skip server rendering for this component and load it only in the browser — which also means it's excluded from the initial JS bundle.

## When to Use `ssr: false` vs Keeping SSR Enabled

| Component type | Use `ssr: false`? |
|---|---|
| Lottie / animation JSON | Yes — no server rendering needed |
| Three.js / WebGL canvas | Yes — requires browser APIs |
| Framer Motion components | Usually no — SSR safe, lazy-load for bundle |
| Chart libraries (Recharts, Chart.js) | Yes — often use browser APIs |
| Rich text editors | Yes — window-dependent |
| React Leaflet / map components | Yes — requires window |

## Lazy Loading Framer Motion Sections

Framer Motion itself is SSR-safe, so you don't need `ssr: false`. But if you have a section that's entirely below the fold and uses Framer Motion, you can still defer its download:

```
import dynamic from 'next/dynamic'

const ProjectsSection = dynamic(
  () => import('@/components/ProjectsSection'),
  {
    loading: () => (
      <div className="grid grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-48 animate-pulse rounded-2xl bg-muted" />
        ))}
      </div>
    ),
  }
)
```

The loading skeleton prevents layout shift (CLS) while the component downloads.

## Intersection Observer: Only Load When Visible

For even more aggressive deferral, combine dynamic imports with an Intersection Observer — only start loading when the section enters the viewport:

```
'use client'

import { useRef, useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const HeavyAnimation = dynamic(() => import('@/components/HeavyAnimation'), {
  ssr: false,
})

export function LazyAnimationSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' } // start loading 200px before visible
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref}>
      {visible ? <HeavyAnimation /> : <div className="h-64 rounded-2xl bg-muted/40" />}
    </div>
  )
}
```

This is most useful for below-the-fold animations on long pages where users might not scroll at all.

## Optimising the Animation Files Themselves

Lazy loading buys you time but doesn't reduce the file size. After deferring, optimise the animation assets:

**Lottie JSON files:**
- Use LottieFiles Toolkit to reduce JSON size (often 50–80% reduction)
- Remove unused layers in After Effects before export
- Consider converting to dotLottie format (.lottie) — a compressed binary format

**Framer Motion:**
- Use `LazyMotion` with `domAnimation` feature set for a smaller bundle:

```
import { LazyMotion, domAnimation, m } from 'framer-motion'

export function AnimatedSection() {
  return (
    <LazyMotion features={domAnimation}>
      <m.div animate={{ opacity: 1 }}>...</m.div>
    </LazyMotion>
  )
}
```

This reduces the Framer Motion bundle from ~34 KB to ~18 KB.

## Real-World Results

From a production Next.js app I audited:

- **Before:** Lottie imported at top level → 487 KB initial JS
- **After:** Lazy-loaded with `next/dynamic` + optimised JSON → 102 KB initial JS
- **Reduction: 79%**

The animation was below the fold on the landing page. No user saw it on initial load. Paying 385 KB for content invisible at first view was pure waste.

## Respecting `prefers-reduced-motion`

Don't forget users who prefer no motion — a11y best practice and a sign of a thoughtful engineer:

```
'use client'

import { useReducedMotion } from 'framer-motion'
import dynamic from 'next/dynamic'

const Animation = dynamic(() => import('./HeavyAnimation'), { ssr: false })

export function AnimationWrapper() {
  const prefersReduced = useReducedMotion()
  if (prefersReduced) return null
  return <Animation />
}
```

This also means users with reduced motion never download the animation bundle at all.

## FAQ

**Does lazy loading animations hurt the user experience?**
No — if you provide a skeleton placeholder and load slightly ahead of the scroll position (use `rootMargin` on the Intersection Observer), users see a smooth experience with no jarring shift.

**Should I lazy-load all animations?**
Lazy-load anything below the fold or behind an interaction. Keep hero animations (above the fold, immediately visible) eager-loaded to avoid pop-in.

**What's the difference between `next/dynamic` and React `lazy`?**
`next/dynamic` wraps React's `lazy` and `Suspense` but adds Next.js-specific features like `ssr: false` and a `loading` prop. Always prefer `next/dynamic` in Next.js apps.
