import { FiInstagram, FiFacebook, FiYoutube, FiPhone, FiMail, FiMapPin, FiArrowRight } from "react-icons/fi";
import { NAV_LINKS } from "../data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-red-600 flex items-center justify-center text-white text-sm font-bold">
                IF
              </div>
              <span
                className="font-display text-2xl tracking-widest text-white"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                IRONFORGE
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
              Premium fitness. World-class coaching. A community that forges
              champions. Join us and begin your transformation.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: FiInstagram, label: "Instagram" },
                { Icon: FiFacebook, label: "Facebook" },
                { Icon: FiYoutube, label: "YouTube" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-white/10 hover:border-red-600 hover:text-red-500 text-gray-500 flex items-center justify-center transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <FiArrowRight
                      size={12}
                      className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-5">
              Programs
            </h4>
            <ul className="space-y-3">
              {[
                "Strength & Power",
                "HIIT & Cardio",
                "MMA & Combat",
                "Olympic Lifting",
                "Functional Fitness",
                "Recovery & Wellness",
              ].map((p) => (
                <li key={p}>
                  <a
                    href="#programs"
                    className="group flex items-center gap-2 text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    <FiArrowRight
                      size={12}
                      className="text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiPhone size={14} className="text-red-500 mt-0.5 shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white text-sm transition-colors">
                  +91 123 456 7890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMail size={14} className="text-red-500 mt-0.5 shrink-0" />
                <a href="mailto:hello@ironforge.in" className="text-gray-400 hover:text-white text-sm transition-colors">
                  hello@ironforge.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin size={14} className="text-red-500 mt-0.5 shrink-0" />
                <span className="text-gray-400 text-sm">
                  Plot 42, Fitness District,
                  <br />
                  Asansol, West Bengal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {year} IRONFORGE Fitness Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use", "Refund Policy"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
