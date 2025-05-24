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
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className={`nav-link transition-colors font-medium cursor-pointer text-sm md:text-base ${
                    location === item.href
                      ? 'text-primary'
                      : 'text-slate-700 dark:text-slate-300 hover:text-primary'
                  }`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
