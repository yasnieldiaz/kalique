"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion, useInView } from "framer-motion";
import { ScrollReveal, CountUp } from "@/components/animations";
import { useTranslations } from "next-intl";

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
  const t = useTranslations("p150max");

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent z-10" />
        <Image
          src="/images/products/p150-max/hero-bg.webp"
          alt="XAG P150 Max"
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
            XAG<sup className="text-2xl">®</sup> P150 Max
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

// Core Specifications Section
function SpecificationsSection() {
  const t = useTranslations("p150max");

  const specs = [
    { value: 80, suffix: "L", labelKey: "sprayingTank", descKey: "sprayingTankDesc" },
    { value: 46, suffix: "L/min", labelKey: "maxFlowRate", descKey: "maxFlowRateDesc" },
    { value: 115, suffix: "L", labelKey: "spreadingTank", descKey: "spreadingTankDesc" },
    { value: 300, suffix: "kg/min", labelKey: "spreadRate", descKey: "spreadRateDesc" },
    { value: 80, suffix: "kg", labelKey: "liftingCapacity", descKey: "liftingCapacityDesc" },
    { value: 20, suffix: "ha", labelKey: "coverageFlight", descKey: "coverageFlightDesc" },
    { value: 20, suffix: "m/s", labelKey: "maxSpeed", descKey: "maxSpeedDesc" },
    { value: 32, suffix: "kg", labelKey: "bodyWeight", descKey: "bodyWeightDesc" },
  ];

  return (
    <section id="specifications" className="py-24 bg-gray-50">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("specs.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("specs.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("specs.description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.labelKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                <AnimatedDigit value={spec.value} suffix={spec.suffix} />
              </div>
              <h3 className="text-lg font-bold text-navy mb-1">{t(`specs.${spec.labelKey}`)}</h3>
              <p className="text-gray-600 text-sm">{t(`specs.${spec.descKey}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// RevoSpray P5 Section
function RevoSpraySection() {
  const t = useTranslations("p150max");

  const featureKeys = ["tankCapacity", "dropletSize", "sprayWidth", "impellerPumps", "centrifugalNozzle", "smartTank"];

  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
              {t("revospray.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t("revospray.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("revospray.description")}
            </p>
            <ul className="space-y-4 mb-8">
              {featureKeys.map((key, index) => (
                <motion.li
                  key={key}
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
                  <span className="text-gray-700">{t(`revospray.features.${key}`)}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/p150-max/revospray.jpg"
                alt="RevoSpray P5 System"
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

// RevoCast P5 Section
function RevoCastSection() {
  const t = useTranslations("p150max");

  const featureKeys = ["granuleContainer", "maxSpreadRate", "spreadWidth", "waving", "feeders", "compatible"];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ClipReveal className="relative order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/p150-max/revocast.jpg"
                alt="RevoCast P5 System"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </ClipReveal>

          <ScrollReveal className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
              {t("revocast.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t("revocast.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("revocast.description")}
            </p>
            <ul className="space-y-4 mb-8">
              {featureKeys.map((key, index) => (
                <motion.li
                  key={key}
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
                  <span className="text-gray-700">{t(`revocast.features.${key}`)}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

// RevoSling Section
function RevoSlingSection() {
  const t = useTranslations("p150max");

  const featureKeys = ["securityLock", "remoteControl", "abRoute", "liveWeighing"];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
              {t("revosling.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("revosling.title")}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {t("revosling.description")}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-brand-red mb-1">80kg</div>
                <p className="text-sm text-white/70">{t("revosling.payloadCapacity")}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-brand-red mb-1">13.8m/s</div>
                <p className="text-sm text-white/70">{t("revosling.maxFlightSpeed")}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {featureKeys.map((key, index) => (
                <motion.li
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <span className="w-5 h-5 rounded-full bg-brand-red/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-white/90">{t(`revosling.features.${key}`)}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-navy-light">
              <Image
                src="/images/products/p150-max/revosling.jpg"
                alt="RevoSling System"
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

// Obstacle Avoidance Section
function ObstacleAvoidanceSection() {
  const t = useTranslations("p150max");

  const features = [
    { titleKey: "radar", descKey: "radarDesc" },
    { titleKey: "aiVision", descKey: "aiVisionDesc" },
    { titleKey: "terrainFollowing", descKey: "terrainFollowingDesc" },
    { titleKey: "fpv", descKey: "fpvDesc" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("obstacleAvoidance.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("obstacleAvoidance.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("obstacleAvoidance.description")}
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center mb-4">
                  <span className="text-brand-red font-bold text-lg">{index + 1}</span>
                </div>
                <h3 className="font-bold text-navy mb-2">{t(`obstacleAvoidance.features.${feature.titleKey}`)}</h3>
                <p className="text-sm text-gray-600">{t(`obstacleAvoidance.features.${feature.descKey}`)}</p>
              </motion.div>
            ))}
          </div>

          <ClipReveal className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/p150-max/radar.jpg"
                alt="4D Imaging Radar"
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

// Control Systems Section
function ControlSystemsSection() {
  const t = useTranslations("p150max");

  const systems = [
    {
      nameKey: "src5.name",
      featureKeys: ["src5.features.xlink", "src5.features.fpv", "src5.features.oneClick"],
      image: "/images/products/p150-max/src5.png",
    },
    {
      nameKey: "xrtk7.name",
      featureKeys: ["xrtk7.features.accuracy", "xrtk7.features.onePress", "xrtk7.features.relay"],
      image: "/images/products/p150-max/xrtk7.jpg",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("controlSystems.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("controlSystems.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {systems.map((system, index) => (
            <motion.div
              key={system.nameKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="aspect-video bg-gray-100 relative">
                <Image
                  src={system.image}
                  alt={t(`controlSystems.${system.nameKey}`)}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-navy mb-4">{t(`controlSystems.${system.nameKey}`)}</h3>
                <ul className="space-y-2">
                  {system.featureKeys.map((featureKey) => (
                    <li key={featureKey} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {t(`controlSystems.${featureKey}`)}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* SuperX 4 Pro */}
        <ScrollReveal>
          <div className="bg-navy rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{t("controlSystems.superx4.name")}</h3>
                <p className="text-white/70 mb-6">{t("controlSystems.superx4.subtitle")}</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: t("controlSystems.superx4.processor"), value: "1 GHz" },
                    { label: t("controlSystems.superx4.communication"), value: "Dual-link" },
                    { label: t("controlSystems.superx4.imu"), value: "3× Redundant" },
                    { label: t("controlSystems.superx4.positioning"), value: "Dual RTK" },
                  ].map((spec) => (
                    <div key={spec.label} className="bg-white/10 rounded-lg p-4">
                      <div className="text-xl font-bold text-brand-red">{spec.value}</div>
                      <div className="text-sm text-white/70">{spec.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-white/80">
                <p className="mb-4">{t("controlSystems.superx4.description")}</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                    {t("controlSystems.superx4.features.processor")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                    {t("controlSystems.superx4.features.dualLink")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                    {t("controlSystems.superx4.features.imu")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                    {t("controlSystems.superx4.features.dualAntenna")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

// Workflow Section
function WorkflowSection() {
  const t = useTranslations("p150max");

  const steps = ["step1", "step2", "step3", "step4"];

  return (
    <section className="py-24 bg-brand-red text-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
            {t("workflow.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("workflow.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-6xl font-bold text-white/20 mb-4">{t(`workflow.${step}.number`)}</div>
              <h3 className="text-xl font-bold mb-2">{t(`workflow.${step}.title`)}</h3>
              <p className="text-white/70">{t(`workflow.${step}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Autonomous Features Section
function AutonomousFeaturesSection() {
  const t = useTranslations("p150max");

  const features = [
    { titleKey: "fieldMapping", descKey: "fieldMappingDesc" },
    { titleKey: "routePlanning", descKey: "routePlanningDesc" },
    { titleKey: "safetyModes", descKey: "safetyModesDesc" },
    { titleKey: "multiField", descKey: "multiFieldDesc" },
    { titleKey: "swarm", descKey: "swarmDesc" },
    { titleKey: "variableRate", descKey: "variableRateDesc" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("autonomous.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("autonomous.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("autonomous.description")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-red/10 flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{t(`autonomous.features.${feature.titleKey}`)}</h3>
              <p className="text-gray-600 text-sm">{t(`autonomous.features.${feature.descKey}`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Power System Section
function PowerSystemSection() {
  const t = useTranslations("p150max");

  const chargerKeys = ["cm13600s", "cm15300d", "parallel", "cooling"];

  return (
    <section className="py-24 bg-navy text-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
              {t("power.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("power.title")}
            </h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-red">1050</div>
                <div className="text-sm text-white/70">{t("power.capacity")}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-red">7.1</div>
                <div className="text-sm text-white/70">{t("power.weight")}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-red">1500</div>
                <div className="text-sm text-white/70">{t("power.cycleWarranty")}</div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4">{t("power.chargingOptions")}</h3>
            <div className="space-y-3">
              {chargerKeys.map((key) => (
                <div key={key} className="flex items-center justify-between bg-white/5 rounded-lg p-3">
                  <div>
                    <span className="font-semibold">{t(`power.chargers.${key}.name`)}</span>
                    <span className="text-white/60 text-sm ml-2">{t(`power.chargers.${key}.type`)}</span>
                  </div>
                  <span className="text-brand-red font-medium">{t(`power.chargers.${key}.time`)}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-navy-light">
              <Image
                src="/images/products/p150-max/power-system.jpg"
                alt="B141050 Smart Battery"
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
  const t = useTranslations("p150max");
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
          subject: "P150 Max - Consulta de producto",
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
    <section className="py-24 bg-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
              {t("contact.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {t("contact.description")}
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
                  <p className="text-brand-red text-sm">{t("contact.salesSpecialist")}</p>
                  <p className="text-gray-600">+36 30 163 9994</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.name")}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.email")}</label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.phone")}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.company")}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.message")}</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
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
                    <h4 className="font-semibold text-green-800">{t("contact.form.successTitle")}</h4>
                    <p className="text-green-700 text-sm">{t("contact.form.successMessage")}</p>
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
                    <h4 className="font-semibold text-red-800">{t("contact.form.errorTitle")}</h4>
                    <p className="text-red-700 text-sm">{t("contact.form.errorMessage")}</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("contact.form.sending") : t("contact.form.submit")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function P150MaxPage() {
  return (
    <>
      <HeroSection />
      <SpecificationsSection />
      <RevoSpraySection />
      <RevoCastSection />
      <RevoSlingSection />
      <ObstacleAvoidanceSection />
      <ControlSystemsSection />
      <WorkflowSection />
      <AutonomousFeaturesSection />
      <PowerSystemSection />
      <ContactSection />
    </>
  );
}
