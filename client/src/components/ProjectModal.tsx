import { X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/constants";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-slate-900 dark:text-slate-100">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-slate-600 dark:text-slate-400">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-4">Project Overview</h3>
            <p className="text-slate-700 leading-relaxed">{project.overview}</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Technical Implementation</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              {project.implementation.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Key Results</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700">
              {project.results.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
