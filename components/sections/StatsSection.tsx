"use client";

import { useTranslations } from "next-intl";
import { ScrollReveal, CountUp } from "@/components/animations";

interface Stat {
  value: number;
  suffixKey: string;
  labelKey: string;
  sublabelKey: string;
}

const stats: Stat[] = [
  {
    value: 22,
    suffixKey: "million",
    labelKey: "tons",
    sublabelKey: "tonsSub"
  },
  {
    value: 70,
    suffixKey: "plus",
    labelKey: "countries",
    sublabelKey: "countriesSub"
  },
  {
    value: 160,
    suffixKey: "kPlus",
    labelKey: "dronePilots",
    sublabelKey: "dronePilotsSub"
  },
  {
    value: 140,
    suffixKey: "million",
    labelKey: "hectares",
    sublabelKey: "hectaresSub"
  },
];

export function StatsSection() {
  const t = useTranslations("stats");

  return (
    <section className="py-24 bg-brand-red text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-main relative z-10">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
            {t("globalImpact")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.labelKey} delay={index * 0.1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  <CountUp
                    end={stat.value}
                    suffix={t(`suffixes.${stat.suffixKey}`)}
                    duration={2.5}
                    className="text-white"
                  />
                </div>
                <p className="text-xl font-semibold text-white mb-1">{t(stat.labelKey)}</p>
                <p className="text-white/70 text-sm">{t(stat.sublabelKey)}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
