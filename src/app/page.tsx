'use client';

import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import ServicesSection from '@/components/ServicesSection';
import WorkflowSection from '@/components/WorkflowSection';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Основной контент */}
      <div className="relative content-wrapper">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <WorkflowSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
