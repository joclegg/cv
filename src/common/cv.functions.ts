import type { Role } from '@/common/cv.types'

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
}

export function getTenure(roles: Role[]): { start: string; end?: string } {
  return { start: roles[roles.length - 1].start, end: roles[0].end }
}

export function toTelHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`
}
