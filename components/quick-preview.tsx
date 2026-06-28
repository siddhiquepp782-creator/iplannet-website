"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Check, ShoppingCart, X } from "lucide-react"
import type { Product } from "@/lib/data"
import { cn } from "@/lib/utils"

export function QuickPreview({
  product,
  open,
  onClose,
}: {
  product: Product | null
  open: boolean
  onClose: () => void
}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (open) setActive(0)
  }, [open, product])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    if (open) {
      document.addEventListener("keydown", onKey)
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  if (!open || !product) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={`Quick preview: ${product.name}`}
    >
      <div
        className="absolute inset-0 bg-background/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-2xl">
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-lg font-semibold">Quick Preview</h2>
          <button
            type="button"
            aria-label="Close quick preview"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-black/5"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex gap-5 px-6 pt-5">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-secondary/10">
            <Image
              src={product.gallery[active] || product.image}
              alt={product.name}
              width={160}
              height={160}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold leading-tight">
              {product.name}
            </h3>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-xl font-bold text-primary">
                {product.price}
              </span>
              <span className="text-sm text-muted-foreground line-through">
                {product.oldPrice}
              </span>
            </div>
            <span className="mt-2 inline-block rounded-md bg-primary/15 px-2 py-0.5 text-xs font-semibold text-primary">
              13% OFF
            </span>
          </div>
        </div>

        <ul className="space-y-2 px-6 pt-4">
          {product.highlights.map((h) => (
            <li
              key={h}
              className="flex items-center gap-2 text-sm text-popover-foreground/80"
            >
              <Check className="h-4 w-4 shrink-0 text-primary" />
              {h}
            </li>
          ))}
        </ul>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 gap-3 px-6 pt-5">
          {product.gallery.map((src, i) => (
            <button
              key={src + i}
              type="button"
              aria-label={`View image ${i + 1}`}
              onClick={() => setActive(i)}
              className={cn(
                "flex aspect-square items-center justify-center overflow-hidden rounded-xl border bg-white p-1.5 transition-colors",
                active === i
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border/40 hover:border-primary/40",
              )}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt=""
                width={80}
                height={80}
                className="h-full w-full object-contain"
              />
            </button>
          ))}
        </div>

        <div className="space-y-3 p-6">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </button>
          <button
            type="button"
            className="w-full rounded-xl border border-border/60 py-3 text-sm font-semibold text-popover-foreground transition-colors hover:bg-black/5"
          >
            View Full Details
          </button>
        </div>
      </div>
    </div>
  )
}
