import { test as base } from '@playwright/test'

import { CvPage } from '@e2e/cvPage'

export const test = base.extend<{ cvPage: CvPage }>({
  cvPage: async ({ page }, use) => {
    const cvPage = new CvPage(page)
    await cvPage.open()
    await use(cvPage)
  },
})

export { expect } from '@playwright/test'
