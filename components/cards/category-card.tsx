import Link from "next/link"
import { 
  User, 
  Brain, 
  HeartPulse, 
  Flower2, 
  BookHeart, 
  Users 
} from "lucide-react"

interface CategoryCardProps {
  title: string
  icon: string
  slug: string
  description: string
}

export default function CategoryCard({ title, icon, slug, description }: CategoryCardProps) {
  const getIcon = () => {
    const props = { className: "h-6 w-6" }

    switch (icon) {
      case "User":
        return <User {...props} />
      case "Brain":
        return <Brain {...props} />
      case "HeartPulse":
        return <HeartPulse {...props} />
      case "Flower2":
        return <Flower2 {...props} />
      case "BookHeart":
        return <BookHeart {...props} />
      case "Users":
        return <Users {...props} />
      default:
        return <Brain {...props} />
    }
  }
    return (
    <Link href={slug} className="block">
      <div className="card h-full p-6 flex flex-col items-center text-center hover:border-[#5B8C5A] hover:border">
        <div className="bg-[#5B8C5A]/10 p-4 rounded-full mb-4">{getIcon()}</div>
        <h3 className="font-serif text-lg mb-2">{title}</h3>
        <p className="text-sm text-marrom/70">{description}</p>
      </div>
    </Link>
  )
}
