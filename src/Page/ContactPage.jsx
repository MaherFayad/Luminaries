import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { premiumAppear } from "../utils/animations";

const ContactPage = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ company: "", name: "", email: "", phone: "", service: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass = "w-full bg-[#070708] border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/20 transition-colors";

  return (
    <div className="pt-32 pb-20">
      <section className="px-7 md:px-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <motion.div {...premiumAppear} className="space-y-8">
            <div>
              <span className="text-brand-500 uppercase text-xs tracking-[0.4em] font-bold mb-4 block">
                {t("contact.eyebrow")}
              </span>
              <h1
                className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tighter"
                style={{ fontFamily: '"Sora", sans-serif' }}
              >
                {t("contact.heading")}
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">{t("contact.subheading")}</p>
            </div>

            <div className="space-y-4 pt-4">
              {[
                { icon: Mail,   label: "Email",    value: "info@luminarieshub.com" },
                { icon: Phone,  label: "Phone",    value: "+20 (0) 10 0000 0000" },
                { icon: MapPin, label: "Offices",  value: "Cairo, Egypt · Riyadh, Saudi Arabia" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 p-4 rounded-2xl bg-[#070708] border border-white/8">
                  <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/15 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-brand-400" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider">{label}</div>
                    <div className="text-slate-200 text-sm font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div {...premiumAppear} transition={{ ...premiumAppear.transition, delay: 0.15 }}>
            {sent ? (
              <div className="rounded-[32px] bg-[#070708] border border-brand-500/30 p-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-brand-500/15 border border-brand-500/30 flex items-center justify-center mx-auto">
                  <ArrowRight className="w-7 h-7 text-brand-400" />
                </div>
                <h3 className="text-white font-bold text-2xl" style={{ fontFamily: '"Sora", sans-serif' }}>Message Sent!</h3>
                <p className="text-slate-400">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-[32px] bg-[#070708] border border-white/10 p-8 space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-slate-400 text-xs uppercase tracking-wider">{t("contact.form.company")}</label>
                    <input name="company" value={form.company} onChange={handleChange} required className={inputClass} placeholder="Acme Corp" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-slate-400 text-xs uppercase tracking-wider">{t("contact.form.name")}</label>
                    <input name="name" value={form.name} onChange={handleChange} required className={inputClass} placeholder="John Smith" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs uppercase tracking-wider">{t("contact.form.email")}</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required className={inputClass} placeholder="john@acme.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs uppercase tracking-wider">{t("contact.form.phone")}</label>
                  <input name="phone" type="tel" value={form.phone} onChange={handleChange} className={inputClass} placeholder="+966 50 000 0000" />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs uppercase tracking-wider">{t("contact.form.service")}</label>
                  <select name="service" value={form.service} onChange={handleChange} className={`${inputClass} cursor-pointer`}>
                    <option value="" className="bg-[#070708]">Select a service...</option>
                    {Object.entries(t("contact.form.service_options", { returnObjects: true })).map(([k, v]) => (
                      <option key={k} value={k} className="bg-[#070708]">{v}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 text-xs uppercase tracking-wider">{t("contact.form.message")}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} className={`${inputClass} resize-none`} placeholder="We're looking to hire 5 React developers for a 12-month project..." />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-600 hover:bg-brand-500 text-white rounded-xl font-bold text-sm uppercase tracking-widest transition-colors flex items-center justify-center gap-2.5"
                >
                  {t("contact.form.submit")}
                  <ArrowRight className="w-4 h-4 rtl-flip" />
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default ContactPage;
