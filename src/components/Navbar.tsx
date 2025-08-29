import { Terminal } from "lucide-react"
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur border-b border-border z-50">
      <Container className="flex h-16 items-center justify-between">
        <a href="/">
          <Terminal size={32}/>
        </a>
        <ul className="flex gap-8 text-sm font-medium">
          <li className="p-3 hover:bg-secondary rounded cursor-pointer">
            <a 
              href="#about" 
              className="transition-colors"
            >
              Sobre min
            </a>
          </li>
          <li className="p-3 hover:bg-secondary rounded cursor-pointer">
            <a 
              href="#projects" 
              className="transition-colors"
            >
              Projetos
            </a>
          </li>
          <li className="p-3 hover:bg-secondary rounded cursor-pointer">
            <a 
              href="#contact" 
              className="transition-colors"
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