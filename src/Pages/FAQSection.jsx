import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
const faqs = [
  {
    question: "How long does a work permit process take?",
    answer:
      "The work permit process typically takes 15-20 business days from the date of submission, provided all documents are complete and accurate. We expedite the process by ensuring all requirements are met upfront.",
  },
  {
    question: "What documents are required for a TRC?",
    answer:
      "Required documents include a valid passport, work permit, labor contract, health certificate, criminal record check, and proof of accommodation. We provide a complete checklist and guide you through each requirement.",
  },
  {
    question: "Can UCA manage payroll for foreign employees?",
    answer:
      "Yes, we specialize in payroll management for both local and foreign employees, including tax calculations, social insurance contributions, and compliance with Vietnamese labor laws.",
  },
  {
    question: "Do you support insurance registration?",
    answer:
      "Absolutely. We handle all aspects of insurance registration including social insurance, health insurance, and unemployment insurance for your employees, ensuring full compliance with Vietnamese regulations.",
  },
  {
    question: "Can small businesses use payroll services?",
    answer:
      "Yes, our services are scalable and designed for businesses of all sizes, from startups with just a few employees to large enterprises. We tailor our solutions to match your specific needs and budget.",
  },
];
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section className="py-20 bg-gradient-to-b from-[#f0f7ff] to-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
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
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
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
              className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-[#1a2332] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <ChevronDownIcon className="w-6 h-6 text-[#0B57D0] flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
