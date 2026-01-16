"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

const downloadItems = [
  {
    id: "p150maxManual",
    href: "/pdfs/p150-max-user-manual.pdf",
  },
  {
    id: "p100proSpecs",
    href: "/pdfs/p100-pro-specs.pdf",
  },
  {
    id: "r150Specs",
    href: "/pdfs/r150-specs.pdf",
  },
  {
    id: "v40Specs",
    href: "/pdfs/v40-specs.pdf",
  },
];

export default function DownloadCenterPage() {
  const t = useTranslations("downloadCenter");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-24">
        <div className="container-main">
          <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
            {t("badge")}
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("description")}
          </p>
        </div>
      </section>

      {/* XAG One App Section */}
      <section className="section bg-gradient-to-br from-navy via-navy to-navy-light">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-brand-red rounded-full text-white text-sm font-medium mb-4">
                {t("app.badge")}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t("app.title")}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {t("app.description")}
              </p>
              <ul className="space-y-4 mb-8">
                {["feature1", "feature2", "feature3", "feature4"].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center">
                      <svg className="w-4 h-4 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/90">{t(`app.${feature}`)}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://apps.apple.com/au/app/xag-one/id1541133681"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white text-navy rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">{t("app.downloadOn")}</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </a>
                <a
                  href="https://device.xa.com/public/download/apk?appCode=xag_one_release&langCode=en&region=international"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-white text-navy rounded-xl font-medium hover:bg-gray-100 transition-colors shadow-lg"
                >
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-500">{t("app.getItOn")}</div>
                    <div className="text-lg font-semibold">Android APK</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="relative hidden md:flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-red/30 to-green-500/30 rounded-[3rem] blur-3xl scale-110"></div>
                <Image
                  src="/images/xag-one-app-mockup.webp"
                  alt="XAG One App"
                  width={320}
                  height={650}
                  className="relative drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="section bg-gray-50">
        <div className="container-main">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
              {t("docs.badge")}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              {t("docs.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("docs.description")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {downloadItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-brand-red to-brand-red-hover rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-lg">{t(`downloads.${item.id}.title`)}</h3>
                    <p className="text-sm text-gray-600 mt-1">{t(`downloads.${item.id}.description`)}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      <span className="px-3 py-1 bg-navy/5 text-navy text-xs font-medium rounded-full">
                        {t(`downloads.${item.id}.product`)}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {t(`downloads.${item.id}.format`)}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        {t(`downloads.${item.id}.fileSize`)}
                      </span>
                    </div>
                  </div>
                </div>
                <a
                  href={item.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-brand-red text-white rounded-xl hover:bg-brand-red-hover transition-colors whitespace-nowrap font-medium shadow-md hover:shadow-lg"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  {t("download")}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
