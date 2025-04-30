import Image from "next/image"
import Link from "next/link"
import { Search, Filter } from "lucide-react"

export default function Materiais() {
  return (
    <>
      {/* Header */}
      <section className="bg-bege py-12 md:py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-old text-verde-terra mb-4">
              Materiais e Recursos
            </h1>
            <p className="text-lg mb-8">
              Ferramentas, guias e recursos para apoiar sua jornada de autoconhecimento e desenvolvimento pessoal.
            </p>
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Buscar materiais..."
                className="w-full px-4 py-3 pr-12 rounded-lg border border-marrom/20 focus:outline-none focus:ring-1 focus:ring-verde-terra"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <Search className="h-5 w-5 text-marrom/60" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Materiais em Destaque */}
      <section className="py-12">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-old text-verde-terra">
              Materiais em Destaque
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="card overflow-hidden">
              <div className="relative h-64 w-full">
                <Image
                  src="/images/featured-material.jpg"
                  alt="Material em Destaque"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-terracota text-white text-xs px-2 py-1 rounded">
                  Kit Digital
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-old text-2xl mb-3">
                  Kit de Autoconhecimento: Jornada Humanista
                </h3>
                <p className="text-marrom/80 mb-4">
                  Um conjunto completo de ferramentas para iniciar sua jornada de autoconhecimento baseada nos princípios da psicologia humanista. Inclui exercícios reflexivos, guias práticos e recursos audiovisuais.
                </p>
                <Link
                  href="/materiais/kit-autoconhecimento"
                  className="btn-primary inline-block"
                >
                  Download Gratuito
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="card flex flex-col sm:flex-row overflow-hidden">
                <div className="relative h-40 sm:h-auto sm:w-1/3">
                  <Image
                    src="/images/ebook-cover.jpg"
                    alt="E-book"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:w-2/3">
                  <div className="text-xs text-terracota font-medium mb-1">E-book</div>
                  <h3 className="font-old text-lg mb-2">
                    Guia Prático da Escuta Ativa
                  </h3>
                  <p className="text-sm text-marrom/80 mb-3">
                    Aprenda a arte da escuta empática e transforme suas relações pessoais e profissionais.
                  </p>
                  <Link
                    href="/materiais/guia-pratico-escuta-ativa"
                    className="text-terracota text-sm font-medium hover:underline"
                  >
                    Baixar Agora
                  </Link>
                </div>
              </div>

              <div className="card flex flex-col sm:flex-row overflow-hidden">
                <div className="relative h-40 sm:h-auto sm:w-1/3">
                  <Image
                    src="/images/worksheet.jpg"
                    alt="Cartas para Reflexão"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:w-2/3">
                  <div className="text-xs text-terracota font-medium mb-1">Kit Digital</div>
                  <h3 className="font-old text-lg mb-2">
                    Cartas para Reflexão Humanista
                  </h3>
                  <p className="text-sm text-marrom/80 mb-3">
                    52 cartas com perguntas reflexivas baseadas nos princípios humanistas para uso individual ou em grupo.
                  </p>
                  <Link
                    href="/materiais/cartas-reflexao-humanista"
                    className="text-terracota text-sm font-medium hover:underline"
                  >
                    Baixar Agora
                  </Link>
                </div>
              </div>

              <div className="card flex flex-col sm:flex-row overflow-hidden">
                <div className="relative h-40 sm:h-auto sm:w-1/3">
                  <Image
                    src="/images/food-mindfulness.jpg"
                    alt="Meditação Guiada"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 sm:w-2/3">
                  <div className="text-xs text-terracota font-medium mb-1">Áudio</div>
                  <h3 className="font-old text-lg mb-2">
                    Meditação Guiada: Encontrando sua Full Sense
                  </h3>
                  <p className="text-sm text-marrom/80 mb-3">
                    Uma prática de 15 minutos para conectar-se com sua experiência corporal e emocional no momento presente.
                  </p>
                  <Link
                    href="/materiais/meditacao-guiada-full-sense"
                    className="text-terracota text-sm font-medium hover:underline"
                  >
                    Baixar Agora
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros e Categorias */}
      <section className="py-8 bg-bege">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center">
              <Filter className="h-5 w-5 mr-2 text-marrom/70" />
              <span className="font-medium">Filtrar por:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="px-
### Projeto Blog Florescer Humano

Vou criar o projeto do blog "Florescer Humano\" seguindo as especificações fornecidas. Baseando-me nas imagens de referência e na documentação detalhada, desenvolverei um site moderno e responsivo que transmita a essência do humanismo e do desenvolvimento pessoal.

Primeiro, vamos criar os estilos globais e a configuração do Tailwind:
