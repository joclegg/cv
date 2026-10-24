import { BADGE_VARIANT } from '@/components/Badge/Badge.constants'
import type { BadgeVariant } from '@/components/Badge/Badge.types'
import type { BadgeListKind } from '@/components/BadgeList/BadgeList.types'

export const BADGE_LIST_KIND = {
  TAG: 'tag',
  SKILL: 'skill',
  INTEREST: 'interest',
} as const

export const BADGE_LIST_VARIANT: Record<BadgeListKind, BadgeVariant> = {
  [BADGE_LIST_KIND.TAG]: BADGE_VARIANT.SECONDARY,
  [BADGE_LIST_KIND.SKILL]: BADGE_VARIANT.DEFAULT,
  [BADGE_LIST_KIND.INTEREST]: BADGE_VARIANT.OUTLINE,
}
