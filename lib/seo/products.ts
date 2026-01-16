import type { Metadata } from "next";

const siteUrl = "https://droneagri.pl";

export interface ProductSEO {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  image: string;
  category: string;
}

export const productsSEO: Record<string, ProductSEO> = {
  "p150-max": {
    slug: "p150-max",
    title: "XAG P150 Max - Dron Rolniczy 60L | Największy Dron do Oprysków",
    description:
      "XAG P150 Max - najpotężniejszy dron rolniczy z zbiornikiem 60L. Opryski do 21ha/h, nawożenie granulowane do 1,5t/h. Rewolucyjna technologia SuperX5 i RealTerra. Idealny dla dużych gospodarstw.",
    keywords: [
      "XAG P150 Max",
      "dron rolniczy 60L",
      "największy dron do oprysków",
      "dron P150",
      "opryskiwacz dronowy XAG",
      "dron do nawożenia granulowanego",
      "SuperX5",
      "RealTerra",
    ],
    image: "/images/products/p150-max/hero-bg.jpg",
    category: "Agricultural Drones",
  },
  "p100-pro": {
    slug: "p100-pro",
    title: "XAG P100 Pro - Dron Rolniczy 40L | Profesjonalny Opryskiwacz",
    description:
      "XAG P100 Pro - profesjonalny dron rolniczy z zbiornikiem 40L. Wydajność do 16ha/h przy opryskach. Kompaktowy, łatwy w transporcie. Idealny dla średnich i dużych gospodarstw rolnych.",
    keywords: [
      "XAG P100 Pro",
      "dron rolniczy 40L",
      "profesjonalny dron do oprysków",
      "dron P100",
      "opryskiwacz dronowy",
      "dron dla gospodarstw",
    ],
    image: "/images/products/p100-pro/hero-bg.jpg",
    category: "Agricultural Drones",
  },
  "r150-2022": {
    slug: "r150-2022",
    title: "XAG R150 2022 - Robot Polowy UGV | Autonomiczny Robot Rolniczy",
    description:
      "XAG R150 2022 - autonomiczny robot polowy z napędem 4x4. Opryski, nawożenie i transport na trudnym terenie. Praca 24/7 bez operatora. Innowacyjna technologia dla nowoczesnego rolnictwa.",
    keywords: [
      "XAG R150",
      "robot polowy",
      "UGV rolniczy",
      "autonomiczny robot",
      "robot do oprysków",
      "unmanned ground vehicle",
      "robot 4x4",
    ],
    image: "/images/products/r150-2022/hero-bg.jpg",
    category: "Agricultural Robots",
  },
  r100: {
    slug: "r100",
    title: "XAG R100 - Kompaktowy Robot Polowy | Robot do Sadów i Winnic",
    description:
      "XAG R100 - kompaktowy robot polowy idealny do sadów, winnic i upraw rzędowych. Precyzyjne opryski w trudno dostępnych miejscach. Autonomiczna praca bez operatora.",
    keywords: [
      "XAG R100",
      "robot do sadów",
      "robot do winnic",
      "kompaktowy robot polowy",
      "robot uprawy rzędowe",
      "precyzyjne opryski",
    ],
    image: "/images/products/r100/hero-bg.jpg",
    category: "Agricultural Robots",
  },
  r200: {
    slug: "r200",
    title: "XAG R200 - Ciężki Robot Polowy | Robot do Dużych Gospodarstw",
    description:
      "XAG R200 - ciężki robot polowy o dużej wydajności. Zbiornik 200L, napęd 4x4, praca w każdych warunkach. Idealny do dużych gospodarstw i usług rolniczych.",
    keywords: [
      "XAG R200",
      "ciężki robot polowy",
      "robot 200L",
      "robot duże gospodarstwa",
      "robot usługi rolnicze",
      "heavy duty UGV",
    ],
    image: "/images/products/r200/hero-bg.jpg",
    category: "Agricultural Robots",
  },
  apc2: {
    slug: "apc2",
    title: "XAG APC2 - Autopilot Rolniczy | System Nawigacji dla Ciągników",
    description:
      "XAG APC2 - precyzyjny autopilot rolniczy z dokładnością RTK do 2.5cm. Automatyzacja ciągników i maszyn rolniczych. Łatwy montaż, intuicyjna obsługa. Zwiększ wydajność swojego gospodarstwa.",
    keywords: [
      "XAG APC2",
      "autopilot rolniczy",
      "nawigacja RTK",
      "GPS rolniczy",
      "automatyzacja ciągników",
      "precyzyjne rolnictwo",
      "system nawigacji",
    ],
    image: "/images/products/apc2/hero-bg.jpg",
    category: "Agricultural Autopilots",
  },
};

export function generateProductMetadata(
  productSlug: string,
  locale: string
): Metadata {
  const product = productsSEO[productSlug];

  if (!product) {
    return {};
  }

  const productUrl =
    locale === "es"
      ? `${siteUrl}/products/${productSlug}`
      : `${siteUrl}/${locale}/products/${productSlug}`;

  return {
    title: product.title,
    description: product.description,
    keywords: product.keywords,
    openGraph: {
      title: product.title,
      description: product.description,
      url: productUrl,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.title,
      description: product.description,
      images: [product.image],
    },
    alternates: {
      canonical: productUrl,
      languages: {
        es: `${siteUrl}/products/${productSlug}`,
        en: `${siteUrl}/en/products/${productSlug}`,
        pl: `${siteUrl}/pl/products/${productSlug}`,
        de: `${siteUrl}/de/products/${productSlug}`,
        cs: `${siteUrl}/cs/products/${productSlug}`,
        nl: `${siteUrl}/nl/products/${productSlug}`,
      },
    },
  };
}
