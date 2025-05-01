# Design System: Blog Florescer Humano

Este documento apresenta o design system completo do Blog Florescer Humano, incluindo todos os elementos visuais, padrões de design e componentes necessários para recriar a experiência visual do blog em qualquer plataforma.

## Índice

1. [Introdução](#introdução)
2. [Cores](#cores)
3. [Tipografia](#tipografia)
4. [Espaçamento](#espaçamento)
5. [Componentes](#componentes)
6. [Elementos de Interface](#elementos-de-interface)
7. [Padrões de Layout](#padrões-de-layout)
8. [Responsividade](#responsividade)
9. [Animações e Transições](#animações-e-transições)
10. [Uso das Imagens](#uso-das-imagens)
11. [Implementação Técnica](#implementação-técnica)

## Introdução

O Blog Florescer Humano utiliza um design inspirado em conceitos de crescimento pessoal, natureza e humanismo, refletindo sua missão de promover o desenvolvimento humano e bem-estar. O design utiliza tons terrosos quentes combinados com verdes vibrantes para criar uma atmosfera acolhedora e estimulante.

### Conceito Visual

O design visual do Florescer Humano é baseado na metáfora de um "jardim de ideias", onde cada elemento visual contribui para uma sensação de crescimento, cultivo e florescimento. A paleta de cores, tipografia e componentes trabalham em harmonia para criar um ambiente digital que convide à reflexão e ao desenvolvimento pessoal.

## Cores

### Paleta Principal

| Nome | Valor HSL | Valor HEX | Uso |
|------|-----------|-----------|-----|
| Verde-terra (Primary) | 120 23% 45% | #4E7D4C | Cor principal, botões, links importantes |
| Verde-claro | - | #8AB87A | Gradientes, elementos secundários |
| Verde-escuro | - | #3D603B | Hover em elementos primários |
| Marrom | 30 45% 23% | #583B1F | Texto principal, alguns fundos |
| Terracota (Accent) | 17 43% 55% | #B67A63 | Elementos de destaque, ícones, tags |

### Paleta Secundária

| Nome | Valor HSL | Valor HEX | Uso |
|------|-----------|-----------|-----|
| Areia | - | #F4EED9 | Fundos de seções |
| Areia-clara | 48 45% 97% | #FAF8EA | Fundos de seções alternadas |
| Bege | - | #FCF0E6 | Elementos sutis |
| Bege-claro | 28 45% 96% | #FEF7F2 | Fundos alternativos |

### Sistema de Cores para UI

| Variável CSS | Valor HSL | Descrição |
|--------------|-----------|-----------|
| `--background` | 48 45% 97% | Fundo principal |
| `--foreground` | 30 45% 23% | Texto principal |
| `--primary` | 120 23% 45% | Cor principal |
| `--primary-foreground` | 0 0% 100% | Texto sobre primary |
| `--secondary` | 42 55% 92% | Cor secundária |
| `--secondary-foreground` | 30 45% 23% | Texto sobre secondary |
| `--muted` | 28 45% 96% | Áreas discretas |
| `--muted-foreground` | 30 30% 36% | Texto sobre muted |
| `--accent` | 17 43% 55% | Cor de destaque |
| `--accent-foreground` | 0 0% 100% | Texto sobre accent |
| `--border` | 30 32% 86% | Bordas |
| `--input` | 30 32% 96% | Fundo de inputs |
| `--ring` | 120 30% 45% | Foco em elementos |
| `--card` | 36 33% 97% | Fundo de cards |
| `--card-foreground` | 30 45% 23% | Texto em cards |

## Tipografia

### Fontes

- **Corpo de texto**: Kaisei Opti (variável CSS: `--font-kaisei`)
  - Pesos usados: 400 (regular), 500 (medium), 700 (bold)
  - Fallback: sans-serif

- **Títulos e Destaques**: Playfair Display (variável CSS: `--font-playfair`)
  - Pesos usados: 400 (regular), 500 (medium), 700 (bold)
  - Fallback: serif

### Escala Tipográfica

| Nível | Tamanho | Peso | Família | Uso |
|-------|---------|------|---------|-----|
| h1 | 2rem - 6xl (em telas grandes) | 700 | Playfair | Títulos de página |
| h2 | 1.5rem - 3xl | 700 | Playfair | Títulos de seção |
| h3 | 1.25rem - xl | 500 | Playfair | Sub-seções |
| Corpo | 1rem (base) | 400 | Kaisei | Texto principal |
| Texto pequeno | 0.875rem (sm) | 400 | Kaisei | Legendas, metadados |
| Texto menor | 0.75rem (xs) | 400 | Kaisei | Informações legais |

### Estilização de texto

```css
h1, h2, h3 {
  color: #5b8c5a;  /* verde-terra */
  font-family: var(--font-playfair);
}

h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

a {
  color: hsl(var(--accent));
}

a:hover {
  text-decoration: underline;
}
```

### Efeitos especiais de texto

- **Text Gradient** - Usado para títulos de destaque
  ```css
  .text-gradient {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #4E7D4C, #8AB87A);
  }
  
  .text-gradient-warm {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #B67A63, #D6A490);
  }
  ```

- **Text Underline** - Para títulos de seção
  ```css
  .title-underline {
    position: relative;
    display: inline-block;
  }

  .title-underline::after {
    content: '';
    position: absolute;
    bottom: -0.5rem;
    left: 0;
    width: 2rem;
    height: 2px;
    background-color: hsl(var(--primary));
  }

  .title-underline-accent::after {
    background-color: hsl(var(--accent));
  }
  ```

## Espaçamento

O sistema de espaçamento segue uma escala baseada em múltiplos de 4px (0.25rem).

### Escala de Espaçamento

- **4px (0.25rem)**: Espaçamento mínimo, usado para pequenos gaps
- **8px (0.5rem)**: Espaçamento entre elementos relacionados
- **12px (0.75rem)**: Espaçamento médio-pequeno
- **16px (1rem)**: Espaçamento base
- **24px (1.5rem)**: Espaçamento médio
- **32px (2rem)**: Espaçamento grande, usado entre seções
- **48px (3rem)**: Espaçamento entre seções principais em mobile
- **64px (4rem)**: Espaçamento extra-grande
- **80px (5rem)**: Espaçamento entre seções principais em desktop

### Classes de Utilidade para Espaçamento

```css
.section-padding {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

@media (min-width: 768px) {
  .section-padding {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

.container-custom {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
```

## Componentes

### Botões

#### Botão Primário

```css
.btn-primary {
  background-color: hsl(var(--primary));
  color: hsl(var(--primary-foreground));
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(91, 140, 90, 0.15);
}

.btn-primary:hover {
  background-color: #3d603b;
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(91, 140, 90, 0.25);
}
```

#### Botão Secundário

```css
.btn-secondary {
  border: 1px solid hsl(var(--accent));
  color: hsl(var(--accent));
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s;
}

.btn-secondary:hover {
  background-color: hsl(var(--accent));
  color: white;
  transform: translateY(-1px);
  box-shadow: 0 3px 8px rgba(182, 122, 99, 0.25);
}
```

### Cards

#### Card Padrão

```css
.card {
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 4px 10px -2px rgba(88, 59, 31, 0.08), 0 2px 4px -1px rgba(88, 59, 31, 0.04);
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  border: 1px solid rgba(244, 238, 217, 0.5);
}

.card:hover {
  box-shadow: 0 12px 20px -4px rgba(88, 59, 31, 0.12), 0 4px 8px -2px rgba(88, 59, 31, 0.08);
  transform: translateY(-0.25rem);
  border-color: rgba(244, 238, 217, 0.8);
}
```

#### Card de Artigo

```jsx
<article className="card h-full flex flex-col">
  <div className="relative h-48 w-full overflow-hidden">
    <Image 
      src={image} 
      alt={title} 
      fill 
      className="object-cover transition-transform duration-500 ease-in-out hover:scale-105" 
    />
    <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md shadow-sm">
      {category}
    </div>
  </div>
  <div className="p-6 flex-grow flex flex-col">
    <div className="text-xs text-muted-foreground mb-2">{date}</div>
    <h3 className="font-serif text-lg font-medium text-primary mb-3 line-clamp-2">{title}</h3>
    <p className="text-sm text-foreground/80 mb-4 flex-grow line-clamp-3">{excerpt}</p>
    <div className="text-accent text-sm font-medium flex items-center group">
      Ler artigo completo
      <svg className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1">
        {/* Ícone de seta */}
      </svg>
    </div>
  </div>
</article>
```

#### Card de Categoria

```jsx
<div className="card h-full p-6 flex flex-col items-center text-center border border-transparent hover:border-primary/30 transition-all duration-300">
  <div className="bg-primary/10 p-4 rounded-full mb-5 transform transition-transform group-hover:scale-110 group-hover:bg-primary/15 duration-300 text-primary">
    {icon}
  </div>
  <h3 className="font-serif text-lg mb-3 text-primary group-hover:text-primary/90">{title}</h3>
  <p className="text-sm text-foreground/75 leading-relaxed">{description}</p>
</div>
```

#### Card de Material

```jsx
<div className="card h-full flex flex-col group">
  <div className="relative h-48 w-full overflow-hidden">
    <Image 
      src={image} 
      alt={title} 
      fill 
      className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
    />
    <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-3 py-1.5 rounded-md shadow-sm">
      {type}
    </div>
  </div>
  <div className="p-6 flex-grow flex flex-col">
    <h3 className="font-serif text-lg font-medium text-primary mb-5 group-hover:text-primary/90 transition-colors">
      {title}
    </h3>
    <Link
      href={downloadUrl}
      className="mt-auto bg-primary text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow transform hover:-translate-y-0.5"
    >
      <DownloadIcon className="h-4 w-4 mr-2" />
      Download Gratuito
    </Link>
  </div>
</div>
```

## Elementos de Interface

### Cabeçalho (Header)

O cabeçalho do site utiliza um design moderno com transição suave quando o usuário rola a página. 

```jsx
<header
  className={`sticky top-0 z-50 transition-all duration-300 ${
    isScrolled ? "bg-white/98 shadow-md backdrop-blur-md border-b border-[#F4EED9]/50" : "bg-transparent"
  }`}
>
  <div className="container-custom">
    <div className="flex items-center justify-between py-3">
      {/* Logo */}
      <Link href="/" className="flex items-center group">
        <Image
          src="/logos/navbar-logo-florescer-humano-horizontal.png"
          alt="Florescer Humano"
          width={180}
          height={60}
          className="h-12 w-auto transition-transform duration-300 group-hover:opacity-90"
        />
      </Link>
      
      {/* Navegação Desktop */}
      <nav className="hidden md:flex items-center space-x-8">
        <Link 
          href="/categorias" 
          className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
        >
          Categorias
        </Link>
        {/* Outros links... */}
      </nav>
      
      {/* Botões e Menu Mobile */}
      <div className="flex items-center space-x-5">
        <button 
          className="p-2 text-foreground hover:text-primary transition-all rounded-full hover:bg-muted" 
          aria-label="Buscar"
        >
          <SearchIcon className="h-5 w-5" />
        </button>
        {/* Botão do site principal e toggle menu mobile */}
      </div>
    </div>
  </div>
  
  {/* Menu Mobile */}
  {isMenuOpen && (
    <div className="md:hidden bg-white border-t border-areia/30 animate-in slide-in-from-top duration-300">
      {/* Links do menu mobile */}
    </div>
  )}
</header>
```

### Rodapé (Footer)

```jsx
<footer className="flex flex-col bg-marrom text-white py-16 border-t border-[#735B43]/40">
  <div className="container-custom">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {/* Logo e descrição */}
      <div className="space-y-5 flex flex-col items-center md:items-start">
        {/* Logo e texto */}
      </div>
      
      {/* Links rápidos */}
      <div>
        <h4 className="text-white font-serif text-lg mb-5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-terracota">
          Links Rápidos
        </h4>
        <ul className="space-y-3">
          {/* Links com pontos decorativos */}
        </ul>
      </div>
      
      {/* Contato */}
      <div>
        {/* Informações de contato com ícones */}
      </div>
      
      {/* Redes sociais e newsletter */}
      <div>
        {/* Ícones de redes sociais */}
        {/* Formulário newsletter */}
      </div>
    </div>
  </div>
  
  {/* Copyright */}
  <div className="border-t border-[#735B43]/30 mt-10">
    <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
      <p>© {new Date().getFullYear()} Florescer Humano. Todos os direitos reservados.</p>
      <div className="mt-2 md:mt-0 flex gap-4">
        {/* Links para termos */}
      </div>
    </div>
  </div>
</footer>
```

### Hero Section

```jsx
<section className="relative h-[70vh] min-h-[500px] flex items-center">
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/hero-baner-florescer-humano.png"
      alt="Florescer Humano"
      fill
      priority
      className="object-cover"
    />
    <div className="absolute inset-0 bg-marrom/40"></div>
  </div>
  <div className="container-custom relative z-10 text-center">
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">Florescer Humano</h1>
    <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
      Explorando o potencial humano através da psicologia humanista.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
      <Link href="/blog" className="btn-primary">
        Inscreva-se no Blog
      </Link>
      <Link href="/materiais/gratuitos" className="btn-secondary bg-white">
        Materiais Gratuitos
      </Link>
    </div>
  </div>
</section>
```

### Formulário de Newsletter

```jsx
<div className="bg-white p-8 rounded-xl shadow-sm max-w-xl mx-auto border border-primary/10">
  <form>
    <div className="flex flex-col sm:flex-row gap-4">
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        className="flex-grow px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-transparent transition-all"
        required
      />
      <button 
        type="submit" 
        className="btn-primary py-3 px-6 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
      >
        Assinar
      </button>
    </div>
    <p className="text-xs text-center mt-4 text-foreground/60">
      Ao assinar, você concorda com nossa{" "}
      <Link href="/politica-de-privacidade" className="text-accent hover:underline">
        Política de Privacidade
      </Link>.
    </p>
  </form>
</div>
```

## Padrões de Layout

### Grid de Cards

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards aqui */}
</div>
```

### Layout de duas colunas

```jsx
<div className="grid md:grid-cols-2 gap-10 items-center">
  <div>
    {/* Conteúdo da primeira coluna */}
  </div>
  <div>
    {/* Conteúdo da segunda coluna */}
  </div>
</div>
```

### Seções de página

```jsx
<section className="section-padding bg-secondary/50">
  <div className="container-custom">
    <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
      <h2 className="text-2xl md:text-3xl font-serif text-primary relative title-underline">Título da Seção</h2>
      <Link href="/mais" className="flex items-center text-accent hover:underline group">
        Ver todos <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </div>
    
    {/* Conteúdo da seção */}
  </div>
</section>
```

## Responsividade

O design é responsivo e utiliza breakpoints do Tailwind CSS:

- **sm**: 640px e acima
- **md**: 768px e acima
- **lg**: 1024px e acima
- **xl**: 1280px e acima
- **2xl**: 1536px e acima

### Adaptações Principais

**Mobile (< 768px)**
- Menu de navegação colapsado em menu hambúrguer
- Cards em coluna única
- Espaçamentos reduzidos (3rem para seções)
- Tipografia reduzida

**Tablet (768px - 1023px)**
- Cards em duas colunas
- Menu de navegação expandido
- Espaçamentos médios

**Desktop (1024px+)**
- Cards em três colunas
- Espaçamentos completos (5rem para seções)
- Layout expansivo
- Experiência de hover rica

## Animações e Transições

### Transições Padrão

```css
/* Duração e timing function padrão */
transition-all duration-300 ease-in-out

/* Para links e botões */
transition-colors /* quando apenas a cor muda */

/* Para elementos que mudam de tamanho */
transition-transform duration-500
```

### Hover Effects

```css
/* Transição para cima em hover */
transform hover:-translate-y-1 /* ou valores menores como -0.25rem ou -0.5rem */

/* Escala em hover */
transform hover:scale-105 /* ou 1.1 para efeito mais dramático */
```

### Entrada de Elementos de Menu

```css
/* Menu mobile entra deslizando de cima */
animate-in slide-in-from-top duration-300
```

### Efeitos em Imagens

```css
/* Zoom suave em imagens */
.img-hover-zoom {
  overflow: hidden;
}

.img-hover-zoom img {
  transition: transform 0.5s ease;
}

.img-hover-zoom:hover img {
  transform: scale(1.05);
}
```

## Uso das Imagens

### Aspect Ratios

- **Cards de artigos e materiais**: 16:9 ou proporção retangular para thumbnails
- **Imagens de hero**: Panorâmica cobrindo largura total
- **Imagens de perfil/autor**: Quadradas ou circulares

### Tratamento Visual

- **Overlay sobre imagens de hero**: `bg-marrom/40` para melhor contraste com texto
- **Imagens em cards**: `object-cover` para preencher área designada sem distorção
- **Bordas arredondadas**: `rounded-lg` para todas as imagens independentes

### Sombras em Imagens

```css
box-shadow: 0 4px 10px -2px rgba(88, 59, 31, 0.08), 0 2px 4px -1px rgba(88, 59, 31, 0.04);
```

## Implementação Técnica

### Configuração Tailwind

```js
// tailwind.config.ts
import { fontFamily } from "tailwindcss/defaultTheme"

const config = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        // ...outras cores
        "verde-terra": "#5B8C5A",
        "verde-claro": "#8AB87A", 
        "verde-escuro": "#3A5A38",
        marrom: "#583B1F",
        terracota: "#B67A63",
        "coral-claro": "#F8D0C3",
        areia: "#F4EED9",
        "areia-clara": "#F9F7E8",
        bege: "#FCF0E6",
        "bege-claro": "#FDF6F0",
      },
      fontFamily: {
        sans: ["var(--font-kaisei)", ...fontFamily.sans],
        serif: ["var(--font-playfair)", ...fontFamily.serif],
      },
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
```

### Definição de Variáveis CSS

```css
:root {
  --background: 48 45% 97%;  /* tom areia-clara aprimorado */
  --foreground: 30 45% 23%;  /* marrom escuro */
  --primary: 120 23% 45%;    /* verde-terra */
  --primary-foreground: 0 0% 100%;  /* branco */
  --secondary: 42 55% 92%;  /* tom areia acolhedor */
  --secondary-foreground: 30 45% 23%;  /* marrom */
  --muted: 28 45% 96%;      /* bege natural */
  --muted-foreground: 30 30% 36%;  /* marrom médio */
  --accent: 17 43% 55%;     /* terracota vibrante */
  --accent-foreground: 0 0% 100%;  /* branco */
  --border: 30 32% 86%;     /* borda harmônica */
  --input: 30 32% 96%;      /* input com fundo integrado */
  --ring: 120 30% 45%;      /* verde-terra para foco */
  --radius: 0.5rem;         /* arredondamento padrão */
}
```

### Carregamento de Fontes

```tsx
// layout.tsx
import { Kaisei_Opti, Playfair_Display } from "next/font/google"

// Usando Kaisei Opti para o corpo do texto
const kaisei = Kaisei_Opti({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kaisei",
})

// Usando Playfair Display para títulos
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
})

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${kaisei.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}>
        {/* ... */}
      </body>
    </html>
  )
}
```

---

Este design system é aplicado consistentemente em todo o blog Florescer Humano para criar uma experiência de usuário coesa, profissional e alinhada com os valores da marca. Use este guia como referência para implementar uma interface similar, ajustando conforme necessário para seu próprio projeto.
