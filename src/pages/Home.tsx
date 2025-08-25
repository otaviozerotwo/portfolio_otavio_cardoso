import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        <section id="hero">
          <Hero />
        </section>
      </main>
    </div>
  );
}