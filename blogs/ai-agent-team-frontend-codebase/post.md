# Building a Team of AI Agents for a Frontend Codebase: Roles and Handoffs

Meta Description: A frontend-first multi-agent setup for a fintech H5 app: implementers, PR reviewers, DevOps watchers, Maestro QA, architecture docs, and chat mention bots, with clear handoffs between them.
Main Keyword: AI agent team frontend
Published: 2026-10-18
Tags: multi-agent, frontend, handoffs, fintech H5

I did not set out to manage a "team" of bots. I set out to stop being the human router between build output, review comments, and mobile test failures. The team emerged because no single agent role stayed reliable when it had to do everything.

Today I run a multi-agent setup on a fintech H5 frontend codebase (React-heavy, mobile web, TypeScript). The agents have specializations. The value is in **handoffs**, not individual prompts.

## Why General-Purpose Coding Agents Plateau on Large Frontends

Frontends look monolithic from the outside. Inside, you have routing shells, shared UI kits, feature slices, native bridges, performance budgets, and test flows that only make sense on real devices.

When one agent implements a feature, reviews its own diff, and declares victory, you get the classic failure mode: clean-looking code with wrong boundaries, missing analytics hooks, and tests that never ran on Android WebView.

Specialization is how human teams work. It turns out agents need the same separation, with stricter interfaces.

## The Roles I Run Today

Here is the roster, described by responsibility rather than tooling brand names:

| Role | Count | Owns |
|------|-------|------|
| Frontend implementer | Several | Feature code within declared file scope |
| PR reviewer | 3 (split focus) | Correctness, perf/a11y, consistency |
| DevOps watcher | 1–2 | CI status, deploy previews, pipeline flakes |
| QA / Maestro | 1–2 | E2E on iOS + Android, test case authoring |
| Solution architecture | 1 | Decision docs before large changes |
| Chat mention responder | 1 | Triage @mentions, route to right loop |

Implementers are intentionally **plural**. Parallel work on unrelated slices beats one mega-session that forgets half the context.

Reviewers are also plural but **narrow**. One focuses on logic and edge cases, one on performance and bundle impact, one on patterns and naming. That split reduced contradictory review comments more than any prompt tweak did.

## Handoff Artifacts Beat Handoff Prose

Agents do not read Slack threads well. They read structured artifacts:

```md
## Handoff: implementer → review
PR: #1248
Scope: wallet top-up sheet
Risk: touches payment display component
Build: green (preview URL attached)
Bundle delta: +4.2kb gzip (within budget)
Screenshots: iOS Safari, Android Chrome
Open questions: none
```

```md
## Handoff: review → QA
Blocking: resolved
Non-blocking: 2 style nits (ignored per policy)
Maestro suites to run: wallet_smoke, topup_happy_path
Devices: iPhone 14 profile + Pixel 7 profile
```

The QA agent receives **suite names and device matrix**, not "please test the feature."

When Maestro fails, the handoff back to implementer includes step index, screenshot, and DOM snapshot path. That is the difference between a fix in one iteration and three rounds of "I cannot reproduce."

## Wiring Agents Into the Same Loops Humans Use

Agents are not side channels. They open branches, push commits, comment on PRs, and react to CI webhooks like any contributor.

DevOps agents watch PRs specifically for:

- failed install or build steps,
- preview deploy not ready when QA starts too early,
- flaky retries crossing a threshold.

I treat flaky CI as a first-class handoff. If the same step fails twice with different errors, the human investigates. Agents loop on deterministic failures only.

## Frontend-Specific Boundaries That Saved Me

**Route and code-splitting ownership.** Implementers must declare which route segment they touch. Unplanned shared chunk changes get sent back. That policy exists because of real wins: fixing a bad splitting boundary once cut a page bundle by about 18%. Agents will happily import heavy modules at the wrong layer unless the boundary is in the contract.

**Animation and media lazy loading.** Review agents flag eager imports of Lottie, heavy motion libraries, or uncompressed hero assets. We already proved lazy-loading animation components can cut initial JS by on the order of 79% in a similar app. The review agent does not need to re-derive the lesson every sprint.

**Mobile web reality.** QA agents run Maestro flows, not only desktop Chromium. A green desktop build still fails if the safe-area inset breaks on iOS.

## Mentions and Architecture: The Soft Roles

The chat mention bot is not glamorous. It answers when someone pings me for status, links the active PR, and escalates if the question needs a human decision. That alone removed a surprising amount of context switching.

The solution-architecture agent runs **before** large refactors. It outputs a short doc: goals, non-goals, affected modules, rollback plan. Implementers refuse to start without it when the touch surface exceeds a threshold we defined in team policy.

## Failure Modes I Still Hit

**Overlapping implementers** on the same files when scope drifts. Fix: file-level locks in the task contract.

**Review agents agreeing with each other** because they share the same temperature and context. Fix: separate system prompts and forced disagreement checks ("name one risk the others missed").

**QA starting before preview is live.** Fix: DevOps agent gates the Maestro trigger.

**Architecture docs that read well but are wrong.** Fix: human sign-off on docs that touch payments or auth.

## FAQ

### How many agents is too many?

If you cannot name what signal triggers each agent, you have too many. Start with implementer + CI + one reviewer.

### Should agents share one long conversation?

No. Long threads blur roles. New session per handoff with attached artifacts.

### Do agents replace pair programming?

They replace repetitive routing, not design pairing. I still whiteboard hard UX and state machines with humans.

### What about secrets and internal URLs?

Agents get redacted logs and public preview URLs. Production internals stay out of agent context by policy.

## Closing

Build the org chart you wish your tooling had: small scopes, explicit artifacts, automated gates. Add one role per week, measure whether human time on that step actually drops, and kill roles that only create noise.

The team works because the **handoffs** are as engineered as the code.