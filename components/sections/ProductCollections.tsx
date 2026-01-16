"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations";

interface Collection {
  id: string;
  titleKey: string;
  descriptionKey: string;
  image: string;
  href: string;
  products: string[];
}

const collections: Collection[] = [
  {
    id: "airborne",
    titleKey: "airborne",
    descriptionKey: "airborneDesc",
    image: "/images/products/p150-max/hero.webp",
    href: "/airborne",
    products: ["P150 Max", "P100 Pro"],
  },
  {
    id: "landborne",
    titleKey: "landborne",
    descriptionKey: "landborneDesc",
    image: "/images/products/r200/landborne-banner.webp",
    href: "/landborne",
    products: ["R150", "R200", "R100"],
  },
  {
    id: "autopilot",
    titleKey: "autopilot",
    descriptionKey: "autopilotDesc",
    image: "/images/products/apc2/hero-bg.webp",
    href: "/products/apc2",
    products: ["APC2"],
  },
];

interface FeaturedProduct {
  id: string;
  name: string;
  tagline: string;
  image: string;
  href: string;
  badgeKey?: string;
}

const featuredProducts: FeaturedProduct[] = [
  {
    id: "p150-max",
    name: "XAG P150 Max",
    tagline: "60L Tank | 18 m/s Speed",
    image: "/images/products/p150-max/card.webp",
    href: "/products/p150-max",
    badgeKey: "new",
  },
  {
    id: "p100-pro",
    name: "XAG P100 Pro",
    tagline: "40L Tank | 4D Radar",
    image: "/images/products/p100-pro/card.webp",
    href: "/products/p100-pro",
    badgeKey: "popular",
  },
  {
    id: "r150",
    name: "XAG R150 2022",
    tagline: "Ground Sprayer",
    image: "/images/products/r150-2022/card-new.webp",
    href: "/products/r150-2022",
  },
  {
    id: "r200",
    name: "XAG R200",
    tagline: "200L Tank | Ground Robot",
    image: "/images/products/r200/card.webp",
    href: "/products/r200",
    badgeKey: "new",
  },
  {
    id: "r100",
    name: "XAG R100",
    tagline: "100L Tank | Ground Robot",
    image: "/images/products/r100/card.webp",
    href: "/products/r100",
  },
  {
    id: "apc2",
    name: "XAG APC2",
    tagline: "±2.5cm RTK | AutoSteer",
    image: "/images/products/apc2/thumbnail.webp",
    href: "/products/apc2",
    badgeKey: "new",
  },
];

export function ProductCollections() {
  const t = useTranslations("productCollections");

  return (
    <section className="section bg-white">
      <div className="container-main">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
            {t("ourProducts")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        {/* Collection Banners */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {collections.map((collection) => (
            <ScrollReveal key={collection.id}>
              <Link
                href={collection.href}
                className="group relative block aspect-[16/9] rounded-2xl overflow-hidden"
              >
                <Image
                  src={collection.image}
                  alt={t(collection.titleKey)}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {t(collection.titleKey)}
                  </h3>
                  <p className="text-white/80 mb-4">{t(collection.descriptionKey)}</p>
                  <div className="flex flex-wrap gap-2">
                    {collection.products.map((product) => (
                      <span
                        key={product}
                        className="px-3 py-1 bg-white/20 rounded-full text-white text-sm"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg
                    className="w-6 h-6 text-navy"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {/* Featured Products Grid */}
        <ScrollReveal>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-navy">{t("featuredProducts")}</h3>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {featuredProducts.map((product, index) => (
            <ScrollReveal key={product.id} delay={index * 0.1}>
              <Link
                href={product.href}
                className="group block bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[4/3] bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {product.badgeKey && (
                    <span className="absolute top-3 left-3 px-3 py-1.5 bg-brand-red text-white text-sm font-medium rounded-lg">
                      {t(product.badgeKey)}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-navy group-hover:text-brand-red transition-colors text-lg mb-1">
                    {product.name}
                  </h4>
                  <p className="text-sm text-gray-600">{product.tagline}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
