import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../components/ui/button";
import { Container } from "../components/container";
import { LogoMarquee } from "../components/logo-marquee";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <div className="min-h-screen py-20 bg-background text-foreground">
      <Container>
        <div className="flex flex-col items-start">
          <Reveal>
            <p className="text-2xl md:text-3xl font-medium mb-2">
              Olá, sou
            </p>

            <h1 className="text-6xl md:text-7xl lg:text-9xl font-extrabold tracking-tight mb-10">
              Otávio <span className="text-primary">Cardoso.</span>
            </h1>

            <p className="text-xl md:text-2xl font-semibold mb-6">
              Desenvolvedor de Software <span className="text-xl text-muted-foreground">disponível para colaborações e projetos freelance com tecnologias como:</span>
            </p>
          </Reveal>

          <Reveal>
            <LogoMarquee />
          </Reveal>

          <div className="flex gap-4 mb-8">
            <Reveal>
              <Button variant="default">
                <a href="#contact">Entre em contato</a>
              </Button>
            </Reveal>
            <Reveal>
              <Button variant="default">
                <a href="#projects">Ver Projetos</a>
              </Button>
            </Reveal>
          </div>
          
          <div className="flex gap-4">
            <Reveal>
              <Button asChild variant="outline">
                <a href="https://www.linkedin.com/in/otaviozerotwo/" target="_blank" rel="noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </Reveal>
            <Reveal>
              <Button asChild variant="outline">
                <a href="https://github.com/otaviozerotwo" target="_blank" rel="noreferrer">
                  <Github className="mr-2 h-4 w-4" /> Github
                </a>
              </Button>
            </Reveal>
            <Reveal>
              <Button asChild variant="outline">
                <a href="mailto:otavio.zerotwo@gmail.com" target="_blank" rel="noreferrer">
                  <Mail className="mr-2 h-4 w-4" /> Email
                </a>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </div>
  );
}