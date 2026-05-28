import { Modal } from "antd";
import { motion } from "framer-motion";
import {
  ArrowRightIcon,
  CheckCircle2Icon,
  ClockIcon,
  UsersIcon,
  BarChart3Icon,
} from "lucide-react";
import { useState } from "react";
import AIASSitantForm from "../../form/AIASSitantForm";
export default function HeroSection() {
  const [modal, openModal] = useState(false);
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-30 lg:pb-30 overflow-hidden bg-blue-900"
      style={{ backgroundColor: "rgb(15, 23, 42)" }}
    >
      {/* Background Effects */}
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/5 rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-xs font-medium uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Virtual Assistants & Project Support
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6 text-balance">
              Scale smarter with dedicated{" "}
              <span className="font-serif italic font-normal text-blue-400">
                virtual assistants
              </span>
            </h1>

            <p className="text-lg lg:text-xl text-slate-300 mb-8 leading-relaxed max-w-xl">
              Empower your business with skilled remote professionals who handle
              operations, coordination, and project execution — so your team can
              focus on growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                onClick={() => {
                  openModal(true);
                }}
                style={{
                  boxSizing: "border-box",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  borderRadius: "9999px", // Makes the button fully rounded/pill-shaped
                  padding: 28,
                  fontSize: "18px",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  backgroundColor: "rgb(59, 130, 246)",
                  color: "#ffff",
                }}
                className=" cursor-pointer inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                Book a Consultation <ArrowRightIcon></ArrowRightIcon>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2Icon size={16} className="text-blue-500" />
                Fast onboarding
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon size={16} className="text-blue-500" />
                Dedicated support
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2Icon size={16} className="text-blue-500" />
                Cost-efficient staffing
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Dashboard Mockup */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative lg:h-[500px] flex items-center justify-center"
          >
            {/* Main Dashboard Card */}
            <div className="relative w-full max-w-lg glass-dark rounded-2xl p-6 shadow-2xl z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                <div>
                  <h3 className="text-white font-semibold flex items-center gap-2">
                    <BarChart3Icon size={18} className="text-blue-400" />
                    Project Operations
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Active tasks & coordination
                  </p>
                </div>
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-navy-900 bg-slate-700 flex items-center justify-center overflow-hidden`}
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Task List */}
              <div className="space-y-4">
                {[
                  {
                    title: "Q3 Market Research Report",
                    status: "Completed",
                    time: "2h ago",
                    done: true,
                  },
                  {
                    title: "Client Onboarding Setup",
                    status: "In Progress",
                    time: "Active",
                    done: false,
                  },
                  {
                    title: "Weekly Data Entry & Sync",
                    status: "Scheduled",
                    time: "Tomorrow",
                    done: false,
                  },
                ].map((task, idx) => (
                  <motion.div
                    key={idx}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.5 + idx * 0.1,
                    }}
                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors cursor-default"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                          task.done
                            ? "bg-blue-500 border-blue-500"
                            : "border-slate-500"
                        }`}
                      >
                        {task.done && (
                          <CheckCircle2Icon size={12} className="text-white" />
                        )}
                      </div>
                      <div>
                        <p
                          className={`text-sm font-medium ${
                            task.done
                              ? "text-slate-300 line-through"
                              : "text-white"
                          }`}
                        >
                          {task.title}
                        </p>
                        <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                          <ClockIcon size={10} /> {task.time}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`text-xs px-2 py-1 rounded-md font-medium ${
                        task.status === "Completed"
                          ? "bg-blue-500/20 text-blue-400"
                          : task.status === "In Progress"
                          ? "bg-sky-500/20 text-sky-400"
                          : "bg-slate-500/20 text-slate-300"
                      }`}
                    >
                      {task.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-6 top-12 glass-dark rounded-xl p-4 shadow-xl z-20 hidden sm:block border-blue-500/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <UsersIcon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">
                    Sarah joined
                  </p>
                  <p className="text-xs text-slate-400">Virtual Assistant</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -left-8 bottom-12 glass-dark rounded-xl p-4 shadow-xl z-20 hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                <p className="text-sm font-medium text-white">
                  Efficiency up by 40%
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Modal
        open={modal}
        onCancel={() => openModal(false)}
        footer={null}
        width={800}
        style={{ top: 40 }}
      >
        <AIASSitantForm />
      </Modal>
    </section>
  );
}
