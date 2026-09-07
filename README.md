# Portfólio Pessoal | Otávio Cardoso

Aplicação web moderna desenvolvida para apresentar a trajetória profissional, competências técnicas e os principais projetos de desenvolvimento de software de **Otávio Cardoso**. Construída com foco em alto desempenho, design refinado, animações fluidas e suporte nativo a temas claro e escuro.

---

## 📋 Descrição

O **Portfólio Pessoal** é uma Single Page Application (SPA) responsiva criada para destacar projetos de destaque, habilidades no ecossistema JavaScript/TypeScript e canais de contato. A interface conta com um design limpo e contemporâneo, tipografia consistente, microinterações animadas com Framer Motion, exibição infinita de tecnologias com marquee e validação de formulário em tempo real utilizando React Hook Form e Zod.

---

## 🎯 Propósito

Servir como canal central de apresentação profissional e portfólio interativo para recrutadores, gestores de tecnologia, parceiros e clientes em busca de serviços de desenvolvimento de software front-end e full stack.

---

## 🏆 Objetivo

- Demonstrar proficiência prática em tecnologias modernas de front-end (React 19, TypeScript, Tailwind CSS v4 e Framer Motion);
- Exibir os projetos desenvolvidos com acesso direto às demonstrações online (deploy na Vercel) e aos repositórios no GitHub;
- Fornecer uma experiência de usuário (UX) ágil, acessível e totalmente responsiva em qualquer dispositivo (mobile, tablet e desktop);
- Facilitar a comunicação direta através de formulário estruturado e links de redes profissionais.

---

## 👥 Público-alvo

- **Recrutadores e Tech Recruiters**: Profissionais de RH e lideranças técnicas avaliando competências para vagas de desenvolvimento de software.
- **Empresas e Clientes Freelance**: Pessoas físicas e jurídicas à procura de desenvolvimento de aplicações web eficientes e modernas.
- **Comunidade Técnica e Desenvolvedores**: Colegas de profissão interessados em trocar experiências e explorar o código-fonte dos projetos.

---

## ✨ Requisitos Funcionais

- [x] **Seção Hero (Apresentação)**:
  - Título de impacto e apresentação do desenvolvedor.
  - Carrossel contínuo (*infinite marquee*) com os logotipos das tecnologias dominadas (JavaScript, React, TypeScript, Node.js, Docker, Tailwind CSS).
  - Botões de chamada para ação (CTA) para navegação rápida até "Projetos" e "Contato".
  - Acesso direto às redes sociais e canais de contato (LinkedIn, GitHub, E-mail).
- [x] **Seção Sobre Mim**:
  - Foto de perfil e resumo da trajetória profissional e acadêmica.
  - Cálculo automático e dinâmico da idade com base no ano de nascimento via função utilitária (`ageCalculator`).
  - Cartões com métricas de projetos e colaborações.
- [x] **Seção Projetos em Destaque**:
  - Listagem dos principais projetos com imagem ilustrativa, título, descrição concisa e badges com as tecnologias utilizadas.
  - Links externos individuais para a demonstração ao vivo (deploy) e para o repositório de código no GitHub:
    1. **eFood**: Interface web de delivery gastronômico (*React.js, TypeScript, Node.js, Redux, Styled Components*).
    2. **Tic Tac Toe Special**: Jogo da velha avançado com inteligência artificial configurável (*JavaScript, HTML, CSS*).
    3. **Calculadora Criptoaritmética**: Resolução de quebra-cabeças criptoaritméticos através de Algoritmos Genéticos (*HTML, CSS, JavaScript*).
    4. **The Legend of Zelda: A\* Pathfinding Simulator**: Simulador interativo utilizando algoritmo de busca heurística A* (*React.js, React Router, CSS, JavaScript*).
- [x] **Seção Contato**:
  - Exibição de canais diretos (E-mail, LinkedIn e Localização: Patrocínio-MG).
  - Formulário com campos para Nome, E-mail e Mensagem com validação de esquema em tempo real.
- [x] **Alternância de Tema (Dark/Light Mode)**:
  - Suporte completo a tema escuro e claro persistido no navegador via `next-themes`.
- [x] **Navegação Responsiva**:
  - Barra de navegação fixa no topo (*fixed header*) com efeito de desfoque (*backdrop blur*).
  - Menu drawer lateral expansível (Sheet) em telas móveis com fechamento automático ao selecionar uma seção.
- [x] **Animações de Entrada (Scroll Reveal)**:
  - Transições suaves e coordenadas com Framer Motion acionadas à medida que as seções entram no campo de visão (*viewport*).

---

## ⚙️ Requisitos Não Funcionais

- **Responsividade Total**: Layout construído com abordagem mobile-first, garantindo adaptação perfeita de smartphones a telas ultrawide.
- **Performance e Carregamento Rápido**: Otimização de assets e empacotamento ultrarrápido impulsionado pelo Vite 7 e React 19.
- **Tipagem Estrita**: Código 100% escrito em TypeScript, reduzindo erros em tempo de execução e aumentando a confiabilidade.
- **Acessibilidade e Componentização**: Primitivos acessíveis baseados no Radix UI (Sheet, Card, Button, Form) seguindo as diretrizes WAI-ARIA.
- **Design System Flexível**: Estilização baseada no Tailwind CSS v4 com paleta de cores moderna configurada no espaço de cores OKLCH.
- **Validação Robusta no Cliente**: Validação declarativa e fortemente tipada utilizando Zod e React Hook Form.

---

## 🛠️ Tecnologias Utilizadas

### Core & Frameworks
- **[React 19](https://react.dev/)** - Biblioteca declarativa para construção de interfaces.
- **[TypeScript](https://www.typescriptlang.org/)** - Superset tipado para JavaScript.
- **[Vite 7](https://vite.dev/)** - Build tool e servidor de desenvolvimento ultrarrápido.

### Estilização & UI
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Framework utilitário de CSS com nova arquitetura de motor e suporte a `@theme`.
- **[Radix UI](https://www.radix-ui.com/)** - Componentes de interface primitivos, acessíveis e sem estilização rígida.
- **[Lucide React](https://lucide.dev/)** - Coleção completa de ícones em SVG otimizados para React.
- **[Class Variance Authority (CVA)](https://cva.style/)** & **[tailwind-merge](https://github.com/dcastilho/tailwind-merge)** - Gerenciamento modular e dinâmico de variantes de classes CSS.

### Animações & Interatividade
- **[Framer Motion](https://www.framer.com/motion/)** - Biblioteca para animações físicas e transições no scroll.
- **[React Fast Marquee](https://www.react-fast-marquee.com/)** - Componente leve para o efeito de marquee contínuo dos logos.
- **[Embla Carousel](https://www.embla-carousel.com/)** - Mecanismo flexível para carrosséis interativos.

### Formulários, Validação & Feedback
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de estado e submissão de formulários com mínimo re-render.
- **[Zod](https://zod.dev/)** - Declaração de esquemas e validação de tipos em tempo de execução.
- **[Sonner](https://sonner.emilkowal.ski/)** - Sistema de notificações toast toast personalizadas e modernas.
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Gerenciamento e persistência de tema (Dark / Light mode).

---

## 📂 Estrutura do Projeto

```bash
📁 portfolio-otavio-cardoso-new
├── 📁 screenshots/                 # Imagens de demonstração dos projetos em destaque
│   ├── 📄 calculadora_criptoaritmetica.png
│   ├── 📄 efood.png
│   ├── 📄 tic_tac_toe.png
│   └── 📄 zelda.png
├── 📁 src/
│   ├── 📁 assets/                  # Imagens estáticas e logotipos de tecnologias
│   │   ├── 📁 logos/               # Ícones de tecnologias (React, TS, Docker, etc.)
│   │   └── 📄 img-sobre-mim.png    # Foto de perfil utilizada na seção Sobre
│   ├── 📁 components/              # Componentes React compartilhados
│   │   ├── 📁 ui/                  # Primitivos de UI baseados no Radix UI / shadcn
│   │   │   ├── 📄 button.tsx       # Componente de botão com variantes
│   │   │   ├── 📄 card.tsx         # Cartões de conteúdo
│   │   │   ├── 📄 form.tsx         # Estrutura de formulário integrada ao React Hook Form
│   │   │   ├── 📄 input.tsx        # Campo de entrada de texto
│   │   │   ├── 📄 sheet.tsx        # Menu lateral drawer móvel
│   │   │   └── 📄 textarea.tsx     # Campo de texto multilinhas
│   │   ├── 📄 container.tsx        # Wrapper de largura máxima padronizada
│   │   ├── 📄 footer.tsx           # Rodapé com links e direitos autorais
│   │   ├── 📄 logo-marquee.tsx     # Marquee infinito de tecnologias
│   │   ├── 📄 navbar.tsx           # Barra de navegação com menu móvel e toggle de tema
│   │   ├── 📄 project-tag.tsx      # Badges para listagem de tags dos projetos
│   │   ├── 📄 reveal.tsx           # Componente de animação no scroll com Framer Motion
│   │   └── 📄 theme-toggle.tsx     # Botão para alternar entre Dark e Light mode
│   ├── 📁 lib/                     # Utilitários e esquemas de validação
│   │   ├── 📁 validations/
│   │   │   ├── 📄 ageCalculator.ts      # Cálculo dinâmico da idade
│   │   │   └── 📄 contactFormSchema.ts  # Esquema Zod de validação do formulário
│   │   └── 📄 utils.ts             # Função auxiliar cn (clsx + tailwind-merge)
│   ├── 📁 pages/
│   │   └── 📄 Home.tsx             # Página inicial que orquestra as seções
│   ├── 📁 providers/
│   │   └── 📄 theme-provider.tsx   # Provedor de contexto do next-themes
│   ├── 📁 sections/                # Seções principais da página
│   │   ├── 📄 About.tsx            # Seção "Sobre Mim"
│   │   ├── 📄 Contact.tsx          # Seção "Entre em contato" e formulário
│   │   ├── 📄 Hero.tsx             # Seção de introdução e apresentação
│   │   └── 📄 Project.tsx          # Seção "Projetos em Destaque"
│   ├── 📄 App.tsx                  # Componente raiz da aplicação
│   ├── 📄 index.css                # Estilos globais e tokens semânticos Tailwind v4 / OKLCH
│   └── 📄 main.tsx                 # Ponto de entrada da aplicação React
├── 📄 components.json              # Configurações do ecossistema shadcn/ui
├── 📄 index.html                   # HTML base com meta tags e título
├── 📄 package.json                 # Manifesto de dependências e scripts NPM
├── 📄 tsconfig.json                # Configurações de compilação do TypeScript
└── 📄 vite.config.ts               # Configuração do Vite com suporte a Tailwind e aliases (@)
```

---

## 🌐 Arquitetura e Estrutura de Dados

Por se tratar de uma **Single Page Application (SPA) Client-Side**, a aplicação opera integralmente no navegador do usuário, consumindo e organizando dados estruturados localmente. Abaixo estão descritos os modelos de dados e as regras de validação implementadas.

### 1. Modelo de Dados de Projetos

Os projetos exibidos na seção `Project.tsx` são representados pela seguinte estrutura:

```typescript
interface ProjectItem {
  title: string;          // Nome do projeto
  description: string;    // Breve resumo das funcionalidades
  image: string;          // Imagem/screenshot importada do projeto
  tags: string[];         // Tecnologias e bibliotecas utilizadas
  demo: string;           // URL da demonstração em produção (ex: Vercel)
  code: string;           // URL do repositório no GitHub
}
```

**Exemplo de Objeto de Projeto:**
```json
{
  "title": "eFood",
  "description": "Interface web de delivery para um estabelecimento gastronômico",
  "tags": ["React.js", "TypeScript", "Node.js", "Redux", "Styled Components"],
  "demo": "https://efood-phi-sooty.vercel.app/",
  "code": "https://github.com/otaviozerotwo/efood"
}
```

---

### 2. Validação do Formulário de Contato

A validação dos dados submetidos pelo formulário de contato é gerenciada via **Zod** (`contactFormSchema.ts`):

```typescript
export const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.email("E-mail inválido"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});
```

#### Regras de Validação:

| Campo | Tipo | Validação | Mensagem de Erro |
|---|---|---|---|
| `name` | `string` | Mínimo de 2 caracteres | *"Nome deve ter pelo menos 2 caracteres"* |
| `email` | `string (email)` | Formato de e-mail válido | *"E-mail inválido"* |
| `message` | `string` | Mínimo de 10 caracteres | *"Mensagem deve ter pelo menos 10 caracteres"* |

#### Exemplo de Payload Válido:
```json
{
  "name": "Maria Silva",
  "email": "maria.silva@exemplo.com",
  "message": "Olá Otávio, gostaria de discutir uma oportunidade de projeto freelance."
}
```

---

## 📦 Como Executar o Projeto

Siga os passos abaixo para clonar e rodar o projeto em seu ambiente local.

### Pré-requisitos
- **Node.js** (versão 18.x ou superior recomendada)
- **npm** (ou gerenciador de pacotes compatível: **pnpm** ou **yarn**)
- **Git** instalado no sistema

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/otaviozerotwo/portfolio_otavio_cardoso.git
   ```

2. **Acesse o diretório do projeto:**
   ```bash
   cd portfolio_otavio_cardoso
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

5. **Abra no navegador:**
   O terminal exibirá o endereço local (geralmente `http://localhost:5173`). Abra-o em seu navegador favorito para visualizar a aplicação em tempo real.

---

### 🔨 Outros Scripts Disponíveis

- **Build de produção:**
  ```bash
  npm run build
  ```
  *Executa a checagem de tipos do TypeScript (`tsc -b`) e gera os arquivos otimizados e minificados no diretório `dist/`.*

- **Visualizar o build localmente:**
  ```bash
  npm run preview
  ```
  *Inicia um servidor estático local para inspecionar o pacote compilado antes do deploy.*

- **Executar o linter:**
  ```bash
  npm run lint
  ```
  *Verifica o código com ESLint de acordo com as regras estabelecidas.*

---

## 📖 Uso

1. **Navegação pelas Seções**: Utilize os links do menu superior (ou abra o menu sanduíche no celular) para se deslocar suavemente pelas seções `#about`, `#projects` e `#contact`.
2. **Alternar Tema**: Clique no botão com ícone de Sol/Lua no topo direito para alternar instantaneamente entre o modo claro e o modo escuro.
3. **Explorar Projetos**:
   - Clique em **"Ver projeto"** em qualquer cartão para abrir a versão online hospedada na Vercel em uma nova aba.
   - Clique em **"Código"** para inspecionar o código-fonte correspondente no GitHub.
4. **Entrar em Contato**:
   - Utilize os atalhos de E-mail ou LinkedIn para comunicação rápida.
   - Preencha o formulário interativo de contato com seus dados e mensagem.

---

## 🚀 Próximos Passos

- [ ] Integrar o envio do formulário de contato com um serviço de e-mails em nuvem (ex: **Resend**, **EmailJS** ou **Formspree**);
- [ ] Adicionar feedback visual via **Sonner Toast** informando o sucesso ou falha no envio da mensagem;
- [ ] Implementar suporte a internacionalização (**i18n**) com alternância entre Português e Inglês;
- [ ] Incluir uma seção de **Depoimentos & Recomendações** e uma **Linha do Tempo de Carreira / Formação**;
- [ ] Adicionar testes de componentes com **Vitest** e **React Testing Library**.

---

## 💡 Principais Aprendizados

- **Adoção do React 19 e Vite 7**: Configuração e desenvolvimento com as versões mais recentes do ecossistema React, usufruindo de melhorias no motor de renderização e builds instantâneos.
- **Ecossistema Tailwind CSS v4**: Exploração da nova arquitetura sem arquivo `tailwind.config.js` tradicional, definindo temas e variáveis semânticas diretamente com `@theme` e cores calibradas em **OKLCH**.
- **Acessibilidade e Componentização com Radix UI**: Integração de primitivos sem estilos forçados, assegurando usabilidade nativa para leitores de tela e navegação por teclado.
- **Validação Tipada e Integrada**: Uso sinérgico de **Zod** com **React Hook Form**, gerando tipagem automática e validação de ponta a ponta sem duplicação de regras.
- **Animações Fluidas e Não Intrusivas**: Emprego do **Framer Motion** para enriquecer a percepção visual do usuário através de efeitos de entrada controlados e microinterações responsivas.

---

## 👤 Autor

Desenvolvido por **Otávio Cardoso** 🚀

- **LinkedIn**: [otaviozerotwo](https://www.linkedin.com/in/otaviozerotwo/)
- **GitHub**: [@otaviozerotwo](https://github.com/otaviozerotwo)
- **E-mail**: [otavio.zerotwo@gmail.com](mailto:otavio.zerotwo@gmail.com)
- **Localização**: Patrocínio - MG, Brasil