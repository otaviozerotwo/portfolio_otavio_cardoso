import { Terminal } from "lucide-react"
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur border-b border-border z-50">
      <Container className="flex h-16 items-center justify-between">
        <a href="/">
          <Terminal size={32} />
        </a>
        <ul className="flex gap-8 text-sm font-medium">
          <li>
            <a 
              href="#about" 
              className="p-3 hover:bg-secondary rounded transition-colors block"
            >
              Sobre min
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className="p-3 hover:bg-secondary rounded transition-colors block"
            >
              Projetos
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className="p-3 hover:bg-secondary rounded transition-colors block"
            >
              Contato
            </a>
          </li>
        </ul>
        <ThemeToggle />
      </Container>
    </nav>
  );
}