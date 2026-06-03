import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLn } from "../hooks/useLp";
import { useTranslation } from "react-i18next";

const industriesData = [
  {
    id: 1,
    category: { en: "Banking",    ar: "بنوك" },
    title:    { en: "AlBilad Bank — QA Transformation",     ar: "بنك البلاد — تحويل ضمان الجودة" },
    insight:  { en: "Deployed a 6-person TaaS squad within 10 days, reducing regression cycle time by 60% across 3 product releases.", ar: "نشر فريق TaaS من 6 أشخاص خلال 10 أيام، مما قلّص دورة الاختبار بنسبة 60% عبر 3 إصدارات." },
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 2,
    category: { en: "Fintech",    ar: "تكنولوجيا مالية" },
    title:    { en: "Cairo Fintech Scale-Up",               ar: "توسّع شركة فينتك القاهرة" },
    insight:  { en: "Placed 12 full-stack engineers over 3 months, enabling the client to ship 2 new payment features on schedule.", ar: "توظيف 12 مهندساً متكاملاً خلال 3 أشهر، مما مكّن العميل من إطلاق ميزتَي دفع جديدتَين في الموعد." },
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 3,
    category: { en: "Government", ar: "حكومة" },
    title:    { en: "Saudi Digital Authority — Platform",   ar: "هيئة الحكومة الرقمية — المنصة" },
    insight:  { en: "Provided 8 senior engineers and a technical lead for a 6-month government digitization initiative, delivered on time.", ar: "تزويد 8 مهندسين كبار وقائد تقني لمبادرة رقمنة حكومية مدتها 6 أشهر، سُلِّمت في الموعد." },
    image: "https://images.unsplash.com/photo-1568992688065-536aad8a12f6?q=80&w=1452&auto=format&fit=crop",
  },
  {
    id: 4,
    category: { en: "Software",   ar: "برمجيات" },
    title:    { en: "Riyadh Tech Ventures — Team Build",    ar: "رياض تك فنتشرز — بناء الفريق" },
    insight:  { en: "Scaled engineering team from 5 to 22 developers in one quarter using the IT Outsourcing model.", ar: "توسيع الفريق الهندسي من 5 إلى 22 مطوراً في ربع سنوي واحد عبر نموذج الاستعانة بمصادر خارجية." },
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?q=80&w=1450&auto=format&fit=crop",
  },
  {
    id: 5,
    category: { en: "Fintech",    ar: "تكنولوجيا مالية" },
    title:    { en: "FinEdge — Backend Recruitment",        ar: "فين إيدج — توظيف خلفي" },
    insight:  { en: "Delivered 8 qualified senior engineers within 3 weeks, passing all technical screenings and onboarding seamlessly.", ar: "تسليم 8 مهندسين كبار مؤهلين خلال 3 أسابيع، اجتازوا جميع الاختبارات التقنية وانضموا بسلاسة." },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop",
  },
  {
    id: 6,
    category: { en: "Banking",    ar: "بنوك" },
    title:    { en: "National Bank — Mobile Engineering",   ar: "البنك الوطني — هندسة الجوال" },
    insight:  { en: "Placed a dedicated iOS & Android team under full HR outsourcing model, covering payroll, insurance, and compliance.", ar: "توظيف فريق iOS و Android متخصص ضمن نموذج استعانة HR كامل يشمل الرواتب والتأمين والامتثال." },
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1470&auto=format&fit=crop",
  },
];

const ExploreGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeCardId, setActiveCardId]     = useState(null);
  const ln = useLn();
  const { t, i18n } = useTranslation();
  const isRTL      = i18n.language === "ar";

  const categories = [
    { key: "All",        label: { en: "All",        ar: "الكل" } },
    { key: "Banking",    label: { en: "Banking",    ar: "بنوك" } },
    { key: "Fintech",    label: { en: "Fintech",    ar: "تكنولوجيا مالية" } },
    { key: "Government", label: { en: "Government", ar: "حكومة" } },
    { key: "Software",   label: { en: "Software",   ar: "برمجيات" } },
  ];

  const filteredData = useMemo(() => {
    return activeCategory === "All"
      ? industriesData
      : industriesData.filter((item) => item.category.en === activeCategory);
  }, [activeCategory]);

  return (
    /* dir="ltr" keeps the grid column order correct in RTL pages */
    <div className="w-full max-w-6xl mx-auto py-4" dir="ltr">

      {/* Category Filters */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: '"Sora", sans-serif' }}>
          {t("explore.browse_title")}
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat.key
                  ? "bg-[#3496ed] text-white shadow-[0_0_20px_rgba(52,150,237,0.4)]"
                  : "bg-[#111114] text-slate-400 border border-white/10 hover:bg-white/5 hover:text-white"
              }`}
            >
              {isRTL ? cat.label.ar : cat.label.en}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-7 md:px-0">
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActiveCardId(activeCardId === item.id ? null : item.id)}
              onMouseLeave={() => setActiveCardId(null)}
              className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#070708] h-[340px] cursor-pointer"
            >
              <img
                src={item.image}
                alt={isRTL ? item.title.ar : item.title.en}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                  activeCardId === item.id
                    ? "scale-110 brightness-40"
                    : "brightness-[0.75] group-hover:scale-110 group-hover:brightness-40"
                }`}
              />

              {/* Category badge — top-left (LTR grid context) */}
              <div className="absolute top-4 left-4 z-20">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/15 rounded-full text-[10px] font-bold uppercase tracking-wider text-white">
                  {isRTL ? item.category.ar : item.category.en}
                </span>
              </div>

              {/* Hover overlay — switch to RTL text direction when Arabic */}
              <div
                className={`absolute inset-0 p-6 z-20 flex flex-col transition-opacity duration-300 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent ${
                  activeCardId === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                dir={isRTL ? "rtl" : "ltr"}
              >
                <div
                  className={`mt-auto transition-transform duration-300 ${
                    activeCardId === item.id ? "translate-y-0" : "translate-y-4 group-hover:translate-y-0"
                  }`}
                >
                  <h3
                    className="text-xl font-bold text-white mb-3"
                    style={{ fontFamily: '"Sora", sans-serif' }}
                  >
                    {isRTL ? item.title.ar : item.title.en}
                  </h3>

                  <div className="mb-4 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                    <span className="text-[#59b4f5] text-[10px] font-bold uppercase tracking-widest mb-1.5 block">
                      {t("explore.insight_label")}
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                      {isRTL ? item.insight.ar : item.insight.en}
                    </p>
                  </div>

                  <div className={`flex items-center gap-3 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <button
                      onClick={(e) => { e.stopPropagation(); ln("/contactus"); }}
                      className="flex-1 bg-white text-black py-2.5 rounded-xl text-xs font-bold hover:bg-[#3496ed] hover:text-white transition-colors"
                    >
                      {t("explore.contact_btn")}
                    </button>
                    <button
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white transition-colors border border-white/10"
                      aria-label="Save"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default ExploreGrid;
