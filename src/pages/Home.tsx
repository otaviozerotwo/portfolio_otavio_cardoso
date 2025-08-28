import { AboutSection } from "@/components/AboutSection";
import { ContactSection} from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection} from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProjectSection} from "@/components/ProjectSection";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section id="hero" className="pt-12">
          <HeroSection/>
        </section>

        <section id="about" className="py-20 bg-muted">
          <AboutSection />
        </section>

        <section id="projects" className="py-20">
          <ProjectSection/>
        </section>

        <section id="contact" className="py-20 bg-muted">
          <ContactSection/>
        </section>
      </main>

      <Footer />
    </div>
  );
}