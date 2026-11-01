import { ChevronLeft, ChevronRight } from 'lucide-react'

import { cn } from '@/common/utils.functions'
import { Button } from '@/components/Button/Button'
import { BUTTON_SIZE } from '@/components/Button/Button.constants'
import type { DeckSlide } from '@/components/Deck/Deck.types'
import { DECK_NAV_LABEL } from '@/components/DeckNav/DeckNav.constants'

export function DeckNav({
  slides,
  current,
  onSelect,
}: {
  slides: DeckSlide[]
  current: number
  onSelect: (index: number) => void
}) {
  return (
    <nav
      aria-label={DECK_NAV_LABEL.NAV}
      className="flex items-center justify-between gap-4 px-4 py-3 sm:px-8"
    >
      <Button
        size={BUTTON_SIZE.ICON}
        aria-label={DECK_NAV_LABEL.PREVIOUS}
        disabled={current === 0}
        onClick={() => onSelect(current - 1)}
      >
        <ChevronLeft />
      </Button>
      <div className="flex items-center gap-1">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            aria-label={`${DECK_NAV_LABEL.GO_TO} ${slide.label}`}
            aria-current={index === current ? 'step' : undefined}
            onClick={() => onSelect(index)}
            className="flex size-6 items-center justify-center"
          >
            <span
              className={cn(
                'h-1.5 rounded-full bg-muted-foreground/40 transition-all duration-300',
                index === current ? 'w-6 bg-foreground' : 'w-1.5',
              )}
            />
          </button>
        ))}
      </div>
      <Button
        size={BUTTON_SIZE.ICON}
        aria-label={DECK_NAV_LABEL.NEXT}
        disabled={current === slides.length - 1}
        onClick={() => onSelect(current + 1)}
      >
        <ChevronRight />
      </Button>
    </nav>
  )
}
