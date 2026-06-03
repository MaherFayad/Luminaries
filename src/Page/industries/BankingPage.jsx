import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Landmark, ArrowRight } from "lucide-react";
import { premiumAppear } from "../../utils/animations";
import CTA from "../../components/Section/CTA";

const content = {
  en: {
    eyebrow: "Banking & Financial Services",
    heading: "Precision talent for", accent: "compliance-critical environments.",
    desc: "Banking organisations demand technical talent that understands regulatory frameworks, security requirements, and the operational reliability standards that protect customer trust.",
    challengesTitle: "Challenges We Solve",
    challenges: [
      { t: "Compliance & Regulatory Complexity",     d: "Sourcing engineers who understand local and international regulatory environments (SAMA, CBE, CBUAE)." },
      { t: "Legacy System Modernisation",             d: "Teams capable of working within and migrating away from legacy core banking infrastructure." },
      { t: "Security-First Engineering",              d: "Professionals with bank-grade security standards built into their practice." },
      { t: "Time-Critical Hiring",                    d: "Delivering qualified talent within 5 working days to keep product timelines intact." },
    ],
    capTitle: "Key Capabilities",
    caps: ["Core Banking System Engineers", "Compliance & RegTech Talent", "Cybersecurity Specialists", "Data & Analytics Teams", "Mobile Banking Developers", "QA & Testing Professionals"],
    caseTitle: "Case Study", caseLabel: "AlBilad Bank",
    caseText: "Deployed a 6-person Testing as a Service squad within 10 days, reducing regression cycle time by 60% across 3 consecutive product releases. All engineers passed internal security and compliance clearance on first attempt.",
  },
  ar: {
    eyebrow: "الخدمات المصرفية والمالية",
    heading: "كفاءات دقيقة في ", accent: "البيئات الحساسة للامتثال.",
    desc: "تتطلب المؤسسات المصرفية كفاءات تقنية تفهم الأطر التنظيمية ومتطلبات الأمان ومعايير الموثوقية التشغيلية التي تحمي ثقة العملاء.",
    challengesTitle: "التحديات التي نحلها",
    challenges: [
      { t: "تعقيد الامتثال والتنظيم",               d: "توريد مهندسين يفهمون البيئات التنظيمية المحلية والدولية (سامة، البنك المركزي المصري)." },
      { t: "تحديث الأنظمة القديمة",                 d: "فرق قادرة على العمل ضمن البنية التحتية الأساسية للبنوك القديمة والترحيل منها." },
      { t: "هندسة الأمان أولاً",                    d: "متخصصون يطبقون معايير الأمان المصرفي في ممارساتهم الهندسية." },
      { t: "توظيف في أوقات حرجة",                   d: "تسليم كفاءات مؤهلة خلال 5 أيام عمل للحفاظ على الجداول الزمنية للمنتجات." },
    ],
    capTitle: "القدرات الرئيسية",
    caps: ["مهندسو أنظمة البنوك الأساسية", "كفاءات الامتثال وRegTech", "متخصصو الأمن السيبراني", "فرق البيانات والتحليلات", "مطورو تطبيقات الصيرفة المتنقلة", "متخصصو QA والاختبار"],
    caseTitle: "قصة نجاح", caseLabel: "بنك البلاد",
    caseText: "نشر فريق TaaS من 6 أشخاص خلال 10 أيام، مما قلّص دورة الاختبار الانحداري بنسبة 60% عبر 3 إصدارات متتالية. اجتاز جميع المهندسين تخليص الأمان والامتثال الداخلي من أول محاولة.",
  },
};

export default function BankingPage() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const isRTL = i18n.language === "ar";
  const c = isRTL ? content.ar : content.en;

  return (
    <div className="bg-[#030712] min-h-screen">
      <section className="pt-40 pb-20 px-7 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#1a76d2]/12 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-start gap-10">
          <motion.div {...premiumAppear} className="flex-1">
            <div className="w-16 h-16 rounded-2xl bg-[#1a76d2]/15 border border-[#1a76d2]/25 flex items-center justify-center mb-8">
              <Landmark className="w-8 h-8 text-[#59b4f5]" strokeWidth={1.5} />
            </div>
            <span className="text-[#59b4f5] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">{c.eyebrow}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-[1.05]" style={{ fontFamily: '"Sora", sans-serif' }}>
              {c.heading}<span className="text-[#3496ed]">{c.accent}</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">{c.desc}</p>
            <button onClick={() => navigate("/contactus")}
              className="inline-flex items-center gap-3 bg-[#1a76d2] hover:bg-[#3496ed] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#1a76d2]/25">
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
              className="rounded-[28px] p-7 bg-[#070708] border border-white/10 hover:border-[#3496ed]/35 transition-colors">
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
              <div className="w-1.5 h-1.5 rounded-full bg-[#59b4f5] shrink-0" />{cap}
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
