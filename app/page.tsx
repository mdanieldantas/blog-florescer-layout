import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ArticleCard from "@/components/cards/article-card"
import CategoryCard from "@/components/cards/category-card"
import MaterialCard from "@/components/cards/material-card"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-baner-florescer-humano-mubyDN1lPcnck2qtWVMqdydG5vkBF0.png"
            alt="Florescer Humano"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#583B1F]/40"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-4">Florescer Humano</h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Explorando o potencial humano através da psicologia humanista, arte, educação e filosofia.
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

      {/* Artigos em Destaque */}
      <section className="section-padding bg-[#EAE6E1]">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#5B8C5A]">Artigos em Destaque</h2>
            <Link href="/blog" className="flex items-center text-[#B67A63] hover:underline">
              Ver todos <ArrowRight className="h-4 w-4 ml-1" />
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
          </div>
        </div>
      </section>

      {/* Explore por Categoria */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#5B8C5A]">Explore por Categoria</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar no site..."
                className="px-4 py-2 pr-10 border border-[#583B1F]/20 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#5B8C5A]"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <ArrowRight className="h-4 w-4 text-[#583B1F]/60" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <CategoryCard title="Teoria em Prática" icon="Book" slug="/categorias/teoria-pratica" />
            <CategoryCard title="Psicologia Humanista" icon="Heart" slug="/categorias/psicologia-humanista" />
            <CategoryCard title="Humanismo na Educação" icon="GraduationCap" slug="/categorias/humanismo-educacao" />
            <CategoryCard title="Arte & Expressão" icon="Palette" slug="/categorias/arte-expressao" />
            <CategoryCard title="Humanismo Clínico" icon="Stethoscope" slug="/categorias/humanismo-clinico" />
            <CategoryCard title="Humanismo Cotidiano" icon="CalendarDays" slug="/categorias/humanismo-cotidiano" />
            <CategoryCard title="Humanismo e Filosofia" icon="BookMarked" slug="/categorias/humanismo-filosofia" />
            <CategoryCard title="Todas as Categorias" icon="Grid" slug="/categorias" />
          </div>
        </div>
      </section>

      {/* Materiais Recentes */}
      <section className="section-padding bg-[#EAE6E1]">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#5B8C5A]">Materiais Recentes</h2>
            <Link href="/materiais" className="flex items-center text-[#B67A63] hover:underline">
              Ver todos <ArrowRight className="h-4 w-4 ml-1" />
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
      </section>

      {/* Sobre o Blog */}
      <section className="section-padding bg-[#5B8C5A] text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-serif text-white mb-4">Sobre o Florescer Humano</h2>
              <p className="mb-4 text-white">
                O blog "Florescer Humano" nasceu da vontade de disseminar os princípios da psicologia humanista e
                contribuir para o desenvolvimento do potencial humano em todas as suas dimensões.
              </p>
              <p className="mb-6 text-white">
                Acreditamos no valor intrínseco de cada pessoa, na importância da experiência subjetiva e no poder
                transformador do autoconhecimento. Nosso compromisso é oferecer conteúdo de qualidade que inspire,
                informe e apoie sua jornada de crescimento pessoal.
              </p>
              <Link href="/sobre" className="btn-secondary border-white text-white hover:bg-white hover:text-[#5B8C5A]">
                Conheça nossa história
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="relative h-[400px] w-full max-w-md">
                <div className="absolute top-0 left-0 h-[200px] w-[200px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Florescer Humano - Sobre"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute top-10 right-0 h-[180px] w-[180px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=180&width=180"
                    alt="Florescer Humano - Sobre"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-10 h-[220px] w-[220px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=220&width=220"
                    alt="Florescer Humano - Sobre"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-[#EAE6E1]">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-[#5B8C5A] mb-4">Assine Nossa Newsletter</h2>
            <p className="max-w-2xl mx-auto">
              Receba novos artigos, recursos gratuitos e informações sobre eventos diretamente em seu e-mail.
            </p>
          </div>

          <form className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-4 py-3 rounded-lg border border-[#583B1F]/20 focus:outline-none focus:ring-1 focus:ring-[#5B8C5A]"
                required
              />
              <button type="submit" className="btn-primary py-3 px-6 whitespace-nowrap">
                Assinar
              </button>
            </div>
            <p className="text-xs text-center mt-3 text-[#583B1F]/70">
              Ao assinar, você concorda com nossa{" "}
              <Link href="/politica-de-privacidade" className="underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </form>
        </div>
      </section>
    </>
  )
}
