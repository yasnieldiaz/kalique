"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

const serviceKeys = ["spray", "seed", "monitor", "custom"] as const;
const benefitKeys = ["chemicals", "coverage", "terrain", "damage", "precision", "data"] as const;
const processSteps = ["step1", "step2", "step3", "step4"] as const;

export default function FieldOperationsPage() {
  const t = useTranslations("fieldOperations");

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-navy flex items-center">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/hero/field-ops-hero.webp"
            alt={t("title")}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>
        <div className="container-main relative z-10 py-32">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            {t("description")}
          </p>
          <Button href="/contact-us" variant="primary" size="lg">
            {t("requestQuote")}
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-4">
              {t("services.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              {t("services.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceKeys.map((key) => (
              <div
                key={key}
                className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ServiceIcon name={key} />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">
                  {t(`services.${key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">{t(`services.${key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/images/field-ops/benefits.webp"
                alt={t("benefits.title")}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-4">
                {t("benefits.badge")}
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                {t("benefits.title")}
              </h2>
              <ul className="space-y-4">
                {benefitKeys.map((key) => (
                  <li key={key} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-brand-red rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700">{t(`benefits.items.${key}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-red/10 rounded-full text-brand-red text-sm font-medium mb-4">
              {t("process.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              {t("process.title")}
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={step} className="text-center">
                <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{t(`process.${step}.title`)}</h3>
                <p className="text-gray-600 text-sm">{t(`process.${step}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-red text-white">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {t("cta.description")}
          </p>
          <Button href="/contact-us" variant="outline-white" size="lg">
            {t("requestQuote")}
          </Button>
        </div>
      </section>
    </>
  );
}

function ServiceIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    spray: (
      <svg
        className="w-8 h-8 text-brand-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
    seed: (
      <svg
        className="w-8 h-8 text-brand-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    monitor: (
      <svg
        className="w-8 h-8 text-brand-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    custom: (
      <svg
        className="w-8 h-8 text-brand-red"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  };

  return icons[name] || null;
}
