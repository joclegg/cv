export interface Cv {
  name: string
  title: string
  location: string
  email: string
  phone?: string
  linkedin: string
  github: string
  summary: string
  experience: Experience[]
  education: Education[]
  skills: string[]
  interests: string[]
}

export interface Education {
  title: string
  institution: string
  url?: string
  start: string
  end: string
  detail?: string
}

export interface Experience {
  company: string
  url?: string
  location: string
  roles: Role[]
  description?: string
  highlights: string[]
  projects: Project[]
  tags: string[]
}

export interface Project {
  name: string
  description: string
  highlights: string[]
}
export interface Role {
  title: string
  start: string
  end?: string
}
