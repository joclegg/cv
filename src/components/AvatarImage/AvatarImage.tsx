import { Avatar as AvatarPrimitive } from '@base-ui/react/avatar'

import { cn } from '@/common/utils.functions'

export function AvatarImage({
  className,
  ...props
}: AvatarPrimitive.Image.Props) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn(
        'aspect-square size-full rounded-full object-cover',
        className,
      )}
      {...props}
    />
  )
}
