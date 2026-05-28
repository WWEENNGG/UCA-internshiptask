/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Icon } from "lucide-react";

export default function ServiceCard({ icon, title, features, delay = 0 }) {
  const Icon = icon;
  return (
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
      }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 20px 40px rgba(11, 87, 208, 0.15)",
      }}
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 group"
    >
      <div className="w-16 h-16 bg-gradient-to-br from-[#0B57D0] to-[#1976D2] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white"></Icon>
      </div>

      <h3 className="text-2xl font-bold text-[#1a2332] mb-4">{title}</h3>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start text-gray-600">
            <span className="w-1.5 h-1.5 bg-[#0B57D0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
