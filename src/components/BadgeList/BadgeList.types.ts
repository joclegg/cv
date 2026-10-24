import type { BADGE_LIST_KIND } from '@/components/BadgeList/BadgeList.constants'

export type BadgeListKind =
  (typeof BADGE_LIST_KIND)[keyof typeof BADGE_LIST_KIND]
