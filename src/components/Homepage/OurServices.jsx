import { Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
// Mocking the ucaServices data based on the context provided
import ucaServices from "../../mockdata/services";
import { Link } from "react-router-dom";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};
export default function OurServices() {
  const serviceRoutes = {
    "company-setup-advisory": "/ourservices/companysetupadvisory",

    "virtual-assistants": "/ourservices/virtualassistants",

    "sales-ops-audit": "/ourservices/salesopsaudit",

    "insurance-work-permit-payroll": "/ourservices/HR-Compliance-Landing",
  };

  return (
    <section
      id="our-services"
      className="relative py-16 lg:py-10 overflow-hidden bg-white"
    >
      {/* Subtle Background Effects */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-blue-200/30 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-200/20 blur-3xl rounded-full" />
      </div>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
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
            }}
          >
            <span
              className="inline-block py-1 px-3 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-sm font-semibold tracking-wide mb-6"
              style={{ fontSize: "35px" }}
            >
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Business Support, Done Right. <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                For Founders, by Founders.
              </span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              We provide comprehensive, end-to-end solutions to help you
              navigate the complexities of the Vietnamese market with confidence
              and ease.
            </p>
          </motion.div>
        </div>

        {/* Services Grid using Ant Design */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
        >
          <Row gutter={[32, 32]} justify="center">
            {ucaServices.map((service) => {
              const Icon = service.icon;
              return (
                <Col xs={24} md={12} lg={8} key={service.id}>
                  <motion.div variants={itemVariants} className="h-full">
                    <Card
                      variant={false}
                      className="h-full group relative bg-white/60 backdrop-blur-xl border border-slate-200/60 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center text-center"
                    >
                      {/* Subtle Top Gradient Border Effect on Hover */}
                      <div
                        className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      />
                      {/* Icon */}
                      <div className="flex flex-col items-center text-center">
                        <div
                          className={`w-14 h-14 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ease-out`}
                        >
                          <Icon
                            className={`w-7 h-7 ${service.iconColor}`}
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-3.5 mb-8">
                        {service.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-slate-700"
                          >
                            <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                            <span className="text-sm font-medium leading-snug">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>

                      {/* Fake CTA / Learn More Link */}
                      <div className="mt-auto pt-6 border-t border-slate-100">
                        <Link
                          to={serviceRoutes[service.id]}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300"
                        >
                          Learn more about {service.title.split(" ")[0]}
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </motion.div>
      </div>
    </section>
  );
}
