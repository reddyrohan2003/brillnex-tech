"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after scrolling down 300px
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    
    // Automatically trigger tooltip hint after 3 seconds of load
    const timer = setTimeout(() => {
      setShowTooltip(true);
      // Auto-hide tooltip after 6 seconds
      const hideTimer = setTimeout(() => setShowTooltip(false), 6000);
      return () => clearTimeout(hideTimer);
    }, 3000);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-none">
          {/* Tooltip Notification Banner */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                className="bg-white border border-gray-100 text-text-primary px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 pointer-events-auto max-w-xs mr-1 animate-pulse"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-[#25D366] shrink-0" />
                <span className="text-xs font-bold text-gray-700 tracking-wide whitespace-nowrap">
                  Join our Tech Community! 🚀
                </span>
                <button 
                  onClick={() => setShowTooltip(false)}
                  className="text-gray-400 hover:text-gray-600 font-bold text-xs ml-1 cursor-pointer pointer-events-auto"
                >
                  ✕
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Floating Action Button */}
          <motion.a
            href="https://chat.whatsapp.com/CJkfezhYm245urYCdmRLL8"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.7, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 50 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onMouseEnter={() => setShowTooltip(true)}
            className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.4)] transition-all duration-300 pointer-events-auto relative cursor-pointer"
            aria-label="Join WhatsApp Community"
          >
            {/* Pulsing ring animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping -z-10" />
            <FaWhatsapp size={32} />
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
