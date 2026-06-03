import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Zap, ArrowRight } from "lucide-react";
import { premiumAppear } from "../../utils/animations";
import CTA from "../../components/Section/CTA";

const content = {
  en: {
    eyebrow: "Fintech",
    heading: "High-velocity talent for ", accent: "fast-moving fintech teams.",
    desc: "Fintech organisations move fast. They need engineers who can hit the ground running, scale their platform, and ship features without operational friction slowing them down.",
    challengesTitle: "Challenges We Solve",
    challenges: [
      { t: "Speed to Market",              d: "Placing qualified engineers within 5 working days so your roadmap doesn't wait on hiring." },
      { t: "Payments Expertise",           d: "Sourcing specialists in payment infrastructure, wallet technology, and open banking APIs." },
      { t: "Compliance in Motion",         d: "Engineers who understand Central Bank regulations while still shipping fast." },
      { t: "Product & UX at Scale",        d: "Design and product talent who work within agile delivery environments." },
    ],
    capTitle: "Key Capabilities",
    caps: ["Payment Infrastructure Engineers", "Mobile Wallet Developers", "API Integration Specialists", "Product & UX Teams", "Compliance Engineers", "Data Science & Analytics"],
    caseTitle: "Case Studies", caseLabel: "Cairo Fintech & FinEdge",
    caseText: "Placed 12 full-stack engineers at Cairo Fintech over 3 months enabling 2 new payment feature launches on schedule. Separately, delivered 8 qualified backend engineers for FinEdge Saudi Arabia within 3 weeks — all passing technical screening on first attempt.",
  },
  ar: {
    eyebrow: "التكنولوجيا المالية",
    heading: "كفاءات عالية السرعة لـ", accent: "فرق الفينتك المتحركة بسرعة.",
    desc: "تتحرك مؤسسات الفينتك بسرعة. تحتاج إلى مهندسين قادرين على البدء فوراً وتوسيع منصتهم وشحن المميزات دون احتكاك تشغيلي يعيقهم.",
    challengesTitle: "التحديات التي نحلها",
    challenges: [
      { t: "السرعة في الوصول إلى السوق",   d: "توظيف مهندسين مؤهلين خلال 5 أيام عمل حتى لا تنتظر خارطة طريقك عملية التوظيف." },
      { t: "خبرة المدفوعات",                d: "توريد متخصصين في البنية التحتية للمدفوعات وتقنية المحافظ وواجهات برمجة البنوك المفتوحة." },
      { t: "الامتثال في الحركة",            d: "مهندسون يفهمون لوائح البنوك المركزية مع الاستمرار في الشحن بسرعة." },
      { t: "المنتج وتجربة المستخدم على نطاق واسع", d: "كفاءات التصميم والمنتج التي تعمل ضمن بيئات التسليم الرشيق." },
    ],
    capTitle: "القدرات الرئيسية",
    caps: ["مهندسو البنية التحتية للمدفوعات", "مطورو المحافظ الرقمية", "متخصصو تكامل API", "فرق المنتج وتجربة المستخدم", "مهندسو الامتثال", "علوم البيانات والتحليلات"],
    caseTitle: "قصص نجاح", caseLabel: "كايرو فينتك وفين إيدج",
    caseText: "توظيف 12 مهندساً متكاملاً في كايرو فينتك على مدى 3 أشهر مما أتاح إطلاق ميزتَي دفع جديدتَين في الموعد المحدد. وبشكل منفصل، تسليم 8 مهندسين خلفيين مؤهلين لشركة FinEdge السعودية خلال 3 أسابيع — اجتازوا جميعاً الفرز التقني من أول محاولة.",
  },
};

export default function FintechPage() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";
  const c = isRTL ? content.ar : content.en;

  return (
    <div className="bg-[#030712] min-h-screen">
      <section className="pt-40 pb-20 px-7 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#f59e0b]/8 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...premiumAppear} className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/25 flex items-center justify-center mb-8">
              <Zap className="w-8 h-8 text-[#fbbf24]" strokeWidth={1.5} />
            </div>
            <span className="text-[#fbbf24] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">{c.eyebrow}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-[1.05]" style={{ fontFamily: '"Sora", sans-serif' }}>
              {c.heading}<span className="text-[#f59e0b]">{c.accent}</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">{c.desc}</p>
            <button onClick={() => navigate("/contactus")}
              className="inline-flex items-center gap-3 bg-[#f59e0b] hover:bg-[#fbbf24] text-black px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#f59e0b]/25">
              {isRTL ? "ابدأ معنا" : "Start a Conversation"}
              <ArrowRight className="w-4 h-4" style={{ transform: isRTL ? "scaleX(-1)" : "scaleX(1)" }} />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto">
        <motion.div {...premiumAppear} className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>{c.challengesTitle}</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {c.challenges.map((ch, i) => (
            <motion.div key={i} {...premiumAppear} transition={{ ...premiumAppear.transition, delay: i * 0.1 }}
              className="rounded-[28px] p-7 bg-[#070708] border border-white/10 hover:border-[#f59e0b]/35 transition-colors">
              <h4 className="text-white font-bold mb-2" style={{ fontFamily: '"Sora", sans-serif' }}>{ch.t}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{ch.d}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto border-t border-white/5">
        <motion.div {...premiumAppear} className="mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>{c.capTitle}</h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {c.caps.map((cap) => (
            <div key={cap} className="rounded-2xl px-5 py-3.5 bg-[#070708] border border-white/10 text-slate-300 text-sm flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#fbbf24] shrink-0" />{cap}
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto border-t border-white/5">
        <motion.div {...premiumAppear}>
          <span className="text-[#f59e0b] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">{c.caseTitle}</span>
          <div className="rounded-[40px] bg-[#070708] border border-[#f59e0b]/20 p-10 md:p-14">
            <div className="text-[#fbbf24] font-bold text-xl mb-4">{c.caseLabel}</div>
            <p className="text-slate-300 text-lg leading-relaxed">{c.caseText}</p>
          </div>
        </motion.div>
      </section>
      <CTA />
    </div>
  );
}
