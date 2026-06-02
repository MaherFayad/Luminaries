import React from "react";
import { motion } from "framer-motion";

const DifferentiatorCard = ({ icon: Icon, title, desc, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut", delay }}
    className="group rounded-[28px] p-7 bg-[#070708] border border-white/10 hover:border-[#3496ed]/30 transition-all duration-400 hover:shadow-[0_0_30px_rgba(52,150,237,0.06)] flex flex-col gap-4"
  >
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-[#1a76d2]/10 border border-[#1a76d2]/15 flex items-center justify-center shrink-0 group-hover:bg-[#1a76d2]/20 transition-colors">
        <Icon className="w-5 h-5 text-[#59b4f5]" strokeWidth={1.5} />
      </div>
      <h4 className="text-white font-bold text-base leading-tight pt-1.5" style={{ fontFamily: '"Sora", sans-serif' }}>
        {title}
      </h4>
    </div>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

export default DifferentiatorCard;
