import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLp } from "../../hooks/useLp";
import logoFull from "../../assets/Logo.svg";

const Footer = () => {
  const { t } = useTranslation();
  const lp = useLp();

  const menuConfig = {
    [t("footer.explore_title")]: [
      { name: t("footer.explore_1"), path: lp("/services/it-outsourcing") },
      { name: t("footer.explore_2"), path: lp("/services/recruitment") },
      { name: t("footer.explore_3"), path: lp("/services/professional") },
      { name: t("footer.explore_4"), path: lp("/services/mena-presence") },
    ],
    [t("footer.product_title")]: [
      { name: t("footer.product_1"), path: lp("/industries/banking") },
      { name: t("footer.product_2"), path: lp("/industries/fintech") },
      { name: t("footer.product_3"), path: lp("/industries/government") },
      { name: t("footer.product_4"), path: lp("/industries/software") },
    ],
    [t("footer.company_title")]: [
      { name: t("footer.company_1"), path: lp("/about") },
      { name: t("footer.company_3"), path: lp("/contactus") },
    ],
  };

  return (
    <footer className="relative z-10 pt-24 pb-12 px-4 md:px-10 bg-[#050505] overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-[#3496ed]/30 to-transparent" />

      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-5 gap-16 mb-20">
        {/* Brand Section */}
        <div className="col-span-2 flex flex-col items-center md:items-start text-center md:text-start">
          <Link
            to={lp("/")}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center mb-6 group"
          >
            <img
              src={logoFull}
              alt="Luminaries Hub"
              className="h-7 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
            />
          </Link>
          <p className="text-slate-500 text-base leading-relaxed max-w-[320px]">
            {t("footer.tagline")}
          </p>
        </div>

        {/* Navigation Grid */}
        <div className="w-full col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(menuConfig).map(([title, items]) => (
            <div key={title} className="text-start">
              <h4 className="text-white font-bold mb-6 text-[11px] uppercase tracking-[0.2em]">
                {title}
              </h4>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className="text-slate-400 text-sm hover:text-[#59b4f5] transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* PDF closing tagline */}
      <div className="max-w-6xl mx-auto text-center py-8 border-t border-white/5">
        <p className="text-slate-500 text-sm font-medium tracking-wide">
          {t("footer.partner_tagline")}
        </p>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-6 border-t border-white/5 gap-6">
        <p className="text-slate-600 text-[10px] uppercase tracking-[0.3em] font-medium">
          {t("footer.copyright")}
        </p>
        <div className="flex gap-10">
          {[t("footer.social_1"), t("footer.social_2"), t("footer.social_3")].map((social) => (
            <a
              key={social}
              href="#"
              className="text-slate-400 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-wider"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
