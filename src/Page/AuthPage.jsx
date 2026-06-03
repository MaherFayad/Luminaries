import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const AuthInput = ({ type, placeholder, ...props }) => (
  <input
    type={type}
    placeholder={placeholder}
    {...props}
    className="w-full bg-[#111114] border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder-slate-500 focus:outline-none focus:border-[#3496ed] focus:bg-white/[0.05] transition-all text-sm"
  />
);

const SocialButton = ({ icon, label }) => (
  <button className="flex items-center justify-center gap-2 bg-[#111114] border border-white/10 hover:bg-white/5 text-white text-sm font-medium py-3 rounded-xl transition-all">
    {icon}
    {label}
  </button>
);

const AuthPage = () => {
  const lp = useLp();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="bg-[#030712] min-h-screen relative overflow-hidden flex items-center justify-center px-4 pt-20 pb-12">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#1a76d2]/15 blur-[120px] rounded-full pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md bg-[#070708]/80 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-10 shadow-2xl"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <Link to={lp("/")} className="inline-flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-[#1a76d2] flex items-center justify-center shadow-[0_0_16px_rgba(26,118,210,0.35)]">
              <div className="w-4 h-4 bg-white rounded-sm rotate-45" />
            </div>
            <span className="text-white font-bold text-base tracking-tight" style={{ fontFamily: '"Sora", sans-serif' }}>
              LUMINARIES HUB
            </span>
          </Link>
          <h2
            className="text-2xl font-bold text-white tracking-tight"
            style={{ fontFamily: '"Sora", sans-serif' }}
          >
            {isLogin ? "Client Portal" : "Create Account"}
          </h2>
          <p className="text-slate-400 text-sm mt-2">
            {isLogin
              ? "Sign in to access your engagement dashboard."
              : "Register to track your talent pipeline."}
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-4 mb-6">
          <AnimatePresence mode="wait">
            {!isLogin && (
              <motion.div
                key="name-field"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <AuthInput type="text" placeholder="Full Name" />
              </motion.div>
            )}
          </AnimatePresence>

          <AuthInput type="email" placeholder="Email address" />
          <AuthInput type="password" placeholder="Password" />

          {isLogin && (
            <div className="text-right">
              <button className="text-[#59b4f5] hover:text-[#3496ed] text-xs font-medium transition-colors">
                Forgot password?
              </button>
            </div>
          )}

          <Link to={lp("/")} className="w-full mt-2 block">
            <button className="w-full bg-[#1a76d2] hover:bg-[#3496ed] text-white font-bold text-sm py-3.5 rounded-xl transition-colors active:scale-[0.98] shadow-[0_0_20px_rgba(26,118,210,0.25)]">
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </Link>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-slate-500 text-xs font-medium uppercase tracking-wider">Or continue with</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8">
          <SocialButton
            label="Google"
            icon={
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            }
          />
          <SocialButton
            label="LinkedIn"
            icon={
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            }
          />
        </div>

        <p className="text-center text-slate-400 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-white font-bold hover:text-[#59b4f5] transition-colors"
          >
            {isLogin ? "Sign up" : "Log in"}
          </button>
        </p>

        <p className="text-center mt-4">
          <Link to={lp("/contactus")} className="text-[#59b4f5] text-xs hover:underline">
            Looking to book a consultation? →
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default AuthPage;
