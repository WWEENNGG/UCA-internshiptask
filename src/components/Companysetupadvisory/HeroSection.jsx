import { Button, Modal } from "antd";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Dot, Globe, Users } from "lucide-react";
import video from "../../assets/BackgroundVideo.mp4";
import { useState } from "react";
import InquiryForm from "../../form/UCAInquiryForm";
function HeroSection() {
  const [modal, openModal] = useState(false);
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-slate-50">
        {/* Background subtle elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white rounded-bl-[100px] opacity-50 pointer-events-none"></div>

        <div className="max-w-full  mx-auto sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-navy/5 text-navy text-sm font-medium mb-6 border border-navy/10">
                <Dot
                  style={{ color: "rgb(201, 162, 75)", fontSize: "50px" }}
                ></Dot>
                Company Setup Advisory & Consulting
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-navy leading-[1.1] mb-6">
                Start Your Business in Vietnam with{" "}
                <span style={{ color: "rgb(201, 162, 75)" }}>Confidence</span>
              </h1>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We help foreign entrepreneurs, startups, SMEs, and investors
                establish and launch businesses in Vietnam. Navigate local
                regulations with our expert end-to-end advisory services.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button
                  style={{
                    padding: 30,
                    fontSize: "20px",
                    fontWeight: "500",
                    backgroundColor: "rgb(10, 37, 64)",
                    color: "white",
                  }}
                  onClick={() => openModal(true)}
                >
                  Book a Consultation
                  <ArrowRight size={18} />
                </Button>

                {/* <button className="bg-white text-navy border border-slate-200 px-8 py-3.5 rounded-md text-base font-medium hover:border-navy/30 hover:bg-slate-50 transition-all flex items-center justify-center">
                  Learn More
                </button> */}
              </div>

              {/* Trust Strip */}
              <div className="pt-8 border-t border-slate-200">
                <p className="text-sm text-slate-500 font-medium mb-4">
                  Trusted by 500+ international businesses
                </p>

                <div className="flex flex-wrap gap-6 items-center opacity-70 grayscale">
                  <div className="flex items-center gap-2 text-slate-700 font-serif font-bold text-xl">
                    <Globe size={24} /> GlobalCorp
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-serif font-bold text-xl">
                    <Building2 size={24} /> Apex Industries
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-serif font-bold text-xl">
                    <Users size={24} /> Nexus Partners
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-[500px] lg:h-full lg:absolute lg:top-0 lg:right-0 lg:w-1/2  overflow-hidden shadow-2xl"
            >
              <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={video} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/80 via-[#0A2540]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12 text-white">
                <div className="max-w-md space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-sm">
                    <span className="w-2 h-2 rounded-full bg-[#C9A24B]" />
                    Vietnam Company Setup
                  </div>

                  <h3 className="text-2xl lg:text-4xl font-semibold leading-tight">
                    Build your company in Vietnam with confidence
                  </h3>

                  <p className="text-sm lg:text-base text-white/80">
                    From consultation to legal registration...
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Modal
        open={modal}
        onCancel={() => openModal(false)}
        footer={null}
        width={800}
        style={{
          top: 40,
        }}
      >
        <InquiryForm />
      </Modal>
    </>
  );
}

export default HeroSection;
