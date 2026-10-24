import { describe, expect, it } from 'vitest'

import { clampSlide, slideFromScroll } from '@/components/Deck/Deck.functions'

describe('clampSlide', () => {
  it('keeps an index inside the deck', () => {
    expect(clampSlide({ index: 2, count: 5 })).toBe(2)
    expect(clampSlide({ index: -1, count: 5 })).toBe(0)
    expect(clampSlide({ index: 9, count: 5 })).toBe(4)
  })
})

describe('slideFromScroll', () => {
  it('rounds to the nearest slide', () => {
    expect(slideFromScroll({ scrollLeft: 0, width: 400 })).toBe(0)
    expect(slideFromScroll({ scrollLeft: 590, width: 400 })).toBe(1)
    expect(slideFromScroll({ scrollLeft: 610, width: 400 })).toBe(2)
  })

  it('returns the first slide before layout', () => {
    expect(slideFromScroll({ scrollLeft: 100, width: 0 })).toBe(0)
  })
})
