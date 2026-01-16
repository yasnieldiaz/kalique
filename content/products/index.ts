export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: "airborne" | "landborne" | "autopilot";
  specs: {
    [key: string]: string;
  };
  features: {
    title: string;
    description: string;
  }[];
  image: string;
  gallery: string[];
}

export const products: Record<string, Product> = {
  "p150-max": {
    id: "p150-max",
    slug: "p150-max",
    name: "XAG P150 Max",
    tagline: "The Fastest Agricultural Drone",
    description: "The XAG P150 Max represents the pinnacle of agricultural drone technology, featuring a 60L tank capacity and industry-leading 18 m/s flight speed for maximum productivity.",
    category: "airborne",
    specs: {
      "Tank Capacity": "60L",
      "Flight Speed": "18 m/s",
      "Spray Width": "12m",
      "Flight Time": "15 min",
      "Max Payload": "70 kg",
    },
    features: [
      { title: "Industry-Leading Speed", description: "18 m/s flight speed for maximum productivity" },
      { title: "Large Capacity", description: "60L tank for extended operations" },
      { title: "4D Imaging Radar", description: "Advanced obstacle detection and avoidance" },
      { title: "Smart Route Planning", description: "AI-powered autonomous flight planning" },
    ],
    image: "/images/products/p150-max/hero.webp",
    gallery: ["/images/products/p150-max/gallery-1.webp"],
  },
  "p100-pro": {
    id: "p100-pro",
    slug: "p100-pro",
    name: "XAG P100 Pro",
    tagline: "Precision Meets Performance",
    description: "The XAG P100 Pro combines advanced 4D imaging radar with intelligent spraying systems for maximum coverage and efficiency in precision agriculture.",
    category: "airborne",
    specs: {
      "Tank Capacity": "40L",
      "Flight Speed": "12 m/s",
      "Spray Width": "8m",
      "Flight Time": "10 min",
    },
    features: [
      { title: "4D Imaging Radar", description: "Comprehensive obstacle detection" },
      { title: "Precision Spraying", description: "AI-optimized spray patterns" },
    ],
    image: "/images/products/p100-pro/hero.webp",
    gallery: [],
  },
  "r150-2022": {
    id: "r150-2022",
    slug: "r150-2022",
    name: "XAG R150 2022",
    tagline: "Ground-Based Precision",
    description: "The XAG R150 is an autonomous ground sprayer that delivers precision application in orchards, vineyards, and row crops with minimal soil compaction.",
    category: "landborne",
    specs: {
      "Tank Capacity": "150L",
      "Working Width": "4m",
      "Speed": "6 km/h",
      "Runtime": "8 hours",
    },
    features: [
      { title: "Autonomous Navigation", description: "GPS-guided precision movement" },
      { title: "Low Compaction", description: "Lightweight design protects soil health" },
    ],
    image: "/images/products/r150-2022/card-new.webp",
    gallery: [],
  },
  "r100": {
    id: "r100",
    slug: "r100",
    name: "XAG R100",
    tagline: "Smart Farm Co-Pilot",
    description: "A trusted orchard and greenhouse partner delivering precise, uniform spraying with simple remote control while enabling diverse farming operations.",
    category: "landborne",
    specs: {
      "Vehicle Width": "80 cm",
      "Curb Weight": "80 kg",
      "Max Speed": "1.5 m/s",
      "Tank Capacity": "120L",
      "Ground Clearance": "270 mm",
    },
    features: [
      { title: "Precision Spraying", description: "Conserves water and pesticides with accurate application" },
      { title: "Intelligent Navigation", description: "Multiple route modes for versatile operation" },
      { title: "Compact Design", description: "Access narrow, rough terrain with ease" },
      { title: "Remote Control", description: "Eliminates operator exposure to chemicals" },
    ],
    image: "/images/products/r100/thumbnail.webp",
    gallery: [],
  },
  "r200": {
    id: "r200",
    slug: "r200",
    name: "XAG R200",
    tagline: "Performance that Transforms",
    description: "High-capacity autonomous agricultural robot with multi-task versatility for large-scale spraying, spreading, and inspection operations.",
    category: "landborne",
    specs: {
      "Vehicle Width": "1.3 m",
      "Curb Weight": "450 kg",
      "Max Speed": "3 m/s",
      "Tank Capacity": "200L",
      "Ground Clearance": "300 mm",
    },
    features: [
      { title: "High Capacity", description: "200L tank and 300kg payload for large-scale operations" },
      { title: "Multi-Task Versatility", description: "Spraying, spreading, and inspection in one platform" },
      { title: "Autonomous Operation", description: "Centimeter-level RTK navigation for precision farming" },
      { title: "All-Terrain", description: "Robust chassis with 45% grade capability" },
    ],
    image: "/images/products/r200/thumbnail.webp",
    gallery: [],
  },
  "apc2": {
    id: "apc2",
    slug: "apc2",
    name: "XAG APC2",
    tagline: "AutoPilot for Machinery",
    description: "The XAG APC2 is an intelligent autopilot system that transforms traditional agricultural machinery into autonomous vehicles with centimeter-level precision.",
    category: "autopilot",
    specs: {
      "RTK Precision": "±2.5cm",
      "Display": "10.1\" Touch",
      "Compatibility": "Universal",
      "Guidance": "AutoSteer",
    },
    features: [
      { title: "Centimeter Precision", description: "±2.5cm RTK positioning accuracy" },
      { title: "Universal Compatibility", description: "Works with any tractor or machinery" },
      { title: "AutoSteer System", description: "Hands-free autonomous driving" },
      { title: "Easy Installation", description: "Quick setup on any vehicle" },
    ],
    image: "/images/products/apc2/thumbnail.webp",
    gallery: [],
  },
};

export function getProduct(slug: string): Product | undefined {
  return products[slug];
}

export function getAllProducts(): Product[] {
  return Object.values(products);
}

export function getProductsByCategory(category: "airborne" | "landborne" | "autopilot"): Product[] {
  return Object.values(products).filter((p) => p.category === category);
}
