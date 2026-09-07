import { Reveal } from "@/components/reveal";
import { Container } from "../components/container";
import { ProjectTags } from "../components/project-tag";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter } from "../components/ui/card";
import { ExternalLink, Github } from "lucide-react";

import imgEfood from '../../screenshots/efood.png';
import imgCriptAritmetica from '../../screenshots/calculadora_criptoaritmetica.png'
import imgZelda from '../../screenshots/zelda.png';
import imgTicTacToe from '../../screenshots/tic_tac_toe.png';

export function Project() {
  const projects = [
    {
      title: "eFood",
      description: "Interface web de delivery para um estabelecimento gastronômico",
      image: imgEfood,
      tags: ["React.js", "TypeScript", "Node.js", "Redux", "Styled Components"],
      demo: "https://efood-phi-sooty.vercel.app/",
      code: "https://github.com/otaviozerotwo/efood",
    },
    {
      title: "Tic Tac Toe Special",
      description: "Um jogo da velha avançado e interativo que permite ao jogador enfrentar uma inteligência artificial configurável",
      image: imgTicTacToe,
      tags: ["JavaScript", "HTML", "CSS"],
      demo: "https://tic-tac-toe-special-sigma.vercel.app/",
      code: "https://github.com/otaviozerotwo/tic_tac_toe_special",
    },
    {
      title: "Calculadora Criptoaritmética",
      description: "Aplicação web para resolução de quebra-cabeças cripto aritméticos por meio de Algoritmos Genéticos",
      image: imgCriptAritmetica,
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://calculadora-criptoaritmetica.vercel.app/",
      code: "https://github.com/otaviozerotwo/calculadora_criptoaritmetica",
    },
    {
      title: "The Legend of Zelda: A* Pathfinding Simulator",
      description: "Aplicação web interativa utilizando o algoritmo de busca heurística A* (A-Star)",
      image: imgZelda,
      tags: ["React.js", "React Router", "CSS", "JavaScript"],
      demo: "https://legend-of-zelda-a-star-b3kx.vercel.app/",
      code: "https://github.com/otaviozerotwo/legend_of_zelda_a_star",
    },
  ]
  return (
    <Container>
      <div className="text-center">
        <Reveal>
          <h2 className="text-3xl font-bold mb-4">Projetos em Destaque</h2>
        </Reveal>
        <Reveal>
          <p className="text-muted-foreground mb-10">
            Uma coleção de projetos que mostram minhas habilidades e experiência
          </p>
        </Reveal>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {projects.map((project, index) => (
          <Reveal key={index} delay={0.2}>
            <Card className="w-80 h-104 flex flex-col overflow-hidden gap-0">
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
                    Ver projeto
                  </a>
                </Button>
                <Button asChild variant="outline" className="p-0">
                  <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noreferrer"
                  >
                    <Github /> 
                    Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}