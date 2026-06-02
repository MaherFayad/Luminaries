import React from "react";
import { motion } from "framer-motion";
import SeeMoreButton from "../SeeMoreButton.jsx";
import { premiumAppear } from "../../utils/animations.js";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonialsData = [
    { quote: t("testimonials.q1"), name: t("testimonials.n1"), role: t("testimonials.r1"), img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070" },
    { quote: t("testimonials.q2"), name: t("testimonials.n2"), role: t("testimonials.r2"), img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" },
    { quote: t("testimonials.q3"), name: t("testimonials.n3"), role: t("testimonials.r3"), img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070" },
    { quote: t("testimonials.q4"), name: t("testimonials.n4"), role: t("testimonials.r4"), img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop" },
    { quote: t("testimonials.q5"), name: t("testimonials.n5"), role: t("testimonials.r5"), img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=2070" },
    { quote: t("testimonials.q6"), name: t("testimonials.n6"), role: t("testimonials.r6"), img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070" },
  ];

  return (
    <section id="testimonials" className="py-15 px-7 md:px-10 relative z-10">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div {...premiumAppear}>
            <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("testimonials.eyebrow")}
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("testimonials.heading")}{" "}
              <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                {t("testimonials.heading_accent")}
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light mb-12">
              {t("testimonials.sub")}
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, idx) => (
            <motion.div
              key={idx}
              {...premiumAppear}
              transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.15 }}
              className="p-8 rounded-[40px] bg-[#0A0A0A] border border-white/5 hover:border-[#3496ed]/30 transition-colors duration-300 group relative flex flex-col justify-between"
            >
              <div className="absolute top-6 right-8 text-white/[0.03] text-4xl font-serif pointer-events-none group-hover:text-[#3496ed]/10 transition-colors">
                "
              </div>

              <div>
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <img
                    src={testimonial.img}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#3496ed]/20"
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    loading="lazy"
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider">{testimonial.role}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-[#f59e0b] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <blockquote className="text-slate-300 text-md italic leading-relaxed" style={{ fontFamily: '"Inter", sans-serif' }}>
                  "{testimonial.quote}"
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <SeeMoreButton to="/testimonials" text={t("testimonials.see_more")} />
    </section>
  );
};

export default Testimonials;
