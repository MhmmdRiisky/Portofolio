export interface Profile {
  id: number
  name: string
  headline: string
  about: string | null
  location: string
  email: string
  github_url: string | null
  linkedin_url: string | null
  cv_url: string | null
  profile_image: string | null
  created_at?: string
  updated_at?: string
}

export interface Technology {
  id: number
  name: string
  category: string
  description?: string | null
  icon_path?: string | null
  order: number
}

export interface Project {
  id: number
  title: string
  slug: string
  category: string
  overview: string
  problem?: string | null
  objectives?: string | null
  solution?: string | null
  features?: string[] | null
  my_role?: string | null
  challenges?: string | null
  outcomes?: string | null
  year?: number | null
  status: 'draft' | 'published'
  thumbnail?: string | null
  is_featured: boolean
  github_url?: string | null
  demo_url?: string | null
  order: number
  technologies?: Technology[]
  images?: Array<{ id: number; image_path: string; caption?: string; order: number }>
  created_at?: string
  updated_at?: string
}

export interface LearningJourney {
  id: number
  title: string
  category: string
  description: string
  technologies?: string | null
  period?: string | null
  status_label: string
  project_id?: number | null
  project?: Project | null
  order: number
}

export interface Education {
  id: number
  institution: string
  degree: string
  field_of_study?: string | null
  start_year: number
  end_year?: number | null
  description?: string | null
  order: number
}

export interface Certification {
  id: number
  title: string
  issuer: string
  date: string
  credential_id?: string | null
  credential_url?: string | null
  image_path?: string | null
  description?: string | null
}

export interface Experience {
  id: number
  title: string
  company: string
  location?: string | null
  start_date: string
  end_date?: string | null
  is_current: boolean
  description: string
  order: number
}

export interface ContactMessage {
  id: number
  name: string
  email: string
  subject: string
  content: string
  status: 'unread' | 'read'
  read_at?: string | null
  created_at: string
}

export interface User {
  id: number
  name: string
  email: string
}

export interface DashboardStats {
  total_projects: number
  published_projects: number
  draft_projects: number
  total_skills: number
  total_certificates: number
  total_learning_journeys: number
  total_education: number
  unread_messages: number
  total_messages: number
}

export interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
  errors?: Record<string, string[]>
}
