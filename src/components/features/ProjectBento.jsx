import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import BentoGlow from "./BentoGlow";

const ProjectBento = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="md:col-span-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <BentoGlow className="h-[650px] md:h-[400px] rounded-[48px] overflow-hidden border border-white/10 bg-[#070708] flex flex-col md:flex-row-reverse group shadow-2xl transition-all duration-500">
        {/* Right: Image */}
        <div className="md:w-1/2 h-[350px] md:h-full relative overflow-hidden bg-slate-900/50 border-b md:border-b-0 md:border-l border-white/10">
          <img
            src="https://images.unsplash.com/photo-1625014618427-fbc980b974f5?q=80&w=1064&auto=format&fit=crop"
            className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:scale-110 transition-transform duration-[4s] ease-out"
            alt="MENA Regional Expertise"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20 pointer-events-none" />
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3496ed_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        {/* Left: Text */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative">
          <div className="relative z-10">
            <span className="text-[#59b4f5] uppercase text-[10px] tracking-[0.3em] font-bold mb-4 block">
              Regional Presence
            </span>

            <h3
              className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight tracking-tight"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              Deep roots in{" "}
              <span className="text-[#3496ed]">Egypt & Saudi Arabia.</span>
            </h3>

            <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 max-w-sm opacity-90">
              Strong familiarity with local compliance environments, talent landscapes, and business cultures across both markets — giving every engagement a regional edge.
            </p>

            <motion.button
              onClick={() => navigate("/about")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group/btn inline-flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-bold text-sm transition-all hover:bg-[#3496ed] hover:text-white shadow-lg w-fit"
            >
              Our Regional Presence
              <svg
                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform rtl-flip"
                fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5"
              >
                <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </div>

          <div className="absolute top-8 right-10 opacity-10 group-hover:opacity-30 transition-opacity">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>
      </BentoGlow>
    </motion.div>
  );
};

export default ProjectBento;
