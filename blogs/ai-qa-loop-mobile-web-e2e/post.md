# Closing the QA Loop With AI Agents Running End-to-End Tests on Mobile Web

Meta Description: How QA agents run Maestro flows on iOS and Android for a fintech H5 app, write test cases, and feed failures back to implementer agents inside a closed PR loop.
Main Keyword: AI QA mobile web testing
Published: 2026-10-28
Tags: Maestro, E2E testing, mobile web, QA automation

Desktop-green is a trap on mobile web. I have merged PRs that passed unit tests and looked fine in Chrome DevTools mobile emulation, then failed in Safari's real bottom bar, Android WebView cookie timing, or a Maestro tap target buried under a sticky header.

Closing the QA loop meant treating **device E2E** as an automated handoff, not a Friday manual chore.

## What "Closed QA Loop" Means

A closed loop has four properties:

1. Tests trigger from the same event that humans care about (usually a PR preview URL going live).
2. Failures attach machine-readable artifacts to the PR.
3. An implementer agent can iterate without you retyping steps.
4. Merge stays blocked until defined suites pass or a human waives with reason.

Maestro is the runner I use for iOS and Android flows against our H5 surfaces. The principles transfer to Playwright device farms or Appium if that is your stack.

## QA Agent Responsibilities

On my team the QA agents do two jobs:

**Run orchestration.** Pick suites based on changed paths, wait for preview deploy, execute Maestro on the device matrix, upload logs and screenshots.

**Test case maintenance.** When a feature adds a new critical path, the agent drafts YAML, runs it once, and opens a small follow-up PR if stable.

They do not replace exploratory testing on weird devices. They eliminate "did anyone run checkout on a real iPhone this sprint?"

## Mapping Code Changes to Suites

Path-based routing keeps CI time sane:

```yaml
# Example routing table (conceptual)
apps/wallet/**  -> [wallet_smoke, topup_happy_path]
apps/kyc/**     -> [kyc_document_upload]
shared/ui/**    -> [shell_navigation_smoke]
```

The QA agent reads the PR file list, selects suites, and refuses to run the full catalog on a typo fix. DevOps agents confirm preview health before Maestro starts. Racing the deploy caused flaky "connection refused" failures that trained everyone to ignore red builds.

## What Gets Attached on Failure

Humans need story. Agents need structure. Both get:

- Failed step name and index
- Screenshot at failure
- Optional screen recording clip
- Preview URL and git SHA
- Last known good run for comparison

Handoff back to implementer:

```md
## Maestro failure
Suite: topup_happy_path
Step 14: assertVisible "Top-up successful"
Observed: loader stuck; network 403 on /api/topup
Devices: iOS pass on retry 1, Android fail consistent
Artifact: ./maestro-output/abc123/
```

That is enough for an agent to grep the API client, not enough to debate philosophy.

## Writing Tests With an Agent Without Flaky Garbage

Agents love brittle selectors. We enforce conventions:

- Prefer accessibility labels and stable test IDs over CSS nth-child.
- No `sleep 5000` unless documented with ticket link.
- One assertion intent per step where possible.
- Tag flows as `smoke` vs `full`; only smoke blocks merge by default.

When the agent authors a new flow, a human spot-checks the first merge. After that, policy and review agents handle churn.

## Mobile Web Specifics That Belong in QA Policy

**Safe areas and viewport units.** Sticky CTAs overlap tappable regions. Maestro catches it; unit tests do not.

**Session and cookie timing.** Third-party cookie restrictions and in-app browsers behave differently. Tests must run in WebView profiles we actually ship to.

**Performance gates optional but valuable.** Some teams attach lab Lighthouse on preview for LCP/TBT regressions. We pair that with perf review agents so QA does not duplicate bundle analysis.

## Human-in-the-Loop on QA

I still approve:

- Changing merge-blocking suite lists
- Waiving red E2E on known upstream outages
- First-time flows touching money movement

Everything else loops agent-to-agent until green or retry cap.

## FAQ

### Why Maestro for mobile web?

Flows read like scripts, run on real devices, and produce artifacts agents can parse. The same ideas work with other runners if your artifact format is consistent.

### How long should E2E take on a PR?

Aim for sub-fifteen-minute smoke. Full suites can run nightly.

### Do agents fix flaky tests?

They can propose waits or selector fixes. Chronic flakes get quarantined and assigned to humans. Agents do not infinite-retry flakes.

### What if preview URLs are auth-gated?

Use short-lived test accounts or signed preview tokens injected via CI secrets. Never paste production credentials into agent chat.

## Closing

If mobile web is your product surface, QA loops belong in the PR path, not in a spreadsheet. Wire preview deploy → Maestro → structured failure → implementer retry, and measure time-to-green instead of time-to-manual-QA-scheduled.

That is how you stop shipping "works on my emulator."