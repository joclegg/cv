import { Code, Globe, Mail, MapPin, Phone } from 'lucide-react'

import { toTelHref } from '@/common/cv.functions'
import type { Cv } from '@/common/cv.types'
import { ContactLink } from '@/components/ContactLink/ContactLink'

export function ContactList({ cv }: { cv: Cv }) {
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted-foreground">
      <ContactLink icon={<MapPin className="size-4" />}>
        {cv.location}
      </ContactLink>
      <ContactLink
        href={`mailto:${cv.email}`}
        icon={<Mail className="size-4" />}
      >
        {cv.email}
      </ContactLink>
      {cv.phone && (
        <ContactLink
          href={toTelHref(cv.phone)}
          icon={<Phone className="size-4" />}
        >
          {cv.phone}
        </ContactLink>
      )}
      <ContactLink href={cv.linkedin} icon={<Globe className="size-4" />}>
        LinkedIn
      </ContactLink>
      <ContactLink href={cv.github} icon={<Code className="size-4" />}>
        GitHub
      </ContactLink>
    </div>
  )
}
