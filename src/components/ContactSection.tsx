import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "./Container";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export function ContactSection() {
  return (
    <Container className="max-w-5xl">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Entre em contato</h2>
        <p className="text-muted-foreground">
          Vamos discutir seu próximo projeto ou apenas dizer um oi!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-primary text-white p-3 rounded-lg">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-muted-foreground">otavio.zerotwo@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary text-white p-3 rounded-lg">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold">Telefone</h4>
              <p className="text-muted-foreground">+55 (34) 99222-7305</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary text-white p-3 rounded-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold">Localização</h4>
              <p className="text-muted-foreground">Patrocínio-MG, Brasil</p>
            </div>
          </div>
        </div>

        <form className="space-y-4">
          <Input placeholder="Seu nome" />
          <Input type="email" placeholder="Seu email" />
          <Textarea placeholder="Sua mensagem" rows={10} className="resize-none"/>
          <Button className="w-full cursor-pointer">Enviar</Button>
        </form>
      </div>
    </Container>
  );  
}