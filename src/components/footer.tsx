import { Github, Linkedin, Terminal } from "lucide-react";
import { Container } from "./container";

export function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur border-t border-border py-6">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <Terminal size={32} />
          </div>

          <div className="flex space-x-6">
            <ul className="flex gap-2">
              <li>
                <a 
                  href="https://github.com/otaviozerotwo"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-secondary rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors block"
                >
                  <Github className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/otaviozerotwo/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-secondary rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors block"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm text-gray-500 text-center md:text-right dark:text-gray-60">
            &copy; 2025 Otávio Cardoso. Todos os direitos reservados.
          </div>
        </div>
      </Container>
    </footer>
  );
}