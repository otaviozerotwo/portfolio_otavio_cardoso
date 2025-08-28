import { AboutSection } from "@/sections/About";
import { ContactSection} from "@/sections/Contact";
import { Footer } from "@/components/footer";
import { HeroSection} from "@/sections/Hero";
import { Navbar } from "@/components/navbar";
import { ProjectSection} from "@/sections/Project";

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