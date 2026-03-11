import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <div className="relative min-h-screen text-white font-sans">

      {/* HERO SECTION */}
      <section className="max-w-5xl mx-auto px-6 sm:px-10 md:px-20 pt-36 md:pt-40 flex flex-col items-center text-center gap-8 md:gap-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full"
        >

          {/* NAME */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Krishna Kalvakolanu
          </h1>

          {/* IDENTITY */}
          <p className="text-blue-400 text-xs sm:text-sm md:text-base mb-4 tracking-wide">
            BE IT • Full Stack Developer • Problem Solver
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-md sm:max-w-lg md:max-w-xl mx-auto">
            Crafting clean web experiences and occasionally winning battles against bugs.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex justify-center flex-wrap gap-4 sm:gap-5 mb-8">

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="/projects"
              className="px-6 sm:px-7 py-3 rounded-lg font-medium 
                bg-blue-500/90 text-black
                shadow-[0_0_12px_rgba(59,130,246,0.35)]
                hover:shadow-[0_0_20px_rgba(59,130,246,0.55)]
                transition duration-300"
            >
              View Projects
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              href="/resume"
              className="px-6 sm:px-7 py-3 rounded-lg font-medium 
                border border-blue-400 text-blue-300
                shadow-[0_0_10px_rgba(59,130,246,0.2)]
                hover:shadow-[0_0_18px_rgba(59,130,246,0.45)]
                hover:text-white
                transition duration-300"
            >
              Resume
            </motion.a>

          </div>

          {/* SOCIAL ICONS */}
          <div className="flex justify-center gap-5 sm:gap-6 text-xl sm:text-2xl">
            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://github.com/Krish-Kal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2 }}
              href="https://www.linkedin.com/in/krishna-kalvakolanu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaLinkedin />
            </motion.a>
          </div>

        </motion.div>

      </section>

      {/* ABOUT SECTION */}
      <section className="pt-28 sm:pt-32 pb-6 px-6 sm:px-10 md:px-20 max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-blue-400 text-center sm:text-left"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative pl-4 sm:pl-6 border-l border-blue-400/30"
        >
          <p
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed
              hover:text-gray-200 transition duration-300
              drop-shadow-[0_0_6px_rgba(59,130,246,0.25)]"
          >
            Full Stack Developer focused on building sleek, responsive web
            applications and writing clean, maintainable code. I enjoy exploring
            new technologies and refining ideas into smooth, intuitive digital
            experiences—when I'm not building, I'm usually tweaking something on
            my PC or chasing the next cool idea to bring to life.
          </p>
        </motion.div>

      </section>

      {/* DEVELOPER IDENTITY STRIP */}
      <section className="pt-20 sm:pt-24 pb-0 px-6 sm:px-10 md:px-20 max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between text-sm sm:text-base font-medium text-gray-300 gap-3 sm:gap-0"
        >

          <span className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition">
            🎮 Gamer
          </span>

          <span className="text-blue-500 animate-pulse hidden sm:inline">|</span>

          <span className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition">
            🛠 Builder
          </span>

          <span className="text-blue-500 animate-pulse hidden sm:inline">|</span>

          <span className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition">
            🔎 Explorer
          </span>

          <span className="text-blue-500 animate-pulse hidden sm:inline">|</span>

          <span className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.7)] transition">
            ⚙️ Customiser
          </span>

        </motion.div>

      </section>

    </div>
  );
}

export default Home;