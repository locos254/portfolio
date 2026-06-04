import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@assets/540694216_122096188833002991_8972136196766117080_n_1780596163304.jpg";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Wait a bit before completing
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0F172A]"
        exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <div className="relative flex flex-col items-center">
          {/* Logo with glow */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-blue-500/30 shadow-[0_0_40px_rgba(37,99,235,0.5)]"
          >
            <img src={logoImg} alt="LOCOS Developer" className="h-full w-full object-cover" />
          </motion.div>

          {/* Loading Bar */}
          <div className="h-2 w-64 overflow-hidden rounded-full bg-slate-800/50 backdrop-blur-md">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <motion.p
            className="mt-4 font-mono text-sm tracking-widest text-slate-400"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            INITIALIZING_SYSTEM: {Math.min(progress, 100)}%
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}