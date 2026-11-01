import type { ReactNode } from 'react'

export function OptionalLink({
  href,
  children,
}: {
  href?: string
  children: ReactNode
}) {
  return href ? (
    <a href={href} className="underline-offset-4 hover:underline">
      {children}
    </a>
  ) : (
    children
  )
}
