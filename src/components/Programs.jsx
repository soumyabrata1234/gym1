import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { FaDumbbell, FaFire, FaTrophy, FaRunning } from "react-icons/fa";
import { GiBoxingGlove, GiMeditation } from "react-icons/gi";
import { PROGRAMS } from "../data/siteData";

const ICON_MAP = {
  FaDumbbell: <FaDumbbell size={22} />,
  FaFire: <FaFire size={22} />,
  FaHandRock: <GiBoxingGlove size={22} />,
  FaTrophy: <FaTrophy size={22} />,
  FaRunning: <FaRunning size={22} />,
  FaSpa: <GiMeditation size={22} />,
};

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="bg-[#060606]">
      {/* Top divider */}
      <div className="section-divider" />

      <div className="py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-20"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-red-500" />
              <span className="text-red-500 text-xs font-semibold tracking-[0.25em] uppercase">
                Programs
              </span>
            </div>
            <h2
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              TRAIN WITH
              <br />
              <span className="text-red-600">PURPOSE.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Six elite disciplines. One world-class facility. Find your path and
            commit to the process.
          </p>
        </motion.div>

        {/* Programs Grid — real gaps, not gap-px */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((program, i) => (
            <motion.div
              key={program.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.6 }}
              className="group relative bg-[#0a0a0a] overflow-hidden cursor-pointer card-bordered"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/30 to-transparent" />
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/8 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="p-7">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-red-500 group-hover:text-red-400 transition-colors">
                    {ICON_MAP[program.icon]}
                  </div>
                  <FiArrowRight
                    className="text-gray-600 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300"
                    size={18}
                  />
                </div>
                <h3
                  className="font-condensed text-xl font-semibold text-white mb-3 tracking-wide group-hover:text-red-50 transition-colors"
                  style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
                >
                  {program.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-center mt-14"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors underline underline-offset-4"
          >
            Not sure which program is right for you? Talk to a coach{" "}
            <FiArrowRight size={14} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
