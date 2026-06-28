"use client"

import { useState } from "react"
import Image from "next/image"
import { Eye, Heart } from "lucide-react"
import type { Product } from "@/lib/data"
import { cn } from "@/lib/utils"

export function ProductCard({
  product,
  onPreview,
}: {
  product: Product
  onPreview: (product: Product) => void
}) {
  const [wished, setWished] = useState(false)

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-border/60 bg-card text-card-foreground transition-shadow hover:shadow-xl hover:shadow-primary/10">
      {/* Image area */}
      <div className="relative aspect-[4/3] bg-white">
        {product.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 z-10 rounded-md px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-primary-foreground",
              product.badge.tone === "deal" ? "bg-primary" : "bg-primary",
            )}
          >
            {product.badge.label}
          </span>
        )}
        <button
          type="button"
          aria-label="Add to wishlist"
          onClick={() => setWished((v) => !v)}
          className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white text-neutral-500 shadow-sm transition-colors hover:text-primary"
        >
          <Heart className={cn("h-4 w-4", wished && "fill-primary text-primary")} />
        </button>
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          width={400}
          height={300}
          className="h-full w-full object-contain p-5"
        />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-base font-semibold">{product.name}</h3>
        <p className="mt-1 text-xs text-card-foreground/60">
          {product.subtitle}
        </p>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-lg font-bold text-primary">
            {product.price}
          </span>
          <span className="text-sm text-card-foreground/45 line-through">
            {product.oldPrice}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onPreview(product)}
          className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-border/70 py-2.5 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary/10"
        >
          <Eye className="h-4 w-4" />
          Quick Preview
        </button>
      </div>
    </div>
  )
}
