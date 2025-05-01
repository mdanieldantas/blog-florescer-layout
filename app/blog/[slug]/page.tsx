import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Tag, Facebook, Twitter, Linkedin, Mail } from "lucide-react"
import ArticleCard from "@/components/cards/article-card"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  // Aqui você buscaria os dados do artigo com base no slug
  // Para este exemplo, usaremos dados estáticos
  
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-bege py-4">
        <div className="container-custom">
          <div className="flex items-center text-sm">
            <Link href="/" className="hover:text-terracota">
              Início
            </Link>
            <span className="mx-2">/</span>
            <Link href="/blog" className="hover:text-terracota">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-marrom/70">A Abordagem Centrada na Pessoa</span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className="py-8 md:py-12 bg-bege">
        <div className="container-custom max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center text-terracota hover:underline mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Voltar para o blog
          </Link>
          
          <div className="bg-verde-terra text-white text-sm px-3 py-1 rounded inline-block mb-4">
            Teoria em Prática
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-old text-verde-terra mb-6">
            A Abordagem Centrada na Pessoa e suas aplicações contemporâneas
          </h1>
          
          <div className="flex flex-wrap items-center text-sm text-marrom/70 gap-4 md:gap-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>Por Maria Silva</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>12 de Março, 2023</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>8 min de leitura</span>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="container-custom max-w-4xl py-6">
        <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
          <Image
            src="/images/article-centered-approach.jpg"
            alt="A Abordagem Centrada na Pessoa"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Article Content */}
      <article className="py-8">
        <div className="container-custom max-w-3xl">
          <div className="prose prose-lg max-w-none">
            <p>
              A Abordagem Centrada na Pessoa (ACP), desenvolvida por Carl Rogers, é um dos pilares fundamentais da psicologia humanista. Embora tenha surgido inicialmente como uma abordagem terapêutica, seus princípios transcenderam o contexto clínico e hoje são aplicados em diversos campos, como educação, liderança organizacional, resolução de conflitos e desenvolvimento pessoal.
            </p>
            
            <h2>As Três Atitudes Facilitadoras</h2>
            
            <p>
              No cerne da ACP estão as três atitudes facilitadoras que Rogers considerava essenciais para o estabelecimento de relações humanas construtivas:
            </p>
            
            <ul>
              <li>
                <strong>Congruência (autenticidade):</strong> Ser genuíno, sem fachadas profissionais ou pessoais, apresentando-se como realmente é.
              </li>
              <li>
                <strong>Consideração positiva incondicional:</strong> Aceitar a pessoa integralmente, sem julgamentos ou condições, valorizando-a independentemente de seus comportamentos específicos.
              </li>
              <li>
                <strong>Compreensão empática:</strong> Entrar no mundo perceptual privado do outro, sentindo seus significados pessoais como se fossem próprios, sem perder a qualidade do "como se".
              </li>
            </ul>
            
            <p>
              Estas atitudes, quando presentes em qualquer relação humana, criam um clima psicológico que promove o crescimento, a autonomia e a realização do potencial da pessoa.
            </p>
            
            <h2>Aplicações Contemporâneas</h2>
            
            <h3>Na Educação</h3>
            
            <p>
              A aplicação dos princípios da ACP na educação resultou no que conhecemos como "educação centrada no estudante". Nessa abordagem, o professor atua mais como um facilitador da aprendizagem do que como uma autoridade que transmite conhecimento. O ambiente educacional é caracterizado por:
            </p>
            
            <ul>
              <li>Respeito pela capacidade do aluno de direcionar seu próprio aprendizado</li>
              <li>Valorização da experiência subjetiva e dos interesses individuais</li>
              <li>Criação de um clima de confiança e aceitação em sala de aula</li>
              <li>Avaliação participativa e autoavaliação</li>
            </ul>
            
            <p>
              Estudos têm demonstrado que ambientes educacionais centrados no estudante promovem maior engajamento, criatividade e aprendizagem significativa.
            </p>
            
            <h3>Nas Organizações</h3>
            
            <p>
              No contexto organizacional, a ACP tem influenciado práticas de liderança e gestão de pessoas. A "liderança centrada na pessoa" caracteriza-se por:
            </p>
            
            <ul>
              <li>Escuta ativa e valorização das contribuições de cada colaborador</li>
              <li>Criação de ambientes psicologicamente seguros, onde as pessoas podem expressar-se autenticamente</li>
              <li>Desenvolvimento da autonomia e responsabilidade dos colaboradores</li>
              <li>Feedback construtivo e não-julgador</li>
            </ul>
            
            <p>
              Organizações que adotam esses princípios tendem a apresentar maior engajamento dos colaboradores, criatividade, inovação e bem-estar no trabalho.
            </p>
            
            <h3>Na Resolução de Conflitos</h3>
            
            <p>
              Os princípios da ACP têm sido aplicados com sucesso em processos de mediação e resolução de conflitos. Quando mediadores adotam as atitudes facilitadoras, criam um espaço onde:
            </p>
            
            <ul>
              <li>As partes sentem-se ouvidas e compreendidas</li>
              <li>Há redução da defensividade e maior abertura para entender a perspectiva do outro</li>
              <li>As pessoas podem expressar suas necessidades autenticamente</li>
              <li>Soluções criativas e mutuamente satisfatórias podem emergir</li>
            </ul>
            
            <h2>Desafios e Considerações</h2>
            
            <p>
              Apesar de sua ampla aplicabilidade, a implementação dos princípios da ACP enfrenta desafios em contextos contemporâneos:
            </p>
            
            <ul>
              <li>Em ambientes altamente hierárquicos e burocráticos, pode haver resistência à autonomia e horizontalidade propostas pela abordagem</li>
              <li>A pressão por resultados imediatos pode dificultar processos que respeitam o tempo e o ritmo individual</li>
              <li>A autenticidade pode ser mal interpretada como falta de profissionalismo em alguns contextos</li>
              <li>A consideração positiva incondicional pode ser confundida com permissividade ou falta de limites</li>
            </ul>
            
            <h2>Conclusão</h2>
            
            <p>
              A Abordagem Centrada na Pessoa continua sendo uma perspectiva valiosa e relevante para os desafios contemporâneos. Seus princípios fundamentais - respeito pela autonomia, valorização da experiência subjetiva e confiança na tendência atualizante - oferecem um contraponto humanizador em um mundo cada vez mais tecnológico e impessoal.
            </p>
            
            <p>
              Ao aplicarmos as atitudes facilitadoras em diferentes contextos, contribuímos para a criação de relações mais autênticas, ambientes mais saudáveis e para o desenvolvimento do potencial humano em sua plenitude.
            </p>
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-marrom/10">
            <div className="flex items-center flex-wrap gap-2">
              <Tag className="h-4 w-4 text-marrom/70" />
              <Link href="/tags/carl-rogers" className="bg-bege text-sm px-3 py-1 rounded-full hover:bg-verde-terra/10">
                Carl Rogers
              </Link>
              <Link href="/tags/psicologia-humanista" className="bg-bege text-sm px-3 py-1 rounded-full hover:bg-verde-terra/10">
                Psicologia Humanista
              </Link>
              <Link href="/tags/abordagem-centrada" className="bg-bege text-sm px-3 py-1 rounded-full hover:bg-verde-terra/10">
                Abordagem Centrada
              </Link>
              <Link href="/tags/terapia" className="bg-bege text-sm px-3 py-1 rounded-full hover:bg-verde-terra/10">
                Terapia
              </Link>
            </div>
          </div>

          {/* Share */}
          <div className="mt-8">
            <h4 className="text-lg font-medium mb-4">Compartilhe este artigo</h4>
            <div className="flex space-x-4">
              <a href="#" className="bg-[#3b5998] text-white p-2 rounded-full hover:opacity-90" aria-label="Compartilhar no Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#1da1f2] text-white p-2 rounded-full hover:opacity-90" aria-label="Compartilhar no Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#0077b5] text-white p-2 rounded-full hover:opacity-90" aria-label="Compartilhar no LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-[#ea4335] text-white p-2 rounded-full hover:opacity-90" aria-label="Compartilhar por Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Author */}
          <div className="mt-10 p-6 bg-bege rounded-xl">
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
              <div className="relative h-20 w-20 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/author.jpg"
                  alt="Maria Silva"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-old text-xl mb-2">Maria Silva</h4>
                <p className="text-sm mb-3">
                  Psicóloga humanista, professora universitária e pesquisadora na área de psicologia humanista. Autora de diversos artigos e livros sobre a abordagem centrada na pessoa.
                </p>
                <div className="flex space-x-3">
                  <a href="#" className="text-terracota hover:underline">
                    Ver todos os artigos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-12 bg-bege">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-old text-verde-terra mb-8">
            Artigos Relacionados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ArticleCard
              image="/images/article-maslow.jpg"
              category="Teoria em Prática"
              date="10 de Março, 2023"
              title="Além da Pirâmide: Revisitando a Hierarquia de Necessidades de Maslow"
              excerpt="Uma análise contemporânea da teoria de Maslow e suas aplicações na vida moderna."
              slug="/blog/maslow-hierarquia-necessidades"
            />
            <ArticleCard
              image="/images/article-gestalt.jpg"
              category="Humanismo Clínico"
              date="5 de Março, 2023"
              title="Awareness na Gestalt-terapia: O Poder do Aqui e Agora"
              excerpt="Como a consciência plena do momento presente pode transformar nossa experiência de vida."
              slug="/blog/gestalt-awareness"
            />
            <ArticleCard
              image="/images/article-existential.jpg"
              category="Psicologia Humanista"
              date="28 de Fevereiro, 2023"
              title="Liberdade e Responsabilidade: O Dilema Existencial Humano"
              excerpt="Uma reflexão sobre como lidar com a liberdade de escolha e a responsabilidade que ela traz."
              slug="/blog/liberdade-responsabilidade"
            />
          </div>
        </div>
      </section>

      {/* Comments - Placeholder */}
      <section className="py-12">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-old text-verde-terra mb-8">
            Comentários (3)
          </h2>

          <div className="space-y-6">
            {/* Comment Form */}
            <div className="p-6 border border-marrom/10 rounded-xl">
              <h4 className="font-medium mb-4">Deixe seu comentário</h4>
              <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm mb-1">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded border border-marrom/20 focus:outline-none focus:ring-1 focus:ring-verde-terra"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded border border-marrom/20 focus:outline-none focus:ring-1 focus:ring-verde-terra"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="comment" className="block text-sm mb-1">
                    Comentário
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-4 py-2 rounded border border-marrom/20 focus:outline-none focus:ring-1 focus:ring-verde-terra"
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Enviar Comentário
                </button>
              </form>
            </div>
            
            {/* Existing Comments */}
            <div className="space-y-6">
              {/* Comment 1 */}
              <div className="p-6 bg-bege rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Avatar do usuário"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h5 className="font-medium">João Pereira</h5>
                      <span className="text-xs text-marrom/70">15 de Março, 2023</span>
                    </div>
                    <p className="text-sm">
                      Excelente artigo! A abordagem centrada na pessoa sempre me fascinou, especialmente sua aplicação em ambientes educacionais. Acho que poderíamos ver muito mais desses princípios nas escolas de hoje.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Comment 2 */}
              <div className="p-6 bg-bege rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Avatar do usuário"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h5 className="font-medium">Ana Luiza</h5>
                      <span className="text-xs text-marrom/70">13 de Março, 2023</span>
                    </div>
                    <p className="text-sm">
                      Como psicóloga em formação, tenho estudado bastante a ACP e suas aplicações. Concordo com os desafios mencionados, especialmente em ambientes muito hierárquicos. Alguém aqui tem experiência em aplicar esses princípios em ambientes corporativos tradicionais?
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Comment 3 */}
              <div className="p-6 bg-bege rounded-xl">
                <div className="flex items-start gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder-user.jpg"
                      alt="Avatar do usuário"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h5 className="font-medium">Carlos Mendes</h5>
                      <span className="text-xs text-marrom/70">12 de Março, 2023</span>
                    </div>
                    <p className="text-sm">
                      Gostaria de saber se a autora recomenda algum livro específico para quem quer se aprofundar na abordagem de Rogers. Já li "Tornar-se Pessoa", mas busco algo mais recente que aborde aplicações contemporâneas como mencionado no artigo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
