import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
const reasons = [
  "Experienced consulting team with global firm backgrounds",
  "Data-driven methodology, not just intuition",
  "Tailored solutions specific to your business model",
  "Proven frameworks for immediate and long-term improvement",
  "Deep understanding of the Asian market dynamics",
];
const stats = [
  {
    value: "100+",
    label: "Projects Optimized",
  },
  {
    value: "35%",
    label: "Avg. Revenue Uplift",
  },
  {
    value: "20+",
    label: "Industries Served",
  },
  {
    value: "15",
    label: "Years Experience",
  },
];
export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
          >
            <span className="eyebrow" style={{ color: "rgb(200, 168, 90)" }}>
              Why Choose UCA
            </span>
            <h2 className="text-3xl md:text-4xl mb-6">
              Expertise that drives measurable results.
            </h2>
            <p className="text-slate-600 text-lg mb-10">
              We do not just deliver reports; we deliver actionable roadmaps.
              Our team combines top-tier consulting rigor with practical
              implementation strategies for growing enterprises.
            </p>

            <ul className="space-y-5">
              {reasons.map((reason, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2
                    className="text-uca-navy shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-slate-700 font-medium">{reason}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.95,
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
                  delay: i * 0.1,
                }}
                className="bg-gray-200 p-8 text-center border border-slate-200/60"
              >
                <div className="text-4xl md:text-5xl font-serif text-uca-navy mb-2">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
