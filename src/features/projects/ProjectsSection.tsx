import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderGit2 } from 'lucide-react'
import { GithubIcon } from '@/components/common/SocialIcons'
import { projectsData } from '@/data/portfolioData'
import type { Project } from '@/types'

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('Semua')

  const categories = [
    'Semua',
    'Web Development',
    'DevOps & Infrastructure',
    'Cyber Security',
    'QA & Software Testing',
    'Academic Projects',
  ]

  const filteredProjects: Project[] =
    activeCategory === 'Semua'
      ? projectsData
      : projectsData.filter(
          p => p.category.toLowerCase() === activeCategory.toLowerCase()
        )

  return (
    <section id="projects" className="section-padding border-b border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
              Koleksi Proyek & Studi Kasus
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#171717] mb-3">
              Proyek & Portofolio Karya
            </h2>
            <p className="text-base text-[#737373] leading-relaxed">
              Koleksi proyek terpilih yang mencakup implementasi <strong>Web Development</strong>, infrastruktur <strong>DevOps</strong>, pengujian keamanan <strong>Cyber Security (VAPT)</strong>, dan pengujian sistem <strong>Software Testing & QA</strong>.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs font-medium px-3 py-1.5 rounded-md border transition-all ${
                  activeCategory === cat
                    ? 'bg-[#171717] text-white border-[#171717] shadow-xs'
                    : 'bg-white text-[#737373] border-[#E5E5E5] hover:text-[#171717] hover:border-[#D4D4D4]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map(proj => (
            <div
              key={proj.id}
              className="editorial-card p-6 flex flex-col justify-between group bg-white border border-[#E5E5E5] hover:shadow-md hover:border-[#171717]/30 transition-all duration-300"
            >
              <div>
                {/* Project Thumbnail */}
                {proj.thumbnail && (
                  <div className="overflow-hidden rounded-t-[inherit] mb-4 bg-[#F1F1EF] -mx-6 -mt-6">
                    <img
                      src={proj.thumbnail}
                      alt={proj.title}
                      className="w-full h-40 sm:h-44 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                {/* Top Bar: Category & Year */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="badge-minimal">
                    {proj.category}
                  </span>
                  <span className="text-xs text-[#737373] font-medium">
                    {proj.year || '2024'}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#171717] mb-2 group-hover:text-black transition-colors leading-snug">
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="hover:underline text-decoration-none text-[#171717]"
                  >
                    {proj.title}
                  </Link>
                </h3>

                {/* Overview */}
                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-4 line-clamp-3">
                  {proj.overview}
                </p>

                {/* My Role */}
                {proj.my_role && (
                  <div className="text-xs text-[#171717] bg-[#F1F1EF] px-2.5 py-1.5 rounded-md mb-4 border border-[#E5E5E5]">
                    <span className="text-[#737373]">Peran: </span>
                    <span className="font-medium">{proj.my_role}</span>
                  </div>
                )}

                {/* Tech stack tags */}
                {proj.technologies && proj.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {proj.technologies.slice(0, 5).map(tech => (
                      <span
                        key={tech.id}
                        className="text-[11px] px-2 py-0.5 rounded bg-white text-[#171717] border border-[#E5E5E5]"
                      >
                        {tech.name}
                      </span>
                    ))}
                    {proj.technologies.length > 5 && (
                      <span className="text-[11px] px-1.5 py-0.5 rounded bg-[#F1F1EF] text-[#737373]">
                        +{proj.technologies.length - 5}
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Footer action */}
              <div className="pt-4 border-t border-[#E5E5E5] flex items-center justify-between">
                <Link
                  to={`/projects/${proj.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#171717] hover:underline"
                >
                  <span>Lihat Detail Studi Kasus</span>
                  <ArrowUpRight size={14} />
                </Link>

                {proj.github_url && (
                  <a
                    href={proj.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#737373] hover:text-[#171717] p-1"
                    aria-label="Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="editorial-card p-12 text-center text-[#737373]">
            <FolderGit2 className="mx-auto mb-3 text-[#737373]" size={32} />
            <p className="text-sm">Tidak ada proyek dalam kategori ini saat ini.</p>
          </div>
        )}
      </div>
    </section>
  )
}
