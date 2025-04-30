import Link from "next/link"
import { Book, Heart, GraduationCap, Palette, Stethoscope, CalendarDays, BookMarked, Grid } from "lucide-react"

interface CategoryCardProps {
  title: string
  icon: string
  slug: string
}

export default function CategoryCard({ title, icon, slug }: CategoryCardProps) {
  const getIcon = () => {
    const props = { className: "h-6 w-6" }

    switch (icon) {
      case "Book":
        return <Book {...props} />
      case "Heart":
        return <Heart {...props} />
      case "GraduationCap":
        return <GraduationCap {...props} />
      case "Palette":
        return <Palette {...props} />
      case "Stethoscope":
        return <Stethoscope {...props} />
      case "CalendarDays":
        return <CalendarDays {...props} />
      case "BookMarked":
        return <BookMarked {...props} />
      case "Grid":
        return <Grid {...props} />
      default:
        return <Book {...props} />
    }
  }

  return (
    <Link href={slug} className="block">
      <div className="card h-full p-6 flex flex-col items-center text-center hover:border-[#5B8C5A] hover:border">
        <div className="bg-[#5B8C5A]/10 p-4 rounded-full mb-4">{getIcon()}</div>
        <h3 className="font-serif text-lg">{title}</h3>
      </div>
    </Link>
  )
}
