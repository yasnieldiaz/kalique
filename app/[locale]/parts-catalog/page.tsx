import Image from "next/image";
import { Link } from "@/i18n/routing";

const products = [
  {
    id: "1",
    name: "P100 Pro",
    fullName: "XAG P100 Pro 2023 Agricultural Drone",
    slug: "p100-pro-2023",
    image: "/images/products/p100-pro/thumbnail.webp",
    groupCount: 6,
  },
  {
    id: "2",
    name: "P150 Max",
    fullName: "XAG P150 Max 2023 Agricultural Drone",
    slug: "p150-max-2023",
    image: "/images/products/p150-max/thumbnail.webp",
    groupCount: 8,
  },
];

export default function PartsCatalogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="container-main">
          <nav className="text-sm text-gray-500 mb-2">
            <span className="hover:text-brand-red cursor-pointer">Home</span>
            <span className="mx-2">/</span>
            <span className="text-navy font-medium">Spare Parts Catalog</span>
          </nav>
          <h1 className="text-2xl font-bold text-navy">Spare Parts Catalog</h1>
          <p className="text-gray-600 mt-1">Select a product to view available spare parts</p>
        </div>
      </div>

      {/* Products grid */}
      <div className="container-main py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/parts-catalog/${product.slug}`}
              className="group bg-white rounded-xl border-2 border-gray-200 overflow-hidden transition-all duration-200 hover:border-brand-red hover:shadow-xl"
            >
              {/* Product image */}
              <div className="relative aspect-video bg-gray-100 p-6">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Product info */}
              <div className="p-5 border-t border-gray-100">
                <h2 className="text-xl font-bold text-navy group-hover:text-brand-red transition-colors">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm mt-1">{product.fullName}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">
                    {product.groupCount} part groups
                  </span>
                  <span className="text-brand-red font-medium text-sm group-hover:underline">
                    View Parts →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
