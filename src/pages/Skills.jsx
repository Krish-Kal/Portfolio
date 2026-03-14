import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava, FaDatabase, FaLock 
} from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";
import { 
  SiTailwindcss, SiMongodb, SiPostman, SiDocker, SiJavascript, SiNextdotjs, SiRedux, SiFigma, SiAndroidstudio, SiMysql, SiExpress, SiC, SiHtml5, SiCss, SiRender 
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
    const sectionElements = sections.map((_, idx) => document.getElementById(`section-${idx}`));
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      sectionElements.forEach((el, idx) => {
        if (el && scrollPos >= el.offsetTop) setActiveIndex(idx);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const SkillCard = ({ skill }) => (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 0 15px 3px rgba(0,170,255,0.6)",
        borderColor: "rgba(0,170,255,0.7)",
      }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
      className="flex items-center gap-3 bg-blue-900/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 md:p-5 cursor-default transition-colors duration-300 break-words"
    >
      <div className="text-2xl md:text-3xl flex-shrink-0">{skill.icon}</div>
      <span className="font-medium text-gray-200 text-sm md:text-base tracking-wide break-words">{skill.name}</span>
    </motion.div>
  );

  return (
    <div className="min-h-screen text-white flex flex-col md:flex-row px-4 sm:px-6 md:px-10 pt-28 pb-28 space-y-12 md:space-y-0 md:space-x-12 relative">

      {/* Desktop Left Vertical Navbar */}
      <div className="hidden md:flex flex-col gap-5 fixed left-6 top-1/2 transform -translate-y-1/2 z-50">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            onClick={() => document.getElementById(`section-${idx}`)?.scrollIntoView({ behavior: "smooth" })}
            className={`group relative w-2 h-5 rounded-full cursor-pointer transition-all duration-300
              ${activeIndex === idx 
                ? "bg-blue-400 h-7 shadow-[0_0_12px_#00CFFF]" 
                : "bg-blue-300/50"
              }
            `}
            whileHover={{ 
              scale: 1.2, 
              backgroundColor: "rgba(0, 204, 255, 0.15)", 
              boxShadow: activeIndex === idx ? "0 0 12px #00CFFF" : "0 0 8px #00CFFF"
            }}
          >
            <span className="absolute left-7 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md text-gray-200 text-[10px] font-medium px-2 py-[1px] rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              {sec.title}
            </span>
          </motion.div>
        ))}
      </div>



      {/* Main Skills Content */}
      <div className="flex-1 max-w-5xl mx-auto space-y-10 sm:space-y-12">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-400 mb-8 sm:mb-10 tracking-wide"
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
            className="space-y-4 sm:space-y-5"
          >
            <h2 className="text-sm sm:text-base md:text-lg font-semibold text-blue-200 border-l-4 border-blue-400 pl-3 uppercase tracking-wide">
              {section.title}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-3">
              {section.skills.map((skill, i) => (
                <SkillCard key={i} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;