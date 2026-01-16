"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

import "swiper/css";
import "swiper/css/effect-fade";

interface Slide {
  id: string;
  titleKey: string;
  subtitleKey: string;
  image: string;
  productHref: string;
}

const slides: Slide[] = [
  {
    id: "p150-max",
    titleKey: "XAG P150 Max",
    subtitleKey: "p150MaxSubtitle",
    image: "/images/products/p150-max/hero.webp",
    productHref: "/products/p150-max",
  },
  {
    id: "p100-pro",
    titleKey: "XAG P100 Pro",
    subtitleKey: "p100ProSubtitle",
    image: "/images/products/p100-pro/hero.webp",
    productHref: "/products/p100-pro",
  },
  {
    id: "r150",
    titleKey: "XAG R150 2022",
    subtitleKey: "r150Subtitle",
    image: "/images/products/r150/hero-new.webp",
    productHref: "/products/r150-2022",
  },
  {
    id: "apc2",
    titleKey: "XAG APC2",
    subtitleKey: "apc2Subtitle",
    image: "/images/products/apc2/hero-bg.jpg",
    productHref: "/products/apc2",
  },
];

const AUTOPLAY_DELAY = 5000;

export function HeroSlider() {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const t = useTranslations("home");

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    setProgress(0);
  };

  const handleAutoplayTimeLeft = useCallback(
    (_swiper: SwiperType, _timeLeft: number, percentage: number) => {
      setProgress((1 - percentage) * 100);
    },
    []
  );

  return (
    <section className="relative h-screen min-h-[700px] max-h-[1000px] w-full overflow-hidden bg-navy">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={800}
        autoplay={{
          delay: AUTOPLAY_DELAY,
          disableOnInteraction: false,
        }}
        loop
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange}
        onAutoplayTimeLeft={handleAutoplayTimeLeft}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.titleKey}
                  fill
                  className="object-cover"
                  priority={index < 2}
                  loading={index < 2 ? "eager" : "lazy"}
                  sizes="100vw"
                  quality={85}
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/60 to-navy/30" />
              </div>

              {/* Content */}
              <div className="container-main relative z-10 h-full flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={activeIndex === index ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="max-w-2xl text-white"
                >
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={activeIndex === index ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="text-brand-red font-medium text-lg mb-2"
                  >
                    {t(slide.subtitleKey)}
                  </motion.p>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
                    {slide.titleKey}
                  </h1>
                  <p className="text-xl md:text-2xl text-white/80 mb-8">
                    {t("heroTagline")}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button href="/contact-us" variant="primary" size="lg">
                      {t("ctaOrderNow")}
                    </Button>
                    <Button href={slide.productHref} variant="outline-white" size="lg">
                      {t("ctaLearnMore")}
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Product Navigation - Right Side */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => {
              swiperRef.current?.slideToLoop(index);
              setProgress(0);
            }}
            className={cn(
              "relative w-48 text-left px-4 py-3 rounded-lg transition-all duration-300 overflow-hidden",
              activeIndex === index
                ? "bg-white text-navy"
                : "bg-white/10 text-white hover:bg-white/20"
            )}
          >
            {/* Progress Bar */}
            {activeIndex === index && (
              <div
                className="absolute bottom-0 left-0 h-1 bg-brand-red"
                style={{ width: `${progress}%` }}
              />
            )}
            <span className="text-sm font-medium block">{slide.titleKey}</span>
            <span className={cn(
              "text-xs",
              activeIndex === index ? "text-gray-600" : "text-white/60"
            )}>
              {t(slide.subtitleKey)}
            </span>
          </button>
        ))}
      </div>

      {/* Mobile Pagination */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 lg:hidden">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              swiperRef.current?.slideToLoop(index);
              setProgress(0);
            }}
            className="relative w-12 h-1 rounded-full overflow-hidden bg-white/30"
            aria-label={`Go to slide ${index + 1}`}
          >
            {activeIndex === index && (
              <div
                className="absolute inset-y-0 left-0 bg-brand-red rounded-full"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-20 hidden md:block">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white/60 text-sm flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span>{t("scrollToExplore")}</span>
        </motion.div>
      </div>
    </section>
  );
}
