import type { Metadata, Viewport } from "next";
import { Exo, Lexend, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/i18n/config";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { StructuredData } from "@/components/seo";
import { GoogleAnalytics } from "@/components/analytics";
import "../globals.css";

const exo = Exo({
  variable: "--font-exo",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
  preload: false,
});

const siteUrl = "https://xnetik.hu";

// Map locale to OpenGraph locale format
const localeToOG: Record<Locale, string> = {
  hu: "hu_HU",
  en: "en_US",
};

// Map locale to HTML lang format
const localeToLang: Record<Locale, string> = {
  hu: "hu",
  en: "en",
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = locale as Locale;

  const currentUrl = validLocale === "hu" ? siteUrl : `${siteUrl}/${validLocale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "XNETIK Hungary | XAG Mezőgazdasági Drónok - Precíziós Mezőgazdaság",
      template: "%s | XNETIK - XAG Hungary",
    },
    description:
      "XNETIK - Hivatalos XAG forgalmazó Magyarországon. Mezőgazdasági drónok, robotok, AI és IoT megoldások precíziós gazdálkodáshoz. P150 Max, P100 Pro, R150, R100, R200. Képzések és szerviz.",
    keywords: [
      "mezőgazdasági drón",
      "XAG drón",
      "drón permetezés",
      "precíziós mezőgazdaság",
      "smart farming Hungary",
      "XAG P150 Max",
      "XAG P100 Pro",
      "XAG R150",
      "XAG R100",
      "XAG R200",
      "agricultural drones Hungary",
      "drone spraying",
      "precision agriculture",
      "XNETIK",
      "XAG Hungary",
      "drónpilóta képzés",
    ],
    authors: [{ name: "XNETIK Hungary", url: siteUrl }],
    creator: "XNETIK Hungary",
    publisher: "XNETIK Kft.",
    formatDetection: {
      email: true,
      address: true,
      telephone: true,
    },
    openGraph: {
      type: "website",
      locale: localeToOG[validLocale],
      alternateLocale: Object.values(localeToOG).filter((l) => l !== localeToOG[validLocale]),
      url: currentUrl,
      siteName: "XNETIK Hungary - XAG Agricultural Drones",
      title: "XNETIK Hungary | XAG Agricultural Drones",
      description:
        "Official XAG distributor in Hungary. Agricultural drones, robots, AI and IoT solutions for precision farming. Training and authorized service.",
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "XNETIK Hungary - XAG P150 Max Agricultural Drone",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@xnetik",
      creator: "@xnetik",
      title: "XNETIK Hungary | XAG Agricultural Drones",
      description:
        "Official XAG distributor in Hungary. Agricultural drones for precision farming.",
      images: ["/images/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: currentUrl,
      languages: {
        "hu": siteUrl,
        "en": `${siteUrl}/en`,
      },
    },
    verification: {
      google: "google-site-verification-code",
      yandex: "yandex-verification-code",
    },
    category: "technology",
    classification: "Agricultural Technology",
    referrer: "origin-when-cross-origin",
    icons: {
      icon: [
        { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon.ico", sizes: "any" },
      ],
      apple: [
        { url: "/favicon-32x32.png", sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/site.webmanifest",
    other: {
      "msapplication-TileColor": "#0b0e20",
      "msapplication-config": "/browserconfig.xml",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#0b0e20",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  const messages = await getMessages();

  return (
    <html lang={localeToLang[locale as Locale]} className={`${exo.variable} ${lexend.variable} ${inter.variable}`}>
      <head>
        {/* Preconnect to external domains for faster resource loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* DNS prefetch for CDN resources */}
        <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
        {/* Preload critical hero image for LCP optimization */}
        <link rel="preload" as="image" href="/images/xnetik-logo2.png" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <GoogleAnalytics measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || ""} />
        <StructuredData />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
