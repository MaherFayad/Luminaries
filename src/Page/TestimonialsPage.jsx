import React from "react";
import { motion } from "framer-motion";
import CTA from "../components/Section/CTA";
import FAQ from "../components/Section/FAQ";
import { premiumAppear } from "../utils/animations.js";
import { useTranslation } from "react-i18next";

const FiveStars = () => (
  <div className="flex gap-1 mb-6">
    {[1, 2, 3, 4, 5].map((star) => (
      <svg key={star} className="w-4 h-4 text-[#f59e0b]" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

const TestimonialsPage = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Ahmed Al-Rashidi",    role: "CTO at FinEdge Saudi Arabia",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=150&auto=format&fit=crop",
      content: "Luminaries Hub delivered a team of 8 senior engineers in under 3 weeks. The quality of talent and speed of delivery far exceeded anything we'd experienced before. The technical screening is genuinely rigorous — every candidate passed our internal assessments on the first attempt.",
      highlight: "Every candidate passed on the first attempt.",
    },
    {
      name: "Sara Mansour",        role: "VP Engineering at Cairo Fintech",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
      content: "The outsourcing model handled everything — payroll, compliance, onboarding, insurance. We focused entirely on building our product while Luminaries Hub managed the entire operational complexity behind the scenes. A true extension of our team.",
      highlight: "A true extension of our team.",
    },
    {
      name: "Khalid Al-Otaibi",    role: "Engineering Manager at Saudi Digital",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
      content: "After two failed searches with other agencies, Luminaries Hub placed three qualified backend engineers in under 2 weeks. Their process is structured and the pre-screening is real. We didn't waste a single interview slot on unqualified candidates.",
      highlight: "Not a single wasted interview slot.",
    },
    {
      name: "Dr. Mohamed Ibrahim",  role: "Director of Digital Transformation",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
      content: "Working with Luminaries Hub on our government digitization initiative gave us confidence at every stage. They understood both the technical requirements and the regulatory environment — something generic staffing firms simply can't match.",
      highlight: "Understood the regulatory environment.",
    },
    {
      name: "Nora Al-Harbi",        role: "COO at Riyadh Tech Ventures",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
      content: "We scaled from 5 to 22 developers in one quarter. The team Luminaries Hub assembled integrated seamlessly with our existing culture and sprint processes. Retention has been 100% — we haven't lost a single placed engineer.",
      highlight: "100% retention on all placements.",
    },
    {
      name: "Tariq Hassan",         role: "Head of Product at AlBilad Bank",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop",
      content: "The TaaS model saved us from building a full in-house QA department. Quality of testing was enterprise-grade and completely aligned with our release cycle. Response times, coverage, and documentation were all exceptional.",
      highlight: "Enterprise-grade quality on every release.",
    },
  ];

  const miniTestimonials = [
    { name: t("testimonials_page.mini_1_name"), role: t("testimonials_page.mini_1_role"), text: t("testimonials_page.mini_1_text"), avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop" },
    { name: t("testimonials_page.mini_2_name"), role: t("testimonials_page.mini_2_role"), text: t("testimonials_page.mini_2_text"), avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" },
    { name: t("testimonials_page.mini_3_name"), role: t("testimonials_page.mini_3_role"), text: t("testimonials_page.mini_3_text"), avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" },
    { name: t("testimonials_page.mini_4_name"), role: t("testimonials_page.mini_4_role"), text: t("testimonials_page.mini_4_text"), avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=100&auto=format&fit=crop" },
    { name: t("testimonials_page.mini_5_name"), role: t("testimonials_page.mini_5_role"), text: t("testimonials_page.mini_5_text"), avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop" },
    { name: t("testimonials_page.mini_6_name"), role: t("testimonials_page.mini_6_role"), text: t("testimonials_page.mini_6_text"), avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop" },
  ];

  const doubledItems = [...miniTestimonials, ...miniTestimonials];

  return (
    <div className="bg-[#030712] min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1a76d2]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#f59e0b]/8 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10">
        {/* HERO */}
        <header className="pt-44 pb-20 px-7 text-center">
          <motion.div {...premiumAppear}>
            <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {t("testimonials_page.eyebrow")}
            </span>
            <h1
              className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("testimonials_page.h1_line1")}{" "}
              <span className="bg-gradient-to-r from-[#59b4f5] via-[#3496ed] to-[#f59e0b] bg-clip-text text-transparent">
                {t("testimonials_page.h1_accent")}
              </span>
            </h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
              {t("testimonials_page.hero_sub")}
            </p>
          </motion.div>
        </header>

        {/* MAIN GRID */}
        <section className="pb-24 px-7 md:px-10 container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testi, index) => (
              <motion.div
                key={index}
                {...premiumAppear}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
                className="group relative bg-[#070708] border border-white/5 rounded-[32px] p-8 md:p-10 hover:bg-[#0a0a0c] hover:border-[#3496ed]/30 transition-colors duration-300 flex flex-col justify-between shadow-xl"
              >
                <div className="absolute top-8 right-8 text-white/5 group-hover:text-[#3496ed]/10 transition-colors duration-500">
                  <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <div className="relative z-10">
                  <FiveStars />
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10">
                    "{testi.content.split(testi.highlight)[0]}
                    <span className="text-white font-semibold">{testi.highlight}</span>
                    {testi.content.split(testi.highlight)[1]}"
                  </p>
                </div>

                <div className="flex items-center gap-4 relative z-10 border-t border-white/5 pt-6 mt-auto">
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/10 group-hover:border-[#59b4f5] transition-colors"
                    width={48} height={48} loading="lazy"
                  />
                  <div>
                    <h4 className="text-white font-bold text-sm">{testi.name}</h4>
                    <p className="text-slate-500 text-xs mt-0.5">{testi.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MARQUEE */}
        <section className="py-24 relative overflow-hidden flex flex-col gap-10 md:gap-14">
          <div className="text-center mb-4 relative z-20">
            <h3
              className="text-2xl md:text-4xl font-bold text-white tracking-tight"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {t("testimonials_page.marquee_heading").split("MENA")[0]}
              <span className="text-[#59b4f5]"> MENA{t("testimonials_page.marquee_heading").split("MENA")[1]}</span>
            </h3>
          </div>

          <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#030712] via-[#030712]/80 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-12 md:gap-20 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            style={{ transform: "translateZ(0)" }}
          >
            {doubledItems.map((item, index) => (
              <div key={`row1-${index}`} className="w-[350px] md:w-[450px] flex items-center gap-5 md:gap-6 group cursor-default">
                <img
                  src={item.avatar} alt={item.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-white/5 group-hover:ring-[#3496ed]/50 group-hover:scale-105 transition-all duration-300 shadow-xl shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="text-white text-base md:text-lg font-bold mb-1 tracking-tight">
                    {item.name}{" "}
                    <span className="text-[#59b4f5] font-normal text-sm ml-1 opacity-80">• {item.role}</span>
                  </p>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="flex gap-12 md:gap-20 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            style={{ transform: "translateZ(0)" }}
          >
            {doubledItems.map((item, index) => (
              <div key={`row2-${index}`} className="w-[350px] md:w-[450px] flex items-center gap-5 md:gap-6 group cursor-default">
                <img
                  src={item.avatar} alt={item.name}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover ring-2 ring-white/5 group-hover:ring-[#f59e0b]/50 group-hover:scale-105 transition-all duration-300 shadow-xl shrink-0"
                  loading="lazy"
                />
                <div>
                  <p className="text-white text-base md:text-lg font-bold mb-1 tracking-tight">
                    {item.name}{" "}
                    <span className="text-[#fbbf24] font-normal text-sm ml-1 opacity-80">• {item.role}</span>
                  </p>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    "{item.text}"
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </section>

        <section className="py-10"><FAQ /></section>
        <section className="pb-10"><CTA /></section>
      </div>
    </div>
  );
};

export default TestimonialsPage;
