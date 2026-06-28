import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=85"
          alt="IRONFORGE premium gym floor"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      {/* Decorative red bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-600 z-10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-xs font-semibold tracking-[0.25em] uppercase">
              Elite Fitness · Est. 2012
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-7xl sm:text-8xl lg:text-[7.5rem] leading-none text-white mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            FORGE
            <br />
            <span className="text-red-600">YOUR</span>
            <br />
            LEGACY
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-300 ml-10 leading-relaxed mb-10 max-w-xl font-light"
          >
            Premium training. World-class coaches. A community that pushes you
            past your limits. This is where ordinary people become extraordinary.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <a
              href="#membership"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-semibold tracking-widest uppercase text-sm transition-all duration-200"
            >
              Start Your Journey
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#programs"
              className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 hover:border-white/50 text-white font-medium tracking-wider uppercase text-sm transition-all duration-200"
            >
              <FiPlay size={14} />
              Our Programs
            </a>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 flex gap-12 border-t border-white/10 pt-10"
          >
            {[
              { value: "2,400+", label: "Members" },
              { value: "18", label: "Elite Coaches" },
              { value: "12 yrs", label: "Established" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="font-display text-4xl text-white"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-px h-8 bg-gradient-to-b from-gray-500 to-transparent"
        />
      </motion.div>

    </section>
  );
}
