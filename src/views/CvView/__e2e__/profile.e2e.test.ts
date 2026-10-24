import { expect, test } from '@e2e/playwrightExtensions'

import { CV } from '@/common/cv.constants'

test('opens on the profile, summary and experience', async ({ cvPage }) => {
  await expect(cvPage.heading).toHaveText(CV.name)
  await expect(cvPage.profileTitle).toBeVisible()
  await expect(cvPage.summary).toBeVisible()
  await expect(cvPage.section('Experience')).toBeVisible()
  await cvPage.expectScreenshot('profile.png')
})

test('links to contact details', async ({ cvPage }) => {
  await expect(cvPage.link(CV.email)).toHaveAttribute(
    'href',
    `mailto:${CV.email}`,
  )
  await expect(cvPage.link('LinkedIn')).toHaveAttribute('href', CV.linkedin)
  await expect(cvPage.link('GitHub')).toHaveAttribute('href', CV.github)
})
