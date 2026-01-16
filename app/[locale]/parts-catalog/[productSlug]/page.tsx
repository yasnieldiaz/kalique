import { PartsGroupGrid } from "@/components/parts-catalog";
import { Product } from "@/components/parts-catalog/types";

// Demo data - in production this would come from a CMS or API
const getProduct = (slug: string): Product | null => {
  const products: Record<string, Product> = {
    "p100-pro-2023": {
      id: "1",
      name: "XAG P100 Pro 2023 Agricultural Drone",
      slug: "p100-pro-2023",
      groups: [
        {
          id: "1",
          code: "001",
          name: "P100H Pro 2023 Arm",
          image: "/images/parts/groups/p100-arm-hq.png",
          slug: "arm",
        },
        {
          id: "2",
          code: "002",
          name: "P100H Pro 2023 Fuselage front compartment",
          image: "/images/parts/groups/p100-fuselage-front-hq.png",
          slug: "fuselage-front",
        },
        {
          id: "3",
          code: "003",
          name: "P100H Pro 2023 Fuselage",
          image: "/images/parts/groups/p100-fuselage-hq.png",
          slug: "fuselage",
        },
        {
          id: "4",
          code: "004",
          name: "P100H Pro 2023 Tail frame",
          image: "/images/parts/groups/p100-tail-frame-hq.png",
          slug: "tail-frame",
        },
        {
          id: "5",
          code: "005",
          name: "P100H Pro 2023 Revospray",
          image: "/images/parts/groups/p100-revospray-hq.png",
          slug: "revospray",
        },
        {
          id: "6",
          code: "006",
          name: "P100H Pro 2023 RevoCast",
          image: "/images/parts/groups/p100-revocast-hq.png",
          slug: "revocast",
        },
      ],
    },
    "p150-max-2023": {
      id: "2",
      name: "XAG P150 Max 2023 Agricultural Drone",
      slug: "p150-max-2023",
      groups: [
        {
          id: "1",
          code: "001",
          name: "P150 Max 2023 Arm",
          image: "/images/parts/groups/arm.svg",
          slug: "arm",
        },
        {
          id: "2",
          code: "002",
          name: "P150 Max 2023 Fuselage front compartment",
          image: "/images/parts/groups/fuselage-front.svg",
          slug: "fuselage-front",
        },
        {
          id: "3",
          code: "003",
          name: "P150 Max 2023 Fuselage",
          image: "/images/parts/groups/fuselage.svg",
          slug: "fuselage",
        },
        {
          id: "4",
          code: "004",
          name: "P150 Max 2023 Tail frame",
          image: "/images/parts/groups/tail-frame.svg",
          slug: "tail-frame",
        },
        {
          id: "5",
          code: "005",
          name: "P150 Max 2023 RevoSpray P5",
          image: "/images/parts/groups/revospray.svg",
          slug: "revospray",
        },
        {
          id: "6",
          code: "006",
          name: "P150 Max 2023 RevoCast P5",
          image: "/images/parts/groups/revocast.svg",
          slug: "revocast",
        },
        {
          id: "7",
          code: "007",
          name: "P150 Max 2023 RevoSling",
          image: "/images/parts/groups/realterra.svg",
          slug: "revosling",
        },
        {
          id: "8",
          code: "008",
          name: "P150 Max 2023 Power System",
          image: "/images/parts/groups/placeholder.svg",
          slug: "power-system",
        },
      ],
    },
  };

  return products[slug] || null;
};

interface PageProps {
  params: Promise<{ productSlug: string }>;
}

export default async function ProductGroupsPage({ params }: PageProps) {
  const { productSlug } = await params;
  const product = getProduct(productSlug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found</p>
      </div>
    );
  }

  return <PartsGroupGrid product={product} />;
}
