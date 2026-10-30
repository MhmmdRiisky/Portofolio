import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  ArrowLeft,
  Calendar,
  Layers,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  Target,
  UserCheck,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { GithubIcon } from '@/components/common/SocialIcons'
import { publicApi } from '@/services/api'
import { projectsData } from '@/data/portfolioData'
import type { Project } from '@/types'

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const [project, setProject] = useState<Project | null>(() => {
    return projectsData.find(p => p.slug === slug) || null
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!slug) return

    const localProj = projectsData.find(p => p.slug === slug)
    if (localProj) {
      setProject(localProj)
      setLoading(false)
      setError(false)
    } else {
      setLoading(true)
      publicApi
        .getProjectBySlug(slug)
        .then(data => {
          setProject(data)
          setLoading(false)
        })
        .catch(() => {
          setError(true)
          setLoading(false)
        })
    }
  }, [slug])

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
        <Navbar />
        <main className="flex-1 container-custom py-20">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="h-6 w-32 bg-[#E5E5E5] rounded animate-pulse" />
            <div className="h-12 w-3/4 bg-[#E5E5E5] rounded animate-pulse" />
            <div className="h-48 bg-[#E5E5E5] rounded-xl animate-pulse" />
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen flex flex-col bg-[#FAFAF9]">
        <Navbar />
        <main className="flex-1 container-custom py-24 text-center">
          <div className="max-w-md mx-auto editorial-card p-10">
            <h2 className="text-xl font-bold text-[#171717] mb-2">Project Tidak Ditemukan</h2>
            <p className="text-xs text-[#737373] mb-6">
              Detail proyek yang Anda cari mungkin telah dipindahkan atau belum dipublikasikan.
            </p>
            <Link to="/#projects" className="btn-primary text-xs">
              <ArrowLeft size={14} />
              <span>Kembali ke Halaman Proyek</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#171717]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16">
        <div className="container-custom max-w-4xl">
          {/* Back Button */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#737373] hover:text-[#171717] mb-8 transition-colors text-decoration-none"
          >
            <ArrowLeft size={14} />
            <span>Kembali ke Daftar Proyek</span>
          </Link>

          {/* Header Metadata */}
          <div className="mb-8 pb-8 border-b border-[#E5E5E5]">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="badge-minimal">
                {project.category}
              </span>
              {project.year && (
                <span className="badge-minimal">
                  <Calendar size={11} />
                  <span>Tahun {project.year}</span>
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171717] mb-4 leading-tight">
              {project.title}
            </h1>

            <p className="text-base sm:text-lg text-[#737373] leading-relaxed">
              {project.overview}
            </p>

            {/* Project Thumbnail */}
            {project.thumbnail && (
              <div className="mt-6 w-full overflow-hidden rounded-xl bg-[#F1F1EF] border border-[#E5E5E5]">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full max-h-80 object-cover object-top"
                />
              </div>
            )}

            {/* Role & Links Bar */}
            <div className="mt-6 pt-6 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
              {project.my_role && (
                <div className="flex items-center gap-2 text-xs text-[#171717]">
                  <UserCheck size={16} className="text-[#171717]" />
                  <span>Peran & Tanggung Jawab: </span>
                  <span className="font-semibold">{project.my_role}</span>
                </div>
              )}

              <div className="flex items-center gap-3">
                {project.github_url && (
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-1.5 px-3"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>Repository GitHub</span>
                  </a>
                )}
                {project.demo_url && (
                  <a
                    href={project.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-xs py-1.5 px-3"
                  >
                    <ExternalLink size={14} />
                    <span>Lihat Demo Aplikasi</span>
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Case Study Details Grid */}
          <div className="space-y-10">
            {/* 1. Problem Statement & Objectives */}
            <div className="grid md:grid-cols-2 gap-6">
              {project.problem && (
                <div className="editorial-card p-6 bg-white">
                  <div className="flex items-center gap-2 text-rose-800 text-xs font-semibold uppercase tracking-wider mb-2">
                    <AlertTriangle size={15} />
                    <span>Latar Belakang Masalah</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}

              {project.objectives && (
                <div className="editorial-card p-6 bg-white">
                  <div className="flex items-center gap-2 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Target size={15} />
                    <span>Tujuan Proyek</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {project.objectives}
                  </p>
                </div>
              )}
            </div>

            {/* 2. Solution Developed */}
            {project.solution && (
              <div className="editorial-card p-6 sm:p-8 bg-[#FAFAF9]">
                <div className="flex items-center gap-2 text-[#171717] text-xs font-semibold uppercase tracking-wider mb-3">
                  <Lightbulb size={16} />
                  <span>Solusi yang Dikembangkan</span>
                </div>
                <p className="text-sm sm:text-base text-[#171717] leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}

            {/* 3. Main Features */}
            {project.features && project.features.length > 0 && (
              <div className="editorial-card p-6 sm:p-8 bg-white">
                <h3 className="text-base font-bold text-[#171717] mb-4">
                  Fitur Utama Sistem
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#171717]">
                      <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Technologies Used */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="editorial-card p-6 bg-white">
                <h3 className="text-sm font-bold text-[#171717] mb-3 flex items-center gap-2">
                  <Layers size={16} />
                  <span>Teknologi yang Digunakan</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <div
                      key={tech.id}
                      className="px-3 py-1.5 rounded-md bg-[#F1F1EF] border border-[#E5E5E5] text-xs font-medium text-[#171717]"
                    >
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 5. Challenges & Solutions / Outcomes */}
            <div className="grid md:grid-cols-2 gap-6">
              {project.challenges && (
                <div className="editorial-card p-6 bg-white">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
                    Tantangan Pengembangan
                  </h4>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {project.outcomes && (
                <div className="editorial-card p-6 bg-white">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
                    Hasil & Pembelajaran
                  </h4>
                  <p className="text-xs sm:text-sm text-[#737373] leading-relaxed">
                    {project.outcomes}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
