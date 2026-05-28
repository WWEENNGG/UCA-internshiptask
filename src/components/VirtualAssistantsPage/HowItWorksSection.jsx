import { motion } from "framer-motion";
export default function HowItWorksSection() {
  const steps = [
    {
      num: "01",
      title: "Tell Us Your Needs",
      desc: "We start with a deep dive into your business operations, identifying bottlenecks and areas where support is needed most.",
    },
    {
      num: "02",
      title: "We Match the Talent",
      desc: "Our team selects the perfect virtual assistant from our vetted pool based on your specific industry, tools, and requirements.",
    },
    {
      num: "03",
      title: "Seamless Onboarding",
      desc: "We facilitate a structured handover process, ensuring your new assistant is integrated into your systems and workflows.",
    },
    {
      num: "04",
      title: "Ongoing Optimization",
      desc: "We provide continuous oversight and support to ensure performance remains high and processes are continuously improved.",
    },
  ];
  return (
    <section className="py-24 lg:py-32 bg-white" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            How it{" "}
            <span className="font-serif italic text-blue-600 font-normal">
              Works
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            A streamlined, friction-free process designed to get you the support
            you need in days, not months.
          </p>
        </div>

        <div className="relative">
          {/* Desktop connecting line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100">
            <motion.div
              className="absolute top-0 left-0 h-full bg-blue-500"
              initial={{
                width: "0%",
              }}
              whileInView={{
                width: "100%",
              }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
            />
          </div>

          <div className="grid md:grid-cols-4 gap-12 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
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
                  delay: idx * 0.2,
                  duration: 0.5,
                }}
                className="relative flex flex-col items-center md:items-start text-center md:text-left"
              >
                {/* Mobile connecting line */}
                {idx !== steps.length - 1 && (
                  <div className="md:hidden absolute top-24 left-1/2 w-0.5 h-full bg-slate-100 -translate-x-1/2 -z-10"></div>
                )}

                <div className="w-24 h-24 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center mb-8 relative">
                  <span className="text-3xl font-serif text-slate-900">
                    {step.num}
                  </span>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-blue-500 border-4 border-white"></div>
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
