import { motion } from "framer-motion";
import {
  FaBug, FaCode, FaDatabase, FaTools, FaRobot,
  FaFlask, FaServer, FaPython, FaJava, FaWrench,
  FaClipboardCheck, FaNetworkWired,
} from "react-icons/fa";

const skills = [
  { label: "Manual Testing",    icon: FaBug },
  { label: "Functional Testing",icon: FaClipboardCheck },
  { label: "Regression Testing",icon: FaWrench },
  { label: "Selenium",          icon: FaRobot },
  { label: "Postman",           icon: FaFlask },
  { label: "Jira",              icon: FaTools },
  { label: "JMeter",            icon: FaServer },
  { label: "SQL",               icon: FaDatabase },
  { label: "Python",            icon: FaPython },
  { label: "Java",              icon: FaJava },
  { label: "API Testing",       icon: FaNetworkWired },
  { label: "Defect Tracking",   icon: FaCode },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6" style={{ background: "#0b0f0c" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[4px] text-sm font-medium" style={{ color: "#a3c68b" }}>
            Expertise
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-14" style={{ color: "#f5ead7" }}>
            Skills & Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {skills.map(({ label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, borderColor: "rgba(163,198,139,0.45)" }}
              className="rounded-2xl p-6 flex flex-col gap-3 cursor-default transition-all duration-300"
              style={{
                background: "rgba(245,234,215,0.03)",
                border: "1px solid rgba(245,234,215,0.08)",
                backdropFilter: "blur(16px)",
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "rgba(163,198,139,0.12)" }}>
                <Icon style={{ color: "#a3c68b", fontSize: "1.1rem" }} />
              </div>
              <p className="font-medium text-sm leading-snug" style={{ color: "#f5ead7" }}>{label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}