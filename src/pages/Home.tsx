import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Hero } from "@/sections/Hero";
import { Project } from "@/sections/Project";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section id="hero" className="pt-12">
          <Hero/>
        </section>

        <section id="about" className="py-20 bg-muted">
          <About />
        </section>

        <section id="projects" className="py-20">
          <Project />
        </section>

        <section id="contact" className="py-20 bg-muted">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}