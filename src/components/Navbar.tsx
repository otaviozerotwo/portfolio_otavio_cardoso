import { Moon, Terminal } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-background shadow z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/">
          <Terminal size={32}/>
        </a>
        <ul className="flex gap-6">
          <li><a href="#">Sobre</a></li>
          <li><a href="#">Projetos</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
        <span className="bg-gray-500 p-2 rounded-full cursor-pointer">
          <Moon />
        </span>
      </div>
    </nav>
  );
}