import { Moon, Terminal } from "lucide-react"
import { Container } from "./Container";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur border-b border-border z-50">
      <Container className="flex h-16 items-center justify-between">
        <a href="/">
          <Terminal size={32}/>
        </a>
        <ul className="flex gap-8 text-sm font-medium">
          <li><a href="#about" className="hover:text-primary transition-colors">Sobre min</a></li>
          <li><a href="#projects" className="hover:text-primary transition-colors">Projetos</a></li>
          <li><a href="#contact" className="hover:text-primary transition-colors">Contato</a></li>
        </ul>
        <span className="bg-gray-500 p-2 rounded-full cursor-pointer">
          <Moon />
        </span>
      </Container>
    </nav>
  );
}