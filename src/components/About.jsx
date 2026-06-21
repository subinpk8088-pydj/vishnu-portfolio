import { motion } from "framer-motion";
import { FaBug, FaCode, FaRocket, FaCheckCircle } from "react-icons/fa";

const cards = [
  { icon: FaBug,         label: "Manual Testing" },
  { icon: FaCode,        label: "Automation Testing" },
  { icon: FaRocket,      label: "API Testing" },
  { icon: FaCheckCircle, label: "Quality Assurance" },
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6" style={{ background: "#0d110e" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <span className="uppercase tracking-[4px] text-sm font-medium" style={{ color: "#a3c68b" }}>
          About Me
        </span>

        <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-8" style={{ color: "#f5ead7" }}>
          Quality Driven{" "}
          <span style={{ color: "#a3c68b" }}>Software Tester</span>
        </h2>

        <p className="text-xl max-w-3xl leading-relaxed" style={{ color: "#6b7d62" }}>
          Software Testing professional with hands-on experience in Manual Testing,
          Selenium Automation, API Testing, Defect Tracking and Quality Assurance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {cards.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: "rgba(163,198,139,0.4)" }}
              className="rounded-3xl p-6 transition-all duration-300"
              style={{
                background: "rgba(245,234,215,0.03)",
                border: "1px solid rgba(245,234,215,0.08)",
                backdropFilter: "blur(20px)"
              }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                style={{ background: "rgba(163,198,139,0.12)" }}>
                <Icon style={{ color: "#a3c68b", fontSize: "1.4rem" }} />
              </div>
              <h3 className="font-semibold text-lg" style={{ color: "#f5ead7" }}>{label}</h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}