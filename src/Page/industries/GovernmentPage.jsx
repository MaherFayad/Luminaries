import React from "react";
import { motion } from "framer-motion";
import { useLn } from "../../hooks/useLp";
import { useTranslation } from "react-i18next";
import { Building2, ArrowRight } from "lucide-react";
import { premiumAppear } from "../../utils/animations";
import CTA from "../../components/Section/CTA";

const content = {
  en: {
    eyebrow: "Government & Enterprise",
    heading: "Structured delivery for ", accent: "mission-critical programmes.",
    desc: "Government and large enterprise organisations require technical talent with a unique combination of reliability, security clearance readiness, and the ability to work within structured governance frameworks.",
    challengesTitle: "Challenges We Solve",
    challenges: [
      { t: "Structured Governance",          d: "Engineers who understand public-sector delivery frameworks, procurement processes, and documentation standards." },
      { t: "Legacy Modernisation at Scale",  d: "Teams experienced in migrating and extending mission-critical legacy government systems." },
      { t: "Data Security & Sovereignty",    d: "Specialists who work within national data residency and sovereignty requirements." },
      { t: "Long-Term Programme Staffing",   d: "Stable, committed talent for multi-year digital transformation programmes." },
    ],
    capTitle: "Key Capabilities",
    caps: ["Digital Transformation Programmes", "Legacy System Modernisation", "e-Government Portal Development", "Data Governance Specialists", "Cloud & Infrastructure Engineers", "Programme Managers"],
    caseTitle: "Case Study", caseLabel: "Saudi Digital Authority",
    caseText: "Provided 8 senior engineers and a dedicated technical lead for a 6-month government digitization initiative. Full HR outsourcing model applied — covering payroll, compliance, and security administration. Delivered on time and within scope.",
  },
  ar: {
    eyebrow: "الحكومة والمؤسسات الكبرى",
    heading: "تسليم منظم لـ", accent: "البرامج الحيوية.",
    desc: "تتطلب المؤسسات الحكومية والمؤسسات الكبرى كفاءات تقنية تجمع بين الموثوقية والاستعداد للتخليص الأمني والقدرة على العمل ضمن أطر الحوكمة المنظمة.",
    challengesTitle: "التحديات التي نحلها",
    challenges: [
      { t: "الحوكمة المنظمة",                   d: "مهندسون يفهمون أطر تسليم القطاع العام وعمليات المشتريات ومعايير التوثيق." },
      { t: "تحديث الأنظمة القديمة على نطاق واسع", d: "فرق ذات خبرة في ترحيل وتوسيع أنظمة حكومية حيوية قديمة." },
      { t: "أمان البيانات والسيادة عليها",       d: "متخصصون يعملون ضمن متطلبات إقامة البيانات الوطنية وسيادتها." },
      { t: "التوظيف الدائم للبرامج الطويلة",     d: "كفاءات ثابتة وملتزمة لبرامج التحول الرقمي متعددة السنوات." },
    ],
    capTitle: "القدرات الرئيسية",
    caps: ["برامج التحول الرقمي", "تحديث الأنظمة القديمة", "تطوير بوابات الحكومة الإلكترونية", "متخصصو حوكمة البيانات", "مهندسو السحابة والبنية التحتية", "مديرو البرامج"],
    caseTitle: "قصة نجاح", caseLabel: "هيئة الحكومة الرقمية السعودية",
    caseText: "تزويد 8 مهندسين كبار وقائد تقني متخصص لمبادرة رقمنة حكومية مدتها 6 أشهر. تطبيق نموذج استعانة HR كامل — يشمل الرواتب والامتثال وإدارة الأمان. سُلِّمت في الوقت المحدد وضمن النطاق المحدد.",
  },
};

export default function GovernmentPage() {
  const { i18n } = useTranslation();
  const ln = useLn();
  const isRTL = i18n.language === "ar";
  const c = isRTL ? content.ar : content.en;

  return (
    <div className="bg-[#030712] min-h-screen">
      <section className="pt-40 pb-20 px-7 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#1a76d2]/12 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...premiumAppear} className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-[#1a76d2]/15 border border-[#1a76d2]/25 flex items-center justify-center mb-8">
              <Building2 className="w-8 h-8 text-[#59b4f5]" strokeWidth={1.5} />
            </div>
            <span className="text-[#59b4f5] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">{c.eyebrow}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-[1.05]" style={{ fontFamily: '"Sora", sans-serif' }}>
              {c.heading}<span className="text-[#3496ed]">{c.accent}</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">{c.desc}</p>
            <button onClick={() => ln("/contactus")}
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

      <CTA />
    </div>
  );
}
