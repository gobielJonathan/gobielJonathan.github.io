# React Architecture Case Study: Scaling From 2 to 20 Engineers

Meta Description: How we scaled a React codebase from 2 to 20 engineers without rewrites — feature-based modules, shared conventions, and the architectural decisions that held up under pressure.
Main Keyword: React architecture case study

The hardest architectural problems in React don't show up when you have 2 engineers and a clean codebase. They show up 18 months later when you have 20 engineers, 200 components, and three teams stepping on each other's work.

This is a case study of the architectural patterns I established and refined while leading frontend development at a company that went through that exact growth. Most of what I'll share wasn't invented — it was chosen deliberately from known patterns, applied consistently, and enforced through tooling.

## The Starting Point

When I joined the platform, the codebase was:
- 40,000 lines of React/TypeScript
- Components organised by type (`/components`, `/hooks`, `/utils`)
- No enforced conventions on state management or API calls
- Shared state scattered across Context providers, Redux slices, and local state — no consistent rule for when to use which
- Slow CI (8 minutes) with no automatic checks on bundle size or component contracts

It worked fine for 3 engineers. It was becoming painful at 8.

## The Core Decision: Feature Modules

The most impactful structural change was moving from type-based directories to feature-based modules.

**Before:**
```
src/
  components/
    Button.tsx
    ProductCard.tsx
    UserProfile.tsx
    CartItem.tsx
  hooks/
    useProduct.ts
    useCart.ts
    useUser.ts
  utils/
    formatPrice.ts
    validateEmail.ts
```

**After:**
```
src/
  modules/
    product/
      components/
        ProductCard.tsx
      hooks/
        useProduct.ts
      utils/
        formatPrice.ts
      index.ts        ← public API
    cart/
      components/
        CartItem.tsx
      hooks/
        useCart.ts
      index.ts
    auth/
      ...
  shared/
    components/      ← used by 2+ modules
    hooks/
    utils/
```

Each module owns everything related to its domain. A new engineer knows exactly where to look and where to add code. More importantly, it becomes obvious when code is being shared across modules — which triggers a conscious decision about whether that sharing is intentional.

## Module Boundaries and the Public API Pattern

Each module exposes a public API through its `index.ts`. Code outside the module can only import from the index — never directly from internal files:

```
// modules/product/index.ts
export { ProductCard } from './components/ProductCard'
export { useProduct } from './hooks/useProduct'
export type { Product, ProductVariant } from './types'

// Not exported — internal to the module:
// formatProductSlug, ProductCardSkeleton, etc.
```

We enforced this with an ESLint rule:

```
// .eslintrc
{
  "rules": {
    "no-restricted-imports": ["error", {
      "patterns": ["*/modules/*/components/*", "*/modules/*/hooks/*"]
    }]
  }
}
```

This rule prevented engineers from bypassing the module boundary and importing internal implementation details.

## State Management: A Clear Decision Tree

One of the most costly sources of inconsistency was the lack of a rule for when to use what kind of state. We established a simple decision tree:

1. **UI state** (open/closed, loading, error): `useState` or `useReducer` — local to the component
2. **Shared UI state** (modal visible to multiple components): Context, scoped to the smallest necessary subtree
3. **Server state** (data from APIs): React Query / TanStack Query — never Redux
4. **Global application state** (auth, cart, user preferences): Zustand — small, typed stores

The rule: never use Redux for server data. Never put server data in Context. Never lift UI state globally "just in case".

This eliminated an entire category of debates and bugs.

## The Server/Client Component Split (After Next.js App Router)

When we migrated to the App Router, we established a default rule: **everything is a server component unless it needs to be a client component**.

A component needs `"use client"` only if it:
- Uses browser APIs (`window`, `localStorage`, `navigator`)
- Uses React hooks that depend on client state (`useState`, `useEffect`, `useRef`)
- Listens to browser events (`onClick`, `onChange`)

The discipline: **push `"use client"` as deep in the component tree as possible**.

Bad pattern (common mistake):
```
// Makes the entire section a client bundle
'use client'
export function ProductSection({ products }: Props) {
  const [filter, setFilter] = useState('all')
  return (
    <section>
      <FilterBar filter={filter} onChange={setFilter} /> {/* needs client */}
      <ProductGrid products={products} />  {/* could be server */}
    </section>
  )
}
```

Correct pattern:
```
// server component — renders on server, ships no JS
export function ProductSection({ products }: Props) {
  return (
    <section>
      <FilterBar />      {/* client component — small, interactive */}
      <ProductGrid products={products} />  {/* server component */}
    </section>
  )
}
```

Pushing client boundaries down reduced our average page JS payload by ~35%.

## Enforcing Architecture With Tooling

Conventions only stick if they're automated. The tools we added to CI:

**Bundle size checker (PR comment with diff):**
```
# .github/workflows/bundle-check.yml
- run: ANALYZE=true pnpm build
- name: Comment bundle diff
  uses: preactjs/compressed-size-action@v2
```

Any PR that grows the bundle by more than 5 KB requires explicit sign-off.

**TypeScript strict mode:**
```
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "exactOptionalPropertyTypes": true
  }
}
```

This catches an entire class of runtime bugs at compile time — especially around nullable API responses.

**Automated import boundary linting** (described above) to prevent module leaking.

## What Didn't Work

Not everything I tried was a success:

- **Atomic Design (atoms/molecules/organisms):** Created endless debates about which category a component belonged to. Abandoned after 3 months.
- **Centralised Redux for everything:** The boilerplate-to-value ratio was terrible for server data. Replaced with React Query.
- **Over-abstracted base components:** A `<BaseButton>` with 40 props that all button variants extended. Impossible to maintain. Replaced with co-located variant components.

The lesson: prefer conventions that map to domain problems over frameworks that impose abstract structure.

## Results After 12 Months

- Team grew from 5 to 22 engineers with no "big rewrite" required
- Feature development velocity: self-reported 40% faster due to clear module ownership
- Build time reduced from 8 minutes to 55 seconds (parallel module builds + caching)
- Bundle size per route: down 35% average
- TypeScript error rate in production: down 70% (strict mode + better types)

## FAQ

**How do you decide what belongs in `shared/` vs a module?**
A component or utility belongs in `shared/` only when it is used by at least 2 different modules. Start by putting everything in the relevant module — only promote to shared when the second consumer appears.

**Does feature-based structure work for small teams?**
Yes, but simplify it. A small team doesn't need sub-directories inside modules. Start with flat module folders and add structure when the folder grows past 5-6 files.

**How do you handle cross-module dependencies?**
Through the public API (index.ts). If module A needs something from module B, it imports from `modules/b/index.ts`. If two modules constantly need each other's internals, that's a sign they should be merged into one module.
