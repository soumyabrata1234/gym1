import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiMaximize2 } from "react-icons/fi";
import { GALLERY_IMAGES } from "../data/siteData";

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="gallery" className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-xs font-semibold tracking-[0.25em] uppercase">
              Gallery
            </span>
          </div>
          <h2
            className="font-display text-6xl sm:text-7xl text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            INSIDE
            <br />
            <span className="text-red-600">IRONFORGE.</span>
          </h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {GALLERY_IMAGES.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`group relative overflow-hidden ${
                img.span === "col-span-2" ? "col-span-2" : "col-span-1"
              } ${i === 0 || i === 5 ? "h-72" : "h-52"}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400 flex items-center justify-center">
                <FiMaximize2
                  className="text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                  size={24}
                />
              </div>
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent">
                <span className="text-white text-xs uppercase tracking-widest">
                  {img.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tour CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-10 text-center"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold tracking-widest uppercase transition-colors"
          >
            Book a Free Tour
          </a>
        </motion.div>
      </div>
    </section>
  );
}
