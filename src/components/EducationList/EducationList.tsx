import type { Education } from '@/common/cv.types'
import { OptionalLink } from '@/components/OptionalLink/OptionalLink'

export function EducationList({ items }: { items: Education[] }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.institution} className="space-y-1">
          <p className="font-medium">{item.title}</p>
          <p className="text-sm text-muted-foreground">
            <OptionalLink href={item.url}>{item.institution}</OptionalLink> ·{' '}
            {item.start} – {item.end}
          </p>
          {item.detail && (
            <p className="text-sm leading-relaxed">{item.detail}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
