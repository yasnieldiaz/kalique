import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProductsByCategory } from "@/content/products";

export const metadata: Metadata = {
  title: "Landborne Robots | XAG Australia",
  description:
    "Discover XAG's autonomous ground robots for precision agriculture. Ground sprayers, mowers, and multi-purpose farm robots.",
};

export default function LandbornePage() {
  const products = getProductsByCategory("landborne");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero/landborne-hero.webp"
            alt="XAG Landborne Robots"
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="container-main relative z-10 py-32">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
            Landborne
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Ground Robots
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Autonomous ground-based solutions for orchards, vineyards, and row
            crops. Precision spraying and grass management with minimal soil
            compaction.
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
              Landborne Solutions
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

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-4">
              Benefits
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              Why Ground Robots?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-brand-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                Minimal Soil Compaction
              </h3>
              <p className="text-gray-600">
                Lightweight design protects soil health and structure in your
                orchards and vineyards.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-brand-red"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">
                24/7 Operation
              </h3>
              <p className="text-gray-600">
                Autonomous operation day and night for maximum productivity and
                coverage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-brand-red"
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
              <h3 className="text-xl font-bold text-navy mb-3">
                Precision Navigation
              </h3>
              <p className="text-gray-600">
                RTK GPS guidance for centimeter-level accuracy in row-crop
                applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
