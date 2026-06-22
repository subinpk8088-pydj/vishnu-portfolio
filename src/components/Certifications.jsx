import { motion } from "framer-motion";
import { FaCertificate, FaMedal } from "react-icons/fa";

const certs = [
  {
    icon: FaCertificate,
    title: "Software Testing",
    issuer: "STC Technologies",
  },
  {
    icon: FaMedal,
    title: "Selenium Web Automation using Python",
    issuer: "Udemy",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6" style={{ background: "#0b0f0c" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[4px] text-sm font-medium" style={{ color: "#a3c68b" }}>
            Credentials
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-16" style={{ color: "#f5ead7" }}>
            Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certs.map(({ icon: Icon, title, issuer }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: "rgba(163,198,139,0.4)" }}
              className="relative rounded-3xl p-8 overflow-hidden transition-all duration-300"
              style={{
                background: "rgba(245,234,215,0.03)",
                border: "1px solid rgba(245,234,215,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Background glow */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "rgba(163,198,139,0.06)", filter: "blur(40px)" }} />

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(163,198,139,0.12)" }}>
                  <Icon style={{ color: "#a3c68b", fontSize: "1.5rem" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold leading-snug" style={{ color: "#f5ead7" }}>{title}</h3>
                  <p className="mt-2 text-sm" style={{ color: "#7a8f70" }}>{issuer}</p>
                  <span className="inline-block mt-3 text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                    style={{ background: "rgba(163,198,139,0.1)", color: "#a3c68b" }}>
                    Certified
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}