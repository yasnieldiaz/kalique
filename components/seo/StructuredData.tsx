import Script from "next/script";

const siteUrl = "https://droneagri.pl";

// Organization Schema
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "XAG IMEGA Polska",
  alternateName: ["DroneAgri.pl", "IMEGA Sp. z o.o."],
  url: siteUrl,
  logo: {
    "@type": "ImageObject",
    url: `${siteUrl}/images/logo.png`,
    width: 200,
    height: 60,
  },
  image: `${siteUrl}/images/og-image.jpg`,
  description:
    "Oficjalny dystrybutor dronów rolniczych XAG w Polsce. Profesjonalne opryski dronem, nawożenie, siew i mapowanie pól.",
  foundingDate: "2020",
  sameAs: [
    "https://www.facebook.com/droneagri.pl",
    "https://www.instagram.com/droneagri_pl",
    "https://www.youtube.com/@droneagri",
    "https://www.linkedin.com/company/imega-group",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+48-123-456-789",
      contactType: "sales",
      availableLanguage: ["Polish", "English", "Spanish", "German", "Czech", "Dutch"],
      areaServed: ["PL", "ES", "DE", "CZ", "NL", "BE", "AT", "CH"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+48-123-456-789",
      contactType: "customer service",
      availableLanguage: ["Polish", "English", "Spanish", "German", "Czech", "Dutch"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PL",
    addressRegion: "Polska",
  },
};

// LocalBusiness Schema
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#localbusiness`,
  name: "DroneAgri.pl - XAG IMEGA Polska",
  image: `${siteUrl}/images/og-image.jpg`,
  url: siteUrl,
  telephone: "+48-123-456-789",
  priceRange: "$$$$",
  description:
    "Autoryzowany dystrybutor i serwis dronów rolniczych XAG. Sprzedaż, szkolenia operatorów i serwis gwarancyjny.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "52.2297",
    longitude: "21.0122",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: "52.2297",
      longitude: "21.0122",
    },
    geoRadius: "2000000",
  },
};

// WebSite Schema with Search Action
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "DroneAgri.pl",
  description: "Drony rolnicze XAG w Polsce - oficjalny dystrybutor",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  inLanguage: ["pl-PL", "es-ES", "en-US", "de-DE", "cs-CZ", "nl-NL"],
};

// BreadcrumbList Schema generator
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// Product Schema generator
export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  sku: string;
  brand?: string;
  category?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: `${siteUrl}${product.image}`,
    sku: product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand || "XAG",
    },
    category: product.category || "Agricultural Drones",
    manufacturer: {
      "@type": "Organization",
      name: "XAG",
      url: "https://www.xa.com",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "PLN",
      seller: {
        "@id": `${siteUrl}/#organization`,
      },
    },
  };
}

// Main StructuredData component for global schemas
export function StructuredData() {
  const schemas = [organizationSchema, localBusinessSchema, websiteSchema];

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schemas),
      }}
      strategy="afterInteractive"
    />
  );
}

// Component for page-specific schemas
export function PageStructuredData({ schema }: { schema: object | object[] }) {
  return (
    <Script
      id="page-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
      strategy="afterInteractive"
    />
  );
}
