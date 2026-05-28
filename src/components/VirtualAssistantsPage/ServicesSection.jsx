import { motion } from "framer-motion";
import {
  FileTextIcon,
  CalendarIcon,
  KanbanSquareIcon,
  DatabaseIcon,
  SearchIcon,
  HeadphonesIcon,
  BookOpenIcon,
  WorkflowIcon,
  ArrowRightIcon,
} from "lucide-react";
export default function ServicesSection() {
  const services = [
    {
      title: "Administrative Assistance",
      desc: "Comprehensive daily admin support.",
      icon: FileTextIcon,
    },
    {
      title: "Calendar & Email",
      desc: "Inbox zero and seamless scheduling.",
      icon: CalendarIcon,
    },
    {
      title: "Project Coordination",
      desc: "Keeping deliverables on track.",
      icon: KanbanSquareIcon,
    },
    {
      title: "Data Entry & Reporting",
      desc: "Accurate data management.",
      icon: DatabaseIcon,
    },
    {
      title: "Market Research",
      desc: "Actionable insights and competitor analysis.",
      icon: SearchIcon,
    },
    {
      title: "Customer Support",
      desc: "Professional front-line communication.",
      icon: HeadphonesIcon,
    },
    {
      title: "Documentation",
      desc: "SOP creation and operations support.",
      icon: BookOpenIcon,
    },
    {
      title: "Task Management",
      desc: "Workflow optimization and tracking.",
      icon: WorkflowIcon,
    },
  ];
  return (
    <section
      className="py-24 lg:py-32 bg-navy-900 text-white relative overflow-hidden"
      style={{ backgroundColor: "rgb(15, 23, 42)" }}
      id="services"
    >
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-blue-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Comprehensive{" "}
              <span className="font-serif italic font-normal text-blue-400">
                Services
              </span>
            </h2>
            <p className="text-lg text-slate-400">
              From routine administrative tasks to complex project coordination,
              our virtual assistants are equipped to handle your operational
              needs.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300 transition-colors group"
          >
            View all capabilities
            <ArrowRightIcon
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, idx) => (
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
                delay: idx * 0.05,
                duration: 0.4,
              }}
              className="group glass-dark p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                <service.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
