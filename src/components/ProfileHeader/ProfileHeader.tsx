import PROFILE_IMAGE from '@/assets/profile.jpg'
import { getInitials } from '@/common/cv.functions'
import type { Cv } from '@/common/cv.types'
import { Avatar } from '@/components/Avatar/Avatar'
import { AvatarFallback } from '@/components/AvatarFallback/AvatarFallback'
import { AvatarImage } from '@/components/AvatarImage/AvatarImage'
import { ContactList } from '@/components/ContactList/ContactList'

export function ProfileHeader({ cv }: { cv: Cv }) {
  return (
    <header className="flex min-w-0 items-center gap-4">
      <Avatar className="size-14 shrink-0 sm:size-20">
        <AvatarImage src={PROFILE_IMAGE} alt={cv.name} />
        <AvatarFallback>{getInitials(cv.name)}</AvatarFallback>
      </Avatar>
      <div className="min-w-0 space-y-1">
        <h1 className="truncate text-2xl font-bold tracking-tight sm:text-3xl">
          {cv.name}
        </h1>
        <p className="truncate text-muted-foreground">{cv.title}</p>
        <ContactList cv={cv} />
      </div>
    </header>
  )
}
