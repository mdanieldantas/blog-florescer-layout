import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (    <footer className="flex flex-col bg-marrom text-white py-16 border-t border-[#735B43]/40">
      {/* Main Footer */}
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div className="space-y-5 flex flex-col items-center md:items-start">
            <Link href="/" className="inline-block transition-opacity hover:opacity-90">
              <Image
                src="/logos/Logo-Florescer-humano-branca-vertical.png"
                alt="Florescer Humano"
                width={130}
                height={130}
                className="h-auto w-auto max-w-[130px]"
              />
            </Link>
            <p className="text-white/80 text-sm md:text-left text-center leading-relaxed">
              Explorando o potencial humano através da psicologia humanista e do autoconhecimento.
            </p>
          </div>          {/* Links Rápidos */}
          <div>
            <h4 className="text-white font-serif text-lg mb-5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-terracota">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/75 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-terracota/60 rounded-full group-hover:bg-terracota transition-colors"></span>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/75 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-terracota/60 rounded-full group-hover:bg-terracota transition-colors"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-white/75 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-terracota/60 rounded-full group-hover:bg-terracota transition-colors"></span>
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/materiais" className="text-white/75 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-terracota/60 rounded-full group-hover:bg-terracota transition-colors"></span>
                  Materiais
                </Link>
              </li>
                             <li>
                <Link href="/contato" className="text-white/75 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-terracota/60 rounded-full group-hover:bg-terracota transition-colors"></span>
                  Contato
                </Link>
              </li>
              <li>
                <Link href="/privacidade" className="text-white/75 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="h-1 w-1 bg-terracota/60 rounded-full group-hover:bg-terracota transition-colors"></span>
                  Políticas de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-serif text-lg mb-5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-terracota">Contato</h4>
            <ul className="space-y-3">
              <li className="text-white/75 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-terracota" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:contato@florescerhumano.com.br" className="hover:text-white transition-colors">
                  xxxxxxxxxxx@xxxxxx
                </a>
              </li>
              <li className="text-white/75 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-terracota" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+551199999999" className="hover:text-white transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="text-white/75 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-terracota" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Fortaleza, CE - Brasil</span>
              </li>
            </ul>
          </div>          {/* Redes Sociais */}
          <div>
            <h4 className="text-white font-serif text-lg mb-5 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-8 after:bg-terracota">Redes Sociais</h4>
            <div className="flex space-x-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracota/20 p-2.5 rounded-full hover:bg-terracota hover:text-white transition-all transform hover:-translate-y-1 duration-300"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"                className="bg-terracota/20 p-2.5 rounded-full hover:bg-terracota hover:text-white transition-all transform hover:-translate-y-1 duration-300"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracota/20 p-2.5 rounded-full hover:bg-terracota hover:text-white transition-all transform hover:-translate-y-1 duration-300"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-terracota/20 p-2.5 rounded-full hover:bg-terracota hover:text-white transition-all transform hover:-translate-y-1 duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <h5 className="text-white font-medium text-sm mb-3">Receba novidades em seu e-mail</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-4 py-2.5 text-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary/30 w-full bg-white/90"
                  aria-label="E-mail para newsletter"
                />
                <button
                  type="submit"
                  className="bg-primary px-5 py-2.5 rounded-r-md hover:bg-primary/90 transition-colors text-white font-medium"
                >
                  Enviar
                </button>
              </form>
              <p className="text-white/60 text-xs mt-2">
                Nunca compartilhamos seus dados. Você pode cancelar a qualquer momento.
              </p>
            </div>
          </div>
        </div>
      </div>      {/* Copyright */}
      <div className="border-t border-[#735B43]/30 mt-10">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Florescer Humano. Todos os direitos reservados.</p>
          <div className="mt-2 md:mt-0 flex gap-4">
            <Link href="/termos" className="hover:text-white/80 transition-colors">
              Termos de Uso
            </Link>
            <Link href="/cookies" className="hover:text-white/80 transition-colors">
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
