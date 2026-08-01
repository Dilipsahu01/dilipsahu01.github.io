"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2500); // 2.5 seconds showcase

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a] text-white"
          initial={{ y: 0 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          <div className="overflow-hidden">
            <motion.h1
              className="text-2xl md:text-4xl lg:text-5xl font-mono uppercase tracking-[0.2em] text-sage text-center px-4"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }}
              exit={{ y: "-100%", opacity: 0, transition: { duration: 0.5, ease: "easeIn" } }}
            >
              Welcome to the Portfolio
            </motion.h1>
          </div>
          
          <div className="overflow-hidden mt-6">
             <motion.p
               className="text-[10px] md:text-xs font-mono text-white/40 tracking-[0.3em] uppercase"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.8 } }}
             >
               Loading Assets // Dilip Sahu
             </motion.p>
          </div>

          <motion.div 
            className="absolute bottom-16 left-1/2 -translate-x-1/2 h-[1px] bg-sage"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "200px", opacity: 1, transition: { delay: 0.2, duration: 2, ease: "easeInOut" } }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
