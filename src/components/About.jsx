import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import { STATS } from "../data/siteData";

function AnimatedNumber({ target, suffix, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const duration = 2000;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [start, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const WHY_US = [
  "Over 200 pieces of premium equipment from Eleiko and Technogym",
  "18 certified coaches with international competition experience",
  "Science-backed programming customized to your goals",
  "Recovery suite with ice baths, sauna, and physiotherapy",
  "Inclusive community across all fitness levels and backgrounds",
  "No contract lock-in — results you'll want to stay for",
];

export default function About() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="bg-black py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-xs font-semibold tracking-[0.25em] uppercase">
              About Us
            </span>
          </div>
          <h2
            className="font-display text-6xl sm:text-7xl text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            NOT JUST A GYM.
            <br />
            <span className="text-red-600">A PROVING GROUND.</span>
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          {/* Left — image stack */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=700&q=80"
                alt="IRONFORGE training floor"
                className="w-full object-cover h-[480px]"
                loading="lazy"
              />
              {/* Overlay card */}
              <div className="absolute -bottom-6 -right-6 bg-red-600 p-6 max-w-xs hidden sm:block">
                <div
                  className="font-display text-5xl text-white mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  12
                </div>
                <div className="text-white/80 text-sm uppercase tracking-widest">
                  Years of Excellence
                </div>
              </div>
            </div>
            {/* Second image */}
            <div className="mt-4 ml-12">
              <img
                src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&q=80"
                alt="Olympic lifting"
                className="w-3/4 h-52 object-cover border-2 border-red-600/20"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right — content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <p className="text-gray-300 text-lg leading-relaxed mb-8 font-light">
              Founded in 2012 by former national powerlifting champion{" "}
              <span className="text-white font-medium">Vikram Anand</span>,
              IRONFORGE was built with a singular vision: create the training
              environment that top athletes actually deserve.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Today, we're the city's most respected performance facility — not
              because of our equipment (though it's world-class), but because of
              the culture we've built. Every member, from first-timer to
              competitive athlete, gets treated like a champion.
            </p>

            {/* Why us list */}
            <div className="space-y-3">
              {WHY_US.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <FiCheckCircle className="text-red-500 mt-0.5 shrink-0" size={16} />
                  <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-black p-10 text-center group hover:bg-red-600/5 transition-colors duration-300"
            >
              <div
                className="font-display text-5xl sm:text-6xl text-white group-hover:text-red-400 transition-colors duration-300"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <AnimatedNumber
                  target={stat.value}
                  suffix={stat.suffix}
                  start={statsInView}
                />
              </div>
              <div className="text-gray-500 text-xs uppercase tracking-widest mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
