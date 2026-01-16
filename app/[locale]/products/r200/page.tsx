"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
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
  const t = useTranslations("r200");

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent z-10" />
        <Image
          src="/images/products/r200/hero.webp"
          alt="XAG R200"
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Content */}
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
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            XAG<sup className="text-2xl">®</sup> R200
          </h1>
          <p className="text-2xl md:text-3xl text-brand-red font-semibold mb-4">
            {t("tagline")}
          </p>
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            {t("description")}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact-us"
              className="px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-hover transition-colors"
            >
              {t("orderNow")}
            </Link>
            <Link
              href="#specifications"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              {t("viewSpecs")}
            </Link>
            <Link
              href="/download-center"
              className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              {t("downloads")}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
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

// Key Features Section
function FeaturesSection() {
  const t = useTranslations("r200.features");

  const features = [
    { key: "precision", icon: "tank" },
    { key: "navigation", icon: "map" },
    { key: "sixWheel", icon: "terrain" },
    { key: "electric", icon: "bolt" },
    { key: "remote", icon: "controller" },
    { key: "modular", icon: "puzzle" },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-red/10 flex items-center justify-center">
                <FeatureIcon name={feature.icon} />
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{t(`${feature.key}.title`)}</h3>
              <p className="text-gray-600">{t(`${feature.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactElement> = {
    tank: (
      <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    map: (
      <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    terrain: (
      <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    bolt: (
      <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    controller: (
      <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
      </svg>
    ),
    puzzle: (
      <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  };

  return icons[name] || null;
}

// Core Specifications Section
function SpecificationsSection() {
  const t = useTranslations("r200.specs");

  const specs = [
    { value: 1.3, suffix: " m", label: t("vehicleWidth"), description: t("vehicleWidthValue") },
    { value: 450, suffix: " kg", label: t("curbWeight"), description: t("curbWeightValue") },
    { value: 3, suffix: " m/s", label: t("maxSpeed"), description: t("maxSpeedValue") },
    { value: 45, suffix: "%", label: t("gradeability"), description: t("gradeabilityValue") },
    { value: 300, suffix: " mm", label: t("groundClearance"), description: t("groundClearanceValue") },
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

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                <AnimatedDigit value={spec.value} suffix={spec.suffix} />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">{spec.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Chassis Section
function ChassisSection() {
  const t = useTranslations("r200.chassis");

  const features = [
    t("features.aluminum"),
    t("features.suspension"),
    t("features.sixWheel"),
    t("features.torque"),
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
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
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
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/r200/gallery-1.webp"
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

// RevoSpray Section
function RevoSpraySection() {
  const t = useTranslations("r200.revospray");

  const features = [
    t("features.pumps"),
    t("features.atomizers"),
    t("features.jetsprayer"),
    t("features.brackets"),
    t("features.airGuide"),
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ClipReveal className="relative order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/r200/gallery-5.webp"
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
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-brand-red">{t("tankCapacityValue")}</div>
                <div className="text-sm text-gray-600">{t("tankCapacity")}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-brand-red">{t("flowRateValue")}</div>
                <div className="text-sm text-gray-600">{t("flowRate")}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-brand-red">{t("dropletSizeValue")}</div>
                <div className="text-sm text-gray-600">{t("dropletSize")}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-brand-red">{t("sprayRangeValue")}</div>
                <div className="text-sm text-gray-600">{t("sprayRange")}</div>
              </div>
            </div>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
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

// Control System Section
function ControlSystemSection() {
  const t = useTranslations("r200.control");

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ClipReveal className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/r200/gallery-6.webp"
                alt={t("title")}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </ClipReveal>

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
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-brand-red">{t("display")}</div>
                <div className="text-sm text-gray-600">{t("displayValue")}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-brand-red">{t("fov")}</div>
                <div className="text-sm text-gray-600">{t("fovValue")}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-brand-red">{t("battery")}</div>
                <div className="text-sm text-gray-600">{t("batteryValue")}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-2xl font-bold text-brand-red">{t("connectivity")}</div>
                <div className="text-sm text-gray-600">{t("connectivityValue")}</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// Navigation Modes Section
function NavigationSection() {
  const t = useTranslations("r200.navigation");

  const modes = [
    { key: "cruise" },
    { key: "pathTracking" },
    { key: "variableRate" },
    { key: "repeat" },
    { key: "planning" },
    { key: "realTerra" },
  ];

  return (
    <section className="py-24 bg-brand-red text-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t("description")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{t(`modes.${mode.key}.title`)}</h3>
              <p className="text-white/70 text-sm">{t(`modes.${mode.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Safety Features Section
function SafetySection() {
  const t = useTranslations("r200.safety");

  const features = [
    t("features.pedestrian"),
    t("features.adaptive"),
    t("features.posture"),
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
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  <span className="text-gray-700">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/r200/gallery-2.webp"
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

// Power System Section
function PowerSystemSection() {
  const t = useTranslations("r200.power");

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
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-red">{t("capacityValue")}</div>
                <div className="text-sm text-white/70">{t("capacity")}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-red">{t("cyclesValue")}</div>
                <div className="text-sm text-white/70">{t("cycles")}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-red">{t("runtimeValue")}</div>
                <div className="text-sm text-white/70">{t("runtime")}</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">{t("charger.title")}</h3>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">{t("charger.power")}</span>
                <span className="text-white/70">{t("charger.time")}</span>
              </div>
            </div>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-navy-light">
              <Image
                src="/images/products/r200/gallery-3.webp"
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

// Applications Section
function ApplicationsSection() {
  const t = useTranslations("r200.applications");

  const crops = ["lemons", "dragonFruit", "avocados", "grapes"];

  return (
    <section className="py-24 bg-gray-50">
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

        <div className="grid md:grid-cols-4 gap-6">
          {crops.map((crop, index) => (
            <motion.div
              key={crop}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy">{t(`crops.${crop}`)}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactSection() {
  const t = useTranslations("r200.contact");

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, subject: "R200 - Consulta de producto" }),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
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
    <section className="py-24 bg-white">
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
            className="bg-gray-50 rounded-2xl p-8 shadow-lg"
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
              <button
                type="submit"
                className="w-full px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-hover transition-colors"
              >
                {t("form.submit")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function R200Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <SpecificationsSection />
      <ChassisSection />
      <RevoSpraySection />
      <ControlSystemSection />
      <NavigationSection />
      <SafetySection />
      <PowerSystemSection />
      <ApplicationsSection />
      <ContactSection />
    </>
  );
}
