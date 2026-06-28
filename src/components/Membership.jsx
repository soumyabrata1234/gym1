import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";
import { MEMBERSHIP_PLANS } from "../data/siteData";

export default function Membership() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="membership" className="bg-black py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-red-600/3 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-xs font-semibold tracking-[0.25em] uppercase">
              Membership
            </span>
            <div className="w-8 h-px bg-red-500" />
          </div>
          <h2
            className="font-display text-6xl sm:text-7xl text-white"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            INVEST IN
            <br />
            <span className="text-red-600">YOURSELF.</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">
            Three plans. No hidden fees. Cancel anytime.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-px bg-white/5">
          {MEMBERSHIP_PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className={`relative flex flex-col bg-black p-8 ${
                plan.highlighted
                  ? "ring-1 ring-red-600 ring-inset"
                  : ""
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div
                  className={`absolute -top-3 left-8 px-4 py-1 text-xs font-bold tracking-widest uppercase ${
                    plan.highlighted
                      ? "bg-red-600 text-white"
                      : "bg-white/10 text-gray-300"
                  }`}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <div className="mb-6">
                <h3
                  className="font-display text-4xl text-white tracking-wide mb-1"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-500 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-white/10">
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-sm">₹</span>
                  <span
                    className={`font-display text-6xl ${
                      plan.highlighted ? "text-red-500" : "text-white"
                    }`}
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {plan.price.toLocaleString()}
                  </span>
                </div>
                <div className="text-gray-500 text-xs uppercase tracking-widest mt-1">
                  per {plan.period}
                </div>
              </div>

              {/* Features */}
              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <div key={feat} className="flex items-start gap-3">
                    <FiCheck className="text-red-500 shrink-0 mt-0.5" size={14} />
                    <span className="text-gray-300 text-sm">{feat}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feat) => (
                  <div key={feat} className="flex items-start gap-3 opacity-40">
                    <FiX className="text-gray-600 shrink-0 mt-0.5" size={14} />
                    <span className="text-gray-500 text-sm line-through">{feat}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center px-6 py-3 text-sm font-semibold tracking-widest uppercase transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border border-white/20 hover:border-white/50 text-white hover:bg-white/5"
                }`}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-600 text-sm mt-8"
        >
          All prices include GST. Student & corporate discounts available —{" "}
          <a href="#contact" className="text-gray-400 hover:text-white underline underline-offset-4 transition-colors">
            contact us
          </a>{" "}
          for details.
        </motion.p>
      </div>
    </section>
  );
}
