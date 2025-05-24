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
          
          {/* Experience */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b-2 border-primary">Experience</h2>
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Data Science Intern</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">East Bay Municipal Utility District</p>
                    <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Improved accessibility to water for 30,000 low-income families, reducing water bills for low-income families by 31% by constructing an optimized water rate structure using SciPy optimization functions</li>
                      <li>• Conducted cost-benefit analysis for advanced metering technology initiative projected to affect 400,000 customers, guiding long-term investment strategy and saving $25M per year</li>
                      <li>• Streamlined vendor data access by implementing an Amazon Redshift-based pipeline, replacing costly $1,500 per request extractions with automated data streaming</li>
                      <li>• Designed executive-facing dashboards in Power BI and Tableau to visualize rate equity and water usage trends across 1.4M customers, reducing turnaround time for policy analysis from weeks to days</li>
                      <li>• Managed data access and privacy workflows for company collaborations with three UC Berkeley research groups, providing mentorship with data analysis and ensuring regulatory compliance</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="text-slate-600 dark:text-slate-400 font-medium ml-4">May 2024 – Present</Badge>
                </div>
                
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Machine Learning Intern</h3>
                    <p className="text-lg text-slate-700 dark:text-slate-300 mb-2">Eikon Therapeutics</p>
                    <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                      <li>• Identified 20 promising drug treatment candidates from over 200,000 compounds using an extended isolation forest machine learning model for anomaly detection</li>
                      <li>• Created a neural network architecture with TensorFlow, classifying protein agonists and antagonists with over 84% accuracy from a highly noisy dataset</li>
                      <li>• Engineered a Python-based ETL data pipeline to accelerate data extraction, cleaning, and preprocessing, boosting data request efficiency by 22% for a team of 10+ scientists</li>
                    </ul>
                  </div>
                  <Badge variant="outline" className="text-slate-600 dark:text-slate-400 font-medium ml-4">May 2022 – Aug 2023</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Projects */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b-2 border-primary">Projects</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">Predicting Card Power and Synergy in Pokemon Trading Card Game (TCG)</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">April 2025</p>
                  <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Enabled early price estimation for newly released cards by modeling latent card strength prior to observed gameplay performance and predicted novel card combinations with high synergy to give players a competitive edge</li>
                    <li>• Fine-tuned BERT and RoBERTa-based NLP regression models and created custom card embeddings to efficiently identify and isolate relevant information from raw card text</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">San Francisco Crime Interactive Dashboard</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-2">March 2025</p>
                  <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                    <li>• Designed and constructed interactive Tableau data visualizations for temporal, geographic, and trend analysis of San Francisco crime</li>
                    <li>• Created Flask web application to embed data visualizations into a user-friendly dashboard</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="bg-white dark:bg-slate-800">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 pb-2 border-b-2 border-primary">Skills</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Programming Languages</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Python (TensorFlow, Keras, NumPyro, XGBoost, NumPy, Pandas, Matplotlib, Seaborn, Scikit-Learn), 
                    SQL (MySQL, Amazon Redshift), R, NoSQL (Neo4j)
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Data Visualization and Analysis Tools</h3>
                  <p className="text-slate-700 dark:text-slate-300">Tableau, Power BI, Dash</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">Other Tools</h3>
                  <p className="text-slate-700 dark:text-slate-300">
                    Kubernetes, Docker, AWS, Git/GitHub, HuggingFace, Visual Studio, RStudio
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
