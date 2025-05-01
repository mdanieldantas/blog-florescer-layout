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
    <Link href={slug} className="block">      <article className="card h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={image || "/placeholder.svg"} 
            alt={title} 
            fill 
            className="object-cover transition-transform duration-500 ease-in-out hover:scale-105" 
          />
          <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-md shadow-sm">{category}</div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="text-xs text-muted-foreground mb-2">{date}</div>
          <h3 className="font-serif text-lg font-medium text-primary mb-3 line-clamp-2">{title}</h3>
          <p className="text-sm text-foreground/80 mb-4 flex-grow line-clamp-3">{excerpt}</p>
          <div className="text-accent text-sm font-medium flex items-center group">
            Ler artigo completo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
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
