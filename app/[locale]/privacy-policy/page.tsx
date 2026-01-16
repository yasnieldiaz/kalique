"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("privacyPolicy");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-24">
        <div className="container-main">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-xl text-white/80 max-w-2xl">
            {t("lastUpdated")}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Administrator */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("administrator.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("administrator.content")}
            </p>

            {/* Data Collection */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("dataCollection.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("dataCollection.intro")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>{t("dataCollection.items.personal")}</li>
              <li>{t("dataCollection.items.company")}</li>
              <li>{t("dataCollection.items.technical")}</li>
              <li>{t("dataCollection.items.usage")}</li>
            </ul>

            {/* Purpose */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("purpose.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("purpose.intro")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>{t("purpose.items.services")}</li>
              <li>{t("purpose.items.newsletter")}</li>
              <li>{t("purpose.items.orders")}</li>
              <li>{t("purpose.items.complaints")}</li>
              <li>{t("purpose.items.inquiries")}</li>
              <li>{t("purpose.items.marketing")}</li>
              <li>{t("purpose.items.legal")}</li>
              <li>{t("purpose.items.legitimate")}</li>
            </ul>

            {/* Retention */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("retention.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("retention.content")}
            </p>

            {/* Profiling */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("profiling.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("profiling.content")}
            </p>

            {/* Recipients */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("recipients.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("recipients.intro")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>{t("recipients.items.it")}</li>
              <li>{t("recipients.items.marketing")}</li>
              <li>{t("recipients.items.couriers")}</li>
              <li>{t("recipients.items.accounting")}</li>
              <li>{t("recipients.items.authorities")}</li>
            </ul>
            <p className="text-gray-600 mb-4">
              {t("recipients.transfer")}
            </p>

            {/* Rights */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("rights.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("rights.intro")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>{t("rights.items.access")}</li>
              <li>{t("rights.items.rectification")}</li>
              <li>{t("rights.items.erasure")}</li>
              <li>{t("rights.items.restriction")}</li>
              <li>{t("rights.items.portability")}</li>
              <li>{t("rights.items.objection")}</li>
              <li>{t("rights.items.complaint")}</li>
            </ul>

            {/* Cookies */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("cookies.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("cookies.intro")}
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4 space-y-2">
              <li>{t("cookies.items.session")}</li>
              <li>{t("cookies.items.statistics")}</li>
              <li>{t("cookies.items.marketing")}</li>
              <li>{t("cookies.items.functionality")}</li>
              <li>{t("cookies.items.fraud")}</li>
              <li>{t("cookies.items.improvement")}</li>
            </ul>
            <p className="text-gray-600 mb-4">
              {t("cookies.disable")}
            </p>

            {/* Security */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("security.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("security.content")}
            </p>

            {/* Contact */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("contact.intro")}
            </p>
            <ul className="list-none text-gray-600 mb-4 space-y-2">
              <li>
                <strong>{t("contact.email")}:</strong> gazda@xnetik.hu
              </li>
              <li>
                <strong>{t("contact.phone")}:</strong> +36 30 163 9994
              </li>
              <li>
                <strong>{t("contact.address")}:</strong> ul. Smolna 14, 44-200 Rybnik, Poland
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
