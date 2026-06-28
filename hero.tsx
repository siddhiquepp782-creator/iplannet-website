"use client"

import Image from "next/image"
import { ArrowRight, BatteryCharging, Cpu, Zap } from "lucide-react"
import { cn } from "@/lib/utils"
import { featuredProducts } from "@/lib/data"

const specs = [
  { icon: "m3", title: "M3", sub: "Apple M3 chip" },
  { icon: Cpu, title: "8GB", sub: "Unified Memory" },
  { icon: Cpu, title: "256GB", sub: "SSD Storage" },
  { icon: BatteryCharging, title: "Up to 18 hrs", sub: "Battery Life" },
]

export function Hero({ onPreview }: { onPreview: () => void }) {
  const product = featuredProducts[0]

  return (
    <section className="relative overflow-hidden">
      {/* Blue ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[120%] w-2/3 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.35),transparent_60%)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:gap-6 lg:px-8 lg:py-16">
        {/* Left */}
        <div className="max-w-xl">
          <div className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Zap className="h-4 w-4 fill-primary" />
            DEAL OF THE DAY
          </div>

          <h1 className="mt-4 text-balance text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
            MacBook Air M3 13-inch
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Supercharged by M3 chip.
            <br />
            Built for Apple Intelligence.
          </p>

          {/* Specs */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            {specs.map((s) => (
              <div key={s.sub} className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-secondary/40">
                  {s.icon === "m3" ? (
                    <span className="text-[0.6rem] font-bold text-primary">
                      M3
                    </span>
                  ) : (
                    <s.icon className="h-4 w-4 text-foreground" />
                  )}
                </span>
                <span className="leading-tight">
                  <span className="block text-sm font-semibold text-foreground">
                    {s.title}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {s.sub}
                  </span>
                </span>
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-4xl font-bold text-primary">₹99,900</span>
            <span className="text-lg text-muted-foreground line-through">
              ₹114,900
            </span>
            <span className="rounded-md bg-warning px-2.5 py-1 text-xs font-bold text-warning-foreground">
              13% OFF
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onPreview}
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Shop Now
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={onPreview}
              className="rounded-xl border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              View Details
            </button>
          </div>

          {/* Carousel dots */}
          <div className="mt-8 flex items-center gap-2">
            {[0, 1, 2, 3, 4].map((i) => (
              <span
                key={i}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === 0 ? "w-7 bg-primary" : "w-2 bg-muted-foreground/40",
                )}
              />
            ))}
          </div>
        </div>

        {/* Right image */}
        <div className="relative">
          <Image
            src={product.image || "/placeholder.svg"}
            alt="MacBook Air M3 13-inch"
            width={900}
            height={640}
            priority
            className="h-auto w-full object-contain drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
