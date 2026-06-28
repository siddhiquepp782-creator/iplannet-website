import { Headphones, ShieldCheck, Truck, Award } from "lucide-react"

const items = [
  {
    icon: ShieldCheck,
    title: "100% Original",
    sub: "Sourced from Authorized Distributors",
  },
  { icon: Award, title: "Best Price", sub: "Competitive Pricing Everyday" },
  { icon: Truck, title: "Fast Delivery", sub: "Quick & Safe Delivery" },
  { icon: Headphones, title: "Support 24/7", sub: "We are always here to help" },
]

export function TrustBar() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 rounded-2xl border border-border/60 bg-surface px-6 py-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary/60">
              <item.icon className="h-5 w-5 text-primary" />
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-surface-foreground">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
