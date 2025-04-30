"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Search } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 shadow-sm backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navbar-logo-florescer-humano-horizontal-ktmkf5sDfq5Zph6B8nlppm39QhtleB.png"
              alt="Florescer Humano"
              width={180}
              height={60}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/categorias" className="text-marrom hover:text-verde-terra transition-colors">
              Categorias
            </Link>
            <Link href="/artigos" className="text-marrom hover:text-verde-terra transition-colors">
              Artigos
            </Link>
            <Link href="/sobre" className="text-marrom hover:text-verde-terra transition-colors">
              Sobre
            </Link>
            <Link href="/contato" className="text-marrom hover:text-verde-terra transition-colors">
              Contato
            </Link>
            <Link href="/materiais" className="text-marrom hover:text-verde-terra transition-colors">
              Materiais
            </Link>
            <Link href="/midias" className="text-marrom hover:text-verde-terra transition-colors">
              Mídias
            </Link>
          </nav>

          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-marrom hover:text-verde-terra transition-colors" aria-label="Buscar">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/materiais/gratuitos" className="hidden md:block btn-primary">
              Materiais Gratuitos
            </Link>
            <button
              className="md:hidden p-2 text-marrom hover:text-verde-terra transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-marrom/10">
          <nav className="container-custom py-4 flex flex-col space-y-4">
            <Link
              href="/categorias"
              className="text-marrom hover:text-verde-terra transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
            </Link>
            <Link
              href="/artigos"
              className="text-marrom hover:text-verde-terra transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Artigos
            </Link>
            <Link
              href="/sobre"
              className="text-marrom hover:text-verde-terra transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className="text-marrom hover:text-verde-terra transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <Link
              href="/materiais"
              className="text-marrom hover:text-verde-terra transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Materiais
            </Link>
            <Link
              href="/midias"
              className="text-marrom hover:text-verde-terra transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Mídias
            </Link>
            <Link
              href="/materiais/gratuitos"
              className="btn-primary inline-block w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Materiais Gratuitos
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
