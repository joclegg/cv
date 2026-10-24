import { describe, expect, it } from 'vitest'

import { formatMonth, formatRange } from '@/common/format.functions'

describe('formatMonth', () => {
  it('formats a year-month string', () => {
    expect(formatMonth('2021-05')).toBe('May 2021')
  })

  it('formats a year on its own', () => {
    expect(formatMonth('2016')).toBe('2016')
  })
})

describe('formatRange', () => {
  it('formats a closed range', () => {
    expect(formatRange({ start: '2019-05', end: '2021-04' })).toBe(
      'May 2019 – Apr 2021',
    )
  })

  it('treats a missing end as present', () => {
    expect(formatRange({ start: '2021-05' })).toBe('May 2021 – Present')
  })

  it('mixes months and years', () => {
    expect(formatRange({ start: '2015-08', end: '2016' })).toBe(
      'Aug 2015 – 2016',
    )
  })
})
