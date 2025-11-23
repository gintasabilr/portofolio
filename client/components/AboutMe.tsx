import { useEffect } from "react";
import AOS from "aos";
import { portfolioData } from "@/data/portfolioData";

export function AboutMe() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div
          data-aos="fade-up"
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
         {/* About Me Section */}
<div data-aos="fade-right" className="space-y-6">
  <p className="text-foreground text-lg leading-relaxed opacity-80">
    I'm a passionate Full-Stack Developer with a strong focus on web development and UI/UX design. 
    I enjoy building scalable, maintainable applications that blend clean design with robust functionality.
  </p>

  <p className="text-foreground text-lg leading-relaxed opacity-80">
    My journey began with curiosity about how technology works, which grew into hands-on experience 
    through academic projects, internships, and freelance work. I thrive on solving complex problems, 
    adapting quickly to new challenges, and continuously learning to stay ahead in the tech industry.
  </p>

  {/* <p className="text-foreground text-lg leading-relaxed opacity-80">
    I aspire to contribute to innovative projects that make an impact, while growing as a professional 
    and sharing knowledge with the community.
  </p> */}

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                {/* <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div> */}
                {/* <span className="text-foreground">
                  5+ years of professional development experience
                </span> */}
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-foreground">
                  Specialized in full-stack development
                </span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-foreground">
                  Passionate about clean code and best practices
                </span>
              </div>
            </div>
          </div>

          {/* Right - Skills */}
          <div data-aos="fade-left" className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground">Skills</h3>

            {/* Skills grid */}
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-secondary dark:bg-slate-900 p-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105 border border-transparent hover:border-primary text-center"
                >
                  <p className="font-semibold text-sm sm:text-base">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
