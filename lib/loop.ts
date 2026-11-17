export type LoopStage = {
  id: string
  label: string
  /** Present-tense status shown in the hero ("loop status: …") */
  status: string
  detail: string
  human?: boolean
}

/**
 * The delivery loop described in "What Is AI Loop Engineering?".
 * Agents handle bounded steps; a human approves the steps that matter.
 */
export const loopStages: LoopStage[] = [
  {
    id: "spec",
    label: "Spec",
    status: "scoping the ticket",
    detail: "A ticket or spec bounds what the agent is allowed to change.",
  },
  {
    id: "build",
    label: "Build",
    status: "implementing the change",
    detail: "Frontend agents implement against the real codebase, then CI builds it. Build failures go straight back.",
  },
  {
    id: "review",
    label: "Review",
    status: "reviewing the pull request",
    detail: "PR reviewer agents comment on the diff. Blockers return to the build step, not to my inbox.",
  },
  {
    id: "test",
    label: "Test",
    status: "running E2E on iOS and Android",
    detail: "QA agents run end-to-end flows on mobile web. A failing run loops back with its artifacts.",
  },
  {
    id: "gate",
    label: "Human gate",
    status: "waiting for a human",
    detail: "I approve merges, risky dependency bumps, and anything payment-adjacent. Agents handle volume; I handle judgment.",
    human: true,
  },
  {
    id: "ship",
    label: "Ship",
    status: "deploying",
    detail: "Approved changes deploy, and the outcome becomes the input to the next agent step.",
  },
]

export const agentRoles = [
  { name: "Frontend dev agents", note: "Implement scoped changes from a spec." },
  { name: "PR reviewer agents", note: "Review diffs and flag blockers before a human looks." },
  { name: "DevOps agents", note: "Watch pull requests, builds, and pipelines." },
  { name: "QA agents", note: "Generate test cases and run E2E on iOS and Android." },
  { name: "Docs agent", note: "Keeps technical documentation in step with the code." },
]
