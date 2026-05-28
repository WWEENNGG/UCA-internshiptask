import { motion } from "framer-motion";
import { CheckIcon, XIcon } from "lucide-react";
export default function ComparisonSection() {
  const features = [
    {
      label: "Hiring speed",
      traditional: "Weeks to months",
      uca: "3-5 Days",
    },
    {
      label: "Cost structure",
      traditional: "Salary + Benefits + Overhead",
      uca: "Flat hourly/monthly rate",
    },
    {
      label: "Flexibility",
      traditional: "Rigid contracts",
      uca: "Scale up or down easily",
    },
    {
      label: "Management overhead",
      traditional: "High (HR, Payroll, Training)",
      uca: "Low (Fully managed)",
    },
    {
      label: "Time to productivity",
      traditional: "Slow (Extensive training)",
      uca: "Fast (Pre-vetted & skilled)",
    },
    {
      label: "Replacement process",
      traditional: "Start from scratch",
      uca: "Seamless swap if needed",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-slate-50" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Why UCA is{" "}
            <span className="font-serif italic text-blue-600 font-normal">
              Different
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            See how our managed virtual assistant service compares to
            traditional in-house hiring.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Traditional Hiring Card */}
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
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm"
            >
              <h3 className="text-2xl font-semibold text-slate-500 mb-8 pb-6 border-b border-slate-100">
                Traditional Hiring
              </h3>
              <div className="space-y-6">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                      <XIcon size={14} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 mb-1">
                        {feature.label}
                      </p>
                      <p className="text-slate-700 font-medium">
                        {feature.traditional}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* UCA Card */}
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
              className="bg-navy-900 rounded-3xl p-8 border border-blue-500/30 shadow-2xl relative overflow-hidden"
              style={{
                backgroundColor: "rgb(15, 23, 42)",
                color: "rgb(71, 85, 105)",
                borderBottom: "1px solid rgba(59, 130, 246, 0.3)",
                borderLeft: "1px solid rgba(59, 130, 246, 0.3)",
                borderTop: "none",
                borderRight: "none",
              }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>

              <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/10 relative z-10">
                <h3 className="text-2xl font-semibold text-white">
                  UCA Virtual Assistants
                </h3>
                <span className="bg-blue-500/20 text-blue-400 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  The Smart Choice
                </span>
              </div>

              <div className="space-y-6 relative z-10">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                      <CheckIcon size={14} className="text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-400 mb-1">
                        {feature.label}
                      </p>
                      <p className="text-white font-medium">{feature.uca}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
