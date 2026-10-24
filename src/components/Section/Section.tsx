import type { ReactNode } from 'react'

export function Section({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section aria-label={title} className="space-y-4">
      <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      {children}
    </section>
  )
}
