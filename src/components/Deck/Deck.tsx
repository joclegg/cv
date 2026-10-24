import { useRef, useState, type KeyboardEvent } from 'react'

import { DECK_KEY_STEP } from '@/components/Deck/Deck.constants'
import { clampSlide, slideFromScroll } from '@/components/Deck/Deck.functions'
import type { DeckSlide } from '@/components/Deck/Deck.types'
import { DeckNav } from '@/components/DeckNav/DeckNav'

export function Deck({
  label,
  slides,
}: {
  label: string
  slides: DeckSlide[]
}) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [current, setCurrent] = useState(0)

  function goTo(index: number) {
    const track = trackRef.current
    if (!track) {
      return
    }
    const target = clampSlide({ index, count: slides.length })
    track.scrollTo({ left: target * track.clientWidth, behavior: 'smooth' })
    setCurrent(target)
  }

  function handleScrollEnd() {
    const track = trackRef.current
    if (track) {
      setCurrent(
        slideFromScroll({
          scrollLeft: track.scrollLeft,
          width: track.clientWidth,
        }),
      )
    }
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const step = DECK_KEY_STEP[event.key]
    if (step) {
      event.preventDefault()
      goTo(current + step)
    }
  }

  return (
    <section
      aria-label={label}
      aria-roledescription="carousel"
      className="flex min-h-0 flex-1 flex-col"
    >
      <div
        ref={trackRef}
        tabIndex={0}
        onScrollEnd={handleScrollEnd}
        onKeyDown={handleKeyDown}
        className="flex flex-1 snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto overscroll-x-contain outline-none"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}: ${slide.label}`}
            aria-hidden={index !== current}
            inert={index !== current}
            className="w-full shrink-0 snap-center snap-always"
          >
            <div className="flex min-h-full flex-col px-4 py-4 sm:px-8 sm:py-6">
              {slide.content}
            </div>
          </div>
        ))}
      </div>
      {slides.length > 1 && (
        <DeckNav slides={slides} current={current} onSelect={goTo} />
      )}
    </section>
  )
}
