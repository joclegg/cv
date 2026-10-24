import { expect, test } from '@e2e/playwrightExtensions'

import { CV } from '@/common/cv.constants'

const [FIRST_JOB, SECOND_JOB, ...LATER_JOBS] = CV.experience

const JOB_COUNT = CV.experience.length

test('steps through every job with the buttons', async ({ cvPage }) => {
  await cvPage.expectSlide({
    position: 1,
    total: JOB_COUNT,
    label: FIRST_JOB.company,
  })
  await expect(cvPage.previousButton).toBeDisabled()

  for (const [index, job] of [SECOND_JOB, ...LATER_JOBS].entries()) {
    await cvPage.next()
    await cvPage.expectSlide({
      position: index + 2,
      total: JOB_COUNT,
      label: job.company,
    })
    await expect(
      cvPage.currentSlide.getByText(job.roles[0].title, { exact: true }),
    ).toBeVisible()
    await cvPage.expectSettled()
  }

  await expect(cvPage.nextButton).toBeDisabled()
  await cvPage.expectScreenshot('experience.png')
})

test(
  'moves between cards with the arrow keys',
  { tag: '@desktop' },
  async ({ cvPage }) => {
    await cvPage.pressKey('ArrowRight')
    await cvPage.expectSlide({
      position: 2,
      total: JOB_COUNT,
      label: SECOND_JOB.company,
    })
    await cvPage.pressKey('ArrowLeft')
    await cvPage.expectSlide({
      position: 1,
      total: JOB_COUNT,
      label: FIRST_JOB.company,
    })
  },
)

test(
  'moves between cards by swiping',
  { tag: '@mobile' },
  async ({ cvPage }) => {
    await cvPage.swipeLeft()
    await cvPage.expectSlide({
      position: 2,
      total: JOB_COUNT,
      label: SECOND_JOB.company,
    })
  },
)
