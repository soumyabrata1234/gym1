import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiPhone, FiMail, FiMapPin, FiClock,
  FiInstagram, FiFacebook, FiYoutube, FiSend
} from "react-icons/fi";

const OPENING_HOURS = [
  { day: "Monday – Friday", time: "5:30am – 11:00pm" },
  { day: "Saturday", time: "6:00am – 10:00pm" },
  { day: "Sunday", time: "7:00am – 8:00pm" },
  { day: "Public Holidays", time: "8:00am – 6:00pm" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="bg-[#060606]">
      {/* Top divider */}
      <div className="section-divider" />

      <div className="py-36 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-red-500" />
            <span className="text-red-500 text-xs font-semibold tracking-[0.25em] uppercase">
              Contact
            </span>
          </div>
          <h2
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            START YOUR
            <br />
            <span className="text-red-600">JOURNEY TODAY.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Contact details */}
            <div className="space-y-7">
              <ContactItem icon={<FiPhone />} label="Call Us" value="+91 123 456 7890" href="tel:+911234567890" />
              <ContactItem icon={<FiMail />} label="Email Us" value="hello@ironforge.in" href="mailto:hello@ironforge.in" />
              <ContactItem icon={<FiMapPin />} label="Find Us" value="Plot 42, Fitness District, Asansol, West Bengal" href="#" />
            </div>

            {/* Opening Hours */}
            <div>
              <div className="flex items-center gap-2 mb-5 text-red-500">
                <FiClock size={14} />
                <span className="text-xs font-semibold uppercase tracking-widest">Opening Hours</span>
              </div>
              <div className="space-y-3">
                {OPENING_HOURS.map((h) => (
                  <div key={h.day} className="flex justify-between text-sm gap-4">
                    <span className="text-gray-400">{h.day}</span>
                    <span className="text-white">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-5">
                Follow Us
              </div>
              <div className="flex gap-3">
                {[FiInstagram, FiFacebook, FiYoutube].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 border border-white/10 hover:border-red-600 hover:text-red-500 text-gray-400 flex items-center justify-center transition-all duration-300"
                    aria-label="Social media"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — Form + Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="lg:col-span-3 space-y-5"
          >
            {/* Contact Form */}
            <div className="bg-[#0a0a0a] card-bordered p-10">
              <h3
                className="font-condensed text-xl font-semibold text-white uppercase tracking-widest mb-8"
                style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
              >
                Send Us a Message
              </h3>

              {sent ? (
                <div className="text-center py-14">
                  <div className="text-5xl mb-5">✓</div>
                  <p className="text-white font-semibold mb-2">Message received!</p>
                  <p className="text-gray-400 text-sm">
                    Our team will be in touch within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 text-xs text-gray-500 hover:text-white underline underline-offset-4 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <InputField name="name" label="Your Name" value={form.name} onChange={handleChange} required />
                    <InputField name="email" label="Email Address" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <InputField name="phone" label="Phone Number" type="tel" value={form.phone} onChange={handleChange} />
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      placeholder="Tell us your goals..."
                      className="w-full bg-white/3 border border-white/8 text-white text-sm px-4 py-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-gray-600 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold tracking-widest uppercase text-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <FiSend size={14} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Google Maps embed */}
            <div className="h-56 border border-white/5 overflow-hidden">
              <iframe
                title="IRONFORGE Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114890.56767584!2d86.86487!3d23.68326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f71d2b09f83b57%3A0xc793a61da89f1dfa!2sAsansol%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(100%) invert(92%) contrast(83%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label, value, href }) {
  return (
    <div className="flex items-start gap-5">
      <div className="w-11 h-11 bg-red-600/10 border border-red-600/20 flex items-center justify-center text-red-500 shrink-0">
        {icon}
      </div>
      <div>
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-1">{label}</div>
        <a
          href={href}
          className="text-white text-sm hover:text-red-400 transition-colors"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

function InputField({ name, label, type = "text", value, onChange, required }) {
  return (
    <div>
      <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white/3 border border-white/8 text-white text-sm px-4 py-3 focus:outline-none focus:border-red-600 transition-colors placeholder:text-gray-600"
      />
    </div>
  );
}
