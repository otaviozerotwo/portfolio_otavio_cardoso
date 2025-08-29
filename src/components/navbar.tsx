import { Menu, Terminal } from "lucide-react"
import { Container } from "./container";
import { ThemeToggle } from "./theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur border-b border-border z-50">
      <Container className="flex h-16 items-center justify-between">
        <a href="/">
          <Terminal size={32} />
        </a>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
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

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button className="h-14 w-14 flex items-center justify-center rounded-md hover:bg-secondary cursor-pointer">
                <Menu className="h-10 w-10" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <nav className="flex flex-col gap-6 mt-14 text-lg font-medium border-t-2">
                <ul>
                  <li className="px-8 py-2 hover:bg-secondary">
                    <a 
                      href="#about"
                      onClick={() => setOpen(false)}
                      className="dark:text-gray-200 transition-colors"
                    >
                      Sobre mim
                    </a>
                  </li>
                  <li className="px-8 py-2 hover:bg-secondary">
                    <a 
                      href="#projects"
                      onClick={() => setOpen(false)}
                      className="dark:text-gray-200 transition-colors"
                    >
                      Projetos
                    </a>
                  </li>
                  <li className="px-8 py-2 hover:bg-secondary">
                    <a 
                      href="#contact"
                      onClick={() => setOpen(false)}
                      className="dark:text-gray-200 transition-colors"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <ThemeToggle />
      </Container>
    </nav>
  );
}