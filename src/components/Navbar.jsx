import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiPhone } from "react-icons/fi";
import { NAV_LINKS } from "../data/siteData";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
            ? "bg-black/95 backdrop-blur-md border-b border-white/5 py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-red-600 flex items-center justify-center font-display text-white text-sm font-bold">
              IF
            </div>
            <span
              className="font-display text-2xl tracking-widest text-white group-hover:text-red-500 transition-colors"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              IRONFORGE
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${isActive ? "text-red-500" : "text-gray-300 hover:text-white"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-red-500"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 text-sm font-medium text-gray-300 hover:text-white transition-colors px-3 py-2"
            >
              <FiPhone size={14} />
              <span className="tracking-wide">Call Now</span>
            </a>
            <a
              href="#membership"
              className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 hover:text-red-500 transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black flex flex-col"
          >
            <div className="flex-1 flex flex-col justify-center px-8">
              <div
                className="font-display text-6xl text-white/5 mb-8 tracking-widest"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                MENU
              </div>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    onClick={handleLinkClick}
                    className="font-display text-4xl text-white hover:text-red-500 transition-colors tracking-widest"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="mt-12 flex flex-col gap-3">
                <a
                  href="tel:+911234567890"
                  onClick={handleLinkClick}
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <FiPhone />
                  <span>+91 123 456 7890</span>
                </a>
                <a
                  href="#membership"
                  onClick={handleLinkClick}
                  className="mt-4 inline-block px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold tracking-widest uppercase text-center transition-colors"
                >
                  Join Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
