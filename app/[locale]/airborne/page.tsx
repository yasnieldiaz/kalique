import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProductsByCategory } from "@/content/products";

export const metadata: Metadata = {
  title: "Airborne Drones | XAG Australia",
  description:
    "Explore XAG's range of agricultural drones for precision crop spraying, seeding, and mapping. Industry-leading performance and reliability.",
};

export default function AirbornePage() {
  const products = getProductsByCategory("airborne");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero/airborne-hero.webp"
            alt="XAG Airborne Drones"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="container-main relative z-10 py-32">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
            Airborne
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Agricultural Drones
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Experience the future of precision agriculture with XAG&apos;s
            industry-leading range of agricultural drones. From crop spraying to
            seeding, our drones deliver unmatched efficiency and coverage.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-4">
              Our Range
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Airborne Solutions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
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
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-brand-red transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-brand-red font-medium mb-2">
                    {product.tagline}
                  </p>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {Object.entries(product.specs)
                      .slice(0, 3)
                      .map(([key, value]) => (
                        <span
                          key={key}
                          className="px-3 py-1 bg-white rounded-full text-xs text-gray-600"
                        >
                          {key}: {value}
                        </span>
                      ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-4">
                Why XAG
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Industry-Leading Technology
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">Maximum Efficiency</h3>
                    <p className="text-gray-600">
                      Up to 18 m/s flight speed and 60L tank capacity for
                      unmatched productivity.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">
                      Advanced Safety
                    </h3>
                    <p className="text-gray-600">
                      4D imaging radar and AI-powered obstacle avoidance for safe
                      operations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-brand-red"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy mb-1">
                      Smart Operations
                    </h3>
                    <p className="text-gray-600">
                      AI-powered route planning and autonomous flight for
                      precision coverage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/products/p150-max/hero.webp"
                alt="XAG P150 Max"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
