import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiInstagram, FiTwitter } from "react-icons/fi";
import { TRAINERS } from "../data/siteData";

function TrainerCard({ trainer, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      className="group relative overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-96 overflow-hidden">
        <img
          src={trainer.image}
          alt={trainer.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Social icons - appear on hover */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 group-hover:translate-x-0">
          <a
            href={trainer.instagram}
            className="w-9 h-9 bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600 transition-colors"
            aria-label={`${trainer.name} Instagram`}
          >
            <FiInstagram size={14} />
          </a>
          <a
            href={trainer.twitter}
            className="w-9 h-9 bg-black/70 backdrop-blur-sm flex items-center justify-center text-white hover:bg-red-600 transition-colors"
            aria-label={`${trainer.name} Twitter`}
          >
            <FiTwitter size={14} />
          </a>
        </div>

        {/* Experience badge */}
        <div className="absolute top-4 left-4 bg-red-600 px-3 py-1">
          <span className="text-white text-xs font-semibold tracking-widest uppercase">
            {trainer.experience}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3
          className="font-display text-2xl text-white tracking-wide"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {trainer.name}
        </h3>
        <div className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-1">
          {trainer.role}
        </div>
        <div className="text-gray-400 text-xs">{trainer.specialty}</div>
      </div>
    </motion.div>
  );
}

export default function Trainers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="trainers" className="bg-[#080808] py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-red-500" />
              <span className="text-red-500 text-xs font-semibold tracking-[0.25em] uppercase">
                Our Team
              </span>
            </div>
            <h2
              className="font-display text-6xl sm:text-7xl text-white"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              COACHED BY
              <br />
              <span className="text-red-600">THE BEST.</span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Every coach at IRONFORGE is handpicked for their expertise, passion,
            and ability to get results.
          </p>
        </motion.div>

        {/* Trainer grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {TRAINERS.map((trainer, i) => (
            <TrainerCard
              key={trainer.id}
              trainer={trainer}
              index={i}
              inView={inView}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 border border-white/20 hover:border-red-600 text-white text-sm font-semibold tracking-widest uppercase transition-colors duration-300"
          >
            Book a Free Session
          </a>
        </motion.div>
      </div>
    </section>
  );
}
