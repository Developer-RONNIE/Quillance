import React from "react";
import dynamic from "next/dynamic";
import { HeroSection } from "./sections/home/HeroSection";
import { RecognitionsSection } from "@/components/shared/RecognitionsSection";

// Dynamically import below-the-fold sections with SSR enabled to preserve SEO indexability perfectly.
const PartnerCompaniesSection = dynamic(
  () => import("@/components/shared/PartnerCompaniesSection").then(m => m.PartnerCompaniesSection),
  { ssr: true }
);

const HiringPartnersSection = dynamic(
  () => import("@/components/shared/HiringPartnersSection").then(m => m.HiringPartnersSection),
  { ssr: true }
);

const PoweredBySection = dynamic(
  () => import("@/components/shared/PoweredBySection").then(m => m.PoweredBySection),
  { ssr: true }
);

const HowItWorksSection = dynamic(
  () => import("@/components/shared/HowItWorksSection").then(m => m.HowItWorksSection),
  { ssr: true }
);

const CertificationSection = dynamic(
  () => import("@/components/shared/CertificationSection").then(m => m.CertificationSection),
  { ssr: true }
);

const FAQSection = dynamic(
  () => import("@/components/shared/FAQSection").then(m => m.FAQSection),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerCompaniesSection />
      <RecognitionsSection />
      <HiringPartnersSection />
      <PoweredBySection />
      <HowItWorksSection />
      <CertificationSection />
      <FAQSection />
    </>
  );
}
