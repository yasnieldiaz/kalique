"use client";

import { ScrollReveal, StaggerChildren, StaggerItem } from "@/components/animations";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <SpeedIcon />,
    title: "High Efficiency",
    description:
      "Cover up to 32 hectares per hour with our advanced drone technology, maximizing your operational productivity.",
  },
  {
    icon: <PrecisionIcon />,
    title: "Precision Spraying",
    description:
      "AI-powered systems ensure accurate application with minimal waste, saving costs and protecting crops.",
  },
  {
    icon: <SafetyIcon />,
    title: "Safety First",
    description:
      "Advanced obstacle avoidance and terrain following systems keep operations safe in any environment.",
  },
  {
    icon: <EcoIcon />,
    title: "Eco-Friendly",
    description:
      "Reduce chemical usage by up to 30% with precision application, benefiting both your farm and the environment.",
  },
  {
    icon: <SupportIcon />,
    title: "Expert Support",
    description:
      "Comprehensive training programs and dedicated technical support to ensure your success.",
  },
  {
    icon: <DataIcon />,
    title: "Smart Data",
    description:
      "Real-time monitoring and analytics to optimize your farming decisions and track performance.",
  },
];

export function FeaturesGrid() {
  return (
    <section className="section">
      <div className="container-main">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-brand-red/10 text-brand-red rounded-full text-sm font-medium mb-4">
              Why Choose XAG
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4">
              The Future of Farming
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the benefits of next-generation agricultural technology
              designed for Australian conditions.
            </p>
          </div>
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <StaggerItem key={feature.title}>
              <div className="p-8 rounded-2xl bg-white border border-gray-100 hover:shadow-lg hover:border-brand-red/20 transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-brand-red/10 flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}

// Icon Components
function SpeedIcon() {
  return (
    <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function PrecisionIcon() {
  return (
    <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function SafetyIcon() {
  return (
    <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function EcoIcon() {
  return (
    <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg className="w-7 h-7 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
