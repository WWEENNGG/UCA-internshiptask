import ComparisonSection from "../components/VirtualAssistantsPage/Comparison";
import FAQSection from "../components/HRComplianceLandingPage/FAQSection";
import HeroSection from "../components/VirtualAssistantsPage/HeroSection";
import HowItWorksSection from "../components/VirtualAssistantsPage/HowItWorksSection";
import ServicesSection from "../components/VirtualAssistantsPage/ServicesSection";
import WhyChooseSection from "../components/VirtualAssistantsPage/WhyChooseUs";

function VirtualAssistantsPage() {
  return (
    <>
      <div>
        <HeroSection />
        <WhyChooseSection />
        <ServicesSection />
        <HowItWorksSection />
        <ComparisonSection />
        <FAQSection></FAQSection>
      </div>
    </>
  );
}

export default VirtualAssistantsPage;
