import BenefitsSection from "../components/HRComplianceLandingPage/BenefitsSection";
import FAQSection from "../components/HRComplianceLandingPage/FAQSection";
import HeroSection from "../components/HRComplianceLandingPage/HeroSection";
import IndustriesSection from "../components/HRComplianceLandingPage/IndustriesSection";
import PainPointsSection from "../components/HRComplianceLandingPage/PainPointsSection";
import ProcessSection from "../components/HRComplianceLandingPage/ProcessSection";
import ServicesSection from "../components/HRComplianceLandingPage/ServicesSection";
import WhyChooseSection from "../components/HRComplianceLandingPage/WhyChooseSection";

function HRComplianceLandingPage() {
  return (
    <>
      <div>
        <HeroSection />
        <PainPointsSection />
        <ServicesSection />
        <WhyChooseSection />
        <ProcessSection />
        <IndustriesSection />
        <BenefitsSection />
        <FAQSection />
      </div>
    </>
  );
}

export default HRComplianceLandingPage;
