import React from 'react'
import { Code2, Server, Cpu, ShieldCheck, Database } from 'lucide-react'
import { technologiesData } from '@/data/portfolioData'

export default function SkillsSection() {
  const categories = [
    {
      key: 'web',
      label: 'Web Development',
      icon: Code2,
      desc: 'Frontend responsif, backend API, & arsitektur web modern',
    },
    {
      key: 'devops',
      label: 'DevOps & IT Infrastructure',
      icon: Cpu,
      desc: 'Administrasi Linux, orkestrasi container, cloud, otomasi, CI/CD, & monitoring',
    },
    {
      key: 'qa',
      label: 'Software Testing & QA',
      icon: ShieldCheck,
      desc: 'Pengujian API dengan Postman, otomasi UI dengan Selenium, & functional testing',
    },
    {
      key: 'cyber',
      label: 'Cyber Security',
      icon: Server,
      desc: 'Vulnerability assessment, Nmap, Nikto, & Burp Suite',
    },
    {
      key: 'database',
      label: 'Database & Data Modeling',
      icon: Database,
      desc: 'Database relasional MySQL, NoSQL MongoDB, pemodelan ERD, & query SQL',
    },
  ]

  return (
    <section id="skills" className="section-padding border-b border-[#E5E5E5] bg-[#FFFFFF]">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
            Keterampilan Teknis
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] mb-4">
            Skill & Teknologi yang Dipelajari
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            Penguasaan teknologi praktis dan keilmuan yang dipelajari mencakup empat bidang utama: <strong>Web Development</strong>, <strong>DevOps & IT Infrastructure</strong>, <strong>Software Testing & QA</strong>, serta <strong>Cyber Security</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map(cat => {
            const Icon = cat.icon
            const groupSkills = technologiesData.filter(
              s => s.category.toLowerCase() === cat.key.toLowerCase()
            )

            if (groupSkills.length === 0) return null

            return (
              <div
                key={cat.key}
                className="editorial-card p-6 bg-[#FAFAF9] border border-[#E5E5E5] flex flex-col justify-between hover:shadow-xs transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-[#E5E5E5]">
                    <div className="flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#171717] shadow-xs">
                        <Icon size={16} />
                      </span>
                      <div>
                        <h3 className="text-sm font-bold text-[#171717]">
                          {cat.label}
                        </h3>
                        <p className="text-[11px] text-[#737373]">{cat.desc}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#737373] bg-white px-2 py-0.5 rounded border border-[#E5E5E5]">
                      {groupSkills.length} Tools
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {groupSkills.map(skill => (
                      <div
                        key={skill.id}
                        className="p-3 rounded-lg bg-white border border-[#E5E5E5] hover:border-[#171717]/40 transition-colors"
                      >
                        <p className="text-xs font-semibold text-[#171717]">
                          {skill.name}
                        </p>
                        {skill.description && (
                          <p className="text-[11px] text-[#737373] leading-normal mt-1">
                            {skill.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
