import { motion } from "framer-motion";
import steps from "../../mockdata/step.js";
function Step() {
  return (
    <>
      <div>
        <section
          id="process"
          className="py-24 bg-navy text-white overflow-hidden"
          style={{
            backgroundColor: "rgb(10, 37, 64)",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2
                className="text-sm font-bold tracking-widest uppercase mb-3"
                style={{
                  color: "rgb(201, 162, 75)",
                }}
              >
                How It Works
              </h2>
              <h3
                className="text-3xl md:text-4xl font-serif font-bold mb-4"
                style={{ color: "#ffff" }}
              >
                A Streamlined Path to Market
              </h3>
              <p className="text-lg text-slate-300">
                Our proven 4-step methodology ensures a smooth, compliant, and
                efficient company setup process in Vietnam.
              </p>
            </div>

            <div className="relative">
              {/* Connecting Line (Desktop) */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-white/20"></div>

              <div className="grid md:grid-cols-4 gap-12 md:gap-6 relative z-10">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
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
                      margin: "-100px",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="relative flex flex-col items-center text-center md:items-start md:text-left"
                  >
                    {/* Number Circle */}
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-serif font-bold mb-6 bg-navy border-4 shadow-lg relative z-10 ${
                        index === 0
                          ? "border-[#C9A24B] text-white"
                          : "border-white/10 text-white/50"
                      }`}
                    >
                      {step.number}
                    </div>

                    <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Step;
