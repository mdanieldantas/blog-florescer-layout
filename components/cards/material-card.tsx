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
  return (
    <div className="card h-full flex flex-col">
      <div className="relative h-48 w-full">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-3 left-3 bg-[#B67A63] text-white text-xs px-2 py-1 rounded">{type}</div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="font-serif text-lg text-[#5B8C5A] mb-4">{title}</h3>
        <Link
          href={downloadUrl}
          className="mt-auto bg-[#5B8C5A] text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-[#3A5A38] transition-colors duration-300"
        >
          <Download className="h-4 w-4 mr-2" />
          Download Gratuito
        </Link>
      </div>
    </div>
  )
}
