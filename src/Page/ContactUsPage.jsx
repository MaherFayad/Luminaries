import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import CTA from "../components/Section/CTA";
import { premiumAppear } from "../utils/animations";
import { useTranslation } from "react-i18next";

const inputClass =
  "w-full bg-[#111114] border border-white/10 rounded-lg px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:border-[#3496ed] focus:bg-[#1a1a1f] transition-colors";

const ContactUsPage = () => {
  const { t } = useTranslation();
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_2btuobi",
        "template_t4n7e7z",
        formRef.current,
        "cJezY-I7q0Nm0CIj5"
      )
      .then(
        () => setStatus("sent"),
        () => setStatus("error")
      );
  };

  const whyItems = [
    {
      title: t("pricing_page.w1_title"),
      desc: t("pricing_page.w1_desc"),
      hoverBorderClass: "hover:border-[#3496ed]/30",
      iconBgClass: "bg-[#1a76d2]/10",
      iconColor: "text-[#59b4f5]",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: t("pricing_page.w2_title"),
      desc: t("pricing_page.w2_desc"),
      hoverBorderClass: "hover:border-[#f59e0b]/30",
      iconBgClass: "bg-[#f59e0b]/10",
      iconColor: "text-[#fbbf24]",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: t("pricing_page.w3_title"),
      desc: t("pricing_page.w3_desc"),
      hoverBorderClass: "hover:border-[#3496ed]/30",
      iconBgClass: "bg-[#3496ed]/10",
      iconColor: "text-[#3496ed]",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="bg-[#030712] min-h-screen relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#1a76d2]/15 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-[#f59e0b]/8 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="relative z-10 pt-32">

        {/* WHY PARTNER WITH US */}
        <section className="py-20 px-7 md:px-10 container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <motion.div {...premiumAppear}>
              <h2
                className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("pricing_page.why_heading")}{" "}
                <span className="text-[#59b4f5]">{t("pricing_page.why_accent")}</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                {t("pricing_page.why_sub")}
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyItems.map((item, index) => (
              <motion.div
                key={index}
                {...premiumAppear}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.15 }}
                className={`bg-[#070708] border border-white/10 rounded-[32px] p-8 md:p-10 group ${item.hoverBorderClass} transition-colors relative overflow-hidden`}
              >
                <div className={`w-14 h-14 ${item.iconBgClass} rounded-2xl flex items-center justify-center mb-6 ${item.iconColor} group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="py-24 px-7 md:px-10 container mx-auto max-w-4xl border-t border-white/5">
          <motion.div {...premiumAppear} className="flex flex-col items-center">
            <div className="text-center mb-12">
              <span className="text-[#3496ed] uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
                {t("pricing_page.contact_eyebrow")}
              </span>
              <h2
                className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("pricing_page.contact_heading")}
              </h2>
              <p className="text-slate-400 text-base mb-1">
                <span className="text-white font-medium">{t("pricing_page.contact_country")}:</span>{" "}
                {t("pricing_page.contact_country_val")}
              </p>
              <p className="text-slate-400 text-base">
                <span className="text-white font-medium">{t("pricing_page.contact_email")}:</span>{" "}
                {t("pricing_page.contact_email_val")}
              </p>
            </div>

            {status === "sent" ? (
              <div className="w-full max-w-2xl rounded-[32px] bg-[#070708] border border-[#3496ed]/30 p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#1a76d2]/15 border border-[#3496ed]/30 flex items-center justify-center mx-auto">
                  <svg className="w-7 h-7 text-[#59b4f5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3
                  className="text-white font-bold text-2xl"
                  style={{ fontFamily: '"Sora", sans-serif' }}
                >
                  Message Sent!
                </h3>
                <p className="text-slate-400">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleContactSubmit} className="w-full max-w-2xl flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("pricing_page.contact_name_ph")}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t("pricing_page.contact_email_ph")}
                    required
                    className={inputClass}
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone (optional)"
                  className={inputClass}
                />
                <textarea
                  name="message"
                  placeholder={t("pricing_page.contact_msg_ph")}
                  rows={5}
                  required
                  className={`${inputClass} resize-none`}
                />

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Something went wrong. Please try again or email us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[#1a76d2] text-white font-bold text-base py-4 rounded-lg hover:bg-[#3496ed] transition-colors active:scale-[0.98] mt-2 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    t("pricing_page.contact_btn")
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </section>

        <section className="pb-10"><CTA /></section>
      </div>
    </div>
  );
};

export default ContactUsPage;
