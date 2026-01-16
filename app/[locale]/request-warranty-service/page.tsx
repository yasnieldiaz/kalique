"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export default function RequestWarrantyServicePage() {
  const t = useTranslations("warrantyService");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    productModel: "",
    serialNumber: "",
    purchaseDate: "",
    purchaseLocation: "",
    issueDescription: "",
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
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: `Solicitud de Garantía - ${formData.productModel}`,
          message: `Modelo: ${formData.productModel}\nNúmero de Serie: ${formData.serialNumber}\nFecha de Compra: ${formData.purchaseDate}\nLugar de Compra: ${formData.purchaseLocation}\n\nDescripción del Problema:\n${formData.issueDescription}`,
        }),
      });
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", productModel: "", serialNumber: "", purchaseDate: "", purchaseLocation: "", issueDescription: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

      {/* Warranty Info */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container-main">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="font-semibold text-blue-900 mb-2">
              {t("infoTitle")}
            </h3>
            <p className="text-blue-800 text-sm">
              {t("infoDescription")}
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-white">
        <div className="container-main max-w-4xl">
          <div className="bg-gray-50 rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="text-2xl font-bold text-navy mb-6">
                {t("formTitle")}
              </h2>

              {/* Contact Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-navy">
                  {t("contactInfo")}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("fullName")} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full h-[50px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("emailAddress")} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-[50px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("phoneNumber")} *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full h-[50px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("companyName")}
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full h-[50px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Product & Purchase Information */}
              <div className="space-y-6 pt-6 border-t">
                <h3 className="text-lg font-semibold text-navy">
                  {t("productPurchaseInfo")}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="productModel"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("productModel")} *
                    </label>
                    <select
                      id="productModel"
                      name="productModel"
                      required
                      value={formData.productModel}
                      onChange={handleChange}
                      className="w-full h-[50px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent bg-white"
                    >
                      <option value="">{t("selectProduct")}</option>
                      <option value="p150-max">XAG P150 Max</option>
                      <option value="p100-pro">XAG P100 Pro</option>
                      <option value="r150">XAG R150 2022</option>
                      <option value="r100">XAG R100</option>
                      <option value="r200">XAG R200</option>
                      <option value="apc2">XAG APC2</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="serialNumber"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("serialNumber")} *
                    </label>
                    <input
                      type="text"
                      id="serialNumber"
                      name="serialNumber"
                      required
                      value={formData.serialNumber}
                      onChange={handleChange}
                      className="w-full h-[50px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="purchaseDate"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("purchaseDate")} *
                    </label>
                    <input
                      type="date"
                      id="purchaseDate"
                      name="purchaseDate"
                      required
                      value={formData.purchaseDate}
                      onChange={handleChange}
                      className="w-full h-[50px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent bg-white"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="purchaseLocation"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      {t("purchaseLocation")} *
                    </label>
                    <input
                      type="text"
                      id="purchaseLocation"
                      name="purchaseLocation"
                      required
                      value={formData.purchaseLocation}
                      onChange={handleChange}
                      placeholder={t("purchaseLocationPlaceholder")}
                      className="w-full h-[50px] px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent bg-white"
                    />
                  </div>
                </div>
              </div>

              {/* Issue Description */}
              <div className="space-y-6 pt-6 border-t">
                <h3 className="text-lg font-semibold text-navy">
                  {t("claimDetails")}
                </h3>
                <div>
                  <label
                    htmlFor="issueDescription"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("issueLabel")} *
                  </label>
                  <textarea
                    id="issueDescription"
                    name="issueDescription"
                    required
                    rows={6}
                    value={formData.issueDescription}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-red focus:border-transparent resize-none"
                    placeholder={t("issuePlaceholder")}
                  />
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                <strong>{t("noteLabel")}</strong> {t("noteText")}
              </div>

              <button
                type="submit"
                className="w-full bg-brand-red text-white py-4 px-8 rounded-lg font-semibold hover:bg-brand-red-hover transition-colors"
              >
                {t("submitButton")}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
