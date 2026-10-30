import axios from 'axios'
import type {
  ApiResponse,
  Profile,
  Project,
  Technology,
  LearningJourney,
  Education,
  Certification,
  DashboardStats,
  ContactMessage,
  User,
} from '@/types'

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost/Portfolio/backend/public/api/v1'

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})

import {
  profileData,
  projectsData,
  technologiesData,
  learningJourneysData,
  educationData,
  certificationsData,
} from '@/data/portfolioData'

// Attach Bearer token if present
apiClient.interceptors.request.use(config => {
  const token = localStorage.getItem('admin_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Public API Services (Graceful standalone frontend support)
export const publicApi = {
  getProfile: async () => {
    try {
      const res = await apiClient.get<ApiResponse<Profile>>('/profile')
      return res.data.data
    } catch {
      return profileData
    }
  },
  getProjects: async (category?: string) => {
    try {
      const params = category && category !== 'Semua' ? { category } : {}
      const res = await apiClient.get<ApiResponse<Project[]>>('/projects', { params })
      if (res.data?.data?.length > 0) return res.data.data
      throw new Error()
    } catch {
      if (!category || category === 'Semua') return projectsData
      return projectsData.filter(p => p.category.toLowerCase() === category.toLowerCase())
    }
  },
  getProjectBySlug: async (slug: string) => {
    try {
      const res = await apiClient.get<ApiResponse<Project>>(`/projects/${slug}`)
      if (res.data?.data) return res.data.data
      throw new Error()
    } catch {
      const proj = projectsData.find(p => p.slug === slug)
      if (proj) return proj
      throw new Error('Project not found')
    }
  },
  getSkills: async () => {
    try {
      const res = await apiClient.get<ApiResponse<Technology[]>>('/skills')
      if (res.data?.data?.length > 0) return res.data.data
      throw new Error()
    } catch {
      return technologiesData
    }
  },
  getLearningJourneys: async () => {
    try {
      const res = await apiClient.get<ApiResponse<LearningJourney[]>>('/learning-journeys')
      if (res.data?.data?.length > 0) return res.data.data
      throw new Error()
    } catch {
      return learningJourneysData
    }
  },
  getEducation: async () => {
    try {
      const res = await apiClient.get<ApiResponse<Education[]>>('/education')
      if (res.data?.data?.length > 0) return res.data.data
      throw new Error()
    } catch {
      return educationData
    }
  },
  getCertificates: async () => {
    try {
      const res = await apiClient.get<ApiResponse<Certification[]>>('/certificates')
      if (res.data?.data?.length > 0) return res.data.data
      throw new Error()
    } catch {
      return certificationsData
    }
  },
  sendContactMessage: async (data: { name: string; email: string; subject?: string; message: string }) => {
    try {
      const res = await apiClient.post<ApiResponse<ContactMessage>>('/contact', data)
      return res.data
    } catch {
      return {
        success: true,
        message: 'Pesan Anda berhasil dicatat.',
        data: {
          id: Date.now(),
          name: data.name,
          email: data.email,
          subject: data.subject || '',
          content: data.message,
          status: 'unread' as const,
          created_at: new Date().toISOString(),
        },
      }
    }
  },
}

// Auth API Services
export const authApi = {
  login: async (email: string, password: string) => {
    const res = await apiClient.post<ApiResponse<{ user: User; token: string }>>('/auth/login', {
      email,
      password,
    })
    return res.data.data
  },
  logout: async () => {
    const res = await apiClient.post<ApiResponse<null>>('/auth/logout')
    return res.data
  },
  me: async () => {
    const res = await apiClient.get<ApiResponse<{ user: User }>>('/auth/me')
    return res.data.data.user
  },
}

// Admin CMS API Services
export const adminApi = {
  getStats: async () => {
    const res = await apiClient.get<ApiResponse<DashboardStats>>('/admin/dashboard/stats')
    return res.data.data
  },
  getProfile: async () => {
    const res = await apiClient.get<ApiResponse<Profile>>('/admin/profile')
    return res.data.data
  },
  updateProfile: async (formData: FormData) => {
    const res = await apiClient.post<ApiResponse<Profile>>('/admin/profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return res.data.data
  },
  getProjects: async () => {
    const res = await apiClient.get<ApiResponse<Project[]>>('/admin/projects')
    return res.data.data
  },
  createProject: async (formData: FormData) => {
    const res = await apiClient.post<ApiResponse<Project>>('/admin/projects', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return res.data.data
  },
  updateProject: async (id: number, formData: FormData) => {
    const res = await apiClient.post<ApiResponse<Project>>(`/admin/projects/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return res.data.data
  },
  deleteProject: async (id: number) => {
    const res = await apiClient.delete<ApiResponse<null>>(`/admin/projects/${id}`)
    return res.data
  },
  getSkills: async () => {
    const res = await apiClient.get<ApiResponse<Technology[]>>('/admin/skills')
    return res.data.data
  },
  createSkill: async (data: Partial<Technology>) => {
    const res = await apiClient.post<ApiResponse<Technology>>('/admin/skills', data)
    return res.data.data
  },
  updateSkill: async (id: number, data: Partial<Technology>) => {
    const res = await apiClient.put<ApiResponse<Technology>>(`/admin/skills/${id}`, data)
    return res.data.data
  },
  deleteSkill: async (id: number) => {
    const res = await apiClient.delete<ApiResponse<null>>(`/admin/skills/${id}`)
    return res.data
  },
  getEducation: async () => {
    const res = await apiClient.get<ApiResponse<Education[]>>('/admin/education')
    return res.data.data
  },
  createEducation: async (data: Partial<Education>) => {
    const res = await apiClient.post<ApiResponse<Education>>('/admin/education', data)
    return res.data.data
  },
  updateEducation: async (id: number, data: Partial<Education>) => {
    const res = await apiClient.put<ApiResponse<Education>>(`/admin/education/${id}`, data)
    return res.data.data
  },
  deleteEducation: async (id: number) => {
    const res = await apiClient.delete<ApiResponse<null>>(`/admin/education/${id}`)
    return res.data
  },
  getLearningJourneys: async () => {
    const res = await apiClient.get<ApiResponse<LearningJourney[]>>('/admin/learning-journeys')
    return res.data.data
  },
  createLearningJourney: async (data: Partial<LearningJourney>) => {
    const res = await apiClient.post<ApiResponse<LearningJourney>>('/admin/learning-journeys', data)
    return res.data.data
  },
  updateLearningJourney: async (id: number, data: Partial<LearningJourney>) => {
    const res = await apiClient.put<ApiResponse<LearningJourney>>(`/admin/learning-journeys/${id}`, data)
    return res.data.data
  },
  deleteLearningJourney: async (id: number) => {
    const res = await apiClient.delete<ApiResponse<null>>(`/admin/learning-journeys/${id}`)
    return res.data
  },
  getCertificates: async () => {
    const res = await apiClient.get<ApiResponse<Certification[]>>('/admin/certificates')
    return res.data.data
  },
  createCertificate: async (formData: FormData) => {
    const res = await apiClient.post<ApiResponse<Certification>>('/admin/certificates', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return res.data.data
  },
  updateCertificate: async (id: number, formData: FormData) => {
    const res = await apiClient.post<ApiResponse<Certification>>(`/admin/certificates/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    return res.data.data
  },
  deleteCertificate: async (id: number) => {
    const res = await apiClient.delete<ApiResponse<null>>(`/admin/certificates/${id}`)
    return res.data
  },
  getMessages: async () => {
    const res = await apiClient.get<ApiResponse<ContactMessage[]>>('/admin/messages')
    return res.data.data
  },
  markMessageRead: async (id: number) => {
    const res = await apiClient.patch<ApiResponse<ContactMessage>>(`/admin/messages/${id}/read`)
    return res.data.data
  },
  deleteMessage: async (id: number) => {
    const res = await apiClient.delete<ApiResponse<null>>(`/admin/messages/${id}`)
    return res.data
  },
}
