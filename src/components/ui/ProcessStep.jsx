import React from "react";
import { motion } from "framer-motion";

const ProcessStep = ({ number, title, desc, isLast = false }) => (
  <div className="relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
    <div className="flex flex-col items-center shrink-0">
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: number * 0.1 }}
        className="w-12 h-12 rounded-full bg-[#1a76d2]/15 border border-[#1a76d2]/40 flex items-center justify-center text-[#59b4f5] font-bold text-lg shrink-0"
      >
        {number}
      </motion.div>
      {!isLast && (
        <div className="hidden md:block w-px h-full min-h-[40px] bg-gradient-to-b from-[#3496ed]/30 to-transparent mt-2" />
      )}
    </div>
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: number * 0.1 + 0.1 }}
      className="pb-8 md:pb-0"
    >
      <h4 className="text-white font-bold text-lg mb-1" style={{ fontFamily: '"Sora", sans-serif' }}>
        {title}
      </h4>
      <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{desc}</p>
    </motion.div>
  </div>
);

export default ProcessStep;
