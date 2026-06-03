import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { setLanguage } from "../../i18n";
import logoFull from "../../assets/Logo.svg";
import logoIcon from "../../assets/Logo-Icon.svg";

// --- ANIMATION VARIANTS ---
const menuVariants = {
  initial: { y: "-100%" },
  animate: {
    y: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], when: "beforeChildren", staggerChildren: 0.08 },
  },
  exit: {
    y: "-100%",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
  exit: { opacity: 1, transition: { duration: 0 } },
};

// --- LANGUAGE SWITCHER ---
const LangToggle = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  return (
    <button
      onClick={() => setLanguage(isAr ? "en" : "ar")}
      aria-label="Toggle language"
      className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-white/15 bg-white/5 hover:bg-white/10 text-[11px] font-bold tracking-wider text-slate-300 hover:text-white transition-all"
    >
      <span className={isAr ? "opacity-40" : "opacity-100"}>EN</span>
      <span className="text-white/20 mx-0.5">|</span>
      <span className={`font-arabic ${isAr ? "opacity-100" : "opacity-40"}`}>عر</span>
    </button>
  );
};

// --- MAIN COMPONENT ---
const Navbar = () => {
  const location = useLocation();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const checkIsActive = (path) => location.pathname === path;

  const navLinks = [
    { name: t("nav.home"),       path: "/" },
    { name: t("nav.services"),   path: "/services" },
    { name: t("nav.industries"), path: "/industries" },
    { name: t("nav.about"),      path: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-500 ${
        isScrolled
          ? "bg-[#030712]/70 backdrop-blur-xl border-b border-white/[0.05] py-3 shadow-2xl"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* BRANDING */}
        <div className="flex-1">
          <Link to="/" className="inline-flex items-center group relative z-[1001]">
            <img
              src={logoFull}
              alt="Luminaries Hub"
              className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
            />
          </Link>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-1">
          {navLinks.map((link) => (
            <HashLink
              smooth
              key={link.path}
              to={link.path}
              className={`text-[14px] font-medium tracking-wide transition-colors whitespace-nowrap ${
                checkIsActive(link.path)
                  ? "text-[#59b4f5]"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.name}
            </HashLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden md:flex items-center justify-end flex-1 gap-3">
          <LangToggle />
          <Link to="/contactus">
            <button className="px-6 py-2.5 bg-[#1a76d2] text-white rounded-xl text-[12px] font-bold uppercase tracking-widest hover:bg-[#3496ed] transition-all shadow-lg shadow-[#1a76d2]/20">
              {t("nav.cta")}
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-[1001] w-10 h-10 flex flex-col justify-center items-center gap-1.5 ml-auto"
          aria-label="Toggle Navigation"
        >
          <motion.span animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white rounded-full" />
          <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="w-6 h-0.5 bg-white rounded-full" />
          <motion.span animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="w-6 h-0.5 bg-white rounded-full" />
        </button>

        {/* MOBILE MENU DRAWER */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={menuVariants}
              className="absolute top-0 left-0 w-full h-screen bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 p-6 pt-28 flex flex-col gap-2 md:hidden"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={itemVariants}>
                  <HashLink
                    smooth
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full px-4 py-4 rounded-xl text-lg font-bold tracking-wide transition-colors ${
                      checkIsActive(link.path)
                        ? "bg-[#1a76d2]/10 text-[#59b4f5]"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                    style={{ fontFamily: '"Sora", sans-serif' }}
                  >
                    {link.name}
                  </HashLink>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="mt-3 px-4">
                <LangToggle />
              </motion.div>

              {/* MOBILE CTA */}
              <motion.div variants={itemVariants} className="mt-4 pt-6 border-t border-white/10">
                <Link to="/contactus" onClick={() => setIsOpen(false)} className="block w-full">
                  <button className="w-full py-4 bg-[#1a76d2] text-white rounded-xl text-[13px] font-bold uppercase tracking-widest hover:bg-[#3496ed] transition-colors">
                    {t("nav.cta")}
                  </button>
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
