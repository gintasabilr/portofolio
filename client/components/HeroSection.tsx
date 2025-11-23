import { useEffect } from "react";
import AOS from "aos";
import { portfolioData } from "@/data/portfolioData";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Column - Text */}
        <div data-aos="fade-up" className="space-y-6">
          <div className="space-y-2">
            <p className="text-primary font-semibold text-lg tracking-wide">
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              {portfolioData.name}
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-primary font-semibold">
            {portfolioData.tagline}
          </p>

          <p className="text-foreground text-base md:text-lg leading-relaxed opacity-80">
            {portfolioData.bio}
          </p>

          <div className="flex gap-4 pt-4">
            <button
              onClick={scrollToContact}
              className="bg-primary hover:opacity-90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Get In Touch <ArrowRight size={20} />
            </button>
            <a
              href={portfolioData.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              View GitHub
            </a>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div data-aos="fade-down" className="flex justify-center">
          <div className="relative w-full max-w-sm">
            {/* Gradient background circle */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 rounded-full blur-3xl opacity-20" />

            {/* Profile image container */}
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQH637G9Ath0SA/profile-displayphoto-shrink_400_400/B56ZccUzxqHoAg-/0/1748526907790?e=1765411200&v=beta&t=-hcjQdlDo2R1kMb_7I0xVl3rnAgdvZ7jwBlHc3kUUE8"
                alt={portfolioData.name}
                className="w-full h-full object-cover rounded-full border-4 border-primary shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
