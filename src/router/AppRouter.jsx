/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import MainLayout from "../layout/Mainlayout";
import HomePage from "../Pages/HomePage";
import CompanySetupAdvisoryPage from "../Pages/CompanySetupAdvisoryPage";
import ScrollToTop from "../components/ScrolltoTop";
import VirtualAssistantsPage from "../Pages/VirtualAssistantsPage";
import SalesOpsAuditPage from "../Pages/SalesOpsAuditPage";
import OurServices from "../components/Homepage/OurServices";
import HRComplianceLandingPage from "../Pages/HRComplianceLandingPage";

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="sync"></AnimatePresence>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <PageWrapper>
                <HomePage />
              </PageWrapper>
            }
          >
            {" "}
          </Route>

          <Route
            path="/ourservices"
            element={
              <PageWrapper>
                <OurServices />
              </PageWrapper>
            }
          ></Route>
          <Route
            path="/ourservices/companysetupadvisory"
            element={
              <PageWrapper>
                <CompanySetupAdvisoryPage />
              </PageWrapper>
            }
          ></Route>

          <Route
            path="/ourservices/virtualassistants"
            element={
              <PageWrapper>
                <VirtualAssistantsPage />
              </PageWrapper>
            }
          ></Route>

          <Route
            path="/ourservices/salesopsaudit"
            element={
              <PageWrapper>
                <SalesOpsAuditPage />
              </PageWrapper>
            }
          ></Route>

          <Route
            path="/ourservices/HR-Compliance-Landing"
            element={
              <PageWrapper>
                <HRComplianceLandingPage />
              </PageWrapper>
            }
          ></Route>
        </Route>
      </Routes>
    </>
  );
}
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
export default function AppRouter() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}
