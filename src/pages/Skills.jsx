import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaDatabase, FaLock 
} from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";
import { 
  SiTailwindcss, SiMongodb, SiPostman, SiDocker, SiJavascript, SiNextdotjs, SiRedux, SiFigma, SiAndroidstudio, SiMysql, SiExpress, SiC, SiHtml5, SiCss, SiRender, SiElectron
} from "react-icons/si";
import { VscCodeReview } from "react-icons/vsc";
import cppLogo from "../assets/C++.png";

function Skills() {

  const sections = [
    { title: "Programming Languages", skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "C", icon: <SiC className="text-green-400" /> },
        { name: "C++", icon: <img src={cppLogo} alt="C++" className="w-10 h-10 object-contain" /> }
      ]},
    { title: "Frontend", skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <SiCss className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ]},
    { title: "Frameworks & Libraries", skills: [
        { name: "Electron", icon: <SiElectron className="text-cyan-400" /> },
      ]},
    { title: "Backend", skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
        { name: "REST APIs", icon: <FaDatabase className="text-green-300" /> },
        { name: "JWT Auth", icon: <FaLock className="text-blue-400" /> },
      ]},
    { title: "Database", skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      ]},
    { title: "Tools & IDEs", skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGitAlt className="text-gray-200" /> },
        { name: "VS Code", icon: <VscCodeReview className="text-blue-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-400" /> },
      ]},
    { title: "DevOps & Deployment", skills: [
        { name: "Vercel", icon: <RiVercelFill className="text-white" /> },
        { name: "Render", icon: <SiRender className="text-blue-400" /> },
      ]},
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {

    const observers = [];

    sections.forEach((_, idx) => {

      const el = document.getElementById(`section-${idx}`);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(idx);
        },
        {
          rootMargin: "-45% 0px -45% 0px",
          threshold: 0.1
        }
      );

      observer.observe(el);
      observers.push(observer);

    });

    return () => observers.forEach(o => o.disconnect());

  }, []);

 const SkillCard = ({ skill }) => (
  <motion.div
    whileHover={{
      scale: 1.015,
      borderColor: "rgba(0,170,255,0.7)",
      boxShadow: "0 0 15px 3px rgba(0,170,255,0.6)"
    }}
    transition={{
      duration: 0.12,
      ease: "easeOut"
    }}
    className="flex items-center gap-3 bg-blue-900/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-4 cursor-default will-change-transform"
  >
    <div className="text-2xl md:text-2xl">{skill.icon}</div>
    <span className="font-medium text-gray-200 text-sm md:text-sm tracking-wide">
      {skill.name}
    </span>
  </motion.div>
);

  return (

    <div className="min-h-screen text-white px-4 sm:px-6 md:px-10 pt-28 pb-28">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[180px_1fr] gap-12">

        {/* PREMIUM NAVBAR */}

        <div className="hidden md:block">
          <div className="sticky top-40">
            <div className="flex flex-col gap-2 relative">

              {sections.map((sec, idx) => (

                <motion.button
                  key={idx}
                  onClick={() =>
                    document
                      .getElementById(`section-${idx}`)
                      ?.scrollIntoView({ behavior: "smooth", block: "start" })
                  }
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative text-left text-sm px-4 py-2 rounded-lg text-gray-400 hover:text-gray-200"
                >

                  {activeIndex === idx && (
                    <motion.div
                      layoutId="navHighlight"
                      className="absolute inset-0 rounded-lg bg-blue-500/20 border border-blue-400/40"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 40
                      }}
                    />
                  )}

                  <span className="relative flex items-center gap-3">

                    <span
                      className={`w-2 h-2 rounded-full
                      ${activeIndex === idx
                        ? "bg-blue-400 shadow-[0_0_10px_#00CFFF]"
                        : "bg-gray-600"
                      }`}
                    />

                    {sec.title}

                  </span>

                </motion.button>

              ))}

            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}

        <div className="space-y-8 sm:space-y-10 max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-center text-blue-400 mb-6 sm:mb-8 tracking-wide"
          >
            Dev Toolkit
          </motion.h1>

          {sections.map((section, idx) => (

            <motion.div
              key={idx}
              id={`section-${idx}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="space-y-3 sm:space-y-4"
            >

              <h2 className="text-sm sm:text-base md:text-base font-semibold text-blue-200 border-l-4 border-blue-400 pl-3 uppercase tracking-wide">
                {section.title}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">

                {section.skills.map((skill, i) => (
                  <SkillCard key={i} skill={skill} />
                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default Skills;