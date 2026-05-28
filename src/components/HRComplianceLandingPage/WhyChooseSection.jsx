import { motion } from "framer-motion";
import {
  AwardIcon,
  ZapIcon,
  HeadphonesIcon,
  TrendingUpIcon,
} from "lucide-react";
const reasons = [
  {
    icon: AwardIcon,
    title: "Local Compliance Expertise",
    description:
      "Stay compliant with Vietnam labor regulations and avoid penalties.",
  },
  {
    icon: ZapIcon,
    title: "Fast & Reliable Processing",
    description:
      "Reduce delays and administrative burden with streamlined workflows.",
  },
  {
    icon: HeadphonesIcon,
    title: "End-to-End Support",
    description: "From paperwork to payroll management, we handle everything.",
  },
  {
    icon: TrendingUpIcon,
    title: "Scalable Solutions",
    description: "Perfect for startups, SMEs, and large enterprises alike.",
  },
];
export default function WhyChooseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0B57D0] to-[#1976D2] text-white">
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
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Why Businesses Choose UCA
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
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
              }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                <reason.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p className="text-white/90">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
