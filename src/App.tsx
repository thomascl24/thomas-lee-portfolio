import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import ProgressBar from "@/components/ProgressBar";
import ContactLinks from "@/components/ContactLinks";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Repositories from "@/pages/Repositories";
import Resume from "@/pages/Resume";
import Hobbies from "@/pages/Hobbies";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ProgressBar />
      <Navigation />
      <ContactLinks />
      
      <main className="pt-16">
        <Switch>
          <Route path="/" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/repositories" component={Repositories} />
          <Route path="/resume" component={Resume} />
          <Route path="/hobbies" component={Hobbies} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
