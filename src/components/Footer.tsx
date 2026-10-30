import React from 'react'
import { ArrowUp, Mail, FileText } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons'
import { profileData } from '@/data/portfolioData'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#E5E5E5] bg-[#FAFAF9] py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#E5E5E5]">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-bold text-base text-[#171717]">Muhamad Risqi</span>
              <span className="text-xs text-[#737373]">— Fresh Graduate S1 Teknik Informatika</span>
            </div>
            <p className="text-xs text-[#737373] mt-1 max-w-md">
              Pengembangan Web Fullstack, Infrastruktur DevOps, Software Testing & QA, serta Pengujian Keamanan (Cyber Security).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={profileData.github_url || 'https://github.com/MhmmdRiisky'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#171717] transition-colors p-2 rounded-md hover:bg-[#F1F1EF]"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profileData.linkedin_url || 'https://linkedin.com/in/muhamad-risqi-4a852b251/'}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#171717] transition-colors p-2 rounded-md hover:bg-[#F1F1EF]"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="text-[#737373] hover:text-[#171717] transition-colors p-2 rounded-md hover:bg-[#F1F1EF]"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
            <a
              href={profileData.cv_url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#737373] hover:text-[#171717] px-3 py-2 rounded-md border border-[#E5E5E5] hover:bg-[#F1F1EF] transition-colors"
            >
              <FileText size={14} />
              <span>Lihat CV</span>
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-xs text-[#737373] hover:text-[#171717] px-3 py-2 rounded-md border border-[#E5E5E5] hover:bg-[#F1F1EF] transition-colors"
            >
              <ArrowUp size={14} />
              <span>Ke Atas</span>
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#737373] gap-3">
          <p>© {new Date().getFullYear()} Muhamad Risqi. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>STT Terpadu Nurul Fikri</span>
            <span>•</span>
            <span>Jakarta & Depok, Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
