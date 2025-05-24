import { useState } from "react";
import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import ContactLinks from "@/components/ContactLinks";
import ProjectModal from "@/components/ProjectModal";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import RepositoriesSection from "@/components/sections/RepositoriesSection";
import ResumeSection from "@/components/sections/ResumeSection";
import HobbiesSection from "@/components/sections/HobbiesSection";
import { Project } from "@/lib/constants";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      <ProgressBar />
      <Navigation />
      <ContactLinks />
      
      <main>
        <AboutSection />
        <ProjectsSection onProjectClick={setSelectedProject} />
        <RepositoriesSection />
        <ResumeSection />
        <HobbiesSection />
      </main>

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}
