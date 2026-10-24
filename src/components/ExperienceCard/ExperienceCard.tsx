import { getTenure } from '@/common/cv.functions'
import type { Experience } from '@/common/cv.types'
import { formatRange } from '@/common/format.functions'
import { BadgeList } from '@/components/BadgeList/BadgeList'
import { BADGE_LIST_KIND } from '@/components/BadgeList/BadgeList.constants'
import { Card } from '@/components/Card/Card'
import { CardContent } from '@/components/CardContent/CardContent'
import { CardDescription } from '@/components/CardDescription/CardDescription'
import { CardHeader } from '@/components/CardHeader/CardHeader'
import { CardTitle } from '@/components/CardTitle/CardTitle'
import { HighlightList } from '@/components/HighlightList/HighlightList'
import { ProjectSection } from '@/components/ProjectSection/ProjectSection'
import { RoleList } from '@/components/RoleList/RoleList'

export function ExperienceCard({ job }: { job: Experience }) {
  return (
    <article aria-label={job.company} className="flex flex-1 flex-col">
      <Card className="flex-1 transition-shadow hover:shadow-lg">
        <CardHeader className="gap-3">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <CardTitle className="text-xl">
              {job.url ? (
                <a
                  href={job.url}
                  className="underline-offset-4 hover:underline"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </CardTitle>
            <span className="text-sm whitespace-nowrap text-muted-foreground">
              {formatRange(getTenure(job.roles))}
            </span>
          </div>
          <CardDescription>{job.location}</CardDescription>
          <RoleList roles={job.roles} />
        </CardHeader>
        <CardContent className="space-y-5">
          {job.description && (
            <p className="leading-relaxed">{job.description}</p>
          )}
          {job.highlights.length > 0 && (
            <HighlightList items={job.highlights} />
          )}
          {job.projects.map((project) => (
            <ProjectSection key={project.name} project={project} />
          ))}
          {job.tags.length > 0 && (
            <BadgeList items={job.tags} kind={BADGE_LIST_KIND.TAG} />
          )}
        </CardContent>
      </Card>
    </article>
  )
}
