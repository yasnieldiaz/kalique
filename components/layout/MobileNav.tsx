"use client";

import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";

interface MobileNavProps {
  onClose: () => void;
}

interface MenuItem {
  titleKey: string;
  items: { nameKey: string; href: string }[];
}

const menuItems: MenuItem[] = [
  {
    titleKey: "products",
    items: [
      { nameKey: "p150Max", href: "/products/p150-max" },
      { nameKey: "p100Pro", href: "/products/p100-pro" },
      { nameKey: "r150", href: "/products/r150-2022" },
      { nameKey: "r100", href: "/products/r100" },
      { nameKey: "r200", href: "/products/r200" },
      { nameKey: "apc2", href: "/products/apc2" },
    ],
  },
  {
    titleKey: "resources",
    items: [
      { nameKey: "downloadCenter", href: "/download-center" },
    ],
  },
  {
    titleKey: "services",
    items: [
      { nameKey: "fieldOperations", href: "/field-operations" },
    ],
  },
  {
    titleKey: "spareParts",
    items: [
      { nameKey: "p100Pro", href: "/parts-catalog/p100-pro-2023" },
      { nameKey: "p150Max", href: "/parts-catalog/p150-max-2023" },
    ],
  },
  {
    titleKey: "company",
    items: [
      { nameKey: "aboutUs", href: "/about-us" },
      { nameKey: "contact", href: "/contact-us" },
    ],
  },
];

const productNames: Record<string, string> = {
  p150Max: "XAG P150 Max",
  p100Pro: "XAG P100 Pro",
  r150: "XAG R150",
  r100: "XAG R100",
  r200: "XAG R200",
  apc2: "XAG APC2",
};

export function MobileNav({ onClose }: MobileNavProps) {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const t = useTranslations("nav");
  const tCommon = useTranslations("common");

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  const menuContent = (
    <div
      className="fixed inset-0 lg:hidden"
      style={{ zIndex: 9999 }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/20 ${isClosing ? 'animate-[fadeOut_0.2s_ease-out_forwards]' : 'animate-[fadeIn_0.15s_ease-out]'}`}
        onClick={handleClose}
      />
      {/* Menu Panel */}
      <div
        className={`absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl ${isClosing ? 'animate-[slideOutRight_0.2s_ease-out_forwards]' : 'animate-[slideInRight_0.2s_ease-out]'}`}
      >
        <div className="h-full overflow-y-auto pt-6 pb-8 px-6">
        {/* Close Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleClose}
            className="p-2 text-navy hover:text-brand-red transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="space-y-2">
          {menuItems.map((section) => (
            <div key={section.titleKey} className="border-b border-gray-100">
              <button
                onClick={() =>
                  setExpandedSection(
                    expandedSection === section.titleKey ? null : section.titleKey
                  )
                }
                className="flex items-center justify-between w-full py-4 text-lg font-semibold text-navy"
              >
                {t(section.titleKey)}
                <motion.span
                  animate={{ rotate: expandedSection === section.titleKey ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronIcon className="w-5 h-5" />
                </motion.span>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: expandedSection === section.titleKey ? "auto" : 0,
                  opacity: expandedSection === section.titleKey ? 1 : 0,
                }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="pb-4 pl-4 space-y-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.nameKey}
                      href={item.href}
                      onClick={handleClose}
                      className="block py-2 text-gray-600 hover:text-brand-red transition-colors"
                    >
                      {productNames[item.nameKey] || t(item.nameKey)}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </nav>

        <div className="mt-8">
          <Button href="/contact-us" variant="primary" className="w-full" onClick={handleClose}>
            {tCommon("contactUs")}
          </Button>
        </div>
        </div>
      </div>
    </div>
  );

  if (!mounted) return null;

  return createPortal(menuContent, document.body);
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
