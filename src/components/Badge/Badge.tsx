import type { ComponentProps } from 'react'

import { cn } from '@/common/utils.functions'
import {
  BADGE_BASE_CLASS,
  BADGE_VARIANT,
  BADGE_VARIANT_CLASS,
} from '@/components/Badge/Badge.constants'
import type { BadgeVariant } from '@/components/Badge/Badge.types'

export function Badge({
  className,
  variant = BADGE_VARIANT.DEFAULT,
  ...props
}: ComponentProps<'span'> & { variant?: BadgeVariant }) {
  return (
    <span
      data-slot="badge"
      className={cn(BADGE_BASE_CLASS, BADGE_VARIANT_CLASS[variant], className)}
      {...props}
    />
  )
}
