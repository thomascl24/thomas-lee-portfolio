import { useState } from "react";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/lib/constants";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-background dark:bg-background">
      <ProjectsSection onProjectClick={setSelectedProject} />
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}