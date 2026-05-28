import { Modal } from "antd";
import { motion } from "framer-motion";
import {
  CheckCircle2Icon,
  FileCheckIcon,
  ClockIcon,
  ArrowRightIcon,
} from "lucide-react";
import { useState } from "react";
import InsuranceForm from "../../form/InsuranceForm";
export default function HeroSection() {
  const [modal, openModal] = useState(false);
  return (
    <section className="relative pt-24 pb-20 overflow-hidden bg-[#0A1F44]">
      {/* Base gradient theme */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F44] via-[#0B2A5B] to-[#061633]" />

      {/* Aurora blobs */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full bg-[#0B57D0] opacity-40 blur-[120px]"
      />
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/3 -right-32 w-[560px] h-[560px] rounded-full bg-[#3B82F6] opacity-30 blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 left-1/3 w-[480px] h-[480px] rounded-full bg-[#F472B6] opacity-20 blur-[140px]"
      />

      {/* Dot grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Soft top vignette for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#061633]/60 via-transparent to-[#061633]/40" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#F472B6]" />
              <span className="text-sm font-medium text-white/90">
                Vietnam HR & Compliance Specialists
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Simplify Insurance, Work Permit, TRC & Payroll Management in{" "}
              <span className="bg-gradient-to-r from-[#7DB9FF] to-[#F472B6] bg-clip-text text-transparent">
                Vietnam
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              From employee insurance and payroll processing to work permits and
              Temporary Residence Cards (TRC), United Consulting Asia helps
              businesses stay compliant and operate smoothly.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
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

            {/* <div className="flex flex-wrap gap-3">
              <TrustBadge
                icon={ShieldCheckIcon}
                text="Vietnam Compliance Experts"
              />
              <TrustBadge icon={ZapIcon} text="Fast Processing Support" />
              <TrustBadge
                icon={UsersIcon}
                text="End-to-End Workforce Solutions"
              />
            </div> */}
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#0B57D0] to-[#1976D2] rounded-3xl p-8 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
                alt="Professional office workspace"
                className="rounded-2xl w-full h-auto shadow-xl"
              />

              {/* Floating cards */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <CheckCircle2Icon className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a2332]">
                    Payroll Approved
                  </p>
                  <p className="text-xs text-gray-500">Processing complete</p>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 1,
                }}
                className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileCheckIcon className="w-6 h-6 text-[#0B57D0]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a2332]">
                    Work Permit Completed
                  </p>
                  <p className="text-xs text-gray-500">Ready for pickup</p>
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: 2,
                }}
                className="absolute top-1/2 -right-6 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <ClockIcon className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#1a2332]">
                    Compliance Verified
                  </p>
                  <p className="text-xs text-gray-500">All documents valid</p>
                </div>
              </motion.div>
            </div>
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
        <InsuranceForm />
      </Modal>
    </section>
  );
}
