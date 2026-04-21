import React from "react";
import { HeroSection } from "./sections/home/HeroSection";
import { PartnerCompaniesSection } from "@/components/shared/PartnerCompaniesSection";
import { RecognitionsSection } from "@/components/shared/RecognitionsSection";
import { PoweredBySection } from "@/components/shared/PoweredBySection";
import { HiringPartnersSection } from "@/components/shared/HiringPartnersSection";
import { HowItWorksSection } from "@/components/shared/HowItWorksSection";
import { CertificationSection } from "@/components/shared/CertificationSection";
import { FAQSection } from "@/components/shared/FAQSection";

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
