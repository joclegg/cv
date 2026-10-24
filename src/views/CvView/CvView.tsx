import { CV } from '@/common/cv.constants'
import type { Cv } from '@/common/cv.types'
import { BadgeList } from '@/components/BadgeList/BadgeList'
import { BADGE_LIST_KIND } from '@/components/BadgeList/BadgeList.constants'
import { Deck } from '@/components/Deck/Deck'
import { EducationList } from '@/components/EducationList/EducationList'
import { ExperienceCard } from '@/components/ExperienceCard/ExperienceCard'
import { ProfileHeader } from '@/components/ProfileHeader/ProfileHeader'
import { Section } from '@/components/Section/Section'
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle'

export function CvView({ cv = CV }: { cv?: Cv }) {
  const experienceSlides = cv.experience.map((job) => ({
    id: job.company,
    label: job.company,
    content: <ExperienceCard job={job} />,
  }))

  return (
    <main className="space-y-10 pb-16">
      <div className="space-y-4 px-4 pt-4 sm:px-8 sm:pt-6">
        <div className="flex w-full items-start justify-between gap-4">
          <ProfileHeader cv={cv} />
          <ThemeToggle />
        </div>
        <p className="leading-relaxed text-muted-foreground sm:text-lg">
          {cv.summary}
        </p>
      </div>
      <div className="space-y-2">
        <h2 className="px-4 text-lg font-semibold tracking-tight sm:px-8">
          Experience
        </h2>
        <div className="flex flex-col">
          <Deck label="Experience" slides={experienceSlides} />
        </div>
      </div>
      <div className="space-y-10 px-4 sm:px-8">
        <Section title="Education">
          <EducationList items={cv.education} />
        </Section>
        <Section title="Skills">
          <BadgeList items={cv.skills} kind={BADGE_LIST_KIND.SKILL} />
        </Section>
        <Section title="Interests">
          <BadgeList items={cv.interests} kind={BADGE_LIST_KIND.INTEREST} />
        </Section>
      </div>
    </main>
  )
}
