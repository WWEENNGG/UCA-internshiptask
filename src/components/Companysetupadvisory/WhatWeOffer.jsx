import offers from "../../mockdata/whatweoffer";
import { motion } from "framer-motion";
function WhatWeOffer() {
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
    <>
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2
              className="text-sm font-bold tracking-widest"
              style={{
                color: "rgb(201, 162, 75)",
                fontStyle: "Playfair Display",
                fontSize: 36,
              }}
            >
              What We Offer
            </h2>
            <h3
              className="text-3xl md:text-4xl font-serif font-bold text-navy mb-4"
              style={{
                color: "rgb(10, 37, 64)",
                fontFamily: "Playfair Display",
              }}
            >
              Comprehensive Setup Solutions
            </h3>
            <p className="text-lg text-slate-600">
              We provide end-to-end advisory services to ensure your business is
              established legally, efficiently, and positioned for success in
              the Vietnamese market.
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
            {offers.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative bg-white p-8 rounded-2xl border border-slate-100 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                {/* Hover accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-yellow rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div
                  className="w-12 h-12 rounded-lg  flex items-center justify-center text-navy mb-6 hover:rgb(10, 37, 64) transition-colors"
                  style={{ backgroundColor: "rgb(10, 37, 64)" }}
                >
                  <service.icon size={24} color="white" />
                </div>

                <h4 className="text-xl font-serif font-bold text-navy mb-3">
                  {service.title}
                </h4>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default WhatWeOffer;
