import React from 'react'
import { FileText, ExternalLink, MapPin, Phone, Mail, ShieldCheck, Cpu, Code2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons'
import profileImg from '@/assets/Foto.jpg'
import { profileData } from '@/data/portfolioData'

// Profile data (could be fetched from backend later)
const profile = {
  name: 'Muhamad Risqi',
  title: 'Quality Assurance / Software Tester | Fresh Graduate',
  location: 'Jakarta, Indonesia',
  phone: '+62 852 2212 8973',
  email: 'studentriskyjourney@gmail.com',
  github: 'https://github.com/MhmmdRiisky',
  linkedin: 'https://www.linkedin.com/in/muhamad-risqi-4a852b251/',
  cvUrl: 'https://drive.google.com/file/d/1K8jy3bSIqE8ZVV7BxP726nSMaAtlEGTN/view?usp=sharing',
}

export default function CVSection() {
  const targetRoles = [
    { title: 'Web Developer', icon: Code2, desc: 'Fullstack Laravel, React.js & MySQL' },
    { title: 'DevOps & IT Staff', icon: Cpu, desc: 'Docker, Linux Ubuntu & IT Operations' },
    { title: 'Quality Assurance', icon: ShieldCheck, desc: 'API Testing (Postman), dasar UI automation (Selenium) & Manual' },
  ]

  return (
    <section id="cv" className="section-padding border-b border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="container-custom">
        <div className="editorial-card p-6 md:p-10 bg-white border border-[#E5E5E5] shadow-sm">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Photo & Badge */}
            <div className="flex flex-col items-center shrink-0">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-[#E5E5E5] shadow-md bg-[#F1F1EF] group">
                <img
                  src={profileImg}
                  alt={profileData.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="mt-4 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-[11px] font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Terbuka untuk Kerja</span>
              </div>
            </div>

            {/* Details & Target Roles */}
            <div className="flex-1 text-center lg:text-left">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-1">
                  Curriculum Vitae & Profil Profesional
                </p>
                <h2 className="text-2xl md:text-3xl font-bold text-[#171717] tracking-tight mb-2">
                  {profileData.name}
                </h2>
                <p className="text-sm md:text-base font-medium text-[#171717] flex flex-wrap items-center justify-center lg:justify-start gap-2">
                  <span className="text-[#2563EB] font-semibold">Web Developer</span>
                  <span className="text-[#D4D4D4]">•</span>
                  <span className="text-[#059669] font-semibold">QA Tester</span>
                  <span className="text-[#D4D4D4]">•</span>
                  <span className="text-[#7C3AED] font-semibold">DevOps / IT Staff</span>
                </p>
                <p className="text-xs text-[#737373] mt-1">
                  Fresh Graduate S1 Teknik Informatika — STT Terpadu Nurul Fikri
                </p>
              </div>

              {/* Target Positions Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-5">
                {targetRoles.map(role => {
                  const Icon = role.icon
                  return (
                    <div
                      key={role.title}
                      className="p-3 rounded-lg border border-[#E5E5E5] bg-[#FAFAF9] text-left hover:border-[#171717] transition-colors"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon size={14} className="text-[#171717]" />
                        <span className="text-xs font-semibold text-[#171717]">{role.title}</span>
                      </div>
                      <p className="text-[11px] text-[#737373] leading-snug">{role.desc}</p>
                    </div>
                  )
                })}
              </div>

              {/* Contact metadata */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-[#737373] pt-4 border-t border-[#E5E5E5]">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-[#171717]" />
                  <span>{profileData.location}</span>
                </span>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-1.5 hover:text-[#171717] transition-colors"
                >
                  <Mail size={13} className="text-[#171717]" />
                  <span>{profileData.email}</span>
                </a>
                <span className="flex items-center gap-1.5">
                  <Phone size={13} className="text-[#171717]" />
                  <span>+62 852 2212 8973</span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <a
                  href={profileData.cv_url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <FileText size={16} />
                  <span>Lihat CV (Google Drive)</span>
                  <ExternalLink size={14} className="opacity-70" />
                </a>

                <a
                  href="https://linkedin.com/in/muhamad-risqi-4a852b251/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>Profil LinkedIn</span>
                </a>

                <a
                  href="https://github.com/MhmmdRiisky"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
