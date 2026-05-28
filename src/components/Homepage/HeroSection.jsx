import { ChartBarDecreasingIcon, ArrowRightIcon } from "lucide-react";
import { motion } from "framer-motion";
import Video from "../../assets/bg.mp4";
import { Link } from "react-router-dom";

const HeroImage =
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ================= VIDEO BACKGROUND ================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover scale-105"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src={Video} type="video/mp4" />
        </video>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* ================= DECORATIVE BLURS ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            className="flex flex-col max-w-2xl mx-auto lg:mx-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                <div className="bg-blue-500/20 p-1 rounded-full text-blue-300">
                  <ChartBarDecreasingIcon size={16} />
                </div>
                <span className="text-sm font-semibold text-white/90">
                  Business Success Starts Here
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.15]"
            >
              Focus on growing your business in Vietnam{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-blue-400">
                  United Consulting
                </span>
                <span className="absolute bottom-1 left-0 w-full h-4 bg-blue-500/20 -z-10 rotate-[-2deg]" />
              </span>{" "}
              will handle the rest
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mt-8 mb-10 max-w-xl"
            >
              Building a business is hard enough without red tape slowing you
              down. United Consulting provides practical support for{" "}
              <span className="text-white font-semibold">
                Vietnam market entry, company setup, accounting, staffing, and
                more
              </span>
              — so you can focus on growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to={"/ourservices"}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-semibold transition"
              >
                Explore Our Services
                <ArrowRightIcon size={18} />
              </Link>

              {/* <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-xl font-semibold transition">
                <PlayCircleIcon size={20} />
                Learn More
              </button> */}
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="relative flex justify-center lg:justify-end w-full"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full" />

            <motion.div
              className="relative w-full max-w-[600px] p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"
              animate={{ y: [0, -12, 0] }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              }}
            >
              <div className="relative rounded-xl overflow-hidden border border-white/10">
                <div className="absolute top-0 left-0 w-full h-10 bg-black/30 backdrop-blur flex items-center px-4 gap-2 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                </div>

                <img
                  src={HeroImage}
                  alt="Business Dashboard"
                  className="w-full h-auto object-cover pt-10"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
