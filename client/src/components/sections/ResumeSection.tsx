import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ResumeSection() {
  const handleDownloadResume = () => {
    // In a real application, this would download the actual resume PDF
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would be a real PDF file
    link.download = 'Thomas_Lee_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-16 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Resume</h1>
          <Button 
            onClick={handleDownloadResume}
            className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Basics */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-primary">Basics</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">Thomas Lee</h3>
                  <p className="text-slate-600">Data Scientist</p>
                  <p className="text-slate-600">Berkeley, CA</p>
                </div>
                <div>
                  <p className="text-slate-600 mb-1">📧 thomascl@berkeley.edu</p>
                  <p className="text-slate-600 mb-1">📞 510-230-7619</p>
                  <p className="text-slate-600">🌐 linkedin.com/in/thomaslee24</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Education */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-primary">Education</h2>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">University of California, Berkeley</h3>
                  <p className="text-lg text-slate-700">Bachelor of Science in Data Science</p>
                  <p className="text-slate-600">
                    Relevant Coursework: Machine Learning, Statistical Analysis, Data Visualization, Database Systems
                  </p>
                </div>
                <Badge variant="outline" className="text-slate-600 font-medium">2020 - 2024</Badge>
              </div>
            </CardContent>
          </Card>
          
          {/* Work Experience */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-primary">Work Experience</h2>
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">Data Science Intern</h3>
                    <p className="text-lg text-slate-700 mb-2">Tech Startup Inc.</p>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Developed predictive models improving customer retention by 25%</li>
                      <li>• Created automated data pipelines processing 1M+ records daily</li>
                      <li>• Built interactive dashboards for executive decision-making</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="text-slate-600 font-medium ml-4">Summer 2023</Badge>
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900">Research Assistant</h3>
                    <p className="text-lg text-slate-700 mb-2">UC Berkeley Data Science Lab</p>
                    <ul className="text-slate-600 space-y-1">
                      <li>• Conducted statistical analysis on large-scale social media datasets</li>
                      <li>• Implemented machine learning algorithms for sentiment analysis</li>
                      <li>• Co-authored research paper on natural language processing</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="text-slate-600 font-medium ml-4">2022 - 2023</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Skills */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-primary">Skills</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Programming</h3>
                  <div className="space-y-2">
                    {[
                      { name: "Python", level: "Expert" },
                      { name: "R", level: "Advanced" },
                      { name: "SQL", level: "Advanced" },
                      { name: "JavaScript", level: "Intermediate" }
                    ].map((skill) => (
                      <div key={skill.name} className="flex justify-between">
                        <span className="text-slate-700">{skill.name}</span>
                        <span className="text-slate-500">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Tools & Frameworks</h3>
                  <div className="space-y-2">
                    {[
                      { name: "TensorFlow", level: "Advanced" },
                      { name: "Scikit-learn", level: "Expert" },
                      { name: "Pandas", level: "Expert" },
                      { name: "Docker", level: "Intermediate" }
                    ].map((skill) => (
                      <div key={skill.name} className="flex justify-between">
                        <span className="text-slate-700">{skill.name}</span>
                        <span className="text-slate-500">{skill.level}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">Specializations</h3>
                  <div className="space-y-2">
                    {["Machine Learning", "Statistical Analysis", "Data Visualization", "Deep Learning", "NLP"].map((spec) => (
                      <div key={spec} className="text-slate-700">{spec}</div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Languages */}
          <Card>
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-6 pb-2 border-b-2 border-primary">Languages</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex justify-between">
                  <span className="text-lg text-slate-700">English</span>
                  <span className="text-slate-600">Native</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg text-slate-700">Mandarin</span>
                  <span className="text-slate-600">Conversational</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
