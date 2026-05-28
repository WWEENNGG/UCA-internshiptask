import { useState } from "react";
import data from "../../mockdata/companysetupadvisoryfaq.js";
import { ChevronDown } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function CompanySetupAdvisoryFaq() {
  const [openIndex, setOpenIndex] = useState("");

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-sm font-bold tracking-widest text-gold uppercase mb-3"
            style={{
              color: "rgb(201, 162, 75)",
              fontSize: "48px",
            }}
          >
            FAQ
          </h2>
          <h3
            className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4"
            style={{
              fontFamily: "Playfair Display",
              fontSize: "36px",
            }}
          >
            Common Questions
          </h3>
          <p className="text-lg text-slate-600">
            Everything you need to know about setting up your business in
            Vietnam.
          </p>
        </div>

        <div className="space-y-4">
          {data.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
              >
                <span
                  className="font-bold text-navy pr-8"
                  style={
                    openIndex === index ? { color: "rgb(201, 162, 75)" } : {}
                  }
                >
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="text-gold flex-shrink-0"
                >
                  <ChevronDown size={20} color="rgb(201, 162, 75)" />
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
                      ease: "easeInOut",
                    }}
                  >
                    <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CompanySetupAdvisoryFaq;
