"use client"

import { ArrowRight } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { featuredProducts, type Product } from "@/lib/data"

export function FeaturedProducts({
  onPreview,
}: {
  onPreview: (product: Product) => void
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">
          Featured Products
        </h2>
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
        >
          View All Products
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {featuredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onPreview={onPreview}
          />
        ))}
      </div>
    </section>
  )
}
