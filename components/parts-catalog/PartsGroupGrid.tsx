"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { PartsGroupCard } from "./PartsGroupCard";
import { Product } from "./types";

interface PartsGroupGridProps {
  product: Product;
}

export function PartsGroupGrid({ product }: PartsGroupGridProps) {
  const t = useTranslations("partsCatalog");

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-navy to-gray-800 text-white">
        <div className="container-main px-6 py-12 md:py-16">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">{t("home")}</Link>
            <span className="mx-2">/</span>
            <Link href="/parts-catalog" className="hover:text-white transition-colors">{t("spareParts")}</Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{product.name}</span>
          </nav>

          {/* Title & Description */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            {t("heroDescription")}
          </p>
        </div>
      </div>

      {/* Section Title */}
      <div className="container-main px-6 pt-16 pb-8">
        <h2 className="text-xl font-bold text-navy">{t("selectCategory")}</h2>
        <p className="text-gray-500 mt-1">{t("selectCategoryDescription")}</p>
      </div>

      {/* Groups grid */}
      <div className="container-main px-6 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
          {product.groups.map((group) => (
            <PartsGroupCard
              key={group.id}
              group={group}
              productSlug={product.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
