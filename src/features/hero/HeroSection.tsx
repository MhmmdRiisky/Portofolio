import React from 'react'
import { ArrowDown, Mail, ExternalLink, Code2, Layers, ShieldCheck, Cpu, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons'
import { profileData } from '@/data/portfolioData'

export default function HeroSection() {
  return (
    <section className="section-padding border-b border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="container-custom">
        <div className="max-w-3xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1F1EF] border border-[#E5E5E5] text-xs font-medium text-[#171717] mb-8 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Terbuka untuk Posisi Entry-Level: <strong>Web Developer • QA Tester • DevOps / IT Staff</strong></span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#171717] leading-[1.12] mb-6">
            Halo, saya {profileData.name}.
          </h1>

          {/* Role Subheading */}
          <p className="text-lg sm:text-xl font-medium text-[#171717] mb-4">
            Fresh Graduate S1 Teknik Informatika — STT Terpadu Nurul Fikri
          </p>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-[#737373] leading-relaxed mb-8">
            Lulusan Teknik Informatika dengan pengalaman belajar dan pengerjaan proyek di bidang <strong>Fullstack Web Development</strong> (Laravel, React.js, MySQL), <strong>DevOps & IT Infrastructure</strong> (Linux, Docker), <strong>Software Testing & QA</strong> (Postman API Testing), serta <strong>Cyber Security</strong> (Vulnerability Assessment). Siap berkontribusi dan berkembang dalam berbagai peran entry-level IT.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <a href="#projects" className="btn-primary">
              <span>Lihat Project</span>
              <ArrowDown size={16} />
            </a>
            <a
              href={profileData.cv_url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              <FileText size={16} />
              <span>Lihat CV</span>
              <ExternalLink size={13} className="opacity-70" />
            </a>
            <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
              <Mail size={16} />
              <span>Hubungi Saya</span>
            </a>
          </div>

          {/* Social Links & Highlights */}
          <div className="pt-8 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#737373]">
                Tautan Profil:
              </span>
              <div className="flex items-center gap-2">
                <a
                  href={profileData.github_url || 'https://github.com/MhmmdRiisky'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-[#E5E5E5] text-[#737373] hover:text-[#171717] hover:bg-[#F1F1EF] transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={profileData.linkedin_url || 'https://linkedin.com/in/muhamad-risqi-4a852b251/'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md border border-[#E5E5E5] text-[#737373] hover:text-[#171717] hover:bg-[#F1F1EF] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="p-2 rounded-md border border-[#E5E5E5] text-[#737373] hover:text-[#171717] hover:bg-[#F1F1EF] transition-all"
                  aria-label="Email"
                >
                  <Mail size={16} />
                </a>
              </div>
            </div>

            {/* Quick Competency Badges for Key Domains */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#737373]">
              <span className="inline-flex items-center gap-1.5 bg-[#F1F1EF] px-2.5 py-1 rounded-md border border-[#E5E5E5] text-[#171717] font-medium">
                <Code2 size={13} className="text-purple-600" /> Web (Laravel/React)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#F1F1EF] px-2.5 py-1 rounded-md border border-[#E5E5E5] text-[#171717] font-medium">
                <Cpu size={13} className="text-blue-600" /> DevOps (Docker/Linux)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#F1F1EF] px-2.5 py-1 rounded-md border border-[#E5E5E5] text-[#171717] font-medium">
                <ShieldCheck size={13} className="text-emerald-600" /> QA (Postman dan Selenium)
              </span>
              <span className="inline-flex items-center gap-1.5 bg-[#F1F1EF] px-2.5 py-1 rounded-md border border-[#E5E5E5] text-[#171717] font-medium">
                <Layers size={13} className="text-amber-600" /> Security (VAPT)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
