import type { BADGE_VARIANT } from '@/components/Badge/Badge.constants'

export type BadgeVariant = (typeof BADGE_VARIANT)[keyof typeof BADGE_VARIANT]
