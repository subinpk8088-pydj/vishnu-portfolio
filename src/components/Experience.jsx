import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";

const experiences = [
  {
    company: "XPayBack Pvt Ltd",
    role: "Software Testing Intern",
    duration: "3 Months",
    points: [
      "Performed Manual Testing",
      "Validated UI/UX workflows",
      "Reported functional defects",
      "Tested mobile applications",
    ],
  },
  {
    company: "Mexilet Technologies",
    role: "Automation Testing Intern",
    duration: "8 Months",
    points: [
      "Created Selenium automation scripts",
      "API Testing using Postman",
      "Website testing",
      "WhatsApp API testing",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6" style={{ background: "#0d110e" }}>
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[4px] text-sm font-medium" style={{ color: "#a3c68b" }}>
            Career
          </span>
          <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-16" style={{ color: "#f5ead7" }}>
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{ background: "linear-gradient(to bottom, rgba(163,198,139,0.4), rgba(163,198,139,0.05))" }} />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ borderColor: "rgba(163,198,139,0.4)" }}
                className="md:ml-16 rounded-3xl p-8 transition-all duration-300 group"
                style={{
                  background: "rgba(245,234,215,0.03)",
                  border: "1px solid rgba(245,234,215,0.08)",
                  backdropFilter: "blur(20px)",
                }}
              >
                {/* Timeline dot */}
                <div className="absolute -left-[9px] mt-1 w-[18px] h-[18px] rounded-full hidden md:block"
                  style={{ border: "2px solid #a3c68b", background: "#0d110e" }} />

                <div className="flex flex-wrap items-start gap-4 mb-5">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(163,198,139,0.12)" }}>
                    <FaBriefcase style={{ color: "#a3c68b", fontSize: "1.1rem" }} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold" style={{ color: "#f5ead7" }}>{exp.company}</h3>
                    <p className="mt-1 text-sm" style={{ color: "#7a8f70" }}>
                      {exp.role}
                      <span className="mx-2" style={{ color: "#3d5040" }}>•</span>
                      <span style={{ color: "#a3c68b" }}>{exp.duration}</span>
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 pl-1">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: "#6b7d62" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#a3c68b" }} />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}