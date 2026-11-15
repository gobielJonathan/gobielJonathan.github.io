# AI-Assisted Frontend Performance Work (With Real Wins, Not Magic)

Meta Description: How I use AI agents on performance tasks where numbers matter: code-splitting boundaries, lazy-loaded animation, WebP and preloads for LCP/TBT, and bundle diffs humans can trust.
Main Keyword: AI frontend performance optimization
Published: 2026-11-14
Tags: performance, Core Web Vitals, bundle size, lazy loading

Performance work is measurement with opinions attached. AI is great at generating opinions and mediocre at knowing which metrics your users actually feel.

I still use agents heavily on frontend performance because the tasks are **bounded**: bundle graphs, import traces, image pipelines, lab scripts. The wins are real when you give the model numbers and policies, not adjectives.

## Wins I Have Actually Shipped (Use These as Guardrails)

These are factual results from production-style frontend work. Agents are allowed to cite them as targets to investigate, not as guarantees for your repo:

- ~18% reduction on a **page bundle** after fixing a bad code-splitting boundary (wrong shared chunk on first paint).
- ~79% reduction on **initial JS** after lazy-loading heavy animation components instead of eager layout imports.
- LCP and TBT improvements from **WebP heroes** plus **preloading critical scripts** on landing paths.
- Faster iteration from internal CLIs (route inspector, module scaffolder) that keep refactors structured so perf diffs stay interpretable.
- At Tokopedia-era platform work, dev build feedback got on the order of **~90% faster** after build pipeline changes (different problem space, same lesson: shorten the feedback loop).

AI did not discover those alone. It accelerated patches, refactors, and checklists once humans set the metric and boundary rules.

## How I Frame Perf Tasks for Agents

Bad prompt: "make it faster."

Good contract:

```md
Objective: Reduce LCP on /wallet home without changing hero art crop
Scope: apps/wallet/HomeHero.tsx, next.config image settings
Constraints: No new client-side animation libs
Done when: Lighthouse lab LCP < 2.5s on throttled mobile; bundle gzip delta <= 0
Verification: pnpm analyze && pnpm perf:wallet-home
```

Agent B (perf reviewer) gets the same numbers in the PR packet. Everyone argues with Lighthouse artifacts, not vibes.

## Code-Splitting: Where Agents Help and Hurt

Agents love adding `dynamic()` everywhere. That can **increase** waterfall if boundaries are wrong.

Helpful workflow:

1. Agent runs bundle analyzer and lists top five modules on critical path.
2. Human or policy picks boundary (route vs feature vs component).
3. Agent implements `next/dynamic` or route-based splitting at that boundary only.
4. CI posts gzip per route; compare to baseline.

When we moved a boundary once, the page bundle dropped about 18%. When an agent moved it without route context, we briefly regressed until review blocked merge. The loop caught it; the one-shot prompt would not have.

Example pattern agents can apply safely after boundary is chosen:

```tsx
import dynamic from "next/dynamic"

const PromoMotion = dynamic(
  () => import("@/components/PromoMotion"),
  {
    ssr: false,
    loading: () => <div className="h-48 animate-pulse rounded-xl bg-muted" />,
  }
)
```

## Lazy Animation: High Impact, High Risk

Animation libraries (Framer Motion, Lottie, GSAP-class deps) are common kb offenders. Lazy loading them at **below-the-fold** or **interaction** boundaries produced ~79% initial JS savings in a case I documented separately on this blog.

Agent instructions must say **where** deferral is allowed. Layout-level motion stays eager; marketing modules defer.

Review agent blocking rule example: new `import lottie` in `app/layout.tsx` → automatic blocker.

## Images, LCP, and TBT

Agents are good at repetitive media pipeline edits:

- convert hero to WebP/AVIF where supported,
- add `priority` and `sizes` on LCP image,
- defer non-critical third-party scripts,
- audit render-blocking chains.

I require before/after Lighthouse filmstrips in the PR. Screenshots stop debates about whether preconnect helped.

## Using AI Inside the Perf Loop, Not Outside It

Perf fits the same loop engineering as features:

1. Implementer agent opens PR with bundle diff.
2. Perf reviewer agent checks budgets and import graph.
3. Optional lab Lighthouse on preview.
4. Human approves if payment routes or global layout touched.

Flaky lab scores get three-run median. Agents do not chase single-run jackpots.

## What I Still Do Myself

- Pick the metric that matches business pain (INP vs bundle vs LCP).
- Validate on real devices when WebView quirks matter.
- Judge UX of skeletons and deferred motion (agents optimize numbers that lie).

## Internal Tools as Performance Multipliers

Route inspector and scaffolder CLIs sound mundane. They keep agents from inventing duplicate entry points that bloat graphs. Consistent module shapes make automated bundle diffs trustworthy.

When every new feature follows the same folder contract, review agents spend tokens on imports, not on "where should this file live?"

## FAQ

### Will AI find 79% savings for me?

Only if your baseline eagerly loads heavy deps on critical path. Measure first.

### Should agents run Lighthouse?

Yes on preview, with throttling and repeat runs. Treat as signal, not proof for all users.

### How do I prevent performant but ugly UIs?

Add UX constraints to done criteria: max skeleton duration, no layout shift on hero.

### What about INP and long tasks?

Agents can suggest event handler splits and `startTransition`. Verify with field data or lab INP, not only TBT.

## Closing

Use AI where performance work is diffable: boundaries, imports, media, scripts. Feed it your real past wins as policies, wire bundle and lab output into review, and keep humans on tradeoffs that metrics cannot see.

That is how assistance stays honest when the number on the slide actually matters.