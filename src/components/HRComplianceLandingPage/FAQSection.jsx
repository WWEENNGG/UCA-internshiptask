import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
export default function FAQSection() {
  const faqs = [
    {
      question: "What exactly can a virtual assistant help with?",
      answer:
        "Our virtual assistants handle a wide range of tasks including calendar management, email correspondence, data entry, market research, customer support, project coordination, and documentation. If it can be done remotely, our team can likely handle it.",
    },
    {
      question: "How quickly can we onboard a new assistant?",
      answer:
        "Typically, we can match you with a qualified virtual assistant and complete the onboarding process within 3 to 5 business days. We prioritize speed without compromising on the quality of the match.",
    },
    {
      question: "Can assistants support different time zones?",
      answer:
        "Yes. We operate globally and can provide support tailored to your specific time zone requirements, whether you need coverage during standard US business hours, European hours, or 24/7 rotational support.",
    },
    {
      question: "Is project support customizable?",
      answer:
        "Absolutely. We don't believe in one-size-fits-all. We work closely with you during the initial consultation to understand your specific workflows, tools, and goals to create a customized support plan.",
    },
    {
      question: "How do you ensure data security and confidentiality?",
      answer:
        "All our professionals sign strict NDAs and undergo comprehensive background checks. We utilize enterprise-grade security protocols and can integrate seamlessly into your company's existing secure infrastructure.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <section className="py-5 lg:py-5 bg-slate-50 mb-8" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Frequently Asked{" "}
            <span className="font-serif italic text-blue-600 font-normal">
              Questions
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{
                opacity: 0,
                y: 10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: idx * 0.1,
              }}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={activeIndex === idx}
              >
                <span
                  className="text-lg font-semibold text-slate-900 pr-8"
                  style={
                    activeIndex === idx
                      ? { color: "oklch(0.546 0.245 262.881)" }
                      : {}
                  }
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: activeIndex === idx ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                  }}
                  className="flex-shrink-0 text-blue-500"
                >
                  <ChevronDownIcon size={20} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === idx && (
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
                      ease: "easeInOut",
                    }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
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
