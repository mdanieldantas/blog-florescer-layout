import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

interface MaterialCardProps {
  image: string
  type: string
  title: string
  downloadUrl: string
}

export default function MaterialCard({ image, type, title, downloadUrl }: MaterialCardProps) {
  return (    <div className="card h-full flex flex-col group">
      <div className="relative h-48 w-full overflow-hidden">
        <Image 
          src={image || "/placeholder.svg"} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
        />
        <div className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-medium px-3 py-1.5 rounded-md shadow-sm">{type}</div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-serif text-lg font-medium text-primary mb-5 group-hover:text-primary/90 transition-colors">{title}</h3>
        <Link
          href={downloadUrl}
          className="mt-auto bg-primary text-white px-4 py-3 rounded-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-300 shadow-sm hover:shadow transform hover:-translate-y-0.5"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Gratuito
        </Link>
      </div>
    </div>
  )
}
