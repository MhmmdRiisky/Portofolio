import React from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { experienceData } from '@/data/portfolioData'

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding border-b border-[#E5E5E5] bg-[#FFFFFF]">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
            Pengalaman & Rekam Jejak
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] mb-4">
            Pengalaman Pelatihan & Proyek
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            Rekam jejak program pembelajaran intensif di NF Academy, kepemimpinan teknis dalam proyek akhir DevOps, serta kontribusi dalam divisi teknis organisasi mahasiswa.
          </p>
        </div>

        <div className="space-y-6 max-w-3xl">
          {experienceData.map(exp => (
            <div
              key={exp.id}
              className="editorial-card p-6 md:p-7 relative border border-[#E5E5E5] bg-[#FAFAF9] hover:bg-white transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-8 h-8 rounded-lg bg-[#171717] text-white flex items-center justify-center text-xs shrink-0 shadow-xs">
                      <Briefcase size={15} />
                    </span>
                    <h3 className="text-lg font-bold text-[#171717]">{exp.title}</h3>
                  </div>
                  <p className="text-sm font-medium text-[#171717] ml-10">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-xs md:ml-auto">
                  {exp.location && (
                    <span className="inline-flex items-center gap-1 text-[#737373] bg-white px-2.5 py-1 rounded-md border border-[#E5E5E5]">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 font-medium text-[#171717] bg-[#F1F1EF] px-2.5 py-1 rounded-md border border-[#E5E5E5]">
                    <Calendar size={12} />
                    {exp.start_date} — {exp.end_date || 'Sekarang'}
                  </span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-[#737373] leading-relaxed pl-0 md:pl-10 space-y-2">
                {exp.description.split('\n\n').map((paragraph, pIdx) => {
                  if (paragraph.includes('\n-')) {
                    const [heading, ...items] = paragraph.split('\n')
                    return (
                      <div key={pIdx} className="space-y-1">
                        <p className="font-semibold text-[#171717]">{heading}</p>
                        <ul className="space-y-1 pl-2">
                          {items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-1.5 text-xs text-[#737373]">
                              <ChevronRight size={13} className="text-[#171717] shrink-0 mt-0.5" />
                              <span>{item.replace(/^- /, '')}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  }
                  return (
                    <p key={pIdx} className="text-xs sm:text-sm text-[#525252] leading-relaxed">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
