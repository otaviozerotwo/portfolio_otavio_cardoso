import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section id="hero" className="pt-20">
          <Hero />
        </section>

        <section id="about" className="py-20">
          <About />
        </section>

        <section id="projects" className="py-20 bg-muted">
          <Projects />
        </section>

        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}