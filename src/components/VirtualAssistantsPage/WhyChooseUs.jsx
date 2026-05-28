import { motion } from "framer-motion";
import {
  UserCheckIcon,
  PiggyBankIcon,
  AwardIcon,
  MaximizeIcon,
  ZapIcon,
  ShieldCheckIcon,
} from "lucide-react";
export default function WhyChooseSection() {
  const benefits = [
    {
      title: "Dedicated Virtual Assistants",
      description:
        "Work with the same professional every day. They learn your business, adapt to your workflows, and become a true extension of your team.",
      icon: UserCheckIcon,
    },
    {
      title: "Cost Effective Support",
      description:
        "Reduce overhead by up to 60% compared to local hiring. No office space, equipment, or complex benefits packages required.",
      icon: PiggyBankIcon,
    },
    {
      title: "Skilled & Trained Professionals",
      description:
        "Our talent pool consists of highly educated, rigorously vetted professionals with enterprise-level experience.",
      icon: AwardIcon,
    },
    {
      title: "Flexible Scaling",
      description:
        "Easily scale your support up or down based on project demands or seasonal business cycles without long-term friction.",
      icon: MaximizeIcon,
    },
    {
      title: "Faster Project Delivery",
      description:
        "Keep your core team focused on high-value strategic work while our assistants handle the operational execution.",
      icon: ZapIcon,
    },
    {
      title: "Reduced Admin Burden",
      description:
        "Offload scheduling, data entry, research, and reporting to reclaim hours of your week for growth initiatives.",
      icon: ShieldCheckIcon,
    },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section className="py-24 lg:py-32 bg-slate-50" id="benefits">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <h2
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6"
            style={{ fontFamily: "Inter" }}
          >
            Why modern businesses <br className="hidden md:block" />
            choose{" "}
            <span className="font-serif italic text-blue-600 font-normal">
              UCA
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            We bridge the gap between your strategic vision and daily execution
            by providing top-tier operational talent.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl hover:border-blue-200 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-500 ease-out opacity-50"></div>

              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 relative z-10">
                <benefit.icon size={24} />
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3 relative z-10">
                {benefit.title}
              </h3>

              <p className="text-slate-600 leading-relaxed relative z-10">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
