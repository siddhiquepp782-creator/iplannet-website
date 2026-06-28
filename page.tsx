"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { CategorySection } from "@/components/category-section"
import { FeaturedProducts } from "@/components/featured-products"
import { ExchangeOffer } from "@/components/exchange-offer"
import { SiteFooter } from "@/components/site-footer"
import { QuickPreview } from "@/components/quick-preview"
import { featuredProducts, type Product } from "@/lib/data"

export default function HomePage() {
  const [preview, setPreview] = useState<Product | null>(null)

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero onPreview={() => setPreview(featuredProducts[0])} />
        <TrustBar />
        <CategorySection />
        <FeaturedProducts onPreview={setPreview} />
        <ExchangeOffer />
      </main>
      <SiteFooter />

      <QuickPreview
        product={preview}
        open={preview !== null}
        onClose={() => setPreview(null)}
      />
    </div>
  )
}
