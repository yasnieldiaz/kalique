"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations";
import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  titleKey?: string;
  descriptionKey?: string;
  primaryCtaKey?: string;
  primaryCtaHref?: string;
  secondaryCtaKey?: string;
  secondaryCtaHref?: string;
  variant?: "default" | "dark" | "red";
}

export function CTASection({
  titleKey = "readyToTransform",
  descriptionKey = "readyToTransformDesc",
  primaryCtaKey = "ctaContact",
  primaryCtaHref = "/contact-us",
  secondaryCtaKey = "viewProducts",
  secondaryCtaHref = "/products",
  variant = "default",
}: CTASectionProps) {
  const t = useTranslations("home");
  const title = t(titleKey);
  const description = t(descriptionKey);
  const primaryCta = { text: t(primaryCtaKey), href: primaryCtaHref };
  const secondaryCta = { text: t(secondaryCtaKey), href: secondaryCtaHref };
  const variants = {
    default: "bg-gray-50",
    dark: "bg-navy text-white",
    red: "bg-brand-red text-white",
  };

  const buttonVariant = variant === "default" ? "primary" : "outline-white";
  const secondaryButtonVariant = variant === "default" ? "outline" : "ghost";

  return (
    <section className={`section ${variants[variant]}`}>
      <div className="container-main">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h2>
            <p
              className={`text-lg mb-8 ${
                variant === "default" ? "text-gray-600" : "text-white/80"
              }`}
            >
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href={primaryCta.href} variant={buttonVariant} size="lg">
                {primaryCta.text}
              </Button>
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant={variant === "default" ? "outline" : "outline-white"}
                  size="lg"
                >
                  {secondaryCta.text}
                </Button>
              )}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
