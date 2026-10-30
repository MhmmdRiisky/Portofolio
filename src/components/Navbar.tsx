import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  const navLinks = [
    { label: 'CV', href: isHome ? '#cv' : '/#cv' },
    { label: 'Pembelajaran', href: isHome ? '#learning' : '/#learning' },
    { label: 'Tentang', href: isHome ? '#about' : '/#about' },
    { label: 'Proyek', href: isHome ? '#projects' : '/#projects' },
    { label: 'Keahlian', href: isHome ? '#skills' : '/#skills' },
    { label: 'Sertifikat', href: isHome ? '#certificates' : '/#certificates' },
    { label: 'Kontak', href: isHome ? '#contact' : '/#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#FAFAF9]/95 backdrop-blur-md border-b border-[#E5E5E5]">
      <div className="container-custom flex items-center justify-between h-16">
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-2.5 text-decoration-none group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-[#171717] text-white flex items-center justify-center font-bold text-xs tracking-wider group-hover:bg-[#262626] transition-colors shadow-xs">
            MR
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[#171717]">
              Muhamad Risqi
            </span>
            <span className="text-[10px] text-[#737373] tracking-wide font-medium leading-none">
              Web • DevOps • QA • Cyber Security
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold text-[#737373] hover:text-[#171717] hover:bg-[#F1F1EF] px-2.5 py-1.5 rounded-md transition-all text-decoration-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <a
            href={isHome ? '#contact' : '/#contact'}
            className="btn-primary text-xs py-1.5 px-3.5"
          >
            Hubungi Saya
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#171717] hover:bg-[#F1F1EF] rounded-md transition-colors border border-transparent hover:border-[#E5E5E5]"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-[#E5E5E5] bg-[#FAFAF9] px-6 py-4 space-y-2 shadow-lg">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-2 text-sm font-semibold text-[#737373] hover:text-[#171717] text-decoration-none hover:bg-[#F1F1EF] px-3 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5E5E5]">
            <a
              href={isHome ? '#contact' : '/#contact'}
              onClick={() => setIsOpen(false)}
              className="btn-primary text-xs py-2 px-3 block text-center"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
