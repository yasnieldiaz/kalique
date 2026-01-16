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
  const t = useTranslations("r150");

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/70 to-transparent z-10" />
        <Image
          src="/images/products/r150-2022/hero.webp"
          alt="XAG R150 2022"
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
            XAG<sup className="text-2xl">®</sup> R150 2022
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

// Taglines Section
function TaglinesSection() {
  const t = useTranslations("r150.taglines");

  const taglines = [
    { text: t("terrain"), icon: "terrain" },
    { text: t("autonomous"), icon: "autonomous" },
    { text: t("easy"), icon: "easy" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-main">
        <div className="grid md:grid-cols-3 gap-8">
          {taglines.map((item, index) => (
            <motion.div
              key={item.icon}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center p-8 bg-gray-50 rounded-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-brand-red/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {item.icon === "terrain" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  )}
                  {item.icon === "autonomous" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  )}
                  {item.icon === "easy" && (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  )}
                </svg>
              </div>
              <p className="text-xl font-semibold text-navy italic">&ldquo;{item.text}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Core Specifications Section
function SpecificationsSection() {
  const t = useTranslations("r150.specs");

  const specs = [
    { value: 7, suffix: " N·m", label: t("ratedTorque"), description: t("motorPower") },
    { value: 1.2, suffix: " m/s", label: t("maxSpeed"), description: t("operatingSpeed") },
    { value: 1.2, suffix: " m", label: t("turningDiameter"), description: t("minimumRadius") },
    { value: 15, suffix: "°", label: t("climbingSlope"), description: t("maximumGrade") },
    { value: 58, suffix: "°", label: t("approachAngle"), description: t("frontClearance") },
    { value: 60, suffix: "°", label: t("departureAngle"), description: t("rearClearance") },
    { value: 962, suffix: " Wh", label: t("batteryCapacity"), description: t("battery") },
    { value: 11, suffix: " min", label: t("chargeTime"), description: t("fullCharge") },
  ];

  return (
    <section id="specifications" className="py-24 bg-gray-50">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("sectionBadge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("sectionTitle")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("sectionDesc")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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
              <p className="text-gray-600 text-sm">{spec.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Autonomous Operation Section
function AutonomousSection() {
  const t = useTranslations("r150.autonomous");

  const features = [
    t("features.rtk"),
    t("features.dualAntenna"),
    t("features.processor"),
    t("features.precision"),
    t("features.obstacle"),
    t("features.return"),
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
                src="/images/products/r150-2022/hero.webp"
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

// RevoSpray Ground 2 Section
function RevoSpraySection() {
  const t = useTranslations("r150.revospray");

  const features = [
    t("features.tank"),
    t("features.droplet"),
    t("features.width"),
    t("features.atomization"),
    t("features.flow"),
    t("features.monitoring"),
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ClipReveal className="relative order-2 lg:order-1">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/r150-2022/hero.webp"
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
                <div className="text-3xl font-bold text-brand-red">150L</div>
                <div className="text-sm text-gray-600">{t("tankCapacity")}</div>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <div className="text-3xl font-bold text-brand-red">12m</div>
                <div className="text-sm text-gray-600">{t("sprayWidth")}</div>
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

// RevoMower 2 Section
function RevoMowerSection() {
  const t = useTranslations("r150.revomower");

  const features = [
    t("features.width"),
    t("features.height"),
    t("features.blades"),
    t("features.speed"),
    t("features.adjustment"),
    t("features.maintenance"),
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
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-brand-red">90cm</div>
                <div className="text-sm text-gray-600">{t("cuttingWidth")}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="text-3xl font-bold text-brand-red">2-17cm</div>
                <div className="text-sm text-gray-600">{t("heightRange")}</div>
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

          <ClipReveal className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/r150-2022/hero.webp"
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

// Cargo Rack Section
function CargoRackSection() {
  const t = useTranslations("r150.cargo");

  const features = [
    t("features.payload"),
    t("features.rack"),
    t("features.routing"),
    t("features.detection"),
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
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-brand-red mb-1">200kg</div>
                <p className="text-sm text-white/70">{t("maxPayload")}</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <div className="text-3xl font-bold text-brand-red mb-1">1080mm</div>
                <p className="text-sm text-white/70">{t("rackSize")}</p>
              </div>
            </div>
            <ul className="space-y-3">
              {features.map((item, index) => (
                <motion.li
                  key={index}
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
                  <span className="text-white/90">{item}</span>
                </motion.li>
              ))}
            </ul>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden bg-navy-light">
              <Image
                src="/images/products/r150-2022/hero.webp"
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

// Control Systems Section
function ControlSystemsSection() {
  const t = useTranslations("r150.controls");

  const xagAppFeatures = [
    t("xagOneApp.features.oneTap"),
    t("xagOneApp.features.routing"),
    t("xagOneApp.features.multiOp"),
    t("xagOneApp.features.compatible"),
  ];

  const arc3Features = [
    t("arc3.features.knobs"),
    t("arc3.features.rtk"),
    t("arc3.features.battery"),
    t("arc3.features.design"),
  ];

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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* XAG One App */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="aspect-video bg-gradient-to-br from-brand-red to-red-700 relative flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
                <span className="text-2xl font-bold">XAG One App</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-navy mb-4">{t("xagOneApp.title")}</h3>
              <ul className="space-y-2">
                {xagAppFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Remote Controller */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            <div className="aspect-video bg-gradient-to-br from-navy to-navy-light relative flex items-center justify-center">
              <div className="text-white text-center">
                <svg className="w-20 h-20 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
                <span className="text-2xl font-bold">ARC3 Remote</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-navy mb-4">{t("arc3.title")}</h3>
              <ul className="space-y-2">
                {arc3Features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-gray-600">
                    <svg className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Operation Modes Section
function OperationModesSection() {
  const t = useTranslations("r150.operationModes");

  const modes = [
    { title: t("modes.route.title"), desc: t("modes.route.desc") },
    { title: t("modes.remote.title"), desc: t("modes.remote.desc") },
    { title: t("modes.planning.title"), desc: t("modes.planning.desc") },
    { title: t("modes.multiTask.title"), desc: t("modes.multiTask.desc") },
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
        </ScrollReveal>

        <div className="grid md:grid-cols-4 gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={mode.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                <span className="text-2xl font-bold">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{mode.title}</h3>
              <p className="text-white/70 text-sm">{mode.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Power System Section
function PowerSystemSection() {
  const t = useTranslations("r150.power");

  const stationFeatures = [
    t("chargingStation.features.batteries"),
    t("chargingStation.features.charge"),
    t("chargingStation.features.portable"),
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
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-red">962</div>
                <div className="text-sm text-gray-600">{t("capacity")}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-red">11</div>
                <div className="text-sm text-gray-600">{t("minCharge")}</div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-red">25</div>
                <div className="text-sm text-gray-600">{t("batteriesPerTank")}</div>
              </div>
            </div>

            <div className="bg-navy rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">{t("chargingStation.title")}</h3>
              <p className="text-white/70 mb-4">
                {t("chargingStation.description")}
              </p>
              <ul className="space-y-2 text-sm">
                {stationFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-red"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ClipReveal className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/products/r150-2022/hero.webp"
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

// Terrain Capability Section
function TerrainSection() {
  const t = useTranslations("r150.terrain");

  const terrains = [
    { name: t("types.field.name"), desc: t("types.field.desc") },
    { name: t("types.orchards.name"), desc: t("types.orchards.desc") },
    { name: t("types.forestry.name"), desc: t("types.forestry.desc") },
    { name: t("types.disinfection.name"), desc: t("types.disinfection.desc") },
  ];

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
          {terrains.map((terrain, index) => (
            <motion.div
              key={terrain.name}
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
              <h3 className="text-lg font-bold text-navy mb-2">{terrain.name}</h3>
              <p className="text-gray-600 text-sm">{terrain.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactSection() {
  const t = useTranslations("r150.contact");

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
        body: JSON.stringify({ ...formData, subject: "R150 2022 - Consulta de producto" }),
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
            className="bg-gray-50 rounded-2xl p-8"
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
export default function R150Page() {
  return (
    <>
      <HeroSection />
      <TaglinesSection />
      <SpecificationsSection />
      <AutonomousSection />
      <RevoSpraySection />
      <RevoMowerSection />
      <CargoRackSection />
      <ControlSystemsSection />
      <OperationModesSection />
      <PowerSystemSection />
      <TerrainSection />
      <ContactSection />
    </>
  );
}
