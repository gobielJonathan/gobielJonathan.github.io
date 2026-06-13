# Next.js Performance Optimization Case Study: 66% Bundle Reduction

Meta Description: Real Next.js performance case study: 66% bundle size reduction, Core Web Vitals improvement, and the exact code changes that achieved it in a production app.
Main Keyword: Next.js performance optimization case study

This is a record of a real performance audit and optimisation I ran on a mid-size Next.js application — a marketing site with 12+ pages, heavy animations, and several third-party integrations. I'm documenting the exact issues found, the fixes applied, and the measurable outcomes.

## Starting Point: The Performance Audit

Before touching any code, I ran a complete audit using:
- Lighthouse (3G throttled, incognito mode)
- `@next/bundle-analyzer` treemap
- Chrome DevTools Performance panel
- WebPageTest (real device, real network)

**Baseline scores:**
- LCP: 4.2s (Poor)
- INP: 380ms (Needs Improvement)
- CLS: 0.18 (Needs Improvement)
- Total JS bundle: 620 KB (gzipped: 187 KB)
- Time to Interactive: 6.8s

## Issue 1: Broken Code-Splitting Boundary

**Symptom:** The bundle analyser showed that code specific to the `/products` page was appearing in the root bundle, loading on every page regardless of route.

**Root cause:** A shared `Layout` component was importing a `ProductFilters` component — which in turn imported a heavy filtering library — at the top level. Even pages that never showed product filters were loading this code.

**Fix:**
```
// Before: layout.tsx (ships to ALL routes)
import ProductFilters from '@/components/ProductFilters'

// After: only import where needed, with dynamic()
// products/page.tsx
import dynamic from 'next/dynamic'
const ProductFilters = dynamic(() => import('@/components/ProductFilters'))
```

**Result: -18% reduction in root bundle.**

## Issue 2: Lottie Animation Eagerly Imported

**Symptom:** Lottie was appearing in the initial JS bundle despite the animation being below the fold on the landing page.

**Root cause:** The animation component was imported normally at the top of `HeroSection.tsx`, and `HeroSection` was imported in `page.tsx`. Even though the animation was below the fold, it loaded with the first paint.

**The animation JSON file alone was 340 KB. The Lottie library was another 147 KB.**

**Fix:**
```
// Before: eagerly loaded
import Lottie from 'lottie-react'
import animData from '@/animations/product-demo.json'

// After: lazy-loaded, deferred until viewport entry
import dynamic from 'next/dynamic'

const LottiePlayer = dynamic(
  () => import('@/components/LottiePlayer'),
  { ssr: false, loading: () => <div className="h-80 rounded-2xl animate-pulse bg-muted" /> }
)
```

**Result: -79% main page bundle.** The page went from 487 KB to 102 KB of initial JS.

## Issue 3: Hero Image Missing `priority`

**Symptom:** Lighthouse flagged the LCP image as being discovered too late. The waterfall showed the hero image request starting 1.2 seconds after navigation began.

**Root cause:** `next/image` lazy-loads by default. The hero image — the LCP element — was deprioritised behind JavaScript execution.

**Fix:**
```
<Image
  src="/hero.jpg"
  alt="Product dashboard"
  width={1200}
  height={600}
  priority  // ← the entire fix
  sizes="(max-width: 768px) 100vw, 1200px"
/>
```

**Result: -620ms LCP.**

## Issue 4: Google Fonts via `<link>` Tag

**Symptom:** Two DNS lookups for `fonts.googleapis.com` and `fonts.gstatic.com` were appearing in the waterfall, each blocking render for 200–300ms on a slow connection.

**Root cause:** The original code loaded fonts with a `<link>` tag in the `<head>`. This requires an external DNS resolution and download before the font is available.

**Fix:**
```
// Before: external link in HTML
// <link href="https://fonts.googleapis.com/css2?family=Inter..." />

// After: next/font — self-hosted, zero external requests
import { Inter } from 'next/font/google'
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true,
})
```

**Result: -280ms LCP, eliminated 2 external DNS lookups.**

## Issue 5: Hero Section in Client Component

**Symptom:** The LCP element (a large H1 and background image) was inside a `"use client"` component. Chrome Performance showed it didn't render until after JavaScript parsed and executed — approximately 900ms into page load.

**Root cause:** An `onClick` handler for a single scroll button forced the entire HeroSection to be a client component, including the H1 and background image.

**Fix:** Split the component into a server-rendered shell with the LCP content, and a minimal client component for just the interactive button:

```
// HeroSection.tsx — server component (default)
import { ScrollButton } from './ScrollButton' // client component

export function HeroSection() {
  return (
    <section>
      <h1>The main heading renders on the server now</h1>
      <Image src="/hero.jpg" alt="..." width={1200} height={600} priority />
      <ScrollButton /> {/* only the button is client-side */}
    </section>
  )
}

// ScrollButton.tsx
'use client'
export function ScrollButton() {
  return (
    <button onClick={() => document.getElementById('features')?.scrollIntoView()}>
      Learn more
    </button>
  )
}
```

**Result: -340ms LCP**, hero rendered ~900ms earlier.

## Issue 6: No Image `sizes` Attribute

**Symptom:** Mobile users were downloading 1200px-wide images despite their screens being 390px wide. The network waterfall showed 420 KB image downloads on mobile.

**Fix:** Added correct `sizes` to all images:
```
<Image
  src="/feature-screenshot.jpg"
  alt="Feature screenshot"
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
/>
```

**Result: -70% image payload on mobile devices.**

## Final Results

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| LCP | 4.2s | 1.6s | -62% |
| INP | 380ms | 145ms | -62% |
| CLS | 0.18 | 0.04 | -78% |
| Total JS | 620 KB | 210 KB | -66% |
| TTI | 6.8s | 2.4s | -65% |
| Lighthouse Performance | 41 | 94 | +53 points |

**All Core Web Vitals moved from Poor/Needs Improvement to Good.**

## The Fix Priority Order

If you're doing a similar audit, this is the order I recommend tackling optimisations:

1. Add `priority` to hero images (30 minutes, high impact)
2. Switch fonts from `<link>` to `next/font` (1 hour, high impact)
3. Identify and fix broken code-splitting boundaries (2–4 hours)
4. Lazy-load below-fold animations (2–3 hours)
5. Audit and add `sizes` to all images (1–2 hours)
6. Move LCP elements to server components (1–2 hours per section)

## FAQ

**How do I know which elements are my LCP?**
Open Chrome DevTools, run Lighthouse, and check the "Opportunities" and "Diagnostics" sections. It will identify the specific LCP element and its timing.

**How long did this optimisation take?**
The audit took half a day. The fixes took 2 full working days spread across a week. Some fixes (like adding `priority`) took 5 minutes; others (splitting client/server components) required careful refactoring.

**Does this work for all Next.js apps?**
The specific numbers will differ, but the issue categories are nearly universal: missing `priority`, wrong component boundaries, eager animation imports, and missing `sizes`. Most Next.js apps I've audited have at least 3 of these 6 issues.
