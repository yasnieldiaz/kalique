import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-navy to-navy-light">
      <div className="container-main text-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/logo-xag-imega-white.svg"
            alt="XAG IMEGA"
            width={180}
            height={50}
            className="mx-auto"
          />
        </div>

        {/* 404 Number */}
        <h1 className="text-[150px] md:text-[200px] font-bold text-white/10 leading-none select-none">
          404
        </h1>

        {/* Error Message */}
        <div className="-mt-16 md:-mt-24 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>

        {/* Helpful Links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Go to Homepage
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-white/20"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            View Products
          </Link>
        </div>

        {/* Quick Links */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-white/50 text-sm mb-4">Or try these popular pages:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about-us" className="text-white/70 hover:text-white transition-colors">
              About Us
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/contact-us" className="text-white/70 hover:text-white transition-colors">
              Contact
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/products/p150-max" className="text-white/70 hover:text-white transition-colors">
              P150 Max
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/download-center" className="text-white/70 hover:text-white transition-colors">
              Downloads
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/xag-care-express" className="text-white/70 hover:text-white transition-colors">
              XAG Care
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
