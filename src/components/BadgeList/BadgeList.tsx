import { BADGE_LIST_VARIANT } from '@/components/BadgeList/BadgeList.constants'
import type { BadgeListKind } from '@/components/BadgeList/BadgeList.types'
import { Badge } from '@/components/Badge/Badge'

export function BadgeList({
  items,
  kind,
}: {
  items: string[]
  kind: BadgeListKind
}) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item}>
          <Badge variant={BADGE_LIST_VARIANT[kind]}>{item}</Badge>
        </li>
      ))}
    </ul>
  )
}
