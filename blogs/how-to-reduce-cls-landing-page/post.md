# How to Reduce CLS on Landing Pages

Meta Description: Fix Cumulative Layout Shift (CLS) on Next.js landing pages — image dimensions, fonts, dynamic content, and skeleton patterns that eliminate unexpected shifts.
Main Keyword: reduce CLS landing page

Cumulative Layout Shift (CLS) is the Core Web Vital that measures how much the visible content of your page unexpectedly moves during load. A score above 0.1 is "Needs Improvement"; above 0.25 is "Poor" — and both hurt SEO rankings.

Landing pages are especially vulnerable because they combine large images, custom fonts, dynamic content, and animated sections — each a potential source of layout shift.

## What Causes Layout Shift?

The browser builds and paints your page incrementally. Anything that forces already-rendered content to move causes CLS:

- Images without explicit dimensions
- Fonts loading and swapping to a different size
- Dynamically injected content (ads, banners, cookie notices) above existing content
- Web components that render with different sizes than their initial placeholder
- Animations that cause reflow

## 1. Always Set Image Dimensions

Every `<img>` or `<Image>` without explicit width/height causes layout shift because the browser doesn't know how much space to reserve.

```
// Bad — browser doesn't reserve space
<img src="/hero.jpg" alt="Hero" />

// Good — browser reserves the exact space
<Image
  src="/hero.jpg"
  alt="Hero"
  width={1200}
  height={600}
/>
```

For `fill` images (where the parent container defines the size), make the container's dimensions explicit:

```
<div className="relative h-64 w-full">
  <Image
    src="/project.jpg"
    alt="Project screenshot"
    fill
    sizes="(max-width: 768px) 100vw, 50vw"
    className="object-cover"
  />
</div>
```

The container has a fixed height. The browser knows exactly how much space to allocate before the image loads.

## 2. Use `font-display: swap` — But Guard Against Swap Shift

`font-display: swap` is good for user experience (shows text immediately) but creates CLS if your fallback font is a different size than your web font.

The best solution: use `next/font` which automatically adjusts the fallback font's `size-adjust`, `ascent-override`, and `descent-override` to match your web font's dimensions:

```
import { Plus_Jakarta_Sans } from 'next/font/google'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  adjustFontFallback: true, // minimises layout shift during font swap
  variable: '--font-jakarta',
})
```

`adjustFontFallback: true` is the key prop — it instructs Next.js to generate CSS overrides that make the system fallback font occupy the same space as the web font.

## 3. Reserve Space for Dynamic Content

Cookie banners, notifications, and lazy-loaded components that inject at the top of the page are the most CLS-damaging content type.

**Pattern: reserve space for top-injected content**

```
'use client'

import { useState, useEffect } from 'react'

export function CookieBanner() {
  const [accepted, setAccepted] = useState<boolean | null>(null)

  useEffect(() => {
    setAccepted(localStorage.getItem('cookiesAccepted') === 'true')
  }, [])

  // Reserve height even when null (before hydration check)
  if (accepted !== false) return <div className="h-16" aria-hidden />

  return (
    <div className="h-16 flex items-center justify-between px-6 bg-card border-b">
      <p className="text-sm">We use cookies to improve your experience.</p>
      <button onClick={() => { localStorage.setItem('cookiesAccepted', 'true'); setAccepted(true) }}>
        Accept
      </button>
    </div>
  )
}
```

The key: the component always renders a `div` with the same height — whether showing the banner or an empty spacer. The content below never shifts.

## 4. Use Skeleton Loaders That Match the Content Size

When content loads asynchronously (API data, dynamically fetched posts), a skeleton placeholder prevents layout shift by occupying exactly the same space as the real content.

```
function ProjectCard({ project }: { project?: Project }) {
  if (!project) {
    return (
      <div className="rounded-2xl border border-border/50 p-5">
        <div className="h-48 animate-pulse rounded-xl bg-muted mb-4" />
        <div className="h-6 animate-pulse rounded bg-muted mb-2 w-3/4" />
        <div className="h-4 animate-pulse rounded bg-muted w-full" />
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-border/50 p-5">
      <img src={project.image} alt={project.title} className="h-48 w-full rounded-xl object-cover mb-4" />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  )
}
```

The skeleton must have identical dimensions to the loaded content. If the real card is 320px tall, the skeleton must also be 320px.

## 5. Avoid Animations That Cause Reflow

CSS animations that change `width`, `height`, `top`, `left`, `margin`, or `padding` trigger layout reflow and contribute to CLS.

**Avoid:**
```
/* These cause layout reflow */
.element { animation: grow 0.3s; }
@keyframes grow { from { height: 0 } to { height: 200px } }
```

**Prefer:**
```
/* These use the compositor — no reflow, no CLS */
.element { animation: fadeIn 0.3s; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px) } to { opacity: 1; transform: translateY(0) } }
```

`transform` and `opacity` are the only CSS properties that run on the GPU compositor without triggering layout — use them exclusively for animations.

## 6. Pre-size Embeds and iframes

If you embed YouTube videos, Tweets, or any iframe, they default to zero height until loaded — causing a massive CLS spike when they render.

```
<div className="relative pb-[56.25%]"> {/* 16:9 aspect ratio */}
  <iframe
    src="https://www.youtube.com/embed/..."
    className="absolute inset-0 h-full w-full"
    title="Demo video"
  />
</div>
```

The padding-bottom percentage trick reserves the exact aspect-ratio space before the iframe loads.

## Measuring CLS

- **Chrome DevTools:** Performance panel → look for "Layout Shift" events in the Experience row
- **Lighthouse:** Provides a CLS score with specific element culprits
- **Web Vitals Chrome Extension:** Shows live CLS score for any page
- **PageSpeed Insights:** Real-user CLS from the Chrome UX Report

## FAQ

**What is a good CLS score?**
Under 0.1 is "Good" according to Google's Core Web Vitals thresholds. Aim for under 0.05 for competitive markets.

**Can animations cause CLS?**
Yes — if animations change layout properties (height, width, margin). Use only `transform` and `opacity` for zero-CLS animations.

**Does lazy loading images cause CLS?**
Only if you don't set explicit dimensions. Lazy-loaded images with width/height set cause zero CLS because the browser reserves the space before loading.
