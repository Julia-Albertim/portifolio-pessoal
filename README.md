# Portfólio Julia Albertim

Site portfólio profissional desenvolvido em React com design feminino e moderno.

## 🌸 Características

- **Design Feminino**: Interface elegante com tons de rosa, roxo e lilás
- **Foto Pessoal**: Espaço dedicado para foto na seção "Sobre Mim"
- **Screenshots de Projetos**: Área para imagens dos seus projetos
- **Responsivo**: Compatível com desktop e dispositivos móveis
- **Navegação Suave**: Scroll suave entre seções
- **Animações Delicadas**: Transições e micro-interações com Framer Motion
- **Botões Fixos**: WhatsApp e LinkedIn sempre visíveis no canto direito
- **Logo Personalizada**: Sua logo integrada ao design

## 📱 Seções

1. **Início**: Apresentação principal com call-to-actions
2. **Sobre Mim**: Informações pessoais, foto, formação e tecnologias
3. **Projetos**: Showcase de projetos com screenshots e tecnologias utilizadas
4. **Contato**: Múltiplas formas de contato (Email, LinkedIn, GitHub, WhatsApp)

## 🛠️ Tecnologias Utilizadas

- React 18
- Tailwind CSS
- shadcn/ui (componentes)
- Framer Motion (animações)
- Lucide React (ícones)
- Vite (build tool)

## 🚀 Como Executar

### Pré-requisitos
- Node.js (versão 16 ou superior)
- npm ou pnpm

### Instalação e Execução

1. **Navegue até o diretório do projeto:**
   ```bash
   cd portfolio-julia
   ```

2. **Instale as dependências:**
   ```bash
   npm install --legacy-peer-deps
   ```
   *Nota: Use `--legacy-peer-deps` para resolver conflitos de dependências*

3. **Execute o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## 🖼️ Adicionando Sua Foto e Screenshots

### Foto Pessoal

1. **Adicione sua foto:**
   - Coloque sua foto na pasta `src/assets/` (ex: `foto-julia.jpg`)
   - Edite o arquivo `src/App.jsx` na linha ~140
   - Substitua o placeholder pela sua foto:

```javascript
// Substitua esta seção:
<div className="w-72 h-72 rounded-full bg-white flex items-center justify-center">
  <div className="text-center">
    <Camera size={48} className="text-purple-400 mx-auto mb-4" />
    <p className="text-purple-600 font-medium">Sua foto aqui</p>
  </div>
</div>

// Por esta:
<img 
  src="/src/assets/foto-julia.jpg" 
  alt="Julia Albertim" 
  className="w-72 h-72 rounded-full object-cover"
/>
```

### Screenshots dos Projetos

1. **Adicione as imagens dos projetos:**
   - Coloque as screenshots na pasta `src/assets/projects/`
   - Nomeie como: `projeto1.png`, `projeto2.png`, etc.

2. **Atualize o array de projetos no arquivo `src/App.jsx` (linha ~50):**

```javascript
const projects = [
  {
    title: "Sistema de Gestão Acadêmica",
    description: "Aplicação web para gerenciamento de notas...",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://seu-projeto.com",
    github: "https://github.com/seu-usuario/projeto",
    image: "/src/assets/projects/projeto1.png" // Sua screenshot aqui
  },
  // ... outros projetos
]
```

3. **Substitua o placeholder na renderização (linha ~280):**

```javascript
// Substitua:
<div className="w-full h-48 bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
  <div className="text-center">
    <Camera size={32} className="text-purple-400 mx-auto mb-2" />
    <p className="text-purple-600 text-sm font-medium">Screenshot do Projeto</p>
  </div>
</div>

// Por:
<img 
  src={project.image} 
  alt={project.title}
  className="w-full h-48 object-cover"
/>
```

## 📝 Personalização

### Informações Pessoais
Edite o arquivo `src/App.jsx` para personalizar:

- **Contatos**: Atualize os links de WhatsApp, LinkedIn, GitHub e email
- **Projetos**: Modifique a array `projects` com seus projetos reais
- **Tecnologias**: Ajuste as tecnologias listadas na seção "Sobre Mim"
- **Textos**: Personalize as descrições e textos conforme necessário

### Exemplo de atualização de contatos:
```javascript
// Linha ~67 - WhatsApp
href="https://wa.me/SEU_NUMERO_AQUI"

// Linha ~75 - LinkedIn
href="https://linkedin.com/in/SEU_PERFIL_AQUI"

// Seção de contato - atualize todos os links
```

### Adicionando Novos Projetos:
```javascript
const projects = [
  {
    title: "Nome do Projeto",
    description: "Descrição do projeto...",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://link-do-projeto.com",
    github: "https://github.com/seu-usuario/projeto",
    image: "/src/assets/projects/screenshot.png"
  },
  // ... mais projetos
]
```

## 🎨 Paleta de Cores

O design utiliza uma paleta feminina e moderna:
- **Primária**: Rosa (#EC4899) e Roxo (#8B5CF6)
- **Fundo**: Gradientes suaves de rosa e lilás
- **Texto**: Cinza escuro (#1F2937)
- **Acentos**: Bordas e hover effects em tons pastéis

## 📦 Build para Produção

Para gerar os arquivos de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/` e podem ser hospedados em qualquer servidor web.

## 🌐 Deploy

O site pode ser facilmente hospedado em:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting
- Qualquer servidor web estático

## 📱 Responsividade

O site foi desenvolvido com design responsivo e funciona perfeitamente em:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🔧 Estrutura do Projeto

```
portfolio-julia/
├── public/
├── src/
│   ├── assets/
│   │   ├── logo.png              # Sua logo
│   │   ├── foto-julia.jpg        # Sua foto pessoal (adicionar)
│   │   └── projects/             # Screenshots dos projetos (adicionar)
│   │       ├── projeto1.png
│   │       ├── projeto2.png
│   │       └── projeto3.png
│   ├── components/
│   │   └── ui/                   # Componentes shadcn/ui
│   ├── App.jsx                   # Componente principal
│   ├── App.css                   # Estilos globais
│   └── main.jsx                  # Ponto de entrada
├── index.html
├── package.json
└── README.md
```

## 💡 Dicas

1. **Fotos**: Use imagens de alta qualidade (pelo menos 800x800px para a foto pessoal)
2. **Screenshots**: Capture telas dos seus projetos em boa resolução
3. **Atualize regularmente**: Mantenha seus projetos e informações sempre atualizados
4. **SEO**: Considere adicionar meta tags para melhor indexação
5. **Performance**: Otimize as imagens antes de adicionar ao projeto

## 🌸 Mudanças na Versão Feminina

- **Paleta de cores**: Tons de rosa, roxo e lilás
- **Ícones**: Coração, estrelas e elementos mais delicados
- **Tipografia**: Textos mais suaves e acolhedores
- **Animações**: Transições mais suaves e elegantes
- **Layout**: Bordas arredondadas e elementos mais orgânicos

---

