import Image from "next/image"
import Link from "next/link"

export default function Sobre() {
  return (
    <>
      {/* Header */}
      <section className="bg-bege py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-old text-verde-terra mb-4">
              Sobre o Florescer Humano
            </h1>
            <p className="text-lg mb-8">Conheça nossa história, missão e os valores que guiam nosso trabalho.</p>
          </div>
        </div>
      </section>

      {/* Missão e Visão */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-old text-verde-terra mb-6">Nossa Missão</h2>
              <div className="space-y-4">
                <p>
                  A missão do blog "Florescer Humano" reside em cultivar a compreensão e a vivência dos princípios do
                  humanismo em todas as esferas da existência, oferecendo um jardim de reflexão, aprendizado e encontro
                  para todos os corações.
                </p>
                <p>
                  Promovemos o diálogo e a exploração de diversas perspectivas sobre a experiência humana, incluindo o
                  intercâmbio de conhecimentos com outras abordagens psicológicas.
                </p>
                <p>
                  Buscamos valorizar a inteireza do potencial humano, a beleza da experiência íntima, a autonomia de
                  cada indivíduo, a dignidade inerente a cada ser e o incessante movimento de crescimento pessoal.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <Image src="/images/mission.jpg" alt="Nossa Missão" fill className="object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative h-[400px] rounded-xl overflow-hidden md:order-1 order-2">
              <Image src="/images/vision.jpg" alt="Nossa Visão" fill className="object-cover" />
            </div>
            <div className="md:order-2 order-1">
              <h2 className="text-2xl md:text-3xl font-old text-verde-terra mb-6">Nossa Visão</h2>
              <div className="space-y-4">
                <p>
                  A visão é transformar o blog "Florescer Humano" em uma referência essencial no universo online para
                  aqueles que anseiam por aprofundar a compreensão e a prática do humanismo, tornando-se um jardim
                  fecundo de ideias e inspirações.
                </p>
                <p>
                  Ambicionamos criar uma comunidade engajada de leitores e colaboradores que se inspirem nos valores
                  humanistas para cultivar vidas mais plenas e edificar sociedades mais justas e humanas, onde os afetos
                  e as flores vicejem em abundância.
                </p>
                <p>
                  Desejamos que o blog seja um lumiar do ser, iluminando as sementes em terras áridas e os solos férteis
                  de lágrimas e sonhos, guiando o caminho para o pleno florescer humano em suas diversas dimensões, como
                  um jardim cuidado com esmero e atenção.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-12 md:py-16 bg-bege">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-old text-verde-terra mb-4">Nossos Valores</h2>
            <p>Os princípios que fundamentam nossa abordagem e guiam nossas ações.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card p-6">
              <div className="bg-verde-terra/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-old text-xl mb-3">Valorização da Pessoa</h3>
              <p className="text-sm">
                Acreditamos no valor intrínseco, na dignidade fundamental e no potencial ilimitado de cada ser humano,
                reconhecendo a beleza singular de cada flor em um vasto jardim.
              </p>
            </div>

            <div className="card p-6">
              <div className="bg-verde-terra/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="font-old text-xl mb-3">Respeito pela Experiência Subjetiva</h3>
              <p className="text-sm">
                Reconhecemos a importância da perspectiva individual, dos sentimentos profundos, das emoções vívidas e
                dos significados pessoais, como as inúmeras cores e fragrâncias que enriquecem um jardim.
              </p>
            </div>

            <div className="card p-6">
              <div className="bg-verde-terra/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌻</span>
              </div>
              <h3 className="font-old text-xl mb-3">Ênfase no Crescimento</h3>
              <p className="text-sm">
                Valorizamos a tendência natural ao desenvolvimento pessoal, à busca por sentido na existência e à
                concretização do potencial humano, como o germinar, o desabrochar e o frutificar das plantas em seu
                ciclo.
              </p>
            </div>

            <div className="card p-6">
              <div className="bg-verde-terra/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="font-old text-xl mb-3">Cultivo e Consciência</h3>
              <p className="text-sm">
                Prezamos pela consciência daquilo que se planta e se colhe ao longo da vida, reconhecendo a importância
                de cultivar os afetos, a resiliência diante dos desafios e um ativismo em prol dos jardins da alma.
              </p>
            </div>

            <div className="card p-6">
              <div className="bg-verde-terra/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="font-old text-xl mb-3">Autenticidade</h3>
              <p className="text-sm">
                Buscamos criar conteúdo genuíno, fundamentado em informação de qualidade e em opiniões expressas com
                clareza e respeito, como a beleza pura e sem adornos de um jardim em sua essência.
              </p>
            </div>

            <div className="card p-6">
              <div className="bg-verde-terra/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-old text-xl mb-3">Diálogo e Abertura</h3>
              <p className="text-sm">
                Promovemos um espaço de conversa respeitosa e acolhedora para as mais diversas perspectivas e níveis de
                conhecimento, como um jardim que acolhe uma variedade de espécies.
              </p>
            </div>

            <div className="card p-6">
              <div className="bg-verde-terra/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-old text-xl mb-3">Responsabilidade Social</h3>
              <p className="text-sm">
                Acreditamos no papel do humanismo na construção de comunidades mais engajadas, cooperativas e voltadas
                para o bem-estar coletivo, um ativismo dos jardins em defesa das flores, dos amores e das dores da
                sociedade.
              </p>
            </div>

            <div className="card p-6">
              <div className="bg-verde-terra/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="font-old text-xl mb-3">Ética e Integridade</h3>
              <p className="text-sm">
                Comprometemo-nos com a produção de conteúdo ético, respeitoso e embasado em fontes confiáveis, cuidando
                deste jardim com responsabilidade e zelo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-old text-verde-terra mb-4">Nossa Equipe</h2>
            <p>Conheça as pessoas que dedicam seu tempo e conhecimento para fazer o Florescer Humano acontecer.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/images/team-1.jpg" alt="Maria Silva" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-old text-xl mb-1">Maria Silva</h3>
                <p className="text-sm text-terracota mb-3">Fundadora e Editora-Chefe</p>
                <p className="text-sm mb-4">
                  Psicóloga humanista, professora universitária e pesquisadora apaixonada pela abordagem centrada na
                  pessoa.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-marrom hover:text-terracota">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-marrom hover:text-terracota">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/images/team-2.jpg" alt="João Santos" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-old text-xl mb-1">João Santos</h3>
                <p className="text-sm text-terracota mb-3">Editor e Pesquisador</p>
                <p className="text-sm mb-4">
                  Filósofo e psicoterapeuta existencial-humanista com interesse especial na intersecção entre filosofia
                  e psicologia.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-marrom hover:text-terracota">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-marrom hover:text-terracota">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image src="/images/team-3.jpg" alt="Ana Oliveira" fill className="object-cover" />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-old text-xl mb-1">Ana Oliveira</h3>
                <p className="text-sm text-terracota mb-3">Coordenadora de Conteúdo</p>
                <p className="text-sm mb-4">
                  Educadora e arte-terapeuta com experiência em projetos sociais e desenvolvimento humano através das
                  artes.
                </p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-marrom hover:text-terracota">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a href="#" className="text-marrom hover:text-terracota">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-verde-terra text-white">
        <div className="container-custom max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-old text-white mb-4">Junte-se à Nossa Comunidade</h2>
          <p className="mb-8 max-w-2xl mx-auto">
            Faça parte do Florescer Humano e contribua para a disseminação dos princípios humanistas. Juntos, podemos
            cultivar um mundo mais consciente e compassivo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contato"
              className="btn-secondary border-white text-white hover:bg-white hover:text-verde-terra"
            >
              Entre em Contato
            </Link>
            <Link
              href="/blog"
              className="bg-white text-verde-terra px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
            >
              Explore Nosso Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
