import type { ComponentProps } from 'react'

import { cn } from '@/common/utils.functions'

export function CardHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        'grid auto-rows-min items-start gap-1 rounded-t-xl px-4',
        className,
      )}
      {...props}
    />
  )
}
