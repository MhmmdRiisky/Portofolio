import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/features/hero/HeroSection'
import CVSection from '@/features/cv/CVSection'
import EducationSection from '@/features/education/EducationSection'
import AboutSection from '@/features/about/AboutSection'
import ProjectsSection from '@/features/projects/ProjectsSection'
import SkillsSection from '@/features/skills/SkillsSection'
import CertificationsSection from '@/features/certifications/CertificationsSection'
import LearningJourneySection from '@/features/learning/LearningJourneySection'
import ContactSection from '@/features/contact/ContactSection'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-[#171717]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CVSection />
        <EducationSection />
        <LearningJourneySection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
