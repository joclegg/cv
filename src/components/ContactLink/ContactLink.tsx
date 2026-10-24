import type { ReactNode } from 'react'

export function ContactLink({
  href,
  icon,
  children,
}: {
  href?: string
  icon: ReactNode
  children: ReactNode
}) {
  const content = (
    <span className="inline-flex items-center gap-1.5">
      {icon}
      <span className="sr-only sm:not-sr-only">{children}</span>
    </span>
  )
  return href ? (
    <a
      href={href}
      className="py-1 underline-offset-4 hover:text-foreground hover:underline"
    >
      {content}
    </a>
  ) : (
    content
  )
}
