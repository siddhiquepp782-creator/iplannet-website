import { cn } from "@/lib/utils"

export function BrandLogo({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-col leading-none", className)}>
      <span className="font-semibold tracking-tight text-foreground">
        <span className="text-primary">i</span>Plannet
      </span>
      <span className="mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.18em] text-muted-foreground">
        Apple Experts
      </span>
    </div>
  )
}
