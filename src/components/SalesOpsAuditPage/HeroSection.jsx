import { Button, Modal } from "antd";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import SalesOpsAuditForm from "../../form/SalesAndAuditForm";
import bgImage from "../../assets/bgimage.png";
export default function HeroSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [modal, openModal] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-uca-gray">
      {/* --- BACKGROUND IMAGE START --- */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <img
          src={bgImage}
          alt="United Consulting Asia Background"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-slate-950/70" />{" "}
      </div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgb3BhY2l0eT0iMC4wMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-20 z-5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto flex flex-col items-center"
          >
            {/* <span
              className="eyebrow mb-3 block"
              style={{ fontFamily: "Inter", fontSize: "25px" }}
            >
              <span style={{ color: "#0FDAFA", fontWeight: "700" }}>
                United
              </span>{" "}
              <span style={{ color: "#ffff", fontWeight: "700" }}>
                {" "}
                Consulting{" "}
              </span>
              <span style={{ color: "#1AF022", fontWeight: "700" }}>Asia</span>
            </span> */}
            <h1
              className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] mb-6 font-bold text-slate-900 drop-shadow-sm"
              style={{ color: "#ffff" }}
            >
              Optimize Your Sales.
              <br />
              Streamline Operations.
              <br />
              <span
                className="text-uca-gold italic"
                style={{ color: "#00F3FF" }}
              >
                Scale Smarter.
              </span>
            </h1>

            <p
              className="text-lg md:text-xl text-slate-700 mb-10 leading-relaxed max-w-xl mx-auto font-medium"
              style={{ color: "#ffff" }}
            >
              We help businesses uncover inefficiencies, improve sales
              performance, and build scalable operational systems for
              sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="#contact"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  padding: 35,
                  fontSize: 16,
                  color: "white",
                  fontFamily: "Inter",
                  fontWeight: "500",
                  backgroundColor: isHovered
                    ? "rgb(200, 168, 90)"
                    : "rgb(10, 31, 68)",
                  transition: "background-color 0.2s ease",
                }}
                className="px-[35px] py-[35px] text-[16px] bg-[#0a1f44] text-white font-inter font-medium transition-colors hover:bg-[#14346c] flex items-center justify-center gap-2 group"
                onClick={() => openModal(true)}
              >
                Book a Free Audit
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Button>
            </div>
          </motion.div>
        </div>
        <Modal
          open={modal}
          onCancel={() => openModal(false)}
          footer={null}
          width={800}
          style={{ top: 40 }}
        >
          <SalesOpsAuditForm />
        </Modal>
      </div>
    </section>
  );
}
