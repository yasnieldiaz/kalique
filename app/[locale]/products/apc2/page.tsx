"use client";

import { useState } from "react";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animations";
import { useTranslations } from "next-intl";

// Hero Section
function HeroSection() {
  const t = useTranslations("apc2");

  return (
    <section className="relative min-h-screen bg-navy overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10" />
        <Image
          src="/images/products/apc2/hero-bg.webp"
          alt="XAG APC2"
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
            XAG<sup className="text-2xl">®</sup> APC2
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

// Features Section
function FeaturesSection() {
  const t = useTranslations("apc2");

  const features = [
    { key: "allInOne", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
    { key: "highPrecision", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
    { key: "dualPositioning", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { key: "advancedGuidance", icon: "M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" },
    { key: "mobileControl", icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" },
    { key: "wideCompatibility", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("features.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("features.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("features.description")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.icon} />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{t(`features.${feature.key}`)}</h3>
              <p className="text-gray-600">{t(`features.${feature.key}Desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Variants Section
function VariantsSection() {
  const t = useTranslations("apc2");

  const variants = [
    {
      key: "standard",
      image: "/images/products/apc2/standard.jpg",
    },
    {
      key: "flex",
      image: "/images/products/apc2/flex.jpg",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("variants.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("variants.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("variants.description")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-2xl overflow-hidden"
            >
              <div className="aspect-video bg-gray-200 relative">
                <Image
                  src={variant.image}
                  alt={t(`variants.${variant.key}.name`)}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-navy mb-3">
                  {t(`variants.${variant.key}.name`)}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t(`variants.${variant.key}.description`)}
                </p>
                <ul className="space-y-3">
                  {["feature1", "feature2", "feature3", "feature4"].map((featureKey) => (
                    <li key={featureKey} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-gray-700">{t(`variants.${variant.key}.${featureKey}`)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Specifications Section
function SpecificationsSection() {
  const t = useTranslations("apc2");

  const specs = [
    { key: "accuracy" },
    { key: "guidanceModes" },
    { key: "positioning" },
    { key: "installation" },
  ];

  return (
    <section id="specifications" className="py-24 bg-navy text-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
            {t("specs.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t("specs.title")}
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            {t("specs.description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={spec.key}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 rounded-2xl p-6 text-center backdrop-blur-sm"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-red mb-2">
                {t(`specs.${spec.key}Value`)}
              </div>
              <h3 className="text-lg font-semibold">{t(`specs.${spec.key}`)}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Guidance Section
function GuidanceSection() {
  const t = useTranslations("apc2");

  const modes = ["abStraight", "abCurve", "abEquidistant", "drillSeeding", "diagonalHarrowing"];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("guidance.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("guidance.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("guidance.description")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modes.map((mode, index) => (
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-brand-red">{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{t(`guidance.modes.${mode}`)}</h3>
              <p className="text-gray-600 text-sm">{t(`guidance.modes.${mode}Desc`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Compatibility Section
function CompatibilitySection() {
  const t = useTranslations("apc2");

  const machines = ["tractors", "harvesters", "sprayers", "riceTransplanters"];

  return (
    <section className="py-24 bg-white">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("compatibility.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("compatibility.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("compatibility.description")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {machines.map((machine, index) => (
            <motion.div
              key={machine}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="w-20 h-20 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy">{t(`compatibility.${machine}`)}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Accessories Section
function AccessoriesSection() {
  const t = useTranslations("apc2");

  const accessories = ["xrtk7", "xre1", "wcp1"];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container-main">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
            {t("accessories.badge")}
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
            {t("accessories.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t("accessories.description")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {accessories.map((accessory, index) => (
            <motion.div
              key={accessory}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-4">
                <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2">{t(`accessories.${accessory}.name`)}</h3>
              <p className="text-gray-600">{t(`accessories.${accessory}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Form Section
function ContactSection() {
  const t = useTranslations("apc2");
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
        body: JSON.stringify({ ...formData, subject: "APC2 - Consulta de producto" }),
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
    <section className="py-24 bg-navy text-white">
      <div className="container-main">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <span className="inline-block px-4 py-1 bg-brand-red text-white rounded-full text-sm font-medium mb-4">
              {t("contact.badge")}
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-lg text-white/70 mb-8">
              {t("contact.description")}
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">Email</p>
                  <p className="text-white/70">gazda@xnetik.hu</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-red/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">XNETIK Hungary</p>
                  <p className="text-brand-red text-sm">{t("contact.salesSpecialist")}</p>
                  <p className="text-white/70">+36 30 163 9994</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.email")}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent text-gray-900"
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
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.company")}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent text-gray-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">{t("contact.form.message")}</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none text-gray-900"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-4 bg-brand-red text-white font-semibold rounded-lg hover:bg-brand-red-hover transition-colors"
              >
                {t("contact.form.submit")}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Main Page Component
export default function APC2Page() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <VariantsSection />
      <SpecificationsSection />
      <GuidanceSection />
      <CompatibilitySection />
      <AccessoriesSection />
      <ContactSection />
    </>
  );
}
