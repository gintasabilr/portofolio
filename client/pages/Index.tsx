import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <ContactForm />
      <Footer />
    </div>
  );
}
