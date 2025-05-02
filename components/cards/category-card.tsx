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
    <Link href={slug} className="block group">
      <div className="card h-full p-6 flex flex-col items-center text-center border border-transparent hover:border-primary/30 transition-all duration-300">
        <div className="bg-primary/10 p-4 rounded-full mb-5 transform transition-transform group-hover:scale-110 group-hover:bg-primary/15 duration-300 text-primary">
          {getIcon()}
        </div>
        <h3 className="font-serif text-lg mb-3 text-primary group-hover:text-primary/90">{title}</h3>
        <p className="text-sm text-foreground/75 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
