import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import arcadePreview from "../assets/ArcadeVault.png"; 
import portfolio from "../assets/portfolio.png";

const projects = [
  {
    title: "Arcade Vault",
    description:
      "A modern gaming hub featuring game search, wishlist system, Gaming Stats secured with User Authentication",
    github: "https://github.com/Krish-Kal/ArcadeVault",
    demo: "https://arcade-vault-hub.vercel.app",
    tags: ["React.js", "REST API", "Wishlist", "Game Search", "Authentication", "Gaming Stats & UI"],
    preview: arcadePreview,
  },
  {
    title: "Portfolio Website",
    description:
      "A modern portfolio with smooth transitions and professional UI.",
    github: "https://github.com/Krish-Kal/Portfolio",
    demo: "#",
    tags: ["React.js", "Tailwind CSS", "Three.js", "Framer Motion", "EmailJS"],
    preview: portfolio,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen pt-28 px-6 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-blue-400 tracking-wide">
        Builds & Breakthroughs
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="group relative w-full bg-blue-900/20 border border-blue-400/20 rounded-xl p-4 flex flex-col justify-between
                       hover:shadow-[0_0_20px_rgba(0,170,255,0.35)] transition-all duration-300 transform hover:-translate-y-1
                       sm:min-h-[300px]"
          >
            {/* Hologram / 3D preview floating slightly above the top */}
            {project.preview && (
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-full flex justify-center pointer-events-none">
                <div className="relative opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-3 group-hover:-translate-y-0 rotate-x-12">
                  <img
                    src={project.preview}
                    alt="preview"
                    className="w-[168px] rounded-md border border-blue-400/30 shadow-[0_0_25px_rgba(59,130,246,0.4)] object-cover"
                  />
                  {/* Subtle holographic glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-400/5 to-transparent animate-scan opacity-50 rounded-md" />
                </div>
              </div>
            )}

            {/* Tile Content */}
            <div className="mt-12">
              <h2 className="text-lg md:text-xl font-semibold mb-2 text-blue-200">
                {project.title}
              </h2>
              <p className="text-gray-300 text-sm md:text-sm mb-3 leading-relaxed">
                {project.description}
              </p>

              {project.tags?.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-xs font-medium bg-blue-500/15 backdrop-blur-sm px-2 py-1 rounded-lg
                                 hover:bg-blue-500/25 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-3 flex-wrap">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-blue-500/20 border border-blue-400/40 rounded-lg
                             hover:shadow-[0_0_14px_rgba(0,170,255,0.45)]
                             hover:bg-blue-500/30 transition-all duration-300 text-sm md:text-sm font-medium"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              )}

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 bg-gray-700/15 border border-gray-400/30 rounded-lg
                             hover:shadow-[0_0_14px_rgba(0,170,255,0.35)]
                             hover:bg-gray-700/25 transition-all duration-300 text-sm md:text-sm font-medium"
                >
                  <FaGithub /> Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @keyframes scan {
            0% { transform: translateY(-20%); }
            100% { transform: translateY(20%); }
          }

          .animate-scan {
            animation: scan 2.5s linear infinite;
          }

          .rotate-x-12 {
            transform: rotateX(12deg);
          }
        `}
      </style>
    </div>
  );
}