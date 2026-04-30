import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import TechStackSection from "../components/TechStackSection";
import ProjectSection from "../components/ProjectSection";
import EducationSection from "../components/EducationSection";
import ContactSection from "../components/ContactSection";
import ExperienceSection from "../components/ExperienceSection";

const HomePage = () => {
  return (
    <main className="space-y-10">
      <HeroSection />
      <FeatureSection />
       <EducationSection />
      <TechStackSection />
      <ExperienceSection/>
      <ProjectSection />
     
      <ContactSection />
    </main>
  );
};

export default HomePage;