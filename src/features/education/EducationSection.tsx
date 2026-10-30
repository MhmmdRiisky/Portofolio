import React from 'react'
import { GraduationCap, Calendar } from 'lucide-react'
import { educationData } from '@/data/portfolioData'

export default function EducationSection() {
  return (
    <section id="education" className="section-padding border-b border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
            Riwayat Pendidikan
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] mb-4">
            Pendidikan Formal
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            Latar belakang akademis yang membentuk fondasi keilmuan informatika, logika pemrograman, dan rekayasa perangkat lunak.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl">
          {educationData.map(edu => (
            <div
              key={edu.id}
              className="editorial-card p-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 bg-white border border-[#E5E5E5]"
            >
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-[#171717] text-white flex items-center justify-center text-xs shrink-0">
                    <GraduationCap size={16} />
                  </span>
                  <h3 className="text-base font-bold text-[#171717]">
                    {edu.degree} {edu.field_of_study ? `— ${edu.field_of_study}` : ''}
                  </h3>
                </div>
                <p className="text-sm font-semibold text-[#525252] ml-10">
                  {edu.institution}
                </p>
                {edu.description && (
                  <p className="text-xs text-[#737373] leading-relaxed pt-1 ml-10">
                    {edu.description}
                  </p>
                )}
              </div>

              <div className="sm:text-right shrink-0">
                <span className="badge-minimal">
                  <Calendar size={12} />
                  <span>
                    {edu.start_year} — {edu.end_year ? edu.end_year : 'Sekarang'}
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
