"use client"

import { useState } from "react"
import { Heart, Menu, Phone, Search, ShoppingBag, X } from "lucide-react"
import { BrandLogo } from "@/components/brand-logo"
import { cn } from "@/lib/utils"

const navItems = [
  "Home",
  "Products",
  "Categories",
  "Offers",
  "About Us",
  "Contact Us",
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-40 border-b border-border/60 bg-background">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-5 sm:px-6 lg:gap-8 lg:px-8">
        <a href="#" className="shrink-0 text-2xl">
          <BrandLogo />
        </a>

        {/* Search */}
        <div className="relative hidden flex-1 md:block">
          <input
            type="search"
            placeholder="Search for products..."
            aria-label="Search for products"
            className="h-12 w-full rounded-full border border-border bg-secondary/60 pl-5 pr-14 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
          />
          <button
            type="button"
            aria-label="Search"
            className="absolute right-1.5 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>

        {/* Contact */}
        <div className="hidden items-center gap-3 lg:flex">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-border">
            <Phone className="h-4 w-4 text-foreground" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold text-foreground">
              +91 9747 882 280
            </p>
            <p className="text-xs font-medium text-primary">Chat on WhatsApp</p>
          </div>
        </div>

        {/* Actions */}
        <div className="ml-auto flex items-center gap-2 md:ml-0 lg:gap-4">
          <button
            type="button"
            aria-label="Wishlist"
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <Heart className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[0.65rem] font-semibold text-primary-foreground">
              2
            </span>
          </button>
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile search */}
      <div className="px-4 pb-4 sm:px-6 md:hidden">
        <div className="relative">
          <input
            type="search"
            placeholder="Search for products..."
            aria-label="Search for products"
            className="h-11 w-full rounded-full border border-border bg-secondary/60 pl-5 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none"
          />
          <button
            type="button"
            aria-label="Search"
            className="absolute right-1.5 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <Search className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Primary nav */}
      <nav className="border-t border-border/60">
        <ul
          className={cn(
            "mx-auto max-w-7xl flex-col gap-1 px-4 py-2 sm:px-6 lg:px-8",
            "hidden md:flex md:flex-row md:items-center md:gap-8 md:py-0",
            open && "flex",
          )}
        >
          {navItems.map((item, i) => (
            <li key={item}>
              <a
                href="#"
                className={cn(
                  "relative block py-3 text-sm font-medium transition-colors md:py-4",
                  i === 0
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item}
                {i === 0 && (
                  <span className="absolute bottom-0 left-0 hidden h-0.5 w-full bg-primary md:block" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
