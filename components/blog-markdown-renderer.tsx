"use client"

import ReactMarkdown from "react-markdown"
import { MermaidBlock, rehypeMermaid } from "react-markdown-mermaid"
import remarkGfm from "remark-gfm"

type BlogMarkdownRendererProps = {
  content: string
}

export function BlogMarkdownRenderer({ content }: BlogMarkdownRendererProps) {
  return (
    <div className="mt-10 prose prose-invert max-w-none text-base leading-8 text-foreground/90 sm:text-lg">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeMermaid]}
        components={{
          MermaidBlock,
          h2: ({ node, ...props }) => (
            <h2 className="pt-4 font-display text-3xl font-semibold tracking-[-0.05em] text-foreground" {...props} />
          ),
          h3: ({ node, ...props }) => (
            <h3 className="pt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-foreground" {...props} />
          ),
          p: ({ node, ...props }) => <p className="text-muted-foreground leading-8" {...props} />,
          ul: ({ node, ...props }) => (
            <ul className="space-y-2 pl-5 text-muted-foreground list-disc" {...props} />
          ),
          ol: ({ node, ...props }) => (
            <ol className="space-y-2 pl-5 text-muted-foreground list-decimal" {...props} />
          ),
          li: ({ node, ...props }) => <li className="leading-7" {...props} />,
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code className="rounded bg-background/70 px-1.5 py-0.5 font-mono text-[0.9em] text-foreground" {...props} />
            ) : (
              <code {...props} />
            ),
          pre: ({ node, ...props }) => (
            <pre className="overflow-x-auto rounded-[1.2rem] border border-border/70 bg-background/75 p-4 font-mono text-sm leading-6 text-foreground" {...props} />
          ),
          table: ({ node, ...props }) => (
            <table className="w-full border-collapse border border-border/70 rounded-lg overflow-hidden my-6" {...props} />
          ),
          thead: ({ node, ...props }) => (
            <thead className="bg-background/50 border-b border-border/70" {...props} />
          ),
          tbody: ({ node, ...props }) => (
            <tbody className="divide-y divide-border/70" {...props} />
          ),
          tr: ({ node, ...props }) => (
            <tr className="hover:bg-background/30 transition-colors" {...props} />
          ),
          th: ({ node, ...props }) => (
            <th className="px-4 py-3 text-left font-semibold text-foreground border-r border-border/70 last:border-r-0" {...props} />
          ),
          td: ({ node, ...props }) => (
            <td className="px-4 py-3 text-muted-foreground border-r border-border/70 last:border-r-0" {...props} />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}
