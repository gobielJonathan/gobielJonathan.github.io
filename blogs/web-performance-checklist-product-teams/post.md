# Web Performance Checklist for Product Teams

Meta Description: A complete web performance checklist for product teams covering Core Web Vitals, images, JavaScript, fonts, caching, and monitoring — downloadable and actionable.
Main Keyword: web performance checklist

Most web performance problems are known problems with known solutions. The challenge isn't discovery — it's systematically applying the fixes across a live product under normal engineering pressures.

This checklist is the one I run on every new project I join and every site I audit. Use it as a pre-launch review, a quarterly audit, or an onboarding document for new engineers.

## How to Use This Checklist

Work through each section and mark items as Pass, Warning, or Fail. A Warning means the issue exists but isn't critical. A Fail means it's actively hurting performance or user experience.

Fix all Fails before launch. Address Warnings within the next sprint cycle.

## Section 1: Images

- [ ] All hero and above-fold images use `priority` (Next.js) or `fetchpriority="high"` (native)
- [ ] All images have explicit `width` and `height` attributes (prevents CLS)
- [ ] All fill-mode images have a parent container with an explicit height
- [ ] `sizes` attribute is set on all responsive images matching actual rendered sizes
- [ ] Images use WebP or AVIF format (convert from PNG/JPG)
- [ ] No images wider than 2x the display size at any breakpoint
- [ ] Lazy loading is enabled for all below-fold images
- [ ] No decorative images lack `alt=""` (empty alt for decorative, descriptive alt for informative)
- [ ] No external images bypass the image optimisation pipeline (CDN or next/image)

## Section 2: JavaScript

- [ ] Total initial JS bundle is under 200 KB gzipped
- [ ] No heavy libraries loaded at the layout level that are only needed in specific routes
- [ ] Animation libraries (Lottie, GSAP, Three.js) are lazy-loaded with `next/dynamic`
- [ ] Below-fold sections use dynamic imports to defer loading
- [ ] No `moment.js` — use `date-fns` with tree-shaking
- [ ] Icon libraries use named imports (not full library imports)
- [ ] `@next/bundle-analyzer` or similar has been run within the last sprint
- [ ] CI runs a bundle size check on every PR
- [ ] Source maps are generated in production for error tracking

## Section 3: Fonts

- [ ] Fonts are loaded via `next/font` (never via `<link>` to external CDN)
- [ ] `font-display: swap` is set on all fonts
- [ ] `adjustFontFallback: true` is enabled (eliminates CLS during font swap)
- [ ] No more than 2-3 font families loaded on any single page
- [ ] Font weights are limited to what's actually used (not loading all 9 weights)
- [ ] Variable fonts are used where possible (1 file covers all weights)

## Section 4: Core Web Vitals

- [ ] LCP is under 2.5s on a mid-tier mobile device (Moto G Power or similar)
- [ ] INP is under 200ms for all primary interactions (click, type, navigate)
- [ ] CLS is under 0.1 across the full page load session
- [ ] LCP element is a server-rendered element (not blocked by JS)
- [ ] No layout-shifting animations (use only `transform` and `opacity`)
- [ ] Dynamic content (ads, banners, lazy sections) has reserved space via skeletons
- [ ] Cookie banners and notification prompts render in reserved space, not above content

## Section 5: Server and Caching

- [ ] TTFB is under 600ms (faster is better — aim for under 200ms from cache)
- [ ] Static pages use `generateStaticParams` or ISR where appropriate
- [ ] API routes have appropriate cache headers (`Cache-Control`, `ETag`)
- [ ] Static assets (images, fonts, JS) are served with long-lived cache headers
- [ ] A CDN is deployed in front of the origin server
- [ ] `Content-Encoding: br` (Brotli) is used for text assets (JS, CSS, HTML)

## Section 6: Third-Party Scripts

- [ ] Third-party scripts are loaded with `strategy="lazyOnload"` or `strategy="afterInteractive"` in Next.js
- [ ] Google Analytics / Tag Manager does not block the main thread
- [ ] Chat widgets and support tools are deferred until after first interaction
- [ ] No render-blocking `<script>` tags in `<head>` without `defer` or `async`
- [ ] Total third-party JS is audited — remove anything not actively providing value

## Section 7: HTML and CSS

- [ ] All pages have a single `<h1>` with the primary keyword
- [ ] No unused CSS is being loaded (run PurgeCSS or use Tailwind's built-in purge)
- [ ] Critical CSS is inlined (Next.js does this automatically in most cases)
- [ ] No CSS `@import` chains (each `@import` is a separate blocking request)
- [ ] `preconnect` hints are set for important third-party domains

```
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://api.yourservice.com" />
```

## Section 8: Monitoring

- [ ] Real User Monitoring (RUM) is collecting Core Web Vitals from production users
- [ ] Performance budget alerts are configured (notify when LCP/INP/CLS degrades)
- [ ] Synthetic monitoring runs Lighthouse against key pages on a schedule
- [ ] Google Search Console is set up and the site is verified
- [ ] Sitemap is submitted to Google Search Console
- [ ] Core Web Vitals report in Search Console is reviewed monthly

## Section 9: Mobile

- [ ] Touch targets are at least 44x44 pixels
- [ ] Text is at least 16px (no `font-size: 12px` on body copy)
- [ ] Viewport meta tag is set correctly: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Horizontal scrolling does not occur at 375px viewport width
- [ ] Tap interactions feel immediate (no 300ms delay — handled by default in modern mobile browsers)

## Quick Wins: Highest Impact, Lowest Effort

If you have 2 hours to improve performance, do these in order:

1. Add `priority` to the hero image (5 minutes)
2. Switch fonts from `<link>` to `next/font` (30 minutes)
3. Check bundle analyser for obvious heavy modules (30 minutes)
4. Add `sizes` to the top 5 most-loaded images (30 minutes)
5. Move third-party scripts to `strategy="lazyOnload"` (30 minutes)

These five changes typically improve LCP by 1–2 seconds and reduce initial JS by 20–40%.

## FAQ

**How often should I run this checklist?**
Before every major release and as a quarterly review. Set a calendar reminder — performance degrades gradually as new features ship, and a quarterly review catches it before it shows up in Search Console.

**What tool should I use to run this checklist?**
Start with PageSpeed Insights (real user data), Lighthouse in DevTools (synthetic, detailed), and `@next/bundle-analyzer` (bundle breakdown). For ongoing monitoring, use Vercel Analytics or a dedicated RUM tool.

**Does performance really affect SEO?**
Yes. Core Web Vitals (LCP, INP, CLS) are confirmed Google ranking signals. Pages with Good CWV scores tend to rank higher than equivalent pages with Poor scores, all other signals equal.
