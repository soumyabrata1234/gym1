import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FAQ_ITEMS } from "../data/siteData";

function FAQItem({ item, isOpen, onToggle, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="border-b border-white/6"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-7 text-left group"
        aria-expanded={isOpen}
      >
        <span
          className={`font-medium text-base transition-colors duration-200 pr-10 ${
            isOpen ? "text-white" : "text-gray-300 group-hover:text-white"
          }`}
        >
          {item.question}
        </span>
        <div
          className={`shrink-0 w-8 h-8 flex items-center justify-center border transition-all duration-300 ${
            isOpen
              ? "border-red-600 bg-red-600 text-white"
              : "border-white/10 text-gray-500 group-hover:border-white/30"
          }`}
        >
          {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-400 leading-relaxed text-sm pr-14">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [openId, setOpenId] = useState(1);

  return (
    <section id="faq" className="bg-black">
      {/* Top divider */}
      <div className="section-divider" />

      <div className="py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Left - Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:sticky lg:top-28"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-red-500" />
              <span className="text-red-500 text-xs font-semibold tracking-[0.25em] uppercase">
                FAQ
              </span>
            </div>
            <h2
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-none mb-8"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              COMMON
              <br />
              <span className="text-red-600">QUESTIONS.</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-10">
              Everything you need to know before joining. Still have questions?
              Our team is here to help.
            </p>
            <a
              href="#contact"
              className="inline-block px-7 py-3.5 border border-white/15 hover:border-red-600 text-white text-sm font-semibold tracking-widest uppercase transition-colors"
            >
              Ask Us Directly
            </a>
          </motion.div>

          {/* Right - Accordion */}
          <div className="pt-2">
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={openId === item.id}
                onToggle={() =>
                  setOpenId(openId === item.id ? null : item.id)
                }
                index={i}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
