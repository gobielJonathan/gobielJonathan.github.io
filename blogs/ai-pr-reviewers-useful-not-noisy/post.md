# AI PR Reviewers That Are Useful, Not Noisy

Meta Description: How I tuned a three-agent PR review team on a mobile fintech frontend so comments are blocking when they matter and silent when they do not.
Main Keyword: AI PR review
Published: 2026-10-22
Tags: code review, pull requests, AI agents, signal-to-noise

The fastest way to kill trust in AI review is to comment on every variable name. The second fastest is to miss a payment regression because the bot was "keeping noise low" and skipped the file.

I run three review agents on pull requests for a production H5 frontend. They only earn their compute when developers **act** on the output. Here is how I calibrated useful versus noisy.

## What Developers Actually Want From Review

Developers do not want praise. They do not want fifty nits. They want:

1. Correctness risks they would miss alone.
2. Performance and bundle regressions with numbers when possible.
3. Inconsistencies with patterns the codebase already enforces.

Everything else is optional or belongs in lint rules, not review comments.

AI review fails when it optimizes for **coverage** (comment on every line) instead of **decision support** (block merge when warranted).

## The Three-Agent Split

Each agent has a non-overlapping mandate:

**Agent A — Logic and edge cases.** Null paths, race conditions in async UI, error boundaries, analytics event parity.

**Agent B — Performance and weight.** Import graph, lazy boundaries, image format, layout shift risks, Core Web Vitals impact.

**Agent C — Consistency.** Naming, folder conventions, test placement, duplication that already has a shared utility.

They post to the same PR, but with tags `[logic]`, `[perf]`, `[consistency]`. Humans can filter. Implementer agents route fixes by tag.

## Policy: Blocking vs Informational

This table is the real product. Prompts change weekly. Policy persists.

| Severity | Examples | Agent behavior |
|----------|----------|----------------|
| Block | Broken build, wrong payment copy, missing auth guard, bundle over budget | Must comment; merge bot fails |
| Warn | Suboptimal pattern with known fix | Comment once with suggestion |
| Ignore | Formatting, import order, subjective naming | No comment; log internally |

We enforce blocking rules in CI where possible. Review agents duplicate lint only when the rule is semantic (e.g., "this modal must trap focus").

## Context You Must Feed Review Agents

Review quality is almost entirely **context**, not model choice.

Minimum packet per PR:

- Diff stat and changed paths
- Bundle diff summary (gzip kb per route if available)
- Linked ticket acceptance criteria
- `AGENTS.md` or local convention excerpts for touched packages
- Previous review thread on the same module (last 30 days)

Without acceptance criteria, Agent A hallucinates requirements. Without bundle diff, Agent B praises a refactor that dragged Lottie into the critical path.

## Prompt Shape That Reduced Noise by Half

Early versions used "review this PR thoroughly." Comments exploded.

Current opener:

```md
You are PR reviewer B (performance). Comment ONLY if:
- bundle gzip increases >3kb on a user-facing route, OR
- a heavy dependency is newly imported in critical path, OR
- LCP/CLS/INP risk with specific line reference.

If none apply, reply exactly: NO_BLOCKING_PERF_FINDINGS.

Max 5 bullets. No praise. No formatting nits.
```

The forced sentinel string `NO_BLOCKING_PERF_FINDINGS` makes automation easy. CI can require all three sentinels or real blockers before merge.

## Real Frontend Examples That Should Block

These come from production lessons, not theory:

- Importing an animation player at layout level after we already established lazy-loading cut initial JS dramatically (think ~79% class improvements when the boundary moves).
- Adding a hero PNG when WebP and preload rules exist for LCP.
- Splitting code at the wrong boundary so a whole feature slice lands on first paint (single-digit percent page bundle wins turned into double-digit losses when boundaries moved).

Agent B knows those historical wins as **policy references**, not as bragging. The comment says what changed and what metric to re-check.

## When Humans Override Agents

Overrides are allowed and logged. If I merge with a perf warning, I comment why. Agents learn weakly from that log; humans learn strongly. Monthly I skim overrides to see if policy is wrong.

If overrides cluster on the same rule, the rule moves: either into lint, or out of blocking.

## Integrating Review Agents Into the Loop

Review runs after CI build green, before QA Maestro. Order matters. Reviewing a diff that does not compile wastes everyone's time.

Implementer agents get review output as structured input:

```json
{
  "blocking": [
    {"tag": "perf", "file": "src/routes/wallet.tsx", "issue": "eager lottie import"}
  ],
  "warnings": [],
  "retry_allowed": true
}
```

The implementer loop continues until blocking is empty or retry cap hits. Then I look.

## FAQ

### Are three agents overkill?

For a small repo, yes. For a multi-slice H5 app with perf budgets, specialization beat one general reviewer on signal-to-noise.

### Do review agents replace humans?

No. They front-load obvious failures. I still read payment and auth diffs end to end.

### How do you measure usefulness?

Track: comments marked resolved without argument, time from PR open to human approval, and count of production incidents linked to missed review. Noise shows up as ignored threads.

### What about false positives?

Cap comments per agent, require line anchors, and demote agents whose blockers get overturned more than 30% of the time.

## Closing

Useful AI review feels boring: a few sharp comments, early in the PR, tied to metrics and policies you already believe. Noisy review feels like another inbox.

Tune for **decisions**, not **volume**, and wire the output into the same fix loop as your implementer agents.