import React from 'react'
import { Award, Calendar, Building2, CheckCircle, ExternalLink, FolderOpen } from 'lucide-react'
import { certificationsData } from '@/data/portfolioData'

export default function CertificationsSection() {
  return (
    <section id="certificates" className="section-padding border-b border-[#E5E5E5] bg-[#FAFAF9]">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
            Sertifikasi & Pelatihan
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] mb-4">
            Sertifikat Kompetensi & Pelatihan
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            Pengakuan kompetensi resmi dari Badan Nasional Sertifikasi Profesi (BNSP), pelatihan intensif di NF Academy, serta platform teknologi terkemuka.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1AThI7FceGBPnurw5LQrD0EG3MCdh6jDz?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 mt-5"
          >
            <FolderOpen size={16} />
            <span>Lihat Sertifikat (Google Drive)</span>
            <ExternalLink size={13} className="opacity-70" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {certificationsData.map(cert => (
            <div
              key={cert.id}
              className="editorial-card p-6 flex flex-col justify-between bg-white border border-[#E5E5E5] hover:border-[#171717]/30 hover:shadow-xs transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="w-8 h-8 rounded-md bg-[#F1F1EF] border border-[#E5E5E5] flex items-center justify-center text-[#171717] shrink-0">
                    <Award size={16} />
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="badge-minimal">
                      <Calendar size={11} />
                      <span>{cert.date}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <CheckCircle size={10} />
                      <span>Terverifikasi</span>
                    </span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#171717] mb-1.5 leading-snug">
                  {cert.title}
                </h3>

                <p className="text-xs font-semibold text-[#525252] flex items-center gap-1.5 mb-3">
                  <Building2 size={13} className="text-[#171717]" />
                  <span>{cert.issuer}</span>
                </p>

                {cert.description && (
                  <p className="text-xs text-[#737373] leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>

              {cert.credential_id && (
                <div className="pt-4 mt-4 border-t border-[#E5E5E5] flex items-center justify-between text-[11px] text-[#737373]">
                  <span>ID Kredensial: <code className="font-mono text-[#171717] bg-[#F1F1EF] px-1.5 py-0.5 rounded">{cert.credential_id}</code></span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
