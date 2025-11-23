import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background dark:bg-slate-900 dark:text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">GSR</h3>
            <p className="opacity-80 max-w-sm">
              Full-stack developer specializing in web development and UI/UX design. Experienced in academic and organizational projects, with strong analytical and problem solving skills and the ability to adapt quickly.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("hero");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("about");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("projects");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById("contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Follow Me</h4>
            <div className="flex gap-4">
              <a
                href={portfolioData.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 dark:bg-white/10 rounded-full hover:bg-background/20 dark:hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 dark:bg-white/10 rounded-full hover:bg-background/20 dark:hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              {/* Twitter link commented out since portfolioData.socialLinks.twitter is not defined */}
              {/* <a
                href={portfolioData.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-background/10 dark:bg-white/10 rounded-full hover:bg-background/20 dark:hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a> */}
              <a
                href={portfolioData.socialLinks.email}
                className="p-3 bg-background/10 dark:bg-white/10 rounded-full hover:bg-background/20 dark:hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 dark:border-white/20 my-8" />

        {/* Copyright */}
        <div className="text-center opacity-80">
          <p>
            &copy; {currentYear} {portfolioData.name}. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
