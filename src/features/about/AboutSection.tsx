import React from 'react'
import { Cpu, ShieldCheck, Code2, Database, BookOpen, CheckCircle2 } from 'lucide-react'

export default function AboutSection() {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Cyber Security',
      badge: 'VAPT & Tools',
      desc: 'Mempelajari prinsip keamanan sistem dan pemeriksaan kerentanan (VAPT) akademik menggunakan tools standar seperti Nmap, Nikto, dan Burp Suite untuk evaluasi celah keamanan.',
    },
    {
      icon: Code2,
      title: 'Fullstack Web Development',
      badge: 'Laravel & React.js',
      desc: 'Mengembangkan aplikasi web responsif dan backend REST API menggunakan Laravel, React.js, dan MySQL, termasuk implementasi skripsi digitalisasi UMKM jasa jahit.',
    },
    {
      icon: Cpu,
      title: 'DevOps & IT Infrastructure',
      badge: 'Docker & Linux',
      desc: 'Mengelola server Linux Ubuntu, containerization multi-container dengan Docker & Docker Compose, konfigurasi reverse proxy Nginx, dan alur kerja deployment.',
    },
    {
      icon: Database,
      title: 'Software Testing & QA',
      badge: 'Postman & SRS',
      desc: 'Menguji keandalan endpoint REST API dengan Postman (assertion, status code, format JSON), menyusun skenario uji fungsional, dan dokumentasi spesifikasi kebutuhan (SRS).',
    },
  ]

  return (
    <section id="about" className="section-padding border-b border-[#E5E5E5] bg-[#FFFFFF]">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
            Tentang Saya
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] mb-4">
            Komitmen Pembelajaran & Eksplorasi IT
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            Sebagai fresh graduate S1 Teknik Informatika dari STT Terpadu Nurul Fikri, saya memiliki perjalanan pembelajaran dan pengalaman mengerjakan proyek di bidang <strong>Cyber Security</strong>, <strong>Fullstack Web Development</strong>, <strong>DevOps & IT Infrastructure</strong>, serta <strong>Software Testing & QA</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Approach & Work Ethic */}
          <div className="editorial-card p-6 bg-[#FAFAF9] flex flex-col justify-between">
            <div>
              <h3 className="text-base font-semibold text-[#171717] mb-3 flex items-center gap-2">
                <BookOpen size={18} className="text-[#171717]" />
                <span>Pendekatan Kerja & Minat Belajar</span>
              </h3>
              <p className="text-sm text-[#737373] leading-relaxed mb-4">
                Saya meyakini solusi teknologi yang handal lahir dari kolaborasi tim yang sehat, alur pengujian yang terstruktur, dan dokumentasi yang rapi. Memiliki semangat untuk terus memperdalam kemampuan teknis dan siap berkontribusi secara produktif dalam lingkungan kerja IT yang dinamis.
              </p>
            </div>
            <ul className="space-y-2.5 text-xs text-[#171717] pt-2 border-t border-[#E5E5E5]">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Siap beradaptasi pada posisi Web Developer, QA Tester, DevOps / IT Staff, maupun IT Support</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Terbiasa menyusun dokumen spesifikasi kebutuhan (SRS), diagram Use Case, & skenario pengujian</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                <span>Mengutamakan penulisan kode terstruktur, modular, dan dokumentasi operasional yang jelas</span>
              </li>
            </ul>
          </div>

          {/* Core Pillars Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map(item => {
              const Icon = item.icon
              return (
                <div key={item.title} className="editorial-card p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-8 h-8 rounded-md bg-[#F1F1EF] border border-[#E5E5E5] flex items-center justify-center text-[#171717]">
                        <Icon size={16} />
                      </div>
                      <span className="text-[10px] font-medium text-[#737373] bg-[#F1F1EF] px-2 py-0.5 rounded border border-[#E5E5E5]">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-[#171717] mb-1.5">{item.title}</h4>
                    <p className="text-xs text-[#737373] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
