import JsLogo from '../assets/logos/javaScript_logo.png';
import ReactLogo from '../assets/logos/react_logo.png';
import TailwindLogo from '../assets/logos/tailwind_logo.png';
import TsLogo from '../assets/logos/typeScript_logo.png';
import NodeLogo from '../assets/logos/node_logo.png';
import DockerLogo from '../assets/logos/docker_logo.png';
import TypeORMLogo from '../assets/logos/typeORM_logo.png';

import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from './ui/card';

const logos = [JsLogo, ReactLogo, TailwindLogo, TsLogo, NodeLogo, DockerLogo, TypeORMLogo];

export function CarouselHero() {
  return (
    <Carousel 
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: false,
          stopOnMouseEnter: false,
        }),
      ]}
      opts={{ loop: true }}
      className="mb-10 w-full max-w-sm"
    >
      <CarouselContent className="-ml-1">
        {logos.map((logo, index) => (
          <CarouselItem 
            key={index} 
            className="pl-1 sm:basis-1/4 md:basis-1/4 lg:basis-1/4"
          >
            <Card className="flex items-center justify-center aspect-square">
              <CardContent className="flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Logo ${index}`}
                  className="h-10 w-10 object-contain" 
                />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}