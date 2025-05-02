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

  return (    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/98 shadow-md backdrop-blur-md border-b border-[#F4EED9]/50" : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/navbar-logo-florescer-humano-horizontal-ktmkf5sDfq5Zph6B8nlppm39QhtleB.png"
              alt="Florescer Humano"
              width={180}
              height={60}
              className="h-12 w-auto transition-transform duration-300 group-hover:opacity-90"
            />
          </Link>          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/categorias" 
              className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Categorias
            </Link>
            <Link 
              href="/blog" 
              className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Artigos
            </Link>
            <Link 
              href="/sobre" 
              className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Sobre
            </Link>
            <Link 
              href="/contato" 
              className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Contato
            </Link>            <Link 
              href="/materiais" 
              className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Materiais
            </Link>
            <Link 
              href="/midias" 
              className="text-foreground font-medium hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Mídias
            </Link>
          </nav>

          {/* Search and Mobile Menu Toggle */}
          <div className="flex items-center space-x-5">
            <button 
              className="p-2 text-foreground hover:text-primary transition-all rounded-full hover:bg-muted" 
              aria-label="Buscar"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link 
              href="/materiais/gratuitos" 
              className="hidden md:flex items-center gap-1.5 btn-primary border border-transparent hover:border-primary/20"
            >
              Site Psi Daniel Dantas
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
      </div>      {/* Mobile Menu - com animação e transições melhoradas */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-areia/30 animate-in slide-in-from-top duration-300">
          <nav className="container-custom py-6 flex flex-col space-y-3">
            <Link
              href="/categorias"
              className="text-foreground hover:text-primary font-medium transition-colors py-3 border-b border-muted flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Categorias
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="text-foreground hover:text-primary font-medium transition-colors py-3 border-b border-muted flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Artigos
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/sobre"
              className="text-foreground hover:text-primary font-medium transition-colors py-3 border-b border-muted flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/contato"
              className="text-foreground hover:text-primary font-medium transition-colors py-3 border-b border-muted flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/materiais"
              className="text-foreground hover:text-primary font-medium transition-colors py-3 border-b border-muted flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Materiais
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/midias"
              className="text-foreground hover:text-primary font-medium transition-colors py-3 border-b border-muted flex items-center justify-between"
              onClick={() => setIsMenuOpen(false)}
            >
              Mídias
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/materiais/gratuitos"
              className="btn-primary inline-block w-full text-center mt-4 py-3"
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
