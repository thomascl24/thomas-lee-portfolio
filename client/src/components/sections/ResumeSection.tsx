import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ResumeSection() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Thomas_Lee_Resume.pdf';
    link.download = 'Thomas_Lee_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-16 bg-white dark:bg-slate-900 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">Resume</h1>
          <Button 
            onClick={handleDownloadResume}
            className="bg-primary text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Professional Profile */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b-2 border-primary">Professional Profile</h2>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                Early-career data professional with two years of experience in data science and machine learning, leveraging analytical 
                thinking and technical proficiency to deliver impactful insights. Skilled in Python and machine learning with a strong foundation 
                in statistical analysis for data-driven decision-making and a growing portfolio of applied data science projects.
              </p>
            </CardContent>
          </Card>
          
          {/* Education */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b-2 border-primary">Education</h2>
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">University of California, Berkeley</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300">Master of Information and Data Science | 4.0 GPA</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Relevant Coursework: Machine Learning Systems Engineering (Docker, Kubernetes), Natural Language Processing with 
                      Deep Learning, Research Design and Applications for Data and Analysis, Statistics for Data Science
                    </p>
                  </div>
                  <Badge variant="outline" className="text-slate-600 dark:text-slate-400 font-medium">August 2025</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">University of California, Berkeley</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300">B.A. in Computer Science, Minor in Data Science | 3.9 GPA</p>
                    <p className="text-slate-600 dark:text-slate-400">
                      Upsilon Pi Epsilon Member: International Computing and Information honor society (top 30% of undergraduates)
                    </p>
                  </div>
                  <Badge variant="outline" className="text-slate-600 dark:text-slate-400 font-medium">May 2024</Badge>
                </div>
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
