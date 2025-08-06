import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import EducationSection from "@/components/education-section"
import CertificationsSection from "@/components/certifications-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section-simple"
import ScrollProgress from "@/components/scroll-progress"

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navigation />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-gray-950 text-white py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">© {new Date().getFullYear()} Ankit Kumar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
