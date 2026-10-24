import type { Project } from '@/common/cv.types'
import { HighlightList } from '@/components/HighlightList/HighlightList'

export function ProjectSection({ project }: { project: Project }) {
  return (
    <section aria-label={project.name} className="space-y-2">
      <h3 className="font-medium">{project.name}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>
      <HighlightList items={project.highlights} />
    </section>
  )
}
