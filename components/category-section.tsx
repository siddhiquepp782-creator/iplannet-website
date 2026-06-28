import Image from "next/image"
import { ArrowRight, Apple, Gamepad2, Smartphone, AppWindow } from "lucide-react"
import { categories, type Category } from "@/lib/data"

const iconMap = {
  apple: Apple,
  windows: AppWindow,
  gaming: Gamepad2,
  phone: Smartphone,
}

function CategoryCard({ category }: { category: Category }) {
  const Icon = iconMap[category.icon]
  return (
    <div className="group relative flex h-52 flex-col justify-between overflow-hidden rounded-2xl bg-card p-5 text-card-foreground">
      <div className="relative z-10">
        <Icon className="h-7 w-7 text-card-foreground" />
        <h3 className="mt-3 text-lg font-semibold">{category.title}</h3>
        <p className="mt-1 max-w-[60%] text-xs text-card-foreground/60">
          {category.description}
        </p>
      </div>

      {category.image && (
        <Image
          src={category.image || "/placeholder.svg"}
          alt={category.title}
          width={220}
          height={160}
          className="pointer-events-none absolute bottom-4 right-0 h-32 w-auto object-contain"
        />
      )}

      <span className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-card-foreground/15 transition-colors group-hover:bg-card-foreground group-hover:text-card">
        <ArrowRight className="h-4 w-4" />
      </span>
    </div>
  )
}

export function CategorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-foreground">
        Shop by Category
      </h2>
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.title} category={category} />
        ))}
      </div>
    </section>
  )
}
