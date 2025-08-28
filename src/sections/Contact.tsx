import { Linkedin, Mail, MapPin } from "lucide-react";
import { Container } from "../components/container";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { useForm } from "react-hook-form";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations/contactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../components/ui/form";

export function Contact() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  function onSubmit(values: ContactFormValues) {
    console.log("Form enviado", values);
  }

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
            <a href="mailto:otavio.zerotwo@gmail.com" target="_blank" rel="noreferrer">
              <div className="bg-primary text-white p-3 rounded-lg dark:text-black">
                <Mail className="w-5 h-5" />
              </div>
            </a>
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-muted-foreground">otavio.zerotwo@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/in/otaviozerotwo/" target="_blank" rel="noreferrer">
              <div className="bg-primary text-white p-3 rounded-lg dark:text-black">
                  <Linkedin className="w-5 h-5" />
              </div>
            </a>
            <div>
              <h4 className="font-semibold">LinkedIn</h4>
              <p className="text-muted-foreground">otaviozerotwo</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-primary text-white p-3 rounded-lg dark:text-black">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold">Localização</h4>
              <p className="text-muted-foreground">Patrocínio-MG, Brasil</p>
            </div>
          </div>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Seu nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Seu e-mail" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea 
                      placeholder="Sua mensagem..." 
                      className="resize-none h-32" 
                      {...field} 
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full h-10 cursor-pointer">Enviar mensagem</Button>
          </form>
        </Form>
      </div>
    </Container>
  );  
}