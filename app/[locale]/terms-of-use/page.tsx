"use client";

import { useTranslations } from "next-intl";

export default function TermsOfUsePage() {
  const t = useTranslations("termsOfUse");

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
            {/* General Provisions */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("general.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("general.operator")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("general.scope")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("general.customer")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("general.consumer")}
            </p>

            {/* Technical Requirements */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("technical.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("technical.requirements")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("technical.prohibited")}
            </p>

            {/* Orders */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("orders.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("orders.availability")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("orders.process")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("orders.confirmation")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("orders.agreement")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("orders.language")}
            </p>

            {/* Payments */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("payments.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("payments.methods")}
            </p>

            {/* Delivery */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("delivery.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("delivery.options")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("delivery.time")}
            </p>

            {/* Withdrawal */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("withdrawal.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("withdrawal.period")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("withdrawal.deadline")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("withdrawal.start")}
            </p>

            {/* Complaints */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("complaints.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("complaints.liability")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("complaints.warranty")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("complaints.filing")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("complaints.period")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("complaints.resolution")}
            </p>

            {/* Guarantee */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("guarantee.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("guarantee.period")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("guarantee.scope")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("guarantee.exclusions")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("guarantee.remedies")}
            </p>

            {/* Data Protection */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("dataProtection.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("dataProtection.handling")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("dataProtection.policy")}
            </p>

            {/* Final Provisions */}
            <h2 className="text-2xl font-bold text-navy mt-8 mb-4">
              {t("final.title")}
            </h2>
            <p className="text-gray-600 mb-4">
              {t("final.disputes")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("final.alternative")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("final.business")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("final.law")}
            </p>
            <p className="text-gray-600 mb-4">
              {t("final.compliance")}
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
