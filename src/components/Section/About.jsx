import { motion } from "framer-motion";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SeeMoreButton from "../SeeMoreButton.jsx";
import { premiumAppear } from "../../utils/animations";
import { useTranslation } from "react-i18next";

// --- ANIMATION VARIANTS ---
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- MAIN COMPONENT ---
const About = () => {
  const [activeImageId, setActiveImageId] = useState(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleImageTap = (id) => {
    setActiveImageId(activeImageId === id ? null : id);
  };

  return (
    <motion.section
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={sectionVariants}
      className="py-24 px-7 md:px-10 relative overflow-hidden"
    >
      {/* Decorative Background Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#1a76d2]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#f59e0b]/8 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-20">
          <motion.div {...premiumAppear}>
            <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("about.eyebrow")}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("about.heading")}{" "}
              <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                {t("about.heading_accent")}
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-12">
              {t("about.sub")}
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {/* ROW 1: WHO WE ARE */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...premiumAppear} className="space-y-6">
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
                {t("about.row1_title")}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t("about.row1_body")}
              </p>
              <div className="flex gap-8">
                <div className="group">
                  <div className="text-3xl font-bold text-[#59b4f5] group-hover:scale-110 transition-transform cursor-default">
                    {t("about.stat1_val")}
                  </div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider mt-1">
                    {t("about.stat1_label")}
                  </div>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold text-[#59b4f5] group-hover:scale-110 transition-transform cursor-default">
                    {t("about.stat2_val")}
                  </div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider mt-1">
                    {t("about.stat2_label")}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: 0.15 }}
              onClick={() => handleImageTap(1)}
              onMouseLeave={() => setActiveImageId(null)}
              className="cursor-pointer"
            >
              <div className={`rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(52,150,237,0.1)] transition-transform duration-500 ${activeImageId === 1 ? "rotate-0" : "rotate-2 md:hover:rotate-0"}`}>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                  className={`w-full h-[400px] object-cover transition-transform duration-700 ${activeImageId === 1 ? "scale-105" : "md:hover:scale-105"}`}
                  alt="Team Work"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>

          {/* ROW 2: END-TO-END OWNERSHIP */}
          <div className="flex flex-col md:grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              {...premiumAppear}
              onClick={() => handleImageTap(2)}
              onMouseLeave={() => setActiveImageId(null)}
              className="cursor-pointer"
            >
              <div className={`rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(52,150,237,0.1)] transition-transform duration-500 ${activeImageId === 2 ? "rotate-0" : "-rotate-2 md:hover:rotate-0"}`}>
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                  className={`w-full h-[400px] object-cover transition-transform duration-700 ${activeImageId === 2 ? "scale-105" : "md:hover:scale-105"}`}
                  alt="Operations"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div {...premiumAppear} transition={{ ...premiumAppear.transition, delay: 0.15 }} className="space-y-6">
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
                {t("about.row2_title")}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t("about.row2_body")}
              </p>
              <ul className="space-y-3">
                {[t("about.row2_b1"), t("about.row2_b2"), t("about.row2_b3")].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#3496ed] shadow-[0_0_10px_rgba(52,150,237,0.8)]" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ROW 3: REGIONAL EXPERTISE */}
          <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...premiumAppear} className="space-y-6">
              <h3 className="text-3xl font-bold text-white" style={{ fontFamily: '"Sora", sans-serif' }}>
                {t("about.row3_title")}
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                {t("about.row3_body")}
              </p>
              <button
                onClick={() => navigate("/contactus")}
                className="px-6 py-3 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-[#1a76d2]/20 hover:border-[#3496ed]/30 transition-all font-medium"
              >
                {t("about.row3_btn")}
              </button>
            </motion.div>

            <motion.div
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: 0.15 }}
              onClick={() => handleImageTap(3)}
              onMouseLeave={() => setActiveImageId(null)}
              className="relative cursor-pointer"
            >
              <div className={`rounded-[40px] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(52,150,237,0.1)] transition-transform duration-500 ${activeImageId === 3 ? "rotate-0" : "rotate-1 md:hover:rotate-0"}`}>
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2032"
                  className={`w-full h-[400px] object-cover transition-transform duration-700 ${activeImageId === 3 ? "scale-105" : "md:hover:scale-105"}`}
                  alt="Regional Expertise"
                  decoding="async"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <SeeMoreButton to="/about" text={t("about.see_more")} />
      </div>
    </motion.section>
  );
};

export default About;
