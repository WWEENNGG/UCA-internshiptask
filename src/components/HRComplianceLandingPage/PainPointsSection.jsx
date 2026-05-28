import { motion } from "framer-motion";
import {
  AlertCircleIcon,
  ClockIcon,
  FileWarningIcon,
  ShieldAlertIcon,
  TrendingDownIcon,
} from "lucide-react";
const painPoints = [
  {
    icon: AlertCircleIcon,
    title: "Confusing Insurance Regulations",
    description:
      "Complex compliance requirements that are difficult to navigate",
  },
  {
    icon: ClockIcon,
    title: "Time-Consuming Payroll",
    description: "Manual payroll processing taking valuable internal resources",
  },
  {
    icon: FileWarningIcon,
    title: "Work Permit Delays",
    description: "Lengthy approval processes affecting business operations",
  },
  {
    icon: ShieldAlertIcon,
    title: "TRC Documentation Complexity",
    description: "Complicated paperwork and unclear requirements",
  },
  {
    icon: TrendingDownIcon,
    title: "Compliance Penalty Risk",
    description: "Potential fines and legal issues from non-compliance",
  },
];
export default function PainPointsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#f0f7ff] to-white">
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
            Managing HR Compliance Should not Slow Down Your Business
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
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
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                <point.icon className="w-7 h-7 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-[#1a2332] mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
