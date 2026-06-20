import { motion } from "framer-motion";
import {
  FaBug,
  FaCode,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-32 px-6">

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >

        <span className="text-orange-400 uppercase tracking-[4px]">
          About Me
        </span>

        <h2 className="text-5xl lg:text-6xl font-bold mt-4 mb-8">
          Quality Driven
          <span className="text-orange-400"> Software Tester</span>
        </h2>

        <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed">
          Software Testing professional with hands-on experience
          in Manual Testing, Selenium Automation, API Testing,
          Defect Tracking and Quality Assurance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <FaBug className="text-orange-400 text-3xl mb-4" />
            <h3 className="font-semibold text-xl">
              Manual Testing
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <FaCode className="text-orange-400 text-3xl mb-4" />
            <h3 className="font-semibold text-xl">
              Automation Testing
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <FaRocket className="text-orange-400 text-3xl mb-4" />
            <h3 className="font-semibold text-xl">
              API Testing
            </h3>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
            <FaCheckCircle className="text-orange-400 text-3xl mb-4" />
            <h3 className="font-semibold text-xl">
              Quality Assurance
            </h3>
          </div>

        </div>

      </motion.div>

    </section>
  );
}