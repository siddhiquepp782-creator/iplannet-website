export type Product = {
  id: string
  name: string
  subtitle: string
  specs: string
  price: string
  oldPrice: string
  image: string
  badge?: { label: string; tone: "deal" | "new" }
  highlights: string[]
  gallery: string[]
}

export const featuredProducts: Product[] = [
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3",
    subtitle: "13-inch | 8GB | 256GB SSD",
    specs: "13-inch | 8GB | 256GB SSD",
    price: "₹99,900",
    oldPrice: "₹114,900",
    image: "/products/macbook-air-m3.png",
    badge: { label: "DEAL", tone: "deal" },
    highlights: [
      "Apple M3 chip",
      "8GB Unified Memory",
      "256GB SSD Storage",
      "13.6-inch Liquid Retina display",
      "Up to 18 hours battery life",
    ],
    gallery: [
      "/products/macbook-air-m3.png",
      "/products/macbook-pro-m3.png",
      "/categories/apple.png",
      "/categories/windows.png",
    ],
  },
  {
    id: "macbook-pro-m3",
    name: "MacBook Pro M3",
    subtitle: "14-inch | 16GB | 512GB SSD",
    specs: "14-inch | 16GB | 512GB SSD",
    price: "₹1,79,900",
    oldPrice: "₹1,99,900",
    image: "/products/macbook-pro-m3.png",
    highlights: [
      "Apple M3 Pro chip",
      "16GB Unified Memory",
      "512GB SSD Storage",
      "14-inch Liquid Retina XDR display",
      "Up to 18 hours battery life",
    ],
    gallery: [
      "/products/macbook-pro-m3.png",
      "/products/macbook-air-m3.png",
      "/categories/apple.png",
      "/categories/windows.png",
    ],
  },
  {
    id: "dell-xps-13",
    name: "Dell XPS 13",
    subtitle: "Intel i7 | 16GB | 512GB SSD",
    specs: "Intel i7 | 16GB | 512GB SSD",
    price: "₹1,19,900",
    oldPrice: "₹1,34,900",
    image: "/products/dell-xps-13.png",
    badge: { label: "NEW", tone: "new" },
    highlights: [
      "13th Gen Intel Core i7",
      "16GB LPDDR5 Memory",
      "512GB SSD Storage",
      "13.4-inch FHD+ InfinityEdge display",
      "Windows 11 Home",
    ],
    gallery: [
      "/products/dell-xps-13.png",
      "/categories/windows.png",
      "/products/macbook-pro-m3.png",
      "/products/asus-rog-g16.png",
    ],
  },
  {
    id: "asus-rog-g16",
    name: "ASUS ROG Strix G16",
    subtitle: "i7 | 16GB | 1TB SSD | RTX 4060",
    specs: "i7 | 16GB | 1TB SSD | RTX 4060",
    price: "₹1,39,900",
    oldPrice: "₹1,59,900",
    image: "/products/asus-rog-g16.png",
    highlights: [
      "13th Gen Intel Core i7",
      "16GB DDR5 Memory",
      "1TB SSD Storage",
      "NVIDIA GeForce RTX 4060",
      "16-inch 165Hz display",
    ],
    gallery: [
      "/products/asus-rog-g16.png",
      "/categories/gaming.png",
      "/categories/windows.png",
      "/products/dell-xps-13.png",
    ],
  },
  {
    id: "iphone-15-pro",
    name: "iPhone 15 Pro",
    subtitle: "128GB | Natural Titanium",
    specs: "128GB | Natural Titanium",
    price: "₹1,34,900",
    oldPrice: "₹1,49,900",
    image: "/products/iphone-15-pro.png",
    highlights: [
      "A17 Pro chip",
      "128GB Storage",
      "Pro camera system",
      "6.1-inch Super Retina XDR display",
      "Titanium design",
    ],
    gallery: [
      "/products/iphone-15-pro.png",
      "/exchange-phones.png",
      "/products/macbook-air-m3.png",
      "/products/macbook-pro-m3.png",
    ],
  },
]

export type Category = {
  title: string
  description: string
  image: string
  comingSoon?: boolean
  icon: "apple" | "windows" | "gaming" | "phone"
}

export const categories: Category[] = [
  {
    title: "Apple",
    description: "MacBook, iMac, Mac mini & more",
    image: "/categories/apple.png",
    icon: "apple",
  },
  {
    title: "Windows",
    description: "Dell, HP, Lenovo, Asus & more",
    image: "/categories/windows.png",
    icon: "windows",
  },
  {
    title: "Gaming",
    description: "High Performance Gaming Laptops",
    image: "/categories/gaming.png",
    icon: "gaming",
  },
  {
    title: "Phones",
    description: "Coming Soon",
    image: "",
    comingSoon: true,
    icon: "phone",
  },
]
