import { motion } from "framer-motion";
import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Particles = () => {
  const particles = useMemo(
    () =>
      [...Array(25)].map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 3 + 1}px`,
        duration: Math.random() * 6 + 4,
        delay: Math.random() * 5,
      })),
    [],
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute bg-white/50 rounded-full blur-[0.3px]"
          style={{ width: p.size, height: p.size, left: p.left, bottom: "-10%" }}
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: -500, opacity: [0, 1, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
        />
      ))}
    </div>
  );
};

const CTA = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="py-15 px-7 md:px-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
          className="relative rounded-[48px] md:rounded-[64px] min-h-[450px] bg-gradient-to-br from-[#165fae] via-[#1a76d2] to-[#3496ed] p-8 md:p-12 overflow-hidden text-center shadow-[0_0_80px_-15px_rgba(26,118,210,0.5)] flex flex-col justify-center items-center"
        >
          {/* Background Decor */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[80%] bg-white/20 blur-[120px] rounded-full rotate-45" />
            <div className="absolute -bottom-[20%] -right-[10%] w-[50%] h-[80%] bg-[#f59e0b]/20 blur-[120px] rounded-full" />
          </div>

          <Particles />

          <div className="relative z-20 max-w-3xl mx-auto">
            <h2
              className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.1]"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("cta.heading")}
            </h2>
            <p className="text-white/80 text-lg md:text-xl mb-12 max-w-xl mx-auto font-medium">
              {t("cta.sub")}
            </p>
            <motion.button
              onClick={() => navigate("/contactus")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1a76d2] px-10 py-5 rounded-full font-bold text-lg shadow-xl hover:bg-[#e8f4fd] transition-colors flex items-center gap-2 mx-auto"
            >
              {t("cta.btn")}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="rtl-flip">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default CTA;
