import { Container } from "../components/container";
import { ProjectTags } from "../components/project-tag";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { ExternalLink, Github } from "lucide-react";

export function Project() {
  const projects = [
    {
      title: "Algoritmo A Star Zelda",
      description: "Aplicação do algoritmo A Star com elementos do jogo The Legend of Zelda",
      image: "https://placehold.co/600x400",
      tags: ["JavaScript", "React"],
      demo: "#",
      code: "https://github.com/otaviozerotwo/legend_of_zelda_a_star_react",
    },
    {
      title: "Tic Tac Toe Special",
      description: "Aplicação dos algoritmos Alphabeta Minimax no jogo Tic Tac Toe (jogo da velha)",
      image: "https://placehold.co/600x400",
      tags: ["JavaScript", "HTML", "CSS"],
      demo: "#",
      code: "https://github.com/otaviozerotwo/tic_tac_toe_special_js_vanilla",
    },
    {
      title: "Pokedéx",
      description: "Pokedéx para dispositivos Android",
      image: "https://placehold.co/600x400",
      tags: ["Kotlin", "API"],
      demo: "#",
      code: "https://github.com/otaviozerotwo/pokedex-android",
    },
  ]
  return (
    <Container>
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Projetos em Destaque</h2>
        <p className="text-muted-foreground mb-10">
          Uma coleção de projetos que mostram minhas habilidades e experiência
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="w-80 flex flex-col overflow-hidden gap-0">
            <img 
              src={project.image} 
              alt={project.title}
              className="h-40 w-full object-cover"
            />

            <CardContent className="flex-1 flex flex-col justify-between p-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {project.description}
                </p>
              </div>

              <ProjectTags tags={project.tags} />
            </CardContent>

            <CardFooter className="flex gap-4 px-4">
              <Button asChild variant="outline" className="p-0 text-blue-500">
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <ExternalLink />
                  Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" className="p-0">
                <a 
                  href={project.code} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Github /> 
                  Code
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </Container>
  );
}