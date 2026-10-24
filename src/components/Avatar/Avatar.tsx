import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'

import { cn } from '@/common/utils.functions'

export function Avatar({ className, ...props }: AvatarPrimitive.Root.Props) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten',
        className,
      )}
      {...props}
    />
  )
}
