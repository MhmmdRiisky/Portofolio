import React, { useState } from 'react'
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Phone, MessageSquare, ExternalLink } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/common/SocialIcons'
import { profileData } from '@/data/portfolioData'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [feedbackMsg, setFeedbackMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error')
      setFeedbackMsg('Mohon lengkapi nama, email, dan pesan Anda.')
      return
    }

    // Compose mailto as reliable frontend-only communication
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Tawaran Kerja / Diskusi dari ${formData.name}`
    )
    const mailtoBody = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`
    )
    const mailtoUrl = `mailto:${profileData.email}?subject=${mailtoSubject}&body=${mailtoBody}`

    // Trigger user mail client
    window.location.href = mailtoUrl

    setStatus('success')
    setFeedbackMsg(
      'Aplikasi email Anda telah dibuka dengan pesan yang telah disiapkan. Terima kasih telah menghubungi!'
    )
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="section-padding bg-[#FFFFFF]">
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-[#737373] mb-2">
            Kontak Profesional
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[#171717] mb-4">
            Mari Terhubung & Berdiskusi
          </h2>
          <p className="text-base text-[#737373] leading-relaxed">
            Apakah Anda memiliki peluang rekrutmen untuk posisi <strong>Web Developer</strong>, <strong>Junior Fullstack</strong>, <strong>QA Tester</strong>, atau <strong>DevOps / IT Staff</strong>? Silakan hubungi saya melalui jalur komunikasi langsung di bawah ini.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="editorial-card p-6 bg-[#FAFAF9] border border-[#E5E5E5]">
              <h3 className="text-base font-bold text-[#171717] mb-4">
                Informasi Kontak Langsung
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#171717] shrink-0 shadow-xs">
                    <Mail size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-[#737373]">Email</p>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#171717] hover:underline"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#171717] shrink-0 shadow-xs">
                    <Phone size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-[#737373]">WhatsApp / Telepon</p>
                    <a
                      href="https://wa.me/6285222128973?text=Halo%20Muhamad%20Risqi,%20saya%20melihat%20portfolio%20Anda"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-emerald-700 hover:underline flex items-center gap-1"
                    >
                      <span>+62 852 2212 8973</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#171717] shrink-0 shadow-xs">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <p className="text-xs text-[#737373]">Lokasi Domisili</p>
                    <p className="text-xs sm:text-sm font-semibold text-[#171717]">
                      {profileData.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#171717] shrink-0 shadow-xs">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#737373]">GitHub</p>
                    <a
                      href={profileData.github_url || 'https://github.com/MhmmdRiisky'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-[#171717] hover:underline"
                    >
                      github.com/MhmmdRiisky
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E5E5] flex items-center justify-center text-[#171717] shrink-0 shadow-xs">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs text-[#737373]">LinkedIn Profile</p>
                    <a
                      href={profileData.linkedin_url || 'https://linkedin.com/in/muhamad-risqi-4a852b251/'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-semibold text-[#171717] hover:underline"
                    >
                      linkedin.com/in/muhamad-risqi
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl border border-[#E5E5E5] bg-white text-xs text-[#737373] leading-relaxed shadow-xs">
              <span className="font-bold text-[#171717] block mb-1">
                Kesiapan Bekerja
              </span>
              Siap berkontribusi pada posisi entry-level IT seperti <strong>Web Developer</strong>, <strong>Junior Fullstack Developer</strong>, <strong>QA Tester</strong>, maupun <strong>IT Staff / IT Support</strong> baik secara On-site di wilayah Jabodetabek, Hybrid, maupun Remote.
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="editorial-card p-6 sm:p-8 bg-white border border-[#E5E5E5]">
              <h3 className="text-base font-bold text-[#171717] mb-1">
                Kirim Pesan Cepat
              </h3>
              <p className="text-xs text-[#737373] mb-6">
                Formulir ini akan otomatis menyiapkan email langsung ke inbox saya.
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="shrink-0 mt-0.5" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-md bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                  <AlertCircle size={16} className="shrink-0 mt-0.5" />
                  <span>{feedbackMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Nama Lengkap <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Masukkan nama Anda"
                      required
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-md border border-[#E5E5E5] focus:outline-none focus:border-[#171717] transition-colors bg-[#FAFAF9]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                      Alamat Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="contoh@perusahaan.com"
                      required
                      className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-md border border-[#E5E5E5] focus:outline-none focus:border-[#171717] transition-colors bg-[#FAFAF9]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                    Subjek
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Rekrutmen DevOps / QA / Web Developer"
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-md border border-[#E5E5E5] focus:outline-none focus:border-[#171717] transition-colors bg-[#FAFAF9]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#171717] mb-1.5">
                    Pesan <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tuliskan pesan atau detail peluang yang ingin didiskusikan..."
                    required
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-md border border-[#E5E5E5] focus:outline-none focus:border-[#171717] transition-colors bg-[#FAFAF9] resize-y"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="submit"
                    className="btn-primary inline-flex items-center gap-2"
                  >
                    <Send size={15} />
                    <span>Kirim Pesan Sekarang</span>
                  </button>

                  <a
                    href="https://wa.me/6285222128973?text=Halo%20Muhamad%20Risqi,%20saya%20melihat%20portfolio%20Anda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center gap-2 text-emerald-700 border-emerald-300 hover:bg-emerald-50"
                  >
                    <MessageSquare size={15} />
                    <span>Chat via WhatsApp</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
