import type { ComponentProps } from 'react'

import { cn } from '@/common/utils.functions'

export function CardTitle({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        'font-heading text-base leading-snug font-medium',
        className,
      )}
      {...props}
    />
  )
}
