import { motion } from "framer-motion";
import { CheckCircle2Icon } from "lucide-react";
const benefits = [
  "Reduce HR administrative workload",
  "Avoid compliance penalties",
  "Faster employee onboarding",
  "Accurate payroll processing",
  "Reliable support for foreign employees",
];
export default function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1a2332] mb-6">
              Focus on Growth While We Handle Compliance
            </h2>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex items-start gap-4 bg-[#f0f7ff] rounded-xl p-4"
                >
                  <div className="w-6 h-6 bg-[#0B57D0] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-lg text-[#1a2332] font-medium">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
              alt="Business team collaboration"
              className="rounded-3xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#0B57D0] opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#1976D2] opacity-20 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
