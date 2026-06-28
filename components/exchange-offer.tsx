import Image from "next/image"
import { ArrowRight, RefreshCw } from "lucide-react"

export function ExchangeOffer() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="relative flex items-center gap-6 overflow-hidden rounded-2xl border border-primary/40 bg-surface px-6 py-8 sm:px-10">
        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary/15">
          <RefreshCw className="h-7 w-7 text-primary" />
        </span>

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-primary">Exchange Offer</h3>
          <p className="mt-1 text-sm text-surface-foreground/80">
            Get the best value for your old device.
            <br className="hidden sm:block" />
            Upgrade to the latest technology.
          </p>
        </div>

        <button
          type="button"
          aria-label="View exchange offer"
          className="z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border transition-colors hover:bg-secondary"
        >
          <ArrowRight className="h-5 w-5 text-foreground" />
        </button>

        <Image
          src="/exchange-phones.png"
          alt=""
          width={420}
          height={260}
          className="pointer-events-none absolute bottom-0 right-0 hidden h-full w-auto object-contain opacity-90 lg:block"
        />
      </div>
    </section>
  )
}
