"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/animations";
import { StaggerChildren, StaggerItem } from "@/components/animations";
import { cn } from "@/lib/utils";

interface Product {
  id: string;
  name: string;
  tagline: string;
  image: string;
  category: "airborne" | "landborne";
  href: string;
  featured?: boolean;
}

const products: Product[] = [
  {
    id: "p150-max",
    name: "P150 Max",
    tagline: "60L Capacity | 18 m/s Speed",
    image: "/images/products/p150-max/card.webp",
    category: "airborne",
    href: "/products/p150-max",
    featured: true,
  },
  {
    id: "p150",
    name: "P150",
    tagline: "50L Capacity | 15 m/s Speed",
    image: "/images/products/p150/card.webp",
    category: "airborne",
    href: "/products/p150",
  },
  {
    id: "p100-pro",
    name: "P100 Pro",
    tagline: "40L Capacity | 4D Radar",
    image: "/images/products/p100-pro/card.webp",
    category: "airborne",
    href: "/products/p100-pro",
    featured: true,
  },
  {
    id: "r150",
    name: "R150",
    tagline: "Ground Sprayer",
    image: "/images/products/r150/card-new.webp",
    category: "landborne",
    href: "/products/r150-2022",
  },
  {
    id: "ifbot-x3",
    name: "IFBOT X3",
    tagline: "Autonomous Robot",
    image: "/images/products/ifbot-x3/card.webp",
    category: "landborne",
    href: "/products/ifbot-x3",
  },
];

export function ProductShowcase() {
  return (
    <section className="section bg-background-secondary">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
              Our Products
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              Agricultural Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of smart agricultural drones and ground equipment
              designed to optimize your farming operations.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          <Link
            href="/airborne"
            className="px-6 py-3 rounded-full bg-navy text-white font-medium hover:bg-navy-light transition-colors"
          >
            Airborne
          </Link>
          <Link
            href="/landborne"
            className="px-6 py-3 rounded-full bg-white text-navy font-medium hover:bg-gray-100 transition-colors border border-gray-200"
          >
            Landborne
          </Link>
        </div>

        {/* Product Grid */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* View All Link */}
        <ScrollReveal className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-brand-red font-semibold hover:gap-3 transition-all"
          >
            View All Products
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={product.href}
      className={cn(
        "group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300",
        product.featured && "md:col-span-1 lg:row-span-1"
      )}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {product.featured && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-brand-red text-white text-xs font-medium rounded-full">
            Featured
          </span>
        )}
        <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-navy text-xs font-medium rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy group-hover:text-brand-red transition-colors mb-2">
          XAG {product.name}
        </h3>
        <p className="text-gray-600 text-sm">{product.tagline}</p>

        <div className="mt-4 flex items-center gap-2 text-brand-red font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
          Learn More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
