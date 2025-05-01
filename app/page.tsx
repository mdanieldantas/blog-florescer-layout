import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ArticleCard from "@/components/cards/article-card"
import CategoryCard from "@/components/cards/category-card"
import MaterialCard from "@/components/cards/material-card"

export default function Home() {
  return (
    <>      {/* Hero Section - Aprimorado */}
      <section className="relative h-[75vh] min-h-[550px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-baner-florescer-humano-mubyDN1lPcnck2qtWVMqdydG5vkBF0.png"
            alt="Florescer Humano"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-marrom/50 to-marrom/70"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-white mb-6 font-medium text-shadow-sm">
            Florescer Humano
          </h1>
          <p className="text-lg md:text-xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed">
            Explorando o potencial humano através da psicologia humanista e autoconhecimento.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Link href="/blog" className="btn-primary py-3 px-6 shadow-lg hover:shadow-xl transition-all">
              Leia Nossos Artigos
            </Link>
            <Link href="/materiais/gratuitos" className="btn-secondary bg-white/95 backdrop-blur-sm py-3 px-6 border-white hover:bg-white">
              Materiais Gratuitos
            </Link>
          </div>
        </div>
      </section>      {/* Artigos em Destaque */}
      <section className="section-padding bg-secondary/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-2xl md:text-3xl font-serif text-primary relative title-underline">Artigos em Destaque</h2>
            <Link href="/blog" className="flex items-center text-accent hover:underline group">
              Ver todos <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ArticleCard
              image="/placeholder.svg?height=300&width=400"
              category="Teoria em Prática"
              date="12 de Março, 2023"
              title="A Abordagem Centrada na Pessoa e suas aplicações contemporâneas"
              excerpt="Explorando como os princípios de Carl Rogers podem ser aplicados em diversos contextos além da psicoterapia."
              slug="/blog/abordagem-centrada-pessoa-aplicacoes"
            />
            <ArticleCard
              image="/placeholder.svg?height=300&width=400"
              category="Humanismo Clínico"
              date="26 de Fevereiro, 2023"
              title="Focusing: Compreendendo o corpo como a sabedoria do corpo"
              excerpt="Como a técnica desenvolvida por Eugene Gendlin pode ajudar no processo de autoconhecimento e tomada de decisão."
              slug="/blog/focusing-sabedoria-corpo"
            />
            <ArticleCard
              image="/placeholder.svg?height=300&width=400"
              category="Cinema e Humanismo"
              date="10 de Fevereiro, 2023"
              title="Cinema e Humanismo: Análise de 'Sociedade dos Poetas Mortos'"
              excerpt="Uma leitura humanista do clássico filme e suas lições sobre educação, liberdade e autenticidade."
              slug="/blog/cinema-humanismo-sociedade-poetas-mortos"
            />
          </div>        </div>      </section>      {/* Explore por Categoria */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-5">
            <h2 className="text-2xl md:text-3xl font-serif text-gradient relative title-underline">Explore por Categoria</h2>
            <div className="relative w-full max-w-xs">
              <input
                type="text"
                placeholder="Buscar no site..."
                className="w-full px-4 py-3 pr-12 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-transparent transition-all bg-white/80 backdrop-blur-sm"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 hover:bg-primary/10 p-1.5 rounded-full transition-colors">
                <ArrowRight className="h-4 w-4 text-primary/70" />
              </button>
            </div>
          </div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <CategoryCard 
              title="Autoconhecimento e Desenvolvimento Pessoal" 
              icon="User" 
              slug="/categorias/autoconhecimento" 
              description="Explore ferramentas e reflexões para sua jornada de crescimento interior." 
            />
            <CategoryCard 
              title="Bem-Estar Emocional e Saúde Mental" 
              icon="HeartPulse" 
              slug="/categorias/bem-estar" 
              description="Conteúdos sobre como lidar com emoções, estresse, ansiedade e cultivar a saúde mental." 
            />
            <CategoryCard 
              title="Florescer na Vida" 
              icon="Flower2" 
              slug="/categorias/florescer" 
              description="Espaço para inspiração, histórias, poemas e reflexões sobre a busca por sentido e autenticidade." 
            />
            <CategoryCard 
              title="Psicologia Humanista e Abordagens Relacionadas" 
              icon="BookHeart" 
              slug="/categorias/psicologia-humanista" 
              description="Aprofunde-se nos conceitos e práticas da Psicologia Humanista, ACP, Focalização e Mindfulness." 
            />
            <CategoryCard 
              title="Relacionamentos e Conexões Humanas" 
              icon="Users" 
              slug="/categorias/relacionamentos" 
              description="Reflexões sobre a importância e a dinâmica das relações interpessoais." 
            />
          </div>
        </div>
      </section>      {/* Materiais Recentes */}
      <section className="section-padding bg-areia-clara">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
            <h2 className="text-2xl md:text-3xl font-serif text-primary relative title-underline-accent">Materiais Recentes</h2>
            <Link href="/materiais" className="flex items-center text-accent hover:underline group">
              Ver todos <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <MaterialCard
              image="/placeholder.svg?height=300&width=400"
              type="E-book"
              title="Guia Prático da Escuta Ativa"
              downloadUrl="/materiais/guia-pratico-escuta-ativa"
            />
            <MaterialCard
              image="/placeholder.svg?height=300&width=400"
              type="Kit Digital"
              title="Cartas para Reflexão Humanista"
              downloadUrl="/materiais/cartas-reflexao-humanista"
            />
            <MaterialCard
              image="/placeholder.svg?height=300&width=400"
              type="Áudio"
              title="Meditação Guiada: Encontrando sua Full Sense"
              downloadUrl="/materiais/meditacao-guiada-full-sense"
            />
          </div>
        </div>
      </section>      {/* Sobre o Blog */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        {/* Background decorativo */}
        <div className="absolute right-0 top-0 h-full w-1/3 bg-verde-escuro opacity-20 transform -skew-x-12"></div>
        <div className="absolute left-10 bottom-10 w-32 h-32 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/4 w-24 h-24 rounded-full bg-white/5 blur-2xl"></div>
        
        <div className="container-custom relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-white mb-6 relative">
                <span className="relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-20 after:h-1 after:bg-white/80">
                  Sobre o Florescer Humano
                </span>
              </h2>
              <p className="mb-5 text-white/90 leading-relaxed">
                O blog "Florescer Humano" nasceu da vontade de disseminar os princípios da psicologia humanista e
                contribuir para o desenvolvimento do potencial humano em todas as suas dimensões.
              </p>
              <p className="mb-8 text-white/90 leading-relaxed">
                Acreditamos no valor intrínseco de cada pessoa, na importância da experiência subjetiva e no poder
                transformador do autoconhecimento. Nosso compromisso é oferecer conteúdo de qualidade que inspire,
                informe e apoie sua jornada de crescimento pessoal.
              </p>
              <Link href="/sobre" className="btn-secondary border-white text-white hover:bg-white hover:text-primary transition-all duration-300 shadow-md hover:shadow-lg">
                Conheça nossa história
              </Link>
            </div>            <div className="flex justify-center">
              <div className="relative h-[400px] w-full max-w-md">
                <div className="absolute top-0 left-0 h-[200px] w-[200px] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 img-hover-zoom">
                  <Image
                    src="/images/about-2.jpg"
                    alt="Florescer Humano - Reflexão"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-10 right-0 h-[180px] w-[180px] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 img-hover-zoom">
                  <Image
                    src="/images/author.jpg"
                    alt="Florescer Humano - Autor"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-10 h-[220px] w-[220px] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-500 img-hover-zoom">
                  <Image
                    src="/images/about-3.jpg"
                    alt="Florescer Humano - Natureza"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      {/* Newsletter */}
      <section className="section-padding bg-bege-claro">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary mb-4">Assine Nossa Newsletter</h2>
            <p className="max-w-2xl mx-auto text-foreground/80 text-lg">
              Receba novos artigos, recursos gratuitos e informações sobre eventos diretamente em seu e-mail.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm max-w-xl mx-auto border border-primary/10">
            <form>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="flex-grow px-4 py-3 rounded-lg border border-primary/20 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-transparent transition-all"
                  required
                />
                <button type="submit" className="btn-primary py-3 px-6 whitespace-nowrap shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  Assinar
                </button>
              </div>
              <p className="text-xs text-center mt-4 text-foreground/60">
                Ao assinar, você concorda com nossa{" "}
                <Link href="/politica-de-privacidade" className="text-accent hover:underline">
                  Política de Privacidade
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
