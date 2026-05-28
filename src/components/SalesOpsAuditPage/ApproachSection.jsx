import { motion } from "framer-motion";
const steps = [
  {
    title: "Business Diagnostic",
    desc: "Comprehensive review of current state, goals, and immediate bottlenecks.",
  },
  {
    title: "Sales Funnel Evaluation",
    desc: "Deep dive into lead generation, conversion metrics, and CRM utilization.",
  },
  {
    title: "Workflow Audit",
    desc: "Mapping internal processes to identify redundancies and automation opportunities.",
  },
  {
    title: "Data-Driven Insights",
    desc: "Synthesizing findings into actionable, prioritized recommendations.",
  },
  {
    title: "Optimization Roadmap",
    desc: "Step-by-step implementation plan for sustainable scaling.",
  },
];
export function ApproachSection() {
  return (
    <section
      id="approach"
      className="py-24 bg-uca-navy text-white overflow-hidden"
      style={{ backgroundColor: "rgb(10, 31, 68)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:mb-24">
          <span
            className="eyebrow text-uca-gold"
            style={{ color: "rgb(200, 168, 90)" }}
          >
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-4xl text-white max-w-2xl">
            The Sales &amp; Operations Audit Framework
          </h2>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/20" />

          {/* Connecting Line (Mobile) */}
          <div className="lg:hidden absolute top-0 bottom-0 left-6 w-px bg-white/20" />

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-6 relative">
            {steps.map((step, i) => (
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
                className="relative pl-16 lg:pl-0"
              >
                {/* Number Indicator */}
                <div
                  className="absolute left-0 lg:left-auto lg:relative lg:mb-8 w-12 h-12 bg-uca-navy border-2 border-uca-gold text-uca-gold flex items-center justify-center font-serif text-xl z-10"
                  style={{ color: "rgb(200, 168, 90)" }}
                >
                  0{i + 1}
                </div>

                <h3 className="text-xl text-white mb-3 mt-1 lg:mt-0">
                  {step.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
