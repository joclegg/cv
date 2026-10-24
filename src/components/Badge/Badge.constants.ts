import type { BadgeVariant } from '@/components/Badge/Badge.types'

export const BADGE_VARIANT = {
  DEFAULT: 'default',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
} as const

export const BADGE_BASE_CLASS =
  'inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all'

export const BADGE_VARIANT_CLASS: Record<BadgeVariant, string> = {
  [BADGE_VARIANT.DEFAULT]: 'bg-primary text-primary-foreground',
  [BADGE_VARIANT.SECONDARY]: 'bg-secondary text-secondary-foreground',
  [BADGE_VARIANT.OUTLINE]: 'border-border text-foreground',
}
