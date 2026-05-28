import { motion } from "framer-motion";
import { Target, Settings, Check } from "lucide-react";
export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-uca-gray">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="eyebrow" style={{ color: "rgb(200, 168, 90)" }}>
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl">
            Targeted Audits for Maximum Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Sales Audit */}
          <motion.div
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
              duration: 0.6,
            }}
            className="bg-white p-8 lg:p-12 shadow-sm border border-slate-100"
          >
            <div className="w-14 h-14 bg-gray-200 flex items-center justify-center mb-8">
              <Target className="text-uca-navy" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl mb-4">Sales Audit</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We dissect your entire sales engine to identify leaks, improve
              conversion rates, and accelerate revenue generation.
            </p>
            <ul className="space-y-4">
              {[
                "Comprehensive sales funnel analysis",
                "Lead conversion & velocity optimization",
                "CRM architecture & pipeline review",
                "Sales team performance metrics",
                "Pricing strategy evaluation",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-uca-gold shrink-0 mt-1" size={18} />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Operations Audit */}
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
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
            className="bg-white p-8 lg:p-12 shadow-sm border border-slate-100"
          >
            <div className="w-14 h-14 bg-gray-200 flex items-center justify-center mb-8 ">
              <Settings className="text-uca-navy" size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl mb-4">Operations Audit</h3>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We map and analyze your internal workflows to eliminate waste,
              reduce costs, and build scalable systems.
            </p>
            <ul className="space-y-4">
              {[
                "End-to-end workflow efficiency analysis",
                "Cost optimization & resource allocation",
                "Tech stack & automation assessment",
                "Team productivity evaluation",
                "Standard Operating Procedure (SOP) review",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-uca-gold shrink-0 mt-1" size={18} />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
