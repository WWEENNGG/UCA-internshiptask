import { motion } from "framer-motion";
import {
  ShieldIcon,
  FileTextIcon,
  MapPinIcon,
  DollarSignIcon,
} from "lucide-react";
import ServiceCard from "../ServiceCard";
const services = [
  {
    icon: ShieldIcon,
    title: "Insurance Services",
    features: [
      "Social insurance registration",
      "Health insurance support",
      "Employee compliance",
      "Reporting assistance",
    ],
  },
  {
    icon: FileTextIcon,
    title: "Work Permit Services",
    features: [
      "New applications",
      "Renewal & extension",
      "Work permit exemption",
      "Documentation support",
    ],
  },
  {
    icon: MapPinIcon,
    title: "TRC Services",
    features: [
      "Temporary Residence Card application",
      "Renewal support",
      "Immigration guidance",
      "Legal stay support",
    ],
  },
  {
    icon: DollarSignIcon,
    title: "Payroll Services",
    features: [
      "Monthly payroll processing",
      "Salary calculations",
      "Tax contribution support",
      "Payslip preparation",
      "Payroll reporting",
    ],
  },
];
export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2332] mb-4">
            Complete HR Compliance & Workforce Support
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              features={service.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
