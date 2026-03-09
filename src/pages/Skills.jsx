import cppLogo from "../assets/C++.png";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaLock, FaJava } from "react-icons/fa";
import { RiVercelFill } from "react-icons/ri";
import { SiTailwindcss, SiMongodb, SiPostman, SiDocker, SiJavascript, SiNextdotjs, SiRedux, SiFigma, SiAndroidstudio, SiMysql, SiExpress, SiC, SiHtml5, SiCss, SiRender } from "react-icons/si";
import { VscCodeReview } from "react-icons/vsc";

function Skills() {
  const sections = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "C", icon: <SiC className="text-green-400" /> },
        { name: "C++", icon: <img src={cppLogo} alt="C++" className="w-10 h-10 object-contain" /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
        { name: "HTML", icon: <SiHtml5 className="text-orange-400" /> },
        { name: "CSS", icon: <SiCss className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-gray-400" /> },
        { name: "REST APIs", icon: <FaDatabase className="text-green-300" /> },
        { name: "JWT Auth", icon: <FaLock className="text-yellow-400" /> },
      ],
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      ],
    },
    {
      title: "Tools & IDEs",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "GitHub", icon: <FaGitAlt className="text-gray-200" /> },
        { name: "VS Code", icon: <VscCodeReview className="text-blue-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
        { name: "Android Studio", icon: <SiAndroidstudio className="text-green-400" /> },
      ],
    },
    {
      title: "DevOps & Deployment",
      skills: [
        { name: "Vercel", icon: <RiVercelFill className="text-white" /> },
        { name: "Render", icon: <SiRender className="text-blue-400" /> },
      ],
    },
  ];

  const [firstSection, ...otherSections] = sections;

  const SkillTile = ({ skill }) => (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -2,
        boxShadow: "0 0 15px 3px rgba(0,170,255,0.6)",
        borderColor: "rgba(0,170,255,0.7)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className="flex flex-col items-center justify-center gap-1 bg-blue-900/20 backdrop-blur-xl border border-blue-400/20 rounded-xl p-2 cursor-default"
    >
      <span className="text-2xl md:text-3xl">{skill.icon}</span>
      <span className="text-xs md:text-sm font-medium text-center text-gray-200">{skill.name}</span>
    </motion.div>
  );

  return (
    <div className="min-h-screen pt-24 px-6 text-white space-y-14">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-extrabold text-center tracking-wide text-blue-400"
      >
        Dev Toolkit
      </motion.h1>

      <div className="max-w-5xl mx-auto space-y-10">
        {/* Full-width first section */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-4 bg-blue-900/20 backdrop-blur-xl border border-blue-400/20 rounded-2xl shadow-md"
        >
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center text-blue-200">{firstSection.title}</h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {firstSection.skills.map((skill, i) => (
              <SkillTile key={i} skill={skill} />
            ))}
          </div>
        </motion.div>

        {/* Other sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherSections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="p-3 bg-blue-900/20 backdrop-blur-xl border border-blue-400/20 rounded-2xl shadow-md"
            >
              <h2 className="text-lg md:text-xl font-semibold mb-3 text-center text-blue-200">{section.title}</h2>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {section.skills.map((skill, i) => (
                  <SkillTile key={i} skill={skill} />
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