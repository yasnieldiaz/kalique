"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { getAllProducts } from "@/content/products";

export default function ProductsPage() {
  const t = useTranslations("productsPage");
  const products = getAllProducts();
  const airborne = products.filter((p) => p.category === "airborne");
  const landborne = products.filter((p) => p.category === "landborne");
  const autopilot = products.filter((p) => p.category === "autopilot");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-24">
        <div className="container-main">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("description")}
          </p>
        </div>
      </section>

      {/* Airborne Section */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-2">
                {t("airborne.badge")}
              </span>
              <h2 className="text-3xl font-bold text-navy">
                {t("airborne.title")}
              </h2>
            </div>
            <Link
              href="/airborne"
              className="text-brand-red font-semibold hover:underline"
            >
              {t("airborne.viewAll")}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {airborne.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy group-hover:text-brand-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Landborne Section */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-2">
                {t("landborne.badge")}
              </span>
              <h2 className="text-3xl font-bold text-navy">{t("landborne.title")}</h2>
            </div>
            <Link
              href="/landborne"
              className="text-brand-red font-semibold hover:underline"
            >
              {t("landborne.viewAll")}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {landborne.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy group-hover:text-brand-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Autopilot Section */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-2">
                {t("autopilot.badge")}
              </span>
              <h2 className="text-3xl font-bold text-navy">{t("autopilot.title")}</h2>
            </div>
            <Link
              href="/products/apc2"
              className="text-brand-red font-semibold hover:underline"
            >
              {t("autopilot.viewAll")}
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {autopilot.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="aspect-video relative bg-gray-200">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy group-hover:text-brand-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
