import { ageCalculator } from "@/utils/ageCalculator";
import { Container } from "./Container";
import { Card, CardContent } from "./ui/card";

import AboutPicture from "../assets/img-sobre-mim.jpeg"

export function AboutSection() {
  return (
    <Container>
      <div className="grid grid-cold-1 md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img 
            src={AboutPicture}
            alt="Foto Otávio Cardoso"
            className="rounded-lg shadow-lg w-full max-w-md object-cover" 
          />
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-muted-foreground mb-4">
            Sou graduando em Análise e Desenvolvimento de Sistemas, com {ageCalculator()} anos e uma paixão crescente pelo desenvolvimento web. Desde o início da minha jornada, tenho me especializado na stack JavaScript, explorando tanto o front-end quanto o back-end para criar soluções eficientes e modernas.
          </p>
          <p className="text-muted-foreground mb-4">
            Com um olhar atento aos detalhes e uma dedicação contínua ao aprimoramento técnico, estou sempre em busca de novas oportunidades para expandir meus conhecimentos e entregar projetos que superem as expectativas.
          </p>
          <p className="text-muted-foreground mb-6">
            Se você procura alguém comprometido, responsável e com grande entusiasmo pela tecnologia, posso ser a escolha certa para o seu projeto.
          </p>

          <div className="flex gap-4">
            <Card className="flex-1">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <span className="text-2xl font-bold">50+</span>
                <span className="text-sm text-muted-foreground">Projects</span>
              </CardContent>
            </Card>

            <Card className="flex-1">
              <CardContent className="flex flex-col items-center justify-center p-4">
                <span className="text-2xl font-bold">5+</span>
                <span className="text-sm text-muted-foreground">Years</span>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
      
    </Container>
  );  
}