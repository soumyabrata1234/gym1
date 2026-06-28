import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FiChevronLeft, FiChevronRight, FiStar } from "react-icons/fi";
import { TESTIMONIALS } from "../data/siteData";

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (index, dir) => {
    setDirection(dir);
    setCurrent(index);
  };

  const prev = () =>
    goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length, -1);
  const next = () =>
    goTo((current + 1) % TESTIMONIALS.length, 1);

  const variants = {
    enter: (d) => ({ opacity: 0, x: d > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" } },
    exit: (d) => ({ opacity: 0, x: d > 0 ? -60 : 60, transition: { duration: 0.3 } }),
  };

  const t = TESTIMONIALS[current];

  return (
    <section id="testimonials" className="bg-[#060606] relative overflow-hidden">
      {/* Top divider */}
      <div className="section-divider" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-red-900/10 blur-[80px]" />
      </div>

      <div className="relative py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-xs font-semibold tracking-[0.25em] uppercase">
              Testimonials
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>
          <h2
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            REAL PEOPLE.
            <br />
            <span className="text-red-600">REAL RESULTS.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* Testimonial Card */}
          <div className="relative bg-[#0a0a0a] card-bordered p-10 sm:p-16 overflow-hidden min-h-[320px] flex flex-col justify-between">
            {/* Big quote mark */}
            <div
              className="absolute top-4 right-8 font-display text-[9rem] text-white/4 leading-none select-none pointer-events-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              "
            </div>

            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FiStar
                      key={i}
                      className="text-red-500 fill-red-500"
                      size={14}
                    />
                  ))}
                </div>

                {/* Review text */}
                <blockquote className="text-xl sm:text-2xl text-white font-light leading-relaxed mb-10">
                  "{t.review}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-red-600/30"
                    loading="lazy"
                  />
                  <div>
                    <div className="text-white font-semibold text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs uppercase tracking-widest mt-0.5">
                      {t.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-7">
            {/* Dots */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 1 : -1)}
                  className={`transition-all duration-300 ${
                    i === current
                      ? "w-8 h-2 bg-red-600"
                      : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-11 h-11 border border-white/10 hover:border-red-600 text-white hover:text-red-500 flex items-center justify-center transition-colors"
                aria-label="Previous"
              >
                <FiChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 border border-white/10 hover:border-red-600 text-white hover:text-red-500 flex items-center justify-center transition-colors"
                aria-label="Next"
              >
                <FiChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
