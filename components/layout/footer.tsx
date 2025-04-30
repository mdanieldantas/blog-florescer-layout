import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Youtube, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex flex-col bg-[#583B1F] text-[#F8F5F0] py-12 border-t border-[#735B43]">
      {/* Main Footer */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-florescer-humano-X1mHzslfZa3Xj9VQzCwfixQwrCzvHs.png"
                alt="Florescer Humano"
                width={150}
                height={150}
                className="h-16 w-auto"
              />
            </Link>
            <p className="text-[#F8F5F0]/80 text-sm">
              Explorando o potencial humano através da psicologia humanista, arte, educação e filosofia.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-[#F8F5F0] font-serif text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#F8F5F0]/80 hover:text-[#F8F5F0] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#F8F5F0]/80 hover:text-[#F8F5F0] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-[#F8F5F0]/80 hover:text-[#F8F5F0] transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link href="/materiais" className="text-[#F8F5F0]/80 hover:text-[#F8F5F0] transition-colors">
                  Materiais
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-[#F8F5F0]/80 hover:text-[#F8F5F0] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-[#F8F5F0] font-serif text-lg mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="text-[#F8F5F0]/80">
                <a href="mailto:contato@florescerhumano.com.br" className="hover:text-[#F8F5F0] transition-colors">
                  contato@florescerhumano.com.br
                </a>
              </li>
              <li className="text-[#F8F5F0]/80">
                <a href="tel:+551199999999" className="hover:text-[#F8F5F0] transition-colors">
                  (11) 99999-9999
                </a>
              </li>
              <li className="text-[#F8F5F0]/80">São Paulo, SP</li>
              <li className="text-[#F8F5F0]/80">Brasil</li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h4 className="text-[#F8F5F0] font-serif text-lg mb-4">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F8F5F0]/10 p-2 rounded-full hover:bg-[#F8F5F0]/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F8F5F0]/10 p-2 rounded-full hover:bg-[#F8F5F0]/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F8F5F0]/10 p-2 rounded-full hover:bg-[#F8F5F0]/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F8F5F0]/10 p-2 rounded-full hover:bg-[#F8F5F0]/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <h5 className="text-[#F8F5F0] text-sm mb-2">Inscreva-se na nossa newsletter</h5>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="px-3 py-2 text-gray-800 rounded-l-md focus:outline-none w-full"
                />
                <button
                  type="submit"
                  className="bg-[#735B43] px-4 py-2 rounded-r-md hover:bg-[#8B6D56] transition-colors text-[#F8F5F0]"
                >
                  OK
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#735B43] mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-[#F8F5F0]/60 text-sm max-w-7xl">
          <p>© {new Date().getFullYear()} Florescer Humano. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
