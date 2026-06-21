import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const contacts = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "vishnuknr2003@gmail.com",
    href: "mailto:vishnuknr2003@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+91 7306417582",
    href: "tel:+917306417582",
  },
];

const socials = [
  { icon: FaLinkedin, href: "https://linkedin.com/in/vishnu-v-2262122ab", filled: true },
  { icon: FaGithub,   href: "#",                                           filled: false },
];

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6" style={{ background: "#0d110e" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >
        {/* Glow */}
        <div className="relative">
          <div className="absolute inset-0 rounded-[40px] pointer-events-none"
            style={{ background: "rgba(163,198,139,0.05)", filter: "blur(60px)" }} />

          <div className="relative rounded-[40px] p-10 md:p-14 text-center"
            style={{
              background: "rgba(245,234,215,0.03)",
              border: "1px solid rgba(245,234,215,0.08)",
              backdropFilter: "blur(24px)",
            }}
          >
            <span className="uppercase tracking-[4px] text-sm font-medium" style={{ color: "#a3c68b" }}>
              Contact
            </span>

            <h2 className="text-5xl font-bold mt-4 mb-5" style={{ color: "#f5ead7" }}>
              Let's Work Together
            </h2>

            <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "#6b7d62" }}>
              Open to Software Testing opportunities, QA roles and Automation Testing projects.
            </p>

            {/* Contact cards */}
            <div className="grid md:grid-cols-2 gap-5 mb-10">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ y: -4, borderColor: "rgba(163,198,139,0.4)" }}
                  className="flex items-center gap-4 rounded-2xl p-5 text-left transition-all duration-300"
                  style={{
                    background: "rgba(13,17,14,0.6)",
                    border: "1px solid rgba(245,234,215,0.08)",
                  }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(163,198,139,0.12)" }}>
                    <Icon style={{ color: "#a3c68b", fontSize: "1.2rem" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "#7a8f70" }}>{label}</p>
                    <p className="text-sm font-medium" style={{ color: "#f5ead7" }}>{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex justify-center gap-4">
              {socials.map(({ icon: Icon, href, filled }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-14 h-14 rounded-full flex items-center justify-center text-xl transition-all duration-300"
                  style={filled
                    ? { background: "#a3c68b", color: "#0d110e" }
                    : { border: "1px solid rgba(245,234,215,0.12)", color: "#f5ead7" }
                  }
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}