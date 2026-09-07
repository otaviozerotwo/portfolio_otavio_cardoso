import Marquee from "react-fast-marquee";

import JsLogo from '../assets/logos/javaScript_logo.png';
import ReactLogo from '../assets/logos/react_logo.png';
import TsLogo from '../assets/logos/typeScript_logo.png';
import NodeLogo from '../assets/logos/node_logo.png';
import DockerLogo from '../assets/logos/docker_logo.png';
import TailwindLogo from '../assets/logos/tailwindcss_logo.png';
import { Card, CardContent } from "./ui/card";

export function LogoMarquee() {
  return (
    <Marquee 
      gradient={false} 
      speed={40}
      className="mb-10 w-full max-w-lvw md:max-w-5xl"
    >
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={JsLogo} alt="Logo JavaScript" className="h-10 w-10 object-contain" />
          <p>JavaScript</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={ReactLogo} alt="Logo React" className="h-10 w-10 object-contain" />
          <p>React</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={TsLogo} alt="Logo TypeScript" className="h-10 w-10 object-contain" />
          <p>TypeScript</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={NodeLogo} alt="Logo Node.js" className="h-10 w-10 object-contain" />
          <p>Node.js</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={DockerLogo} alt="Logo Docker" className="h-10 w-10 object-contain" />
          <p>Docker</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={TailwindLogo} alt="Logo TypeORM" className="h-10 w-10 object-contain" />
          <p>Tailwind</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={JsLogo} alt="Logo JavaScript" className="h-10 w-10 object-contain" />
          <p>JavaScript</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={ReactLogo} alt="Logo React" className="h-10 w-10 object-contain" />
          <p>React</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={TsLogo} alt="Logo TypeScript" className="h-10 w-10 object-contain" />
          <p>TypeScript</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={NodeLogo} alt="Logo Node.js" className="h-10 w-10 object-contain" />
          <p>Node.js</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={DockerLogo} alt="Logo Docker" className="h-10 w-10 object-contain" />
          <p>Docker</p>
        </CardContent>
      </Card>
      <Card className="w-24 h-24 flex-shrink-0 mx-2">
        <CardContent className="flex flex-col items-center justify-center h-full">
          <img src={TailwindLogo} alt="Logo TypeORM" className="h-10 w-10 object-contain" />
          <p>Tailwind</p>
        </CardContent>
      </Card>
    </Marquee>
  );
}