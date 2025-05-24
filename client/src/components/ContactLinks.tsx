import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const contactLinks = [
  {
    href: "mailto:thomascl@berkeley.edu",
    icon: Mail,
    label: "Email",
    className: "bg-primary hover:bg-blue-700",
  },
  {
    href: "https://www.linkedin.com/in/thomaslee24/",
    icon: Linkedin,
    label: "LinkedIn",
    className: "bg-blue-600 hover:bg-blue-700",
  },
  {
    href: "https://github.com/thomascl24",
    icon: Github,
    label: "GitHub",
    className: "bg-gray-800 hover:bg-gray-900",
  },
];

export default function ContactLinks() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col space-y-4 z-30">
      {contactLinks.map((link) => (
        <Tooltip key={link.href}>
          <TooltipTrigger asChild>
            <Button
              asChild
              size="icon"
              className={`contact-link text-white p-3 rounded-full shadow-lg ${link.className}`}
            >
              <a
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
              >
                <link.icon className="h-5 w-5" />
                <span className="sr-only">{link.label}</span>
              </a>
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>{link.label}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  );
}
