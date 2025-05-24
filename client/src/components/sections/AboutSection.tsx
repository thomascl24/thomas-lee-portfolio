import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AboutSection() {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section id="about" className="pt-24 pb-16 min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in-section ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100 mb-6">About Thomas</h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Data Scientist passionate about turning complex data into actionable insights
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
              alt="Thomas Lee Profile Picture" 
              className="w-64 h-64 rounded-full mx-auto lg:mx-0 mb-6 shadow-xl object-cover"
            />
            <p className="text-lg text-slate-600 dark:text-slate-400 font-medium">📞 510-230-7619</p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Welcome to my portfolio! I'm Thomas Lee, a passionate data scientist with expertise in machine learning, 
              statistical analysis, and data visualization. I love solving complex problems and discovering insights 
              hidden within data.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              With a strong foundation in Python, R, and various data science frameworks, I specialize in building 
              predictive models, conducting statistical analyses, and creating compelling data visualizations that 
              drive business decisions.
            </p>
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Currently seeking opportunities to apply my skills in a dynamic data science role where I can contribute 
              to meaningful projects and continue growing as a professional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
