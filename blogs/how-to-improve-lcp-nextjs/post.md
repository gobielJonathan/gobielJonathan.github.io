# How to Improve LCP in Next.js: A Practical Guide

Meta Description: Improve Largest Contentful Paint (LCP) in Next.js with image optimisation, resource preloading, font strategies, and server rendering techniques.
Main Keyword: improve LCP Next.js

Largest Contentful Paint (LCP) measures when the biggest visible element on your page finishes rendering. Google considers it one of the three Core Web Vitals, and a poor LCP score (above 2.5 seconds) directly hurts your search rankings.

This guide covers every LCP optimisation technique I use on Next.js apps — from image handling to server-side rendering decisions.

## What Is LCP and Why It Matters

LCP marks the point at which the main content of a page is likely loaded from the user's perspective. It's almost always one of these elements:
- A hero image or background image
- A large text block (H1 or lead paragraph)
- A video poster image

Google's benchmark: **Good** = under 2.5s, **Needs Improvement** = 2.5–4s, **Poor** = over 4s.

A poor LCP is often the result of one unoptimised image or a slow font load — both easy to fix.

## 1. Always Use `next/image` with `priority` for the Hero

The single most impactful LCP fix for most Next.js sites: adding `priority` to your above-the-fold image.

```
import Image from 'next/image'

export function Hero() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero description"
      width={1200}
      height={600}
      priority          // preloads the image — critical for LCP
      sizes="100vw"
    />
  )
}
```

Without `priority`, Next.js lazy-loads images by default. That means your hero image — the most likely LCP candidate — gets deprioritised until after the page renders, which adds 500–800ms of delay.

## 2. Add Correct `sizes` to Every Image

The `sizes` attribute tells the browser which image size to download for the current viewport. Without it, the browser downloads the largest available size for every device.

```
<Image
  src="/hero.jpg"
  alt="Project screenshot"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
/>
```

Next.js uses `sizes` to generate an optimised `srcset`. Getting this right can reduce image payload by 40–70% on mobile devices.

## 3. Convert Images to WebP and AVIF

`next/image` handles this automatically — it serves WebP or AVIF to browsers that support them. But you need to ensure you're not bypassing it.

**Common mistakes that skip optimisation:**
- Using `<img>` tags directly instead of `<Image>`
- Loading images from external CDNs without configuring `remotePatterns`
- Using CSS `background-image` for the LCP element

For CSS background images that are your LCP element, add a `<link rel="preload">` tag instead:

```
<link
  rel="preload"
  as="image"
  href="/hero.jpg"
  type="image/webp"
/>
```

## 4. Preload Critical Resources

If your LCP element depends on a resource that's discovered late (a font, a background image, a CSS file), preloading moves that discovery earlier.

In Next.js, add preloads in `app/layout.tsx` using the metadata API or `<link>` tags directly in your root layout:

```
// In generateMetadata or layout Head
export const metadata = {
  // ...
}

// In layout.tsx <head> via next/head or metadata.other
```

Or for fine-grained control, import directly in the component:

```
// next/font handles font preloading automatically
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

## 5. Use `next/font` — Never Load Fonts via `<link>` Manually

Google Fonts loaded via a `<link>` tag in your HTML block rendering and commonly add 200–600ms to LCP because the browser must:
1. Parse the HTML
2. Discover the Google Fonts `<link>`
3. Resolve the DNS for fonts.googleapis.com
4. Download the CSS
5. Download the font files

`next/font/google` eliminates steps 2–4 by self-hosting the font and inlining the critical CSS at build time:

```
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',      // prevents invisible text during load
  variable: '--font-inter',
})
```

This is one of the fastest LCP wins available in Next.js.

## 6. Ensure Your LCP Element Is Server-Rendered

If your hero section or main heading is inside a `"use client"` component that waits for hydration, it won't appear until after JavaScript executes. That delays LCP by the entire JS parse + execute time.

Move LCP candidates to server components where possible:

```
// app/page.tsx — server component by default
export default function Page() {
  return (
    <section>
      <h1>My main heading — renders on server, LCP-friendly</h1>
      <Image src="/hero.jpg" alt="Hero" priority width={1200} height={600} />
    </section>
  )
}
```

If the section must be a client component (e.g., for animations), ensure the static HTML version renders server-side and animations are applied after hydration.

## 7. Reduce Server Response Time (TTFB)

LCP cannot start until the browser receives the first byte. A slow Time to First Byte (TTFB) means a slow LCP even with a perfect frontend.

Strategies:
- Deploy to a CDN edge close to your users (Vercel, Cloudflare Pages)
- Use Static Generation (`generateStaticParams`) or ISR where possible
- Cache API responses and database queries aggressively

## Real-World LCP Improvements

From a recent audit on a Next.js landing page:

| Issue | Fix | LCP Improvement |
|-------|-----|-----------------|
| Hero image missing `priority` | Added `priority` prop | -620ms |
| Hero loaded via CSS background | Moved to `<Image>` | -400ms |
| Google Fonts via `<link>` | Migrated to `next/font` | -280ms |
| Hero section in client component | Moved to server component | -340ms |

**Total: -1,640ms LCP improvement from four targeted fixes.**

## FAQ

**What causes poor LCP in Next.js?**
The most common causes are: missing `priority` on the hero image, images loaded without `next/image`, fonts loaded via external `<link>` tags, and LCP elements inside client components that delay rendering until after hydration.

**How do I measure LCP?**
Use Chrome DevTools Performance panel, Lighthouse, or PageSpeed Insights. For real user data, use the Chrome UX Report or Google Search Console's Core Web Vitals report.

**Is LCP the same as page load time?**
No. LCP measures when the largest visible element renders, not when all resources finish loading. A page can have a good LCP but still have slow overall load time.
