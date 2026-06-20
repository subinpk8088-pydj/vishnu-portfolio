import { FaDownload, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="uppercase tracking-[8px] text-orange-400 text-sm">
              Software Tester
            </span>

            <h1 className="mt-6 text-6xl md:text-7xl lg:text-8xl font-black leading-none">

              <span className="block">VISHNU</span>

              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
                V
              </span>

            </h1>

            <div className="mt-8 space-y-2">

              <h2 className="text-3xl md:text-4xl font-semibold">
                Quality First.
              </h2>

              <h2 className="text-3xl md:text-4xl font-semibold text-zinc-400">
                Automation Focused.
              </h2>

            </div>

            <p className="mt-8 text-zinc-500 text-xl max-w-lg leading-relaxed">
              Manual Testing • Selenium • Postman • API Testing
            </p>

            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="
                bg-orange-500
                hover:bg-orange-600
                px-8
                py-4
                rounded-full
                flex
                items-center
                gap-3
                transition
                "
              >
                <FaDownload />
                Resume
              </a>

              <a
                href="https://linkedin.com/in/vishnu-v-2262122ab"
                target="_blank"
                rel="noreferrer"
                className="
                border
                border-white/10
                hover:border-orange-400
                px-8
                py-4
                rounded-full
                flex
                items-center
                gap-3
                transition
                "
              >
                <FaLinkedin />
                LinkedIn
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-[100px]" />

              <div
                className="
                relative
                backdrop-blur-xl
                bg-white/5
                border
                border-white/10
                rounded-full
                p-3
                "
              >

                <img
                  src="/profile.jpg"
                  alt="profile"
                  className="
                  w-[350px]
                  h-[350px]
                  object-cover
                  rounded-full
                  border-4
                  border-orange-400/20
                  shadow-[0_0_60px_rgba(249,115,22,0.25)]
                  "
                />

              </div>

              <div
                className="
                absolute
                -bottom-6
                left-1/2
                -translate-x-1/2
                bg-black/40
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                px-6
                py-4
                "
              >
                <p className="text-center">
                  <span className="text-orange-400 font-bold">
                    QA
                  </span>
                  <br />
                  Engineer
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}