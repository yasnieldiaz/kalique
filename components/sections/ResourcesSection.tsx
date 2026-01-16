"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ScrollReveal } from "@/components/animations";

const resourceKeys = ["downloads"] as const;

export function ResourcesSection() {
  const t = useTranslations("resources");

  return (
    <section className="section bg-gray-50">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        {/* Resource Cards */}
        <div className="grid gap-6 max-w-xl mx-auto">
          {resourceKeys.map((key, index) => (
            <ScrollReveal key={key} delay={index * 0.1}>
              <Link
                href={t(`items.${key}.href`) as "/download-center"}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative aspect-[16/10] bg-gray-200">
                  <Image
                    src={t(`items.${key}.image`)}
                    alt={t(`items.${key}.title`)}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 rounded-full text-navy text-sm font-medium">
                    {t(`items.${key}.count`)}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-brand-red transition-colors">
                    {t(`items.${key}.title`)}
                  </h3>
                  <p className="text-gray-600">{t(`items.${key}.description`)}</p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
