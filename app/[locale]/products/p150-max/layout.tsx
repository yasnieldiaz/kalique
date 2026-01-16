import { Metadata } from "next";
import { generateProductMetadata } from "@/lib/seo/products";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateProductMetadata("p150-max", locale);
}

export default function P150MaxLayout({ children }: Props) {
  return <>{children}</>;
}
