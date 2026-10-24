import type { ComponentProps } from 'react'

import { cn } from '@/common/utils.functions'

export function CardContent({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-4', className)}
      {...props}
    />
  )
}
