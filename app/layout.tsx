import type React from "react"
import type { Metadata } from "next"
import { Kaisei_Opti, Playfair_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

// Usando Kaisei Opti para o corpo do texto
const kaisei = Kaisei_Opti({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-kaisei",
})

// Usando Playfair Display como substituto para Old Roman
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "Florescer Humano | Psicologia Humanista e Desenvolvimento Pessoal",
  description:
    "Um espaço dedicado à psicologia humanista, desenvolvimento pessoal e autoconhecimento através de artigos, recursos e ferramentas para o seu crescimento.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${kaisei.variable} ${playfair.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
