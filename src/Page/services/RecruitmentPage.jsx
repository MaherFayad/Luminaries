import React from "react";
import { motion } from "framer-motion";
import { useLn } from "../../hooks/useLp";
import { useTranslation } from "react-i18next";
import { Search, ArrowRight } from "lucide-react";
import { premiumAppear } from "../../utils/animations";
import CTA from "../../components/Section/CTA";

const steps = {
  en: [
    { num: "01", title: "Requirement Definition",       desc: "We align on skill sets, hiring criteria, and interview process while advising on market benchmarks and budget." },
    { num: "02", title: "Sourcing & Screening",         desc: "We identify candidates from our continuously updated talent pool and conduct initial technical and HR evaluation." },
    { num: "03", title: "Candidate Submission",         desc: "Qualified, pre-screened profiles delivered within 5 working days with salary expectations and availability details." },
    { num: "04", title: "Shortlisting & Interviews",    desc: "Clients review profiles, select candidates, and proceed with interviews while we coordinate scheduling." },
    { num: "05", title: "Offer & Onboarding",           desc: "We support the offer and onboarding process with continuous coordination and documentation." },
    { num: "06", title: "Fee Settlement & Replacement", desc: "Fees settled on joining date. Free replacement provided if probation not completed for valid, documented reasons." },
  ],
  ar: [
    { num: "01", title: "تعريف المتطلبات",               desc: "نتوافق على مجموعات المهارات ومعايير التوظيف وعملية المقابلة مع تقديم المشورة حول معايير السوق والميزانية." },
    { num: "02", title: "التوريد والفرز",                 desc: "نحدد المرشحين من مجموعة كفاءاتنا المحدّثة باستمرار ونجري تقييماً تقنياً وإنسانياً أولياً." },
    { num: "03", title: "تقديم المرشحين",                 desc: "ملفات مؤهلة ومُفرَّزة مسبقاً تُسلَّم خلال 5 أيام عمل مع توقعات الرواتب وتفاصيل التوافر." },
    { num: "04", title: "الاختيار والمقابلات",            desc: "يراجع العملاء الملفات ويختارون المرشحين ويجرون المقابلات بينما ننسق الجدولة." },
    { num: "05", title: "العرض والإعداد",                 desc: "ندعم عملية العرض والإعداد مع التنسيق والتوثيق المستمر." },
    { num: "06", title: "تسوية الرسوم والاستبدال",        desc: "تُسوَّى الرسوم عند تاريخ الانضمام. استبدال مجاني إذا لم تُكتمل فترة التجربة لأسباب موثقة وصحيحة." },
  ],
};

export default function RecruitmentPage() {
  const { t, i18n } = useTranslation();
  const ln = useLn();
  const isRTL = i18n.language === "ar";
  const processSteps = isRTL ? steps.ar : steps.en;

  return (
    <div className="bg-[#030712] min-h-screen">
      {/* Hero */}
      <section className="pt-40 pb-20 px-7 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#1a76d2]/12 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute top-1/3 end-0 w-[400px] h-[400px] bg-[#f59e0b]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div {...premiumAppear} className="max-w-3xl">
            <span className="text-[#59b4f5] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
              {isRTL ? "التوظيف التقني" : "Technical Recruitment"}
            </span>
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter leading-[1.05]"
              style={{ fontFamily: '"Sora", sans-serif' }}
            >
              {isRTL ? (
                <>كفاءات مُفرَّزة مسبقاً <span className="text-[#3496ed]">خلال 5 أيام عمل.</span></>
              ) : (
                <>Pre-vetted talent delivered <span className="text-[#3496ed]">within 5 working days.</span></>
              )}
            </h1>
            <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
              {isRTL
                ? "توظيف دقيق مع تركيز قوي على الجودة والملاءمة والكفاءة. عمليتنا مصممة لتحسين دقة التوظيف وتقليل التأخيرات."
                : "Precision hiring with a strong focus on quality, relevance, and efficiency. Our process is designed to improve hiring accuracy, reduce delays, and ensure a smooth experience."}
            </p>
            <button
              onClick={() => ln("/contactus")}
              className="inline-flex items-center gap-3 bg-[#1a76d2] hover:bg-[#3496ed] text-white px-8 py-4 rounded-full font-bold text-sm uppercase tracking-wider transition-all shadow-lg shadow-[#1a76d2]/25"
            >
              {isRTL ? "ابدأ الآن" : "Start a Search"}
              <ArrowRight className="w-4 h-4" style={{ transform: isRTL ? "scaleX(-1)" : "scaleX(1)" }} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* 6-Step Process */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto">
        <motion.div {...premiumAppear} className="mb-14 text-center">
          <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-3 block">
            {isRTL ? "العملية" : "The Process"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter" style={{ fontFamily: '"Sora", sans-serif' }}>
            {isRTL ? "منهجية واضحة في كل مرحلة." : "Structured at every stage."}
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {processSteps.map((step, i) => (
            <motion.div
              key={i}
              {...premiumAppear}
              transition={{ ...premiumAppear.transition, delay: i * 0.08 }}
              className="rounded-[28px] p-7 bg-[#070708] border border-white/10 hover:border-[#3496ed]/35 transition-colors group"
            >
              <div className="text-[#3496ed]/30 font-black text-4xl mb-4 group-hover:text-[#3496ed]/50 transition-colors"
                style={{ fontFamily: '"Sora", sans-serif' }}>
                {step.num}
              </div>
              <h4 className="text-white font-bold mb-2 text-base" style={{ fontFamily: '"Sora", sans-serif' }}>{step.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Outcome */}
      <section className="py-20 px-7 md:px-10 max-w-6xl mx-auto border-t border-white/5">
        <motion.div {...premiumAppear} className="rounded-[40px] bg-[#070708] border border-[#3496ed]/20 p-10 md:p-14">
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#59b4f5] font-bold mb-4">
            {isRTL ? "النتيجة" : "Outcome"}
          </div>
          <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed" style={{ fontFamily: '"Sora", sans-serif' }}>
            {isRTL
              ? "قائمة مختصرة من المرشحين المؤهلين الجاهزين للمقابلات — توفير الوقت وتحسين دقة التوظيف وتقليل الهدر في المقابلات."
              : "A refined shortlist of highly qualified, interview-ready candidates — saving time, improving hiring accuracy, and reducing interview waste."}
          </p>
        </motion.div>
      </section>

      <CTA />
    </div>
  );
}
