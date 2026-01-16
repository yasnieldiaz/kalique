"use client";

import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";

interface MegaNavProps {
  isScrolled: boolean;
}

const productItems = {
  airborne: [
    { name: "P150 Max", slug: "p150-max", image: "/images/products/p150-max/thumbnail.webp" },
    { name: "P100 Pro", slug: "p100-pro", image: "/images/products/p100-pro/thumbnail.webp" },
  ],
  landborne: [
    { name: "R150 2022", slug: "r150-2022", image: "/images/products/r150/thumbnail-new.webp" },
    { name: "R100", slug: "r100", image: "/images/products/r100/thumbnail.webp" },
    { name: "R200", slug: "r200", image: "/images/products/r200/thumbnail.webp" },
    { name: "APC2", slug: "apc2", image: "/images/products/apc2/thumbnail.webp" },
  ],
};

const sparePartsItems = [
  { name: "P100 Pro", slug: "p100-pro-2023", image: "/images/products/p100-pro/thumbnail.webp" },
  { name: "P150 Max", slug: "p150-max-2023", image: "/images/products/p150-max/thumbnail.webp" },
];

export function MegaNav({ isScrolled }: MegaNavProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const t = useTranslations("nav");

  const textColor = isScrolled ? "text-navy" : "text-white";
  const hoverColor = "hover:text-brand-red";

  return (
    <nav className="flex items-center gap-6">
      {/* Products Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("products")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className={cn(
            "flex items-center gap-1 py-2 font-medium transition-colors",
            textColor,
            hoverColor
          )}
        >
          {t("products")}
          <ChevronIcon className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {activeMenu === "products" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[100]"
            >
              <div className="bg-white rounded-xl shadow-xl p-6 min-w-[600px]">
                <div className="grid grid-cols-2 gap-8">
                  {/* Airborne */}
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{t("airborne")}</h3>
                    <p className="text-sm text-gray-500 mb-4">{t("airborneSub")}</p>
                    <div className="space-y-2">
                      {productItems.airborne.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/products/${item.slug}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-16 h-12 bg-gray-100 rounded-md overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium text-navy group-hover:text-brand-red transition-colors">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Landborne */}
                  <div>
                    <h3 className="font-semibold text-navy mb-1">{t("landborne")}</h3>
                    <p className="text-sm text-gray-500 mb-4">{t("landborneSub")}</p>
                    <div className="space-y-2">
                      {productItems.landborne.map((item) => (
                        <Link
                          key={item.slug}
                          href={`/products/${item.slug}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="w-16 h-12 bg-gray-100 rounded-md overflow-hidden">
                            <Image
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={48}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="font-medium text-navy group-hover:text-brand-red transition-colors">
                            {item.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link
                    href="/products"
                    className="text-brand-red font-medium hover:underline"
                  >
                    {t("viewAllProducts")} →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Resources Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("resources")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className={cn(
            "flex items-center gap-1 py-2 font-medium transition-colors",
            textColor,
            hoverColor
          )}
        >
          {t("resources")}
          <ChevronIcon className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {activeMenu === "resources" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[100]"
            >
              <div className="bg-white rounded-xl shadow-xl p-4 min-w-[220px]">
                <Link href="/download-center" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-navy hover:text-brand-red transition-colors">
                  {t("downloadCenter")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Services Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("services")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className={cn(
            "flex items-center gap-1 py-2 font-medium transition-colors",
            textColor,
            hoverColor
          )}
        >
          {t("services")}
          <ChevronIcon className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {activeMenu === "services" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[100]"
            >
              <div className="bg-white rounded-xl shadow-xl p-4 min-w-[200px]">
                <Link href="/field-operations" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-navy hover:text-brand-red transition-colors">
                  {t("fieldOperations")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spare Parts Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("spareParts")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className={cn(
            "flex items-center gap-1 py-2 font-medium transition-colors",
            textColor,
            hoverColor
          )}
        >
          {t("spareParts")}
          <ChevronIcon className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {activeMenu === "spareParts" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[100]"
            >
              <div className="bg-white rounded-xl shadow-xl p-4 min-w-[280px]">
                <p className="text-sm text-gray-500 mb-3 px-2">{t("sparePartsSub")}</p>
                <div className="space-y-1">
                  {sparePartsItems.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/parts-catalog/${item.slug}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <div className="w-14 h-10 bg-gray-100 rounded-md overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={56}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="font-medium text-navy group-hover:text-brand-red transition-colors">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <Link
                    href="/parts-catalog"
                    className="text-brand-red font-medium hover:underline text-sm"
                  >
                    {t("viewAllSpareParts")} →
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Company Dropdown */}
      <div
        className="relative"
        onMouseEnter={() => setActiveMenu("company")}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <button
          className={cn(
            "flex items-center gap-1 py-2 font-medium transition-colors",
            textColor,
            hoverColor
          )}
        >
          {t("company")}
          <ChevronIcon className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {activeMenu === "company" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-[100]"
            >
              <div className="bg-white rounded-xl shadow-xl p-4 min-w-[180px]">
                <Link href="/about-us" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-navy hover:text-brand-red transition-colors">
                  {t("aboutUs")}
                </Link>
                <Link href="/contact-us" className="block px-4 py-2 rounded-lg hover:bg-gray-50 text-navy hover:text-brand-red transition-colors">
                  {t("contact")}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
