import { motion } from "framer-motion";
import benefits from "../../mockdata/benefits";
import { CheckCircle2 } from "lucide-react";
function WhyChoseUs() {
  return (
    <>
      <div>
        {" "}
        <section id="why-us" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Content */}
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
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.6,
                }}
              >
                <h2
                  className="text-sm font-bold tracking-widest text-gold uppercase mb-3"
                  style={{
                    color: "rgb(201, 162, 75)",
                  }}
                >
                  Why Choose Us
                </h2>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-navy mb-6 leading-tight">
                  Your Trusted Partner for Growth in Southeast Asia
                </h3>
                <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                  Entering a new market can be complex. We mitigate risks and
                  remove administrative burdens, allowing you to focus on what
                  matters most—building your business. Our premium advisory
                  services are tailored specifically for foreign investors.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-soft">
                    <div className="text-3xl font-serif font-bold text-navy mb-1">
                      500+
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      Companies Launched
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-soft">
                    <div className="text-3xl font-serif font-bold text-navy mb-1">
                      20+
                    </div>
                    <div className="text-sm text-slate-500 font-medium">
                      Industries Served
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Benefits List */}
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
                  margin: "-100px",
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                }}
                className="bg-white p-8 md:p-10 rounded-2xl shadow-card border border-slate-100"
              >
                <div className="space-y-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2
                          className="text-gold w-6 h-6"
                          style={{ color: "rgb(201, 162, 75)" }}
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-navy mb-1">
                          {benefit.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default WhyChoseUs;
