"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Link, useRouter } from "@/i18n/routing";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { MegaNav } from "./MegaNav";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations("common");
  const pathname = usePathname();
  const router = useRouter();

  // Check if we're on a page that needs dark header (non-home pages)
  const isInternalPage = pathname !== "/" &&
    pathname !== "/hu" &&
    pathname !== "/en" &&
    !pathname.endsWith("/") &&
    pathname.split("/").length > 2;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Use scrolled style if actually scrolled OR if on internal page
  const useScrolledStyle = isScrolled || isInternalPage;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        useScrolledStyle
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-main">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              const isHomePage = pathname === "/" || pathname === "/hu" || pathname === "/en";
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                router.push("/");
              }
            }}
            className="relative z-10 cursor-pointer"
          >
            <Image
              src="/images/xnetik-simple.png"
              alt="XNETIK Hungary"
              width={140}
              height={40}
              className={cn(
                "transition-all duration-300",
                useScrolledStyle && "invert"
              )}
              priority
              unoptimized
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <MegaNav isScrolled={useScrolledStyle} />
            <LanguageSwitcher isScrolled={useScrolledStyle} />
            <Button href="/contact-us" variant={useScrolledStyle ? "primary" : "outline-white"}>
              {t("contactUs")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher isScrolled={useScrolledStyle} />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative z-10 p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={cn(
                    "block h-0.5 w-full transition-all duration-300",
                    useScrolledStyle || isMobileMenuOpen ? "bg-navy" : "bg-white",
                    isMobileMenuOpen && "rotate-45 translate-y-2"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full transition-all duration-300",
                    useScrolledStyle || isMobileMenuOpen ? "bg-navy" : "bg-white",
                    isMobileMenuOpen && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-full transition-all duration-300",
                    useScrolledStyle || isMobileMenuOpen ? "bg-navy" : "bg-white",
                    isMobileMenuOpen && "-rotate-45 -translate-y-2"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <MobileNav onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
}
