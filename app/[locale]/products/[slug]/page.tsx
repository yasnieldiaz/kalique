import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProduct, getAllProducts } from "@/content/products";
import { Button } from "@/components/ui/Button";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.name} | XAG Australia`,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getAllProducts()
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="container-main relative z-10 py-32">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4 capitalize">
            {product.category}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            {product.name}
          </h1>
          <p className="text-xl text-white/80 mb-2">{product.tagline}</p>
          <p className="text-lg text-white/60 max-w-2xl mb-8">
            {product.description}
          </p>
          <div className="flex gap-4">
            <Button href="/contact-us" variant="primary" size="lg">
              Request Quote
            </Button>
            <Button href="/download-center" variant="outline-white" size="lg">
              Download Specs
            </Button>
          </div>
        </div>
      </section>

      {/* Specs Section */}
      <section className="section bg-white">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-navy mb-8 text-center">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {Object.entries(product.specs).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-50 rounded-xl p-6 text-center"
              >
                <div className="text-3xl font-bold text-brand-red mb-2">
                  {value}
                </div>
                <div className="text-sm text-gray-600">{key}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <h2 className="text-3xl font-bold text-navy mb-12 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center mb-4">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-red text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about the {product.name} and how it
            can transform your agricultural operations.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact-us" variant="outline-white" size="lg">
              Contact Sales
            </Button>
            <Button href="/trainings" variant="outline-white" size="lg">
              Training Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section">
          <div className="container-main">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">
              Related Products
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/products/${related.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all"
                >
                  <div className="aspect-video bg-gray-100 relative">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      unoptimized
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-navy group-hover:text-brand-red transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-sm text-gray-600">{related.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
