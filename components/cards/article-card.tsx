import Image from "next/image"
import Link from "next/link"

interface ArticleCardProps {
  image: string
  category: string
  date: string
  title: string
  excerpt: string
  slug: string
}

export default function ArticleCard({ image, category, date, title, excerpt, slug }: ArticleCardProps) {
  return (
    <Link href={slug} className="block">
      <article className="card h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
          <div className="absolute top-3 left-3 bg-[#5B8C5A] text-white text-xs px-2 py-1 rounded">{category}</div>
        </div>
        <div className="p-5 flex-grow flex flex-col">
          <div className="text-xs text-[#583B1F]/70 mb-2">{date}</div>
          <h3 className="font-serif text-lg text-[#5B8C5A] mb-2">{title}</h3>
          <p className="text-sm text-[#583B1F]/80 mb-4 flex-grow">{excerpt}</p>
          <div className="text-[#B67A63] text-sm font-medium flex items-center">
            Ler artigo completo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}
