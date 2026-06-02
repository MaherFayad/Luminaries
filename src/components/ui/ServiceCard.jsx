import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { premiumAppear } from "../../utils/animations";

const ServiceCard = ({ icon: Icon, title, description, outcome, href = "/features" }) => (
  <motion.div
    {...premiumAppear}
    className="group relative rounded-[36px] p-8 md:p-10 bg-[#070708] border border-white/10 hover:border-[#3496ed]/40 transition-all duration-500 flex flex-col gap-6 hover:shadow-[0_0_40px_rgba(52,150,237,0.08)]"
  >
    <div className="w-14 h-14 rounded-2xl bg-[#1a76d2]/10 border border-[#1a76d2]/20 flex items-center justify-center group-hover:bg-[#1a76d2]/20 transition-colors">
      <Icon className="w-7 h-7 text-[#59b4f5]" strokeWidth={1.5} />
    </div>
    <div className="flex flex-col gap-3 flex-1">
      <h3 className="text-xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
        {title}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
    <div className="pt-4 border-t border-white/5">
      <p className="text-[11px] text-[#59b4f5]/80 uppercase tracking-[0.2em] font-semibold leading-relaxed">
        {outcome}
      </p>
    </div>
    <Link to={href} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-[#59b4f5] transition-colors">
      <span className="rtl-flip inline-block">→</span>
    </Link>
  </motion.div>
);

export default ServiceCard;
