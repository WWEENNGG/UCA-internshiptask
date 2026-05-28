import { motion } from "framer-motion";
import { TrendingDown, Workflow, EyeOff, DollarSign } from "lucide-react";
const problems = [
  {
    icon: TrendingDown,
    title: "Low Conversion Rates",
    desc: "Leads are dropping out of the funnel, and sales cycles are longer than they should be.",
  },
  {
    icon: Workflow,
    title: "Inefficient Workflows",
    desc: "Manual processes and disconnected tools are slowing down your team's productivity.",
  },
  {
    icon: EyeOff,
    title: "Lack of Visibility",
    desc: "Decision-making is hindered by siloed data and unclear operational metrics.",
  },
  {
    icon: DollarSign,
    title: "High Costs, Low Output",
    desc: "Operational bloat is eating into margins while overall output remains stagnant.",
  },
];
const container = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
export function ProblemSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow" style={{ color: "rgb(200, 168, 90)" }}>
            The Challenge
          </span>
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: "Playfair Display", fontSize: "36px" }}
          >
            Growth should not mean growing pains.
          </h2>
          <p className="text-slate-600 text-lg">
            As companies scale, operational friction and sales inefficiencies
            often compound, leading to lost revenue and frustrated teams.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {problems.map((prob, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-8 border border-slate-100 hover:border-[#c8a85a] hover:shadow-card-hover transition-all duration-300 group bg-slate-50/50"
            >
              <div className="w-12 h-12 bg-white border border-slate-200 flex items-center justify-center mb-6 group-hover:border-uca-gold transition-colors">
                <prob.icon
                  className="text-uca-navy group-hover:text-uca-gold transition-colors"
                  size={24}
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-xl mb-3">{prob.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {prob.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
