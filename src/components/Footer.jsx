import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const socials = [
  { icon: FaLinkedin, href: "https://linkedin.com/in/vishnu-v-2262122ab" },
  { icon: FaGithub,   href: "#" },
  { icon: FaEnvelope, href: "mailto:vishnuknr2003@gmail.com" },
];

export default function Footer() {
  return (
    <footer className="py-10 px-6" style={{
      background: "#0b0f0c",
      borderTop: "1px solid rgba(245,234,215,0.07)"
    }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <p className="text-sm" style={{ color: "#3d5040" }}>
          © 2026{" "}
          <span style={{ color: "#7a8f70" }}>Vishnu V</span>
          {" "}•{" "}
          <span style={{ color: "#3d5040" }}>Software Tester</span>
        </p>

        <div className="flex gap-4">
          {socials.map(({ icon: Icon, href }, i) => (
            <motion.a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, color: "#a3c68b" }}
              className="transition-all duration-300"
              style={{ color: "#3d5040", fontSize: "1.1rem" }}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  );
}