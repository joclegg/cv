import { describe, expect, it } from 'vitest'

import { getInitials, getTenure, toTelHref } from '@/common/cv.functions'

describe('getInitials', () => {
  it('takes the first letter of each name', () => {
    expect(getInitials('Joseph Clegg')).toBe('JC')
  })
})

describe('toTelHref', () => {
  it('strips spaces from the number', () => {
    expect(toTelHref('+44 752 676 7568')).toBe('tel:+447526767568')
  })
})

describe('getTenure', () => {
  it('spans from the first role to the latest', () => {
    expect(
      getTenure([
        { title: 'Senior', start: '2022', end: '2023-02' },
        { title: 'Developer', start: '2021-05', end: '2022' },
      ]),
    ).toEqual({ start: '2021-05', end: '2023-02' })
  })

  it('stays open while the latest role is current', () => {
    expect(
      getTenure([
        { title: 'Senior', start: '2025-01' },
        { title: 'Developer', start: '2023-05', end: '2024-12' },
      ]),
    ).toEqual({ start: '2023-05', end: undefined })
  })
})
