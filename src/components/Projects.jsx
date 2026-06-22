import { motion } from "framer-motion";
import { FaArrowRight, FaBug, FaFlask, FaRobot } from "react-icons/fa";

const projects = [
  {
    icon: FaBug,
    tag: "QA",
    title: "Manual Testing Project",
    desc: "Prepared and executed test cases covering functional, regression and smoke testing.",
  },
  {
    icon: FaFlask,
    tag: "API",
    title: "API Testing",
    desc: "Validated REST APIs using Postman, response verification and status code validation.",
  },
  {
    icon: FaRobot,
    tag: "Automation",
    title: "Selenium Automation",
    desc: "Automated login flows, forms and workflow validation using Selenium WebDriver.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6" style={{ background: "#0d110e" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[4px] text-sm font-medium" style={{ color: "#a3c68b" }}>
            Work
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-16" style={{ color: "#f5ead7" }}>
            Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ icon: Icon, tag, title, desc }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, borderColor: "rgba(163,198,139,0.4)" }}
              className="group rounded-3xl p-8 flex flex-col transition-all duration-300"
              style={{
                background: "rgba(245,234,215,0.03)",
                border: "1px solid rgba(245,234,215,0.08)",
                backdropFilter: "blur(20px)",
              }}
            >
              {/* Top row */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(163,198,139,0.12)" }}>
                  <Icon style={{ color: "#a3c68b", fontSize: "1.3rem" }} />
                </div>
                <span className="text-xs uppercase tracking-widest px-3 py-1 rounded-full"
                  style={{ background: "rgba(163,198,139,0.1)", color: "#a3c68b" }}>
                  {tag}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3" style={{ color: "#f5ead7" }}>{title}</h3>
              <p className="leading-7 flex-1 text-sm" style={{ color: "#6b7d62" }}>{desc}</p>

              <motion.button
                whileHover={{ gap: "12px" }}
                className="mt-7 flex items-center gap-2 text-sm font-medium w-fit transition-all duration-300"
                style={{ color: "#a3c68b" }}
              >
                View Details
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}