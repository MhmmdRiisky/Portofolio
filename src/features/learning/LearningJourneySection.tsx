import React from 'react'
import { CheckCircle, Clock, Sparkles } from 'lucide-react'
import { learningJourneysData } from '@/data/portfolioData'

export default function LearningJourneySection() {
  const getStatusBadge = (status: string) => {
    if (status.includes('Praktik')) {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
          <CheckCircle size={11} />
          {status}
        </span>
      )
    }
    if (status.includes('Sedang')) {
      return (
        <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200">
          <Sparkles size={11} />
          {status}
        </span>
      )
    }
    return (
      <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#F1F1EF] text-[#737373] border border-[#E5E5E5]">
        <Clock size={11} />
        {status}
      </span>
    )
  }

  return (
    <section id="learning" className="section-padding border-b border-[#E5E5E5] bg-[#FFFFFF]">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
            Perjalanan Pembelajaran
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] mb-4">
            Learning Journey & Eksplorasi Teknis
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            Rekam jejak tahapan pembelajaran terstruktur selama masa perkuliahan Teknik Informatika dan program pelatihan intensif, mulai dari Cyber Security (Semester 3–4), Fullstack Web Development (Semester 5), DevOps (Semester 6), hingga Skripsi (Semester 7–8).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {learningJourneysData.map(item => (
            <div
              key={item.id}
              className="editorial-card p-6 flex flex-col justify-between bg-[#FAFAF9] border border-[#E5E5E5] hover:bg-white transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-2.5">
                  <span className="text-xs font-semibold text-[#171717]">
                    {item.category}
                  </span>
                  {getStatusBadge(item.status_label)}
                </div>
                <h3 className="text-base font-bold text-[#171717] mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#737373] leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E5E5] flex flex-wrap items-center justify-between gap-2 text-xs">
                {item.technologies && (
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.split(',').map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-white text-[#171717] px-2 py-0.5 rounded text-[11px] border border-[#E5E5E5]"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
                {item.period && (
                  <span className="text-[#737373] text-[11px] ml-auto font-medium">
                    {item.period}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
