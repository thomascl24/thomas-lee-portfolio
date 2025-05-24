import { Star, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { repositories } from "@/lib/constants";

export default function RepositoriesSection() {
  return (
    <section id="repositories" className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Repositories</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore my open-source contributions and code repositories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {repositories.map((repo) => (
            <Card key={repo.name} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl font-bold text-slate-900">{repo.name}</CardTitle>
                  <Github className="h-6 w-6 text-slate-600" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">{repo.description}</p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <div className="flex items-center">
                    <div 
                      className={`w-3 h-3 rounded-full mr-2 ${repo.language.color}`}
                    />
                    <span>{repo.language.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    <span>{repo.stars}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
