import { motion } from "framer-motion";
import {
  FactoryIcon,
  MonitorIcon,
  ShoppingCartIcon,
  BuildingIcon,
  RocketIcon,
  Building2Icon,
} from "lucide-react";
const industries = [
  {
    icon: FactoryIcon,
    name: "Manufacturing",
  },
  {
    icon: MonitorIcon,
    name: "Technology",
  },
  {
    icon: ShoppingCartIcon,
    name: "Trading Companies",
  },
  {
    icon: BuildingIcon,
    name: "Foreign Investment",
  },
  {
    icon: RocketIcon,
    name: "Startups & SMEs",
  },
  {
    icon: Building2Icon,
    name: "Corporate Enterprises",
  },
];
export default function IndustriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#f0f7ff]">
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
            Supporting Businesses Across Industries
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
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
                boxShadow: "0 10px 30px rgba(11, 87, 208, 0.15)",
              }}
              className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col items-center text-center transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0B57D0] to-[#1976D2] rounded-xl flex items-center justify-center mb-4">
                <industry.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-sm font-semibold text-[#1a2332]">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
