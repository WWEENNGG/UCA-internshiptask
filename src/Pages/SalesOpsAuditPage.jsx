import { ApproachSection } from "../components/SalesOpsAuditPage/ApproachSection";
import HeroSection from "../components/SalesOpsAuditPage/HeroSection";
import { ProblemSection } from "../components/SalesOpsAuditPage/ProblemSection";
import ResultsSection from "../components/SalesOpsAuditPage/ResultsSection";
import { ServicesSection } from "../components/SalesOpsAuditPage/ServicesSection";
import WhyUsSection from "../components/SalesOpsAuditPage/WhyUsSection";

function SalesOpsAuditPage() {
  return (
    <>
      <div>
        <HeroSection />
        <ProblemSection />
        <ApproachSection />
        <ServicesSection />
        <WhyUsSection />
        <ResultsSection />
      </div>
    </>
  );
}

export default SalesOpsAuditPage;
