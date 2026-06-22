import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = ["About", "Skills", "Experience", "Projects", "Certifications", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 w-full z-50 transition-all duration-500"
        style={{
          backdropFilter: "blur(24px)",
          background: scrolled ? "rgba(13,17,14,0.85)" : "rgba(13,17,14,0.4)",
          borderBottom: scrolled ? "1px solid rgba(163,198,139,0.12)" : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-black tracking-widest"
            style={{ color: "#f5ead7" }}
          >
            V<span style={{ color: "#a3c68b" }}>V</span>
          </motion.a>

          {/* Desktop links */}
          <div className="hidden md:flex gap-8 text-sm">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="relative group transition-colors duration-300"
                style={{ color: "#7a8f70" }}
                onMouseEnter={e => (e.target.style.color = "#f5ead7")}
                onMouseLeave={e => (e.target.style.color = "#7a8f70")}
              >
                {link}
                <span
                  className="absolute -bottom-1 left-0 h-px w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "#a3c68b" }}
                />
              </a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  open
                    ? i === 0 ? { rotate: 45, y: 8 }
                    : i === 1 ? { opacity: 0 }
                    : { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                className="block w-6 h-px"
                style={{ background: "#a3c68b" }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden px-6 pb-6"
            style={{
              background: "rgba(13,17,14,0.96)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(163,198,139,0.12)",
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => setOpen(false)}
                className="block py-3 border-b text-sm font-medium"
                style={{
                  color: "#f5ead7",
                  borderColor: "rgba(245,234,215,0.06)",
                }}
              >
                {link}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}