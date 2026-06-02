import React from "react";
import { motion } from "framer-motion";
import { premiumAppear } from "../../utils/animations";

const IndustryCard = ({ icon: Icon, title, desc, delay = 0 }) => (
  <motion.div
    {...premiumAppear}
    transition={{ ...premiumAppear.transition, delay }}
    className="group relative rounded-[32px] p-8 bg-[#070708] border border-white/10 hover:border-[#f59e0b]/35 transition-all duration-500 hover:shadow-[0_0_35px_rgba(245,158,11,0.07)] flex flex-col gap-5"
  >
    <div className="w-12 h-12 rounded-xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center group-hover:bg-[#f59e0b]/20 transition-colors">
      <Icon className="w-6 h-6 text-[#fbbf24]" strokeWidth={1.5} />
    </div>
    <div>
      <h3 className="text-lg font-bold text-white mb-2" style={{ fontFamily: '"Sora", sans-serif' }}>
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </div>
    <div className="w-8 h-0.5 bg-gradient-to-r from-[#f59e0b]/60 to-transparent group-hover:w-16 transition-all duration-500" />
  </motion.div>
);

export default IndustryCard;
