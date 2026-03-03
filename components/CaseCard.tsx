import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { AutomationCase } from '@/lib/notion'

interface CaseCardProps {
  automationCase: AutomationCase
}

export default function CaseCard({ automationCase: c }: CaseCardProps) {
  // Priority: internal slug page > external link > no link
  const hasInternalPage = Boolean(c.slug)
  const hasExternalLink = c.link && c.link !== '#'
  const isLinked = hasInternalPage || hasExternalLink

  const sharedClass =
    'group block bg-background border border-border rounded-lg p-8 hover:border-primary/40 hover:shadow-lg transition-all duration-300'

  const inner = (
    <>
      {/* Icon + Title row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-xl shrink-0">
            {c.icon || '⚙️'}
          </div>
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
            {c.name}
          </h3>
        </div>
        {isLinked && (
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 mt-0.5" />
        )}
      </div>

      {/* Description */}
      <p className="font-body text-base text-muted-foreground leading-[1.75] mb-5">
        {c.description}
      </p>

      {/* Tools */}
      <div className="flex gap-2 flex-wrap mb-5">
        {c.tools.map((tool) => (
          <span
            key={tool}
            className="font-display text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-sm"
          >
            {tool}
          </span>
        ))}
      </div>

    </>
  )

  if (hasInternalPage) {
    return (
      <Link href={`/cases/${c.slug}`} className={sharedClass}>
        {inner}
      </Link>
    )
  }

  if (hasExternalLink) {
    return (
      <a href={c.link} target="_blank" rel="noopener noreferrer" className={sharedClass}>
        {inner}
      </a>
    )
  }

  return <div className="group block bg-background border border-border rounded-lg p-8">{inner}</div>
}
