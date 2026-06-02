import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const FAQItem = ({ faq, isOpen, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`border ${isOpen ? "border-[#3496ed]/50 bg-white/[0.05]" : "border-white/10 bg-[#070708]"} rounded-[24px] overflow-hidden transition-colors duration-300`}
  >
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
    >
      <h4 className="text-white font-semibold text-base md:text-lg pr-8">{faq.q}</h4>
      <div
        className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${isOpen ? "border-[#3496ed] bg-[#3496ed]/20 text-[#59b4f5]" : "border-white/20 text-slate-400"}`}
      >
        <motion.svg
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </motion.svg>
      </div>
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-6 md:px-8 pb-6 md:pb-8">
            <div className="h-px w-full bg-white/10 mb-5" />
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">{faq.a}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndices, setOpenIndices] = useState([0]);

  const faqs = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
    { q: t("faq.q5"), a: t("faq.a5") },
  ];

  const toggleFAQ = (index) =>
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    );

  return (
    <section className="py-15 px-7 md:px-10 relative z-10 container mx-auto max-w-4xl">
      <div className="text-center mb-16">
        <span className="text-[#59b4f5] uppercase text-[10px] tracking-[0.3em] font-bold mb-4 block">
          {t("faq.eyebrow")}
        </span>
        <h2
          className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: '"Sora", sans-serif' }}
        >
          {t("faq.heading")}{" "}
          <span className="text-[#3496ed]">{t("faq.heading_accent")}</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">{t("faq.sub")}</p>
      </div>
      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            faq={faq}
            isOpen={openIndices.includes(index)}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};
export default FAQ;
