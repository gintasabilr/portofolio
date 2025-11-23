import { useEffect } from "react";
import AOS from "aos";
import { portfolioData } from "@/data/portfolioData";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white dark:from-slate-900 dark:to-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            My Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
          <p className="text-foreground text-lg opacity-80 max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills and experience
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-border hover:border-primary"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary to-blue-400">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-75 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {project.title}
                </h3>

                <p className="text-foreground text-sm opacity-80 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-secondary dark:bg-slate-800 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 pt-4 border-t border-border">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary hover:opacity-80 font-semibold transition-colors text-sm flex-1 justify-center py-2 rounded-lg bg-secondary hover:bg-primary/10"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:text-primary hover:opacity-80 font-semibold transition-colors text-sm flex-1 justify-center py-2 rounded-lg bg-secondary hover:bg-primary/10"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
