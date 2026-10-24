import { expect, type Locator, type Page } from '@playwright/test'

import { CV } from '@/common/cv.constants'
import { THEME_OPTION } from '@/components/ThemeToggle/ThemeToggle.constants'
import type { Theme } from '@/components/ThemeToggle/ThemeToggle.types'

export class CvPage {
  readonly page: Page
  readonly root: Locator
  readonly heading: Locator
  readonly summary: Locator
  readonly profileTitle: Locator
  readonly currentSlide: Locator
  readonly deck: Locator
  readonly previousButton: Locator
  readonly nextButton: Locator

  constructor(page: Page) {
    this.page = page
    this.root = page.locator('html')
    this.heading = page.getByRole('heading', { level: 1 })
    this.summary = page.getByText(CV.summary)
    this.profileTitle = page
      .locator('header')
      .getByText(CV.title, { exact: true })
    this.deck = page.getByRole('region', { name: 'Experience', exact: true })
    this.currentSlide = page.locator(
      '[aria-roledescription="slide"][aria-hidden="false"]',
    )
    this.previousButton = page.getByRole('button', { name: 'Previous slide' })
    this.nextButton = page.getByRole('button', { name: 'Next slide' })
  }

  async open() {
    await this.page.goto('/')
  }

  async reload() {
    await this.page.reload()
  }

  section(name: string) {
    return this.page.getByRole('region', { name, exact: true })
  }

  slidesIn(name: string) {
    return this.section(name).locator('[aria-roledescription="slide"]')
  }

  link(name: string) {
    return this.page.getByRole('link', { name })
  }

  themeButton(current: Theme) {
    return this.page.getByRole('button', { name: THEME_OPTION[current].label })
  }

  async next() {
    await this.nextButton.click()
  }

  async jumpTo(label: string) {
    await this.page.getByRole('button', { name: `Go to ${label}` }).click()
  }

  async pressKey(key: string) {
    await this.currentSlide.click()
    await this.page.keyboard.press(key)
  }

  async swipeLeft() {
    await this.currentSlide.scrollIntoViewIfNeeded()
    const box = await this.currentSlide.boundingBox()
    const viewport = this.page.viewportSize()
    if (!box || !viewport) {
      throw new Error('slide not laid out')
    }
    const top = Math.max(box.y, 0)
    const bottom = Math.min(box.y + box.height, viewport.height)
    const client = await this.page.context().newCDPSession(this.page)
    await client.send('Input.synthesizeScrollGesture', {
      x: Math.round(box.x + box.width * 0.75),
      y: Math.round((top + bottom) / 2),
      xDistance: -Math.round(box.width * 0.6),
      speed: 1200,
      gestureSourceType: 'touch',
    })
  }

  async switchTheme(current: Theme) {
    await this.themeButton(current).click()
  }

  async expectSlide({
    position,
    total,
    label,
  }: {
    position: number
    total: number
    label: string
  }) {
    await expect(this.currentSlide).toHaveAccessibleName(
      `${position} of ${total}: ${label}`,
    )
  }

  async expectSettled() {
    await expect
      .poll(async () => {
        const slide = await this.currentSlide.boundingBox()
        const deck = await this.deck.boundingBox()
        return slide && deck
          ? Math.abs(slide.x - deck.x)
          : Number.POSITIVE_INFINITY
      })
      .toBeLessThan(1)
  }

  async expectDark(dark: boolean) {
    if (dark) {
      await expect(this.root).toHaveClass(/dark/)
    } else {
      await expect(this.root).not.toHaveClass(/dark/)
    }
  }

  async expectScreenshot(name: string) {
    await expect(this.page).toHaveScreenshot(name, { fullPage: true })
  }
}
