import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'

import { cn } from '@/common/utils.functions'

export function AvatarFallback({
  className,
  ...props
}: AvatarPrimitive.Fallback.Props) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground',
        className,
      )}
      {...props}
    />
  )
}
