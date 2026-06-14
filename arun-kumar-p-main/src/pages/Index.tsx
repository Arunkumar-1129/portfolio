import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import EducationSection from "@/components/EducationSection";
import InternshipSection from "@/components/InternshipSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AchievementsSection from "@/components/AchievementsSection";
import CodingProfiles from "@/components/CodingProfiles";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import VantaBackground from "@/components/VantaBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative" style={{ background: "transparent" }}>
      <VantaBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <InternshipSection />
      <ProjectsSection />
      <SkillsSection />
      <AchievementsSection />
      <CodingProfiles />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
