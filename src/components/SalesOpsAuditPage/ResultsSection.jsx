import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
const results = [
  {
    metric: "+45%",
    label: "Revenue Increase",
    context: "B2B SaaS Client",
    desc: "Achieved within 6 months by restructuring the sales funnel and implementing targeted CRM automation.",
    positive: true,
  },
  {
    metric: "-28%",
    label: "Operational Costs",
    context: "Manufacturing SME",
    desc: "Reduced overhead through workflow optimization and eliminating redundant software subscriptions.",
    positive: true, // It's a reduction in cost, which is good
  },
  {
    metric: "3x",
    label: "Sales Velocity",
    context: "Fintech Startup",
    desc: "Accelerated deal closure rates by standardizing qualification criteria and sales collateral.",
    positive: true,
  },
];
export default function ResultsSection() {
  return (
    <section
      id="results"
      className="py-24 bg-uca-navy text-white"
      style={{ backgroundColor: "rgb(10, 31, 68)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span style={{ color: "rgb(200, 168, 90)" }}>Proven Impact</span>
            <h2 className="text-3xl md:text-4xl text-white">
              Real results from recent audits.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((res, i) => (
            <motion.div
              key={i}
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
                delay: i * 0.1,
              }}
              className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors"
            >
              <div className="text-sm text-slate-400 mb-6 font-medium">
                {res.context}
              </div>
              <div className="flex items-baseline gap-3 mb-2">
                <span
                  style={{
                    color: "rgb(200, 168, 90)",
                    fontSize: "48px",
                    fontFamily: "Playfair Display",
                  }}
                >
                  {res.metric}
                </span>
                {res.positive ? (
                  <ArrowUpRight className="text-uca-gold" size={24} />
                ) : (
                  <ArrowDownRight className="text-uca-gold" size={24} />
                )}
              </div>
              <div className="text-lg font-medium text-white mb-4">
                {res.label}
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {res.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
