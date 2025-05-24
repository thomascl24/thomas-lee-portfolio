import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/repositories", label: "Repositories" },
  { href: "/resume", label: "Resume" },
  { href: "/hobbies", label: "Hobbies" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-xl font-bold text-primary cursor-pointer">Thomas Lee</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span className={`nav-link transition-colors font-medium cursor-pointer ${
                  location === item.href
                    ? 'text-primary'
                    : 'text-slate-700 dark:text-slate-300 hover:text-primary'
                }`}>
                  {item.label}
                </span>
              </Link>
            ))}
            <ThemeToggle />
          </div>
          
          {/* Mobile menu */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <span 
                        onClick={() => setIsOpen(false)}
                        className={`block px-4 py-2 rounded-md transition-colors cursor-pointer ${
                          location === item.href
                            ? 'text-primary bg-slate-100 dark:bg-slate-800'
                            : 'text-slate-700 dark:text-slate-300 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
