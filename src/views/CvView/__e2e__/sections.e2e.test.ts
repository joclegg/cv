import { expect, test } from '@e2e/playwrightExtensions'

import { CV } from '@/common/cv.constants'

test('scrolls down to education, skills and interests', async ({ cvPage }) => {
  const education = cvPage.section('Education')
  await education.scrollIntoViewIfNeeded()
  await expect(education).toBeInViewport()
  await expect(education.getByText(CV.education[0].title)).toBeVisible()

  await expect(
    cvPage.section('Skills').getByText(CV.skills[0], { exact: true }),
  ).toBeVisible()
  await expect(
    cvPage.section('Interests').getByText(CV.interests[0], { exact: true }),
  ).toBeVisible()
})

test('keeps the lower sections out of the slide deck', async ({ cvPage }) => {
  await expect(cvPage.slidesIn('Education')).toHaveCount(0)
  await expect(cvPage.slidesIn('Skills')).toHaveCount(0)
  await expect(cvPage.slidesIn('Interests')).toHaveCount(0)
})
