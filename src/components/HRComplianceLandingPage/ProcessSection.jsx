import { motion } from "framer-motion";
import {
  MessageSquareIcon,
  FileSearchIcon,
  SettingsIcon,
  CheckCircleIcon,
} from "lucide-react";
const steps = [
  {
    icon: MessageSquareIcon,
    title: "Consultation & Requirement Review",
    description: "We discuss your needs and review all requirements",
  },
  {
    icon: FileSearchIcon,
    title: "Document Collection & Verification",
    description: "Gather and verify all necessary documentation",
  },
  {
    icon: SettingsIcon,
    title: "Application / Processing",
    description: "Submit applications and manage the entire process",
  },
  {
    icon: CheckCircleIcon,
    title: "Completion & Ongoing Support",
    description: "Deliver results and provide continuous assistance",
  },
];
export default function ProcessSection() {
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
            Our Simple Process
          </h2>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#0B57D0] to-[#1976D2] transform -translate-y-1/2"></div>

          <div className="grid grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
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
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#0B57D0] to-[#1976D2] rounded-full flex items-center justify-center mx-auto shadow-lg relative z-10">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#0B57D0] opacity-20 rounded-full blur-xl"></div>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-sm font-bold text-[#0B57D0] mb-2">
                    Step {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a2332] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
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
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#0B57D0] to-[#1976D2] rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-1 flex-1 bg-gradient-to-b from-[#0B57D0] to-[#1976D2] mt-2"></div>
                )}
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 flex-1">
                <div className="text-sm font-bold text-[#0B57D0] mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-lg font-bold text-[#1a2332] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
