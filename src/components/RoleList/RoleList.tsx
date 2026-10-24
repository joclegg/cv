import type { Role } from '@/common/cv.types'
import { formatRange } from '@/common/format.functions'

export function RoleList({ roles }: { roles: Role[] }) {
  return (
    <ol aria-label="Roles" className="space-y-1">
      {roles.map((role) => (
        <li
          key={`${role.title}-${role.start}`}
          className="flex flex-wrap items-baseline gap-x-2"
        >
          <span className="font-medium">{role.title}</span>
          <span className="text-sm whitespace-nowrap text-muted-foreground">
            {formatRange(role)}
          </span>
        </li>
      ))}
    </ol>
  )
}
