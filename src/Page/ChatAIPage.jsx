import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

const ChatAIPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const messagesEndRef = useRef(null);

  const initialPrompt = location.state?.initialPrompt || "";

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "ai",
      text: "Hi there! I'm the Luminaries Hub Assistant. How can I help you find technical talent or the right service today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth > 768);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  useEffect(() => {
    if (!initialPrompt) return;

    let isMounted = true;

    setMessages((prev) => {
      const isDuplicate = prev.some(
        (msg) => msg.text === initialPrompt && msg.sender === "user",
      );
      if (isDuplicate) return prev;
      return [...prev, { id: Date.now(), sender: "user", text: initialPrompt }];
    });

    setIsTyping(true);

    const timer = setTimeout(() => {
      if (!isMounted) return;
      setIsTyping(false);

      setMessages((prev) => {
        const isAiDuplicate = prev.some(
          (msg) =>
            msg.text.includes("Analyzing your prompt") && msg.sender === "ai",
        );
        if (isAiDuplicate) return prev;

        return [
          ...prev,
          {
            id: Date.now() + 1,
            sender: "ai",
            text: `Processing your query. Let me find the best service match for your needs!`,
          },
        ];
      });
    }, 2000);

    // 3. Cleanup function
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [initialPrompt]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim() || isTyping) return;

    const userMessage = input;
    setInput("");

    setMessages((prev) => [
      ...prev,
      { id: Date.now(), sender: "user", text: userMessage },
    ]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const aiResponses = [
        "Adjusting the padding and margins to match modern standards...",
        "Compiling the React components. I've also added Tailwind classes for responsiveness.",
        "Perfect. I've optimized the UI for high conversion. Do you want to export the code now?",
        "Syncing with your design tokens... The result looks incredible.",
      ];
      const randomReply =
        aiResponses[Math.floor(Math.random() * aiResponses.length)];
      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: "ai", text: randomReply },
      ]);
    }, 1500);
  };

  const handleNewChat = () => {
    setMessages([
      {
        id: Date.now(),
        sender: "ai",
        text: "Hi there! I'm the Luminaries Hub Assistant. How can I help you find technical talent or the right service today?",
      },
    ]);
    setInput("");
    if (window.innerWidth <= 768) {
      setIsSidebarOpen(false);
    }
  };

  const hasInput = input.trim().length > 0;

  const SidebarContent = (
    <div className="w-[280px] h-full flex flex-col bg-[#0a0a0c] absolute top-0 left-0 border-r border-white/5">
      <div className="h-16 flex items-center px-4 border-b border-white/5 shrink-0">
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400 shrink-0"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <button
          onClick={handleNewChat}
          className="flex-grow ml-3 flex items-center justify-center gap-2 p-2 bg-[#1a76d2]/10 hover:bg-[#1a76d2]/20 text-[#59b4f5] rounded-lg transition-colors text-sm font-medium active:scale-95"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          New Chat
        </button>
      </div>
      <div className="flex-grow p-4 overflow-y-auto scrollbar-hide">
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 px-2">
          Today
        </p>
        <div className="p-3 bg-white/5 rounded-xl text-sm text-white mb-1 cursor-pointer">
          Crypto Dashboard UI
        </div>
        <div className="p-3 hover:bg-white/5 rounded-xl text-sm text-slate-400 cursor-pointer transition-colors">
          SaaS Landing Page
        </div>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-6 mb-3 px-2">
          Previous 7 Days
        </p>
        <div className="p-3 hover:bg-white/5 rounded-xl text-sm text-slate-400 cursor-pointer transition-colors">
          Mobile App Wireframe
        </div>
        <div className="p-3 hover:bg-white/5 rounded-xl text-sm text-slate-400 cursor-pointer transition-colors">
          Dark Mode E-commerce
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-[#030712] h-[100dvh] w-full flex overflow-hidden text-[#d1d5db] font-['Inter',sans-serif]">
      {/* SIDEBAR */}
      <AnimatePresence initial={false}>
        {isSidebarOpen && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 280 }}
            exit={{ width: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hidden md:block h-full shrink-0 relative overflow-hidden bg-[#0a0a0c]"
          >
            {SidebarContent}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSidebarOpen && (
          <div className="md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-y-0 left-0 z-50 w-[280px]"
            >
              {SidebarContent}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* MAIN CONTENT AREA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex-1 flex flex-col min-w-0 h-full relative z-10 bg-[#030712]"
      >
        {/* HEADER */}
        <header className="h-16 shrink-0 flex items-center justify-between px-4 border-b border-white/5 bg-[#030712]/80 backdrop-blur-md z-30">
          <div className="flex items-center gap-3 w-1/3">
            {!isSidebarOpen && (
              <button
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-slate-400"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            )}
            <div
              className={`flex items-center gap-2 ${isSidebarOpen ? "ml-2" : ""}`}
            >
              <div className="w-2 h-2 rounded-full bg-[#3496ed] animate-pulse hidden md:block" />
              <span className="text-white text-sm font-bold uppercase tracking-widest hidden md:block">
                Luminaries Hub
              </span>
            </div>
          </div>

          <div className="w-1/3 flex justify-center">
            <button className="flex items-center gap-2 px-3 py-1.5 hover:bg-white/5 rounded-lg transition-colors text-slate-300 text-xs font-medium uppercase tracking-wider">
              Crypto Dashboard UI
              <svg
                className="w-4 h-4 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>

          <div className="w-1/3 flex justify-end items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 p-2 md:px-3 md:py-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white text-xs font-bold uppercase tracking-wider mr-1 md:mr-2 transition-all active:scale-95"
              title="Exit Workspace"
            >
              <svg
                className="w-4 h-4 md:w-3.5 md:h-3.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span className="hidden md:block">Exit</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1a76d2] to-[#3496ed] p-[2px] cursor-pointer">
              <div className="w-full h-full bg-[#030712] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">ME</span>
              </div>
            </div>
          </div>
        </header>

        {/* CHAT AREA */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#1a76d2]/5 blur-[150px] rounded-full pointer-events-none z-0" />

        <div className="flex-1 overflow-y-auto scrollbar-hide w-full relative z-10 pb-40">
          <div className="max-w-4xl mx-auto w-full px-4 py-8 flex flex-col gap-8">
            <AnimatePresence mode="popLayout" initial={false}>
              {/* Pesan Chat */}
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className={`flex w-full origin-bottom ${msg.sender === "user" ? "justify-end" : "justify-start gap-4"}`}
                >
                  {msg.sender === "ai" && (
                    <div className="w-8 h-8 shrink-0 rounded-full bg-[#3496ed]/10 border border-[#3496ed]/30 flex items-center justify-center mt-1">
                      <svg
                        className="w-4 h-4 text-[#59b4f5]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z" />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`max-w-[85%] md:max-w-[75%] px-5 py-3.5 text-[15px] leading-relaxed ${msg.sender === "user" ? "bg-[#1e1e24] text-white rounded-3xl" : "text-slate-200"}`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* loading */}
              {isTyping && (
                <motion.div
                  key="typing-indicator"
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  className="flex justify-start gap-4 origin-bottom-left"
                >
                  <div className="w-8 h-8 shrink-0 rounded-full flex items-center justify-center mt-1">
                    <motion.svg
                      className="w-6 h-6 text-[#3496ed]"
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path
                        d="M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4L12 2z"
                        fill="currentColor"
                        opacity="0.3"
                      />
                      <motion.circle
                        cx="12"
                        cy="12"
                        r="3"
                        fill="currentColor"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </motion.svg>
                  </div>
                  <div className="px-5 py-3.5 flex items-center">
                    <span className="text-[15px] font-medium text-slate-400 bg-gradient-to-r from-slate-400 to-slate-500 bg-clip-text animate-pulse">
                      Generating UI...
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} className="h-2" />
          </div>
        </div>

        {/* INPUT AREA */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#030712] via-[#030712]/90 to-transparent pt-12 pb-6 px-4 z-20 pointer-events-none">
          <div className="max-w-3xl mx-auto w-full pointer-events-auto">
            <form
              onSubmit={handleSend}
              className="relative flex items-end group shadow-2xl"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSend(e);
                  }
                }}
                disabled={isTyping}
                placeholder={
                  isTyping ? "Searching..." : "Type your query..."
                }
                className="w-full bg-[#111114] border border-white/10 focus:border-white/20 rounded-[24px] pl-6 pr-16 py-4 min-h-[60px] max-h-[200px] text-white text-[15px] placeholder-slate-500 outline-none transition-all resize-none scrollbar-hide shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                rows={1}
              />
              <button
                type="submit"
                disabled={!hasInput || isTyping}
                className="absolute right-3 bottom-3 p-2 rounded-full transition-all flex items-center justify-center disabled:bg-transparent disabled:text-slate-600 bg-white text-black hover:bg-slate-200"
              >
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  animate={{
                    rotate: hasInput ? 90 : 0,
                    scale: hasInput ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </motion.svg>
              </button>
            </form>
            <p className="text-center text-[11px] text-slate-500 mt-3 font-medium">
              Luminaries Hub Assistant is AI-assisted. Consider verifying important code.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ChatAIPage;
