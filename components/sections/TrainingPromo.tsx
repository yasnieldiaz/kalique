"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollReveal } from "@/components/animations";
import { Button } from "@/components/ui/Button";

const featureKeys = ["certified", "handsOn", "experts", "nationwide"] as const;

export function TrainingPromo() {
  const t = useTranslations("training");

  return (
    <section className="section bg-white overflow-hidden">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
              {t("badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("description")}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {featureKeys.map((key) => (
                <div key={key} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <FeatureIcon name={key} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy">{t(`features.${key}.title`)}</h4>
                    <p className="text-sm text-gray-600">{t(`features.${key}.subtitle`)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="/trainings" variant="primary" size="lg">
                {t("viewPrograms")}
              </Button>
              <Button href="/contact-us" variant="outline" size="lg">
                {t("enquireNow")}
              </Button>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/images/training/certificate.svg"
                  alt={t("title")}
                  fill
                  className="object-contain bg-gradient-to-br from-gray-50 to-gray-100"
                  unoptimized
                />
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-[200px]">
                <div className="text-3xl font-bold text-brand-red mb-1">160K+</div>
                <p className="text-sm text-gray-600">{t("pilotsTrained")}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    certified: (
      <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    handsOn: (
      <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    experts: (
      <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    nationwide: (
      <svg className="w-5 h-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };
  return icons[name] || null;
}
