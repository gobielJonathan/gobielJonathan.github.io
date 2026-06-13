# Optimising INP for React Apps: A Practical Guide

Meta Description: Improve Interaction to Next Paint (INP) in React — identify slow event handlers, defer non-critical work, and use scheduler patterns for responsive UIs.
Main Keyword: optimise INP React

Interaction to Next Paint (INP) replaced First Input Delay (FID) as a Core Web Vital in March 2024. Where FID only measured the first interaction, INP measures the worst interaction latency across the entire session — making it significantly harder to game.

A poor INP score means users experience visible lag when clicking buttons, typing, or navigating in your React app. This guide covers the patterns I use to fix it.

## What INP Measures

INP measures the time from a user interaction (click, tap, keypress) to the moment the browser has painted the next frame in response. The full loop:

1. User interacts (click, tap, key)
2. Browser queues event handlers
3. React processes the event, updates state, re-renders components
4. Browser calculates layout, composites layers
5. Browser paints the new frame

**Google's thresholds:** Good = under 200ms, Needs Improvement = 200–500ms, Poor = over 500ms.

Every millisecond of JavaScript blocking in steps 2–4 increases INP.

## 1. Find Slow Interactions First

Don't optimise blindly. Find which interactions are slow using Chrome DevTools:

1. Open DevTools → Performance panel
2. Click "Record"
3. Click the slow element
4. Stop recording
5. Look for "Long Task" (red bars) in the main thread

The task that runs during your click is the culprit. Expand it to see which functions are consuming time.

You can also log INP in production:

```
import { onINP } from 'web-vitals'

onINP(({ value, entries }) => {
  const worstEntry = entries.sort((a, b) => b.duration - a.duration)[0]
  console.log('INP:', value, worstEntry)
})
```

## 2. Defer Non-Critical State Updates with `startTransition`

React 18's `startTransition` marks state updates as non-urgent, letting the browser paint the immediate response (like a loading state) before processing the expensive update.

```
import { startTransition, useState } from 'react'

function SearchBox() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Result[]>([])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    setQuery(value) // urgent — update input immediately

    startTransition(() => {
      setResults(filterResults(value)) // non-urgent — can be deferred
    })
  }

  return (
    <>
      <input value={query} onChange={handleChange} />
      <ResultsList results={results} />
    </>
  )
}
```

The input updates immediately (good INP), the results list update is deferred until the browser has spare time.

## 3. Avoid Expensive Computations in Event Handlers

If your click handler runs a loop over thousands of items, sorts a large array, or calls synchronous APIs, it blocks the main thread for the entire duration.

**Before:**
```
function handleClick() {
  const sorted = hugeArray.sort(complexComparator) // blocks for 300ms
  setItems(sorted)
}
```

**After — move work off the critical path:**
```
function handleClick() {
  setLoading(true) // paint immediately

  // Defer the heavy work to after paint
  setTimeout(() => {
    const sorted = hugeArray.sort(complexComparator)
    setItems(sorted)
    setLoading(false)
  }, 0)
}
```

Or use `scheduler.postTask` for more control (Chromium-based browsers):

```
function handleClick() {
  setLoading(true)

  scheduler.postTask(() => {
    const sorted = hugeArray.sort(complexComparator)
    setItems(sorted)
    setLoading(false)
  }, { priority: 'background' })
}
```

## 4. Virtualise Long Lists

Rendering 500 list items into the DOM means React must diff and update potentially hundreds of DOM nodes on every re-render — even if most items are off-screen.

Use `@tanstack/react-virtual` (lightweight) or `react-window`:

```
import { useVirtualizer } from '@tanstack/react-virtual'

function VirtualList({ items }: { items: Item[] }) {
  const parentRef = useRef<HTMLDivElement>(null)

  const virtualizer = useVirtualizer({
    count: items.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 64,
  })

  return (
    <div ref={parentRef} className="h-96 overflow-auto">
      <div style={{ height: virtualizer.getTotalSize() }}>
        {virtualizer.getVirtualItems().map((virtualItem) => (
          <div
            key={virtualItem.key}
            style={{
              position: 'absolute',
              top: virtualItem.start,
              height: virtualItem.size,
            }}
          >
            {items[virtualItem.index].name}
          </div>
        ))}
      </div>
    </div>
  )
}
```

With 500 items, virtualisation reduces active DOM nodes from 500 to ~10, which dramatically reduces re-render cost.

## 5. Memoize Expensive Renders with `useMemo` and `React.memo`

If a child component re-renders on every parent state change — even when its own props haven't changed — it wastes rendering time that shows up as INP.

```
// Wrap expensive child components
const ExpensiveChart = React.memo(function Chart({ data }: ChartProps) {
  return <ComplexVisualization data={data} />
})

// Memoize derived data
function Dashboard({ rawData }: { rawData: RawDataPoint[] }) {
  const processedData = useMemo(
    () => processData(rawData), // only recalculates when rawData changes
    [rawData]
  )

  return <ExpensiveChart data={processedData} />
}
```

Use the React DevTools Profiler to confirm which components are re-rendering unnecessarily before reaching for `memo`.

## 6. Break Up Long Tasks With `yield`

A single JavaScript task that runs for more than 50ms is considered a "Long Task" and blocks the browser from responding to input. Break long synchronous work into chunks that yield control back to the browser:

```
async function processLargeDataset(items: Item[]) {
  const results: ProcessedItem[] = []

  for (let i = 0; i < items.length; i++) {
    results.push(processItem(items[i]))

    // Yield every 50 items so the browser can handle input
    if (i % 50 === 0) {
      await new Promise(resolve => setTimeout(resolve, 0))
    }
  }

  return results
}
```

This pattern converts a potentially 500ms blocking task into a series of 5ms chunks, each with browser input handling gaps between them.

## 7. Move Work to a Web Worker

For truly CPU-intensive work (image processing, complex calculations, large data parsing), moving it off the main thread entirely is the most robust solution:

```
// worker.ts
self.addEventListener('message', (e) => {
  const result = heavyComputation(e.data)
  self.postMessage(result)
})

// component.tsx
const worker = new Worker(new URL('./worker.ts', import.meta.url))

function handleClick() {
  setLoading(true)
  worker.postMessage(largeDataset)
  worker.onmessage = (e) => {
    setResult(e.data)
    setLoading(false)
  }
}
```

The main thread stays free for rendering and input handling while the worker computes.

## FAQ

**What's the difference between INP and FID?**
FID measured only the first interaction's input delay. INP measures the worst interaction latency across the entire page session — it's a much more complete picture of responsiveness.

**Does INP affect SEO?**
Yes. INP is one of Google's Core Web Vitals since March 2024 and is a confirmed ranking factor. A poor INP score can reduce your search ranking.

**How is INP different from general page speed?**
INP specifically measures interaction responsiveness — how quickly the page reacts to user input. A page can load fast but have poor INP if JavaScript blocks the main thread during interactions.
