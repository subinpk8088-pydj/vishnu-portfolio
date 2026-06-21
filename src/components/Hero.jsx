import { FaDownload, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "#0d110e" }}>

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-96 h-96 rounded-full" style={{ background: "rgba(163,198,139,0.12)", filter: "blur(180px)" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full" style={{ background: "rgba(245,235,215,0.07)", filter: "blur(180px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full" style={{ background: "rgba(163,198,139,0.05)", filter: "blur(200px)" }} />

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="uppercase tracking-[8px] text-sm font-medium" style={{ color: "#a3c68b" }}>
              Software Tester
            </span>

            <h1 className="mt-6 font-black leading-none" style={{ fontSize: "clamp(3.5rem,8vw,6rem)" }}>
              <span className="block" style={{ color: "#f5ead7" }}>VISHNU</span>
              <span style={{
                background: "linear-gradient(135deg, #a3c68b 0%, #d4e8c2 40%, #f5ead7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>V</span>
            </h1>

            <div className="mt-8 space-y-2">
              <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: "#f5ead7" }}>Quality First.</h2>
              <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: "#7a8f70" }}>Automation Focused.</h2>
            </div>

            <p className="mt-8 text-xl max-w-lg leading-relaxed" style={{ color: "#6b7d62" }}>
              Manual Testing • Selenium • Postman • API Testing
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full flex items-center gap-3 font-semibold transition-all"
                style={{ background: "#a3c68b", color: "#0d110e" }}
              >
                <FaDownload />
                Resume
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/vishnu-v-2262122ab"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, borderColor: "#a3c68b" }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-full flex items-center gap-3 transition-all"
                style={{ border: "1px solid rgba(245,234,215,0.15)", color: "#f5ead7" }}
              >
                <FaLinkedin />
                LinkedIn
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full" style={{ background: "rgba(163,198,139,0.15)", filter: "blur(100px)" }} />

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full"
                style={{ border: "1px dashed rgba(163,198,139,0.25)", margin: "-16px" }}
              />

              <div className="relative rounded-full p-3"
                style={{ background: "rgba(245,234,215,0.04)", border: "1px solid rgba(245,234,215,0.08)", backdropFilter: "blur(20px)" }}>
                <img
                  src="/profile.jpg"
                  alt="Vishnu V — QA Engineer"
                  className="w-[320px] h-[320px] object-cover rounded-full"
                  style={{
                    border: "3px solid rgba(163,198,139,0.3)",
                    boxShadow: "0 0 60px rgba(163,198,139,0.2)"
                  }}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl px-6 py-4 text-center"
                style={{ background: "rgba(13,17,14,0.7)", backdropFilter: "blur(20px)", border: "1px solid rgba(245,234,215,0.08)" }}
              >
                <span className="font-bold block" style={{ color: "#a3c68b" }}>QA</span>
                <span className="text-sm" style={{ color: "#f5ead7" }}>Engineer</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}