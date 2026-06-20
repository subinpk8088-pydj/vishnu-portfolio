import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6"
    >

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto"
      >

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border border-white/10
          rounded-[40px]
          p-12
          text-center
          "
        >

          <span className="text-orange-400 uppercase tracking-[4px]">
            Contact
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-6">
            Let's Work Together
          </h2>

          <p className="text-zinc-400 text-lg mb-10">
            Open to Software Testing opportunities,
            QA roles and Automation Testing projects.
          </p>

          <div className="grid md:grid-cols-2 gap-6">

            <a
              href="mailto:vishnuknr2003@gmail.com"
              className="
              bg-black/20
              border border-white/10
              rounded-2xl
              p-5
              flex
              items-center
              gap-4
              hover:border-orange-400
              transition
              "
            >
              <FaEnvelope className="text-orange-400 text-2xl" />

              <div className="text-left">
                <h4>Email</h4>
                <p className="text-zinc-400 text-sm">
                  vishnuknr2003@gmail.com
                </p>
              </div>
            </a>

            <a
              href="tel:+917306417582"
              className="
              bg-black/20
              border border-white/10
              rounded-2xl
              p-5
              flex
              items-center
              gap-4
              hover:border-orange-400
              transition
              "
            >
              <FaPhone className="text-orange-400 text-2xl" />

              <div className="text-left">
                <h4>Phone</h4>
                <p className="text-zinc-400 text-sm">
                  +91 7306417582
                </p>
              </div>
            </a>

          </div>

          <div className="flex justify-center gap-5 mt-10">

            <a
              href="https://linkedin.com/in/vishnu-v-2262122ab"
              target="_blank"
              rel="noreferrer"
              className="
              w-14
              h-14
              rounded-full
              bg-orange-500
              hover:bg-orange-600
              flex
              items-center
              justify-center
              text-xl
              transition
              "
            >
              <FaLinkedin />
            </a>

            <a
              href="#"
              className="
              w-14
              h-14
              rounded-full
              border
              border-white/10
              hover:border-orange-400
              flex
              items-center
              justify-center
              text-xl
              transition
              "
            >
              <FaGithub />
            </a>

          </div>

        </div>

      </motion.div>

    </section>
  );
}