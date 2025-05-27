import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { projects, Project } from "@/lib/constants";

interface ProjectsSectionProps {
  onProjectClick: (project: Project) => void;
}

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  return (
    <section id="projects" className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">My Projects</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore my data science projects and see how I solve real-world problems
          </p>
        </div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isReversed={index % 2 === 1}
              onClick={() => onProjectClick(project)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  isReversed: boolean;
  onClick: () => void;
}

function ProjectCard({ project, isReversed, onClick }: ProjectCardProps) {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div 
      ref={ref}
      className={`fade-in-section ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <Card 
        className="project-card bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={onClick}
      >
        <CardContent className="p-0">
          <div className={`grid md:grid-cols-2 gap-8 items-center ${isReversed ? 'md:grid-cols-2' : ''}`}>
            <div className={isReversed ? 'order-2 md:order-1' : ''}>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{project.title}</h3>
              <p className="text-slate-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="outline" className="text-sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
            <img 
              src={project.image} 
              alt={project.title} 
              className={`rounded-xl shadow-lg w-full h-64 object-cover ${
                isReversed ? 'order-1 md:order-2' : ''
              }`}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
