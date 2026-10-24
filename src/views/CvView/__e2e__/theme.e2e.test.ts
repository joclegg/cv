import { expect, test } from '@e2e/playwrightExtensions'

import { THEME } from '@/components/ThemeToggle/ThemeToggle.constants'

test('defaults to dark mode', async ({ cvPage }) => {
  await cvPage.expectDark(true)
  await expect(cvPage.themeButton(THEME.DARK)).toBeVisible()
})

test('switches to light mode and remembers it', async ({ cvPage }) => {
  await cvPage.switchTheme(THEME.DARK)
  await cvPage.expectDark(false)
  await cvPage.expectScreenshot('light.png')

  await cvPage.reload()
  await cvPage.expectDark(false)
  await expect(cvPage.themeButton(THEME.LIGHT)).toBeVisible()
})
