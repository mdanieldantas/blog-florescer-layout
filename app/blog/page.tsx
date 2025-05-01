import Link from "next/link"
import { Search } from "lucide-react"
import ArticleCard from "@/components/cards/article-card"

export default function BlogPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-bege py-12 md:py-20">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif text-verde-terra mb-4">Blog Florescer Humano</h1>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Artigos, reflexões e conteúdos sobre psicologia humanista, desenvolvimento pessoal e autoconhecimento.
          </p>
          <div className="max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Buscar no blog..."
              className="w-full px-4 py-3 pr-10 rounded-lg border border-marrom/20 focus:outline-none focus:ring-1 focus:ring-verde-terra"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-marrom/60" />
            </button>
          </div>
        </div>
      </section>

      {/* Artigos em Destaque */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-verde-terra">Artigos em Destaque</h2>
            <div className="flex space-x-2">
              <button className="px-3 py-1 text-sm border border-verde-terra text-verde-terra rounded-full hover:bg-verde-terra hover:text-white transition-colors">
                Todos
              </button>
              <button className="px-3 py-1 text-sm border border-marrom/20 text-marrom/70 rounded-full hover:border-verde-terra hover:text-verde-terra transition-colors">
                Recentes
              </button>
              <button className="px-3 py-1 text-sm border border-marrom/20 text-marrom/70 rounded-full hover:border-verde-terra hover:text-verde-terra transition-colors">
                Populares
              </button>
            </div>
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
            <ArticleCard
              image="/placeholder.svg?height=300&width=400"
              category="Psicologia Humanista"
              date="5 de Fevereiro, 2023"
              title="Maslow e a Hierarquia das Necessidades: Uma Revisão Contemporânea"
              excerpt="Como a teoria de Maslow continua relevante e pode ser aplicada nos dias de hoje para promover o bem-estar."
              slug="/blog/maslow-hierarquia-necessidades"
            />
            <ArticleCard
              image="/placeholder.svg?height=300&width=400"
              category="Humanismo na Educação"
              date="28 de Janeiro, 2023"
              title="Educação Humanista: Princípios e Práticas para o Século XXI"
              excerpt="Como implementar uma abordagem centrada no estudante que promova autonomia e desenvolvimento integral."
              slug="/blog/educacao-humanista-principios-praticas"
            />
            <ArticleCard
              image="/placeholder.svg?height=300&width=400"
              category="Arte & Expressão"
              date="15 de Janeiro, 2023"
              title="A Arte como Caminho para o Autoconhecimento"
              excerpt="Explorando como diferentes formas de expressão artística podem facilitar o processo de autodescobrimento."
              slug="/blog/arte-caminho-autoconhecimento"
            />
          </div>

          {/* Paginação */}
          <div className="flex justify-center mt-12">
            <nav className="flex items-center space-x-2">
              <a
                href="#"
                className="px-3 py-1 border border-marrom/20 rounded hover:border-verde-terra hover:text-verde-terra transition-colors"
              >
                Anterior
              </a>
              <a href="#" className="px-3 py-1 bg-verde-terra text-white rounded">
                1
              </a>
              <a
                href="#"
                className="px-3 py-1 border border-marrom/20 rounded hover:border-verde-terra hover:text-verde-terra transition-colors"
              >
                2
              </a>
              <a
                href="#"
                className="px-3 py-1 border border-marrom/20 rounded hover:border-verde-terra hover:text-verde-terra transition-colors"
              >
                3
              </a>
              <span className="px-1">...</span>
              <a
                href="#"
                className="px-3 py-1 border border-marrom/20 rounded hover:border-verde-terra hover:text-verde-terra transition-colors"
              >
                10
              </a>
              <a
                href="#"
                className="px-3 py-1 border border-marrom/20 rounded hover:border-verde-terra hover:text-verde-terra transition-colors"
              >
                Próximo
              </a>
            </nav>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-bege">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif text-verde-terra mb-4">Assine Nossa Newsletter</h2>
            <p className="max-w-2xl mx-auto">
              Receba novos artigos, recursos e atualizações diretamente em seu e-mail.
            </p>
          </div>

          <form className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-grow px-4 py-3 rounded-lg border border-marrom/20 focus:outline-none focus:ring-1 focus:ring-verde-terra"
                required
              />
              <button type="submit" className="btn-primary py-3 px-6 whitespace-nowrap">
                Assinar
              </button>
            </div>
            <p className="text-xs text-center mt-3 text-marrom/70">
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
