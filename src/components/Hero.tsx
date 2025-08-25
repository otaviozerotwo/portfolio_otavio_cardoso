import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 bg-background text-foreground">
      <p className="text-lg font-medium mb-2">
        Olá, sou
      </p>

      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-6">
        Otávio <span className="text-primary">Cardoso.</span>
      </h1>

      <p className="text-xl md:text-2xl font-semibold mb-4">
        Desenvolvedor de Software
      </p>

      <p className="text-lg text-muted-foreground mb-8">
        Disponível para colaborações e projetos freelance
      </p>

      <div className="flex gap-4 mb-8">
        <Button variant="default">
          <a href="#">Entre em contato</a>
        </Button>
        <Button variant="default">
          <a href="#">Ver Projetos</a>
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
    </section>
  );
}