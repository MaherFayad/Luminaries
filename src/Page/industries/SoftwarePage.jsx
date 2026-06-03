import React from "react";
import { motion } from "framer-motion";
import { useLn } from "../../hooks/useLp";
import { useTranslation } from "react-i18next";
import { Monitor, ArrowRight } from "lucide-react";
import { premiumAppear } from "../../utils/animations";
import CTA from "../../components/Section/CTA";

const content = {
  en: {
    eyebrow: "Software & Technology",
    heading: "Scale your engineering team ", accent: "without the overhead.",
    desc: "Software companies and technology startups need to scale fast while maintaining product quality. We give you access to pre-vetted engineers who can plug directly into your delivery squads.",
    challengesTitle: "Challenges We Solve",
    challenges: [
      { t: "Rapid Team Scaling",         d: "Going from 5 to 50 engineers in months, not years, without compromising culture or code quality." },
      { t: "Full-Stack Versatility",     d: "Frontend, backend, mobile, DevOps, cloud — we source across the entire engineering stack." },
      { t: "Agile Integration",          d: "Engineers experienced in sprint-based delivery who integrate into your existing rituals from day one." },
      { t: "QA at Velocity",             d: "Testing professionals who keep up with fast release cycles without creating bottlenecks." },
    ],
    capTitle: "Key Capabilities",
    caps: ["Full-Stack Development Teams", "DevOps & Cloud Engineers", "QA & Test Automation", "Agile Delivery Squads", "Mobile (iOS & Android)", "Data Engineering"],
    caseTitle: "Case Study", caseLabel: "Riyadh Tech Ventures",
    caseText: "Scaled an engineering team from 5 to 22 developers in a single quarter using the IT Outsourcing model. All team members were integrated into the client's existing sprint process within the first week. Retention rate: 100% across the engagement.",
  },
  ar: {
    eyebrow: "البرمجيات والتقنية",
    heading: "وسّع فريق هندستك ", accent: "بدون الأعباء التشغيلية.",
    desc: "تحتاج شركات البرمجيات والشركات الناشئة إلى التوسع بسرعة مع الحفاظ على جودة المنتج. نمنحك وصولاً إلى مهندسين مُفرَّزين مسبقاً يمكنهم الانضمام مباشرة إلى فرق تسليمك.",
    challengesTitle: "التحديات التي نحلها",
    challenges: [
      { t: "التوسع السريع للفريق",          d: "الانتقال من 5 إلى 50 مهندساً في أشهر وليس سنوات دون المساومة على الثقافة أو جودة الكود." },
      { t: "التنوع التقني الشامل",           d: "واجهات أمامية وخلفية وجوال و DevOps وسحابة — نوفر عبر المكدس الهندسي بأكمله." },
      { t: "التكامل الرشيق",                 d: "مهندسون ذوو خبرة في التسليم المبني على السبرينت يندمجون في طقوسك الحالية من اليوم الأول." },
      { t: "ضمان الجودة بالسرعة المطلوبة",  d: "متخصصو الاختبار الذين يواكبون دورات الإصدار السريعة دون إحداث اختناقات." },
    ],
    capTitle: "القدرات الرئيسية",
    caps: ["فرق التطوير المتكاملة", "مهندسو DevOps والسحابة", "اختبار الجودة والأتمتة", "فرق التسليم الرشيق", "تطوير الجوال (iOS وAndroid)", "هندسة البيانات"],
    caseTitle: "قصة نجاح", caseLabel: "رياض تك فنتشرز",
    caseText: "توسيع الفريق الهندسي من 5 إلى 22 مطوراً في ربع سنوي واحد باستخدام نموذج الاستعانة بمصادر خارجية. اندمج جميع أعضاء الفريق في عملية السبرينت الحالية للعميل خلال الأسبوع الأول. معدل الاحتفاظ: 100% طوال فترة التعاون.",
  },
};

export default function SoftwarePage() {
  const { i18n } = useTranslation();
  const ln = useLn();
  const isRTL = i18n.language === "ar";
  const c = isRTL ? content.ar : content.en;

  return (
    <div className="bg-[#030712] min-h-screen">
      <section className="pt-40 pb-20 px-7 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#f59e0b]/8 blur-[140px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...premiumAppear} className="max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-[#f59e0b]/15 border border-[#f59e0b]/25 flex items-center justify-center mb-8">
              <Monitor className="w-8 h-8 text-[#fbbf24]" strokeWidth={1.5} />
            </div>
            <span className="text-[#fbbf24] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">{c.eyebrow}</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tighter leading-[1.05]" style={{ fontFamily: '"Sora", sans-serif' }}>
              {c.heading}<span className="text-[#f59e0b]">{c.accent}</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">{c.desc}</p>
            <button onClick={() => ln("/contactus")}
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
