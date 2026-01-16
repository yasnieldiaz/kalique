"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ScrollReveal, CountUp } from "@/components/animations";

// Animated Counter Component
function AnimatedDigit({ value, suffix = "", prefix = "" }: { value: number; suffix?: string; prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <span ref={ref}>
      {prefix}
      {isInView ? <CountUp end={value} duration={2} className="" /> : "0"}
      {suffix}
    </span>
  );
}

// Clip Path Reveal Animation
function ClipReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

// Hero Section
function HeroSection() {
  const t = useTranslations("p100pro");

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-navy/40 z-10" />
        <Image
          src="/images/products/p100-pro/hero.webp"
          alt="XAG P100 Pro"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="relative z-20 container-main min-h-screen flex flex-col justify-center pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-3xl"
        >
          <span className="inline-block px-4 py-1.5 bg-brand-red text-white text-sm font-medium rounded-full mb-6">
            {t("badge")}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl">
            {t("description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-hover transition-colors"
            >
              {t("requestQuote")}
            </Link>
            <Link
              href="#specifications"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              {t("viewSpecs")}
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

// Key Specifications Section
function SpecificationsSection() {
  const t = useTranslations("p100pro.specs");

  const specs = [
    { value: 50, suffix: "kg", label: t("maxPayload"), description: t("maxPayloadDesc") },
    { value: 13.8, suffix: "m/s", label: t("maxSpeed"), description: t("maxSpeedDesc") },
    { value: 500, suffix: "µm", label: t("atomization"), description: t("atomizationDesc") },
    { value: 6, prefix: "IPX", suffix: "K", label: t("protection"), description: t("protectionDesc") },
  ];

  return (
    <section id="specifications" className="py-24 bg-gray-50">
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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2">
                <AnimatedDigit value={spec.value} prefix={spec.prefix} suffix={spec.suffix} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-1">{spec.label}</h3>
              <p className="text-gray-600 text-sm">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Field Performance Section
function FieldPerformanceSection() {
  const t = useTranslations("p100pro.fieldPerformance");

  const comparisons = [
    {
      title: t("sprayingEfficiency"),
      drone: t("hectaresHour"),
      traditional: t("hectaresHourTraditional"),
      improvement: t("faster"),
    },
    {
      title: t("chemicalSavings"),
      drone: t("reduction"),
      traditional: t("standardUsage"),
      improvement: t("costEffective"),
    },
    {
      title: t("coveragePrecision"),
      drone: t("accuracy"),
      traditional: t("variableCoverage"),
      improvement: t("gpsGuided"),
    },
  ];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {comparisons.map((item, index) => (
            <ClipReveal key={item.title}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                <h3 className="text-2xl font-bold mb-6">{item.title}</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/60">{t("drone")}</span>
                    <span className="font-bold text-brand-red">{item.drone}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-white/60">{t("traditional")}</span>
                    <span className="text-white/80">{item.traditional}</span>
                  </div>
                  <div className="pt-2">
                    <span className="inline-block px-3 py-1 bg-brand-red/20 text-brand-red rounded-full text-sm font-medium">
                      {item.improvement}
                    </span>
                  </div>
                </div>
              </motion.div>
            </ClipReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// RevoSpray System Section
function RevoSpraySection() {
  const t = useTranslations("p100pro.revospray");

  const features = [
    t("features.flowRate"),
    t("features.sprayDiscs"),
    t("features.variableRate"),
    t("features.antiDrift"),
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/p100-pro/revospray.jpg"
                alt={t("title")}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}

// RevoCast System Section
function RevoCastSection() {
  const t = useTranslations("p100pro.revocast");

  const features = [
    t("features.hopper"),
    t("features.spreadWidth"),
    t("features.variableRate"),
    t("features.compatible"),
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ClipReveal className="relative order-2 lg:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/p100-pro/revocast.jpg"
                alt={t("title")}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </ClipReveal>

          <ScrollReveal className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
              {t("badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("description")}
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// 4D Radar Section
function RadarSection() {
  const t = useTranslations("p100pro.radar");

  const radarFeatures = [
    { title: t("detection360"), desc: t("detection360Desc") },
    { title: t("range50m"), desc: t("range50mDesc") },
    { title: t("allWeather"), desc: t("allWeatherDesc") },
    { title: t("terrainFollowing"), desc: t("terrainFollowingDesc") },
  ];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {radarFeatures.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-4 bg-white/5 rounded-xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-red font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <ClipReveal className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-navy-light">
              <Image
                src="/images/products/p100-pro/radar.jpg"
                alt={t("title")}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}

// SuperX 4 Pro Section
function SuperXSection() {
  const t = useTranslations("p100pro.superx");

  const features = [
    { title: t("dualIMU"), desc: t("dualIMUDesc") },
    { title: t("rtkGPS"), desc: t("rtkGPSDesc") },
    { title: t("aiCore"), desc: t("aiCoreDesc") },
    { title: t("fiveGReady"), desc: t("fiveGReadyDesc") },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4"
                >
                  <h3 className="font-bold text-navy mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/p100-pro/superx.jpg"
                alt={t("title")}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}

// ARC3 Pro Remote Section
function RemoteSection() {
  const t = useTranslations("p100pro.remote");

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ClipReveal className="relative order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/p100-pro/arc3.jpg"
                alt={t("title")}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </ClipReveal>

          <ScrollReveal className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
              {t("badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("description")}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-3xl font-bold text-brand-red mb-1">5km</div>
                <p className="text-sm text-gray-600">{t("controlRange")}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-3xl font-bold text-brand-red mb-1">IP67</div>
                <p className="text-sm text-gray-600">{t("dustWater")}</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <div className="text-3xl font-bold text-brand-red mb-1">8h</div>
                <p className="text-sm text-gray-600">{t("batteryLife")}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Power System Section
function PowerSection() {
  const t = useTranslations("p100pro.power");

  const batteries = [
    { name: t("b100Battery"), capacity: "36,000mAh", voltage: "51.8V", flightTime: "15-20 min" },
    { name: t("b150Battery"), capacity: "48,000mAh", voltage: "51.8V", flightTime: "20-25 min" },
  ];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {batteries.map((battery, index) => (
            <motion.div
              key={battery.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6">{battery.name}</h3>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <span className="text-white/60">{t("capacity")}</span>
                  <span className="font-bold">{battery.capacity}</span>
                </div>
                <div className="flex justify-between pb-3 border-b border-white/10">
                  <span className="text-white/60">{t("voltage")}</span>
                  <span className="font-bold">{battery.voltage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/60">{t("flightTime")}</span>
                  <span className="font-bold text-brand-red">{battery.flightTime}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Positioning Modes Section
function PositioningSection() {
  const t = useTranslations("p100pro.positioning");

  const modes = [
    { mode: t("rtk"), accuracy: "±2cm", description: t("rtkDesc") },
    { mode: t("gnss"), accuracy: "±1m", description: t("gnssDesc") },
    { mode: t("vision"), accuracy: "±10cm", description: t("visionDesc") },
  ];

  return (
    <section className="py-24 bg-white">
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

        <div className="overflow-x-auto">
          <table className="w-full max-w-3xl mx-auto">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-6 font-bold text-navy">{t("mode")}</th>
                <th className="text-left py-4 px-6 font-bold text-navy">{t("accuracy")}</th>
                <th className="text-left py-4 px-6 font-bold text-navy">{t("descriptionCol")}</th>
              </tr>
            </thead>
            <tbody>
              {modes.map((item, index) => (
                <motion.tr
                  key={item.mode}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="border-b border-gray-100"
                >
                  <td className="py-4 px-6">
                    <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium">
                      {item.mode}
                    </span>
                  </td>
                  <td className="py-4 px-6 font-bold text-navy">{item.accuracy}</td>
                  <td className="py-4 px-6 text-gray-600">{item.description}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

// Day/Night Operation Section
function DayNightSection() {
  const t = useTranslations("p100pro.dayNight");
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const nightOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="py-24 bg-gray-50">
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

        <div className="relative aspect-video max-w-5xl mx-auto rounded-2xl overflow-hidden">
          <Image
            src="/images/products/p100-pro/day-operation.webp"
            alt="P100 Pro Day Operation"
            fill
            className="object-cover"
            unoptimized
          />
          <motion.div className="absolute inset-0" style={{ opacity: nightOpacity }}>
            <Image
              src="/images/products/p100-pro/night-operation.jpg"
              alt="P100 Pro Night Operation"
              fill
              className="object-cover"
              unoptimized
            />
          </motion.div>

          <div className="absolute bottom-8 left-8 right-8 flex justify-between">
            <motion.span
              className="px-4 py-2 bg-white/90 rounded-full font-medium text-navy"
              style={{ opacity: useTransform(scrollYProgress, [0.3, 0.5], [1, 0]) }}
            >
              {t("dayMode")}
            </motion.span>
            <motion.span
              className="px-4 py-2 bg-navy/90 rounded-full font-medium text-white"
              style={{ opacity: nightOpacity }}
            >
              {t("nightMode")}
            </motion.span>
          </div>
        </div>
      </div>
    </section>
  );
}

// XAG One App Section
function AppSection() {
  const t = useTranslations("p100pro.app");

  const features = [
    t("features.aiPlanning"),
    t("features.realTimeMonitoring"),
    t("features.analytics"),
    t("features.fleetManagement"),
  ];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
              {t("badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("title")}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {t("description")}
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90">{feature}</span>
                </motion.li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href="https://apps.apple.com/au/app/xag-one/id1541133681"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                {t("appStore")}
              </a>
              <a
                href="https://device.xa.com/public/download/apk?appCode=xag_one_release&langCode=en&region=international"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-navy rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                </svg>
                {t("googlePlay")}
              </a>
            </div>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-[3/4] max-w-sm mx-auto rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/products/p100-pro/app-mockup.webp"
                alt={t("title")}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </ClipReveal>
        </div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactSection() {
  const t = useTranslations("p100pro.contact");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          subject: "P100 Pro - Consulta de producto",
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12">
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
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-navy">Email</p>
                  <p className="text-gray-600">gazda@xnetik.hu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-navy">XNETIK Hungary</p>
                  <p className="text-brand-red text-sm">Sales Specialist</p>
                  <p className="text-gray-600">+36 30 163 9994</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("form.name")}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("form.email")}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("form.phone")}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("form.company")}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("form.message")}</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none"
                  placeholder={t("form.messagePlaceholder")}
                />
              </div>
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-800">{t("form.successTitle")}</h4>
                    <p className="text-green-700 text-sm">{t("form.successMessage")}</p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800">{t("form.errorTitle")}</h4>
                    <p className="text-red-700 text-sm">{t("form.errorMessage")}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("form.sending") : t("form.submit")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function P100ProPage() {
  return (
    <>
      <HeroSection />
      <SpecificationsSection />
      <FieldPerformanceSection />
      <RevoSpraySection />
      <RevoCastSection />
      <RadarSection />
      <SuperXSection />
      <RemoteSection />
      <PowerSection />
      <PositioningSection />
      <DayNightSection />
      <AppSection />
      <ContactSection />
    </>
  );
}
