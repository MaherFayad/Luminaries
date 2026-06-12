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
        <div className="flex gap-6">
          <a href="https://www.linkedin.com/company/luminarieshub" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="https://www.facebook.com/LuminariesHub/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="https://www.instagram.com/luminarieshub/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </a>
          <a href="https://x.com/LuminariesHub" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="X (Twitter)">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
