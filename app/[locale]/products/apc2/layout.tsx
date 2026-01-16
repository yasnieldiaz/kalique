import { Metadata } from "next";
import { generateProductMetadata } from "@/lib/seo/products";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return generateProductMetadata("apc2", locale);
}

export default function APC2Layout({ children }: Props) {
  return <>{children}</>;
}
