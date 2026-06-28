import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          {/* WhatsApp */}
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            href="https://wa.me/911234567890?text=Hi%2C%20I'm%20interested%20in%20joining%20IRONFORGE!"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform relative"
          >
            <FaWhatsapp size={22} className="text-white" />
            <span className="absolute right-14 bg-black text-white text-xs px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
              Chat on WhatsApp
            </span>
          </motion.a>

          {/* Call */}
          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            href="tel:+911234567890"
            aria-label="Call Us"
            className="group w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg hover:scale-110 hover:bg-red-700 transition-all relative"
          >
            <FiPhone size={18} className="text-white" />
            <span className="absolute right-14 bg-black text-white text-xs px-3 py-1.5 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
              Call Now
            </span>
          </motion.a>
        </div>
      )}
    </AnimatePresence>
  );
}
