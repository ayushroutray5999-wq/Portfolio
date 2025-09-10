import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import AchievementsSection from '@/components/AchievementsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import SplineBackground from '@/components/SplineBackground';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen text-foreground custom-scrollbar">
      <SplineBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <AchievementsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
