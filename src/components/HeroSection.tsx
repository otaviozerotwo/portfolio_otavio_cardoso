import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Container } from "./Container";
import { LogoMarquee } from "./LogoMarquee";

export function HeroSection() {
  return (
    <div className="min-h-screen py-20 bg-background text-foreground">
      <Container>
        <div className="flex flex-col items-start">
          <p className="text-3xl font-medium mb-2">
            Olá, sou
          </p>

          <h1 className="text-8xl md:text-8xl font-extrabold tracking-tight mb-10">
            Otávio <span className="text-primary">Cardoso.</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold mb-4">
            Desenvolvedor de Software
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            Disponível para colaborações e projetos freelance com tecnologias como:
          </p>

          <LogoMarquee />

          <div className="flex gap-4 mb-8">
            <Button variant="default">
              <a href="#">Entre em contato</a>
            </Button>
            <Button variant="default">
              <a href="#projects">Ver Projetos</a>
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Button asChild variant="outline">
              <a href="https://www.linkedin.com/in/otaviozerotwo/" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/otaviozerotwo" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" /> Github
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="mailto:otavio.zerotwo@gmail.com" target="_blank" rel="noreferrer">
                <Mail className="mr-2 h-4 w-4" /> Email
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}