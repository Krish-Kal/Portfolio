import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
  ];

  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current + 5) setShowNavbar(false);
      else if (currentScrollY < lastScrollY.current - 5) setShowNavbar(true);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
    exit: { opacity: 0, x: 50 },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white relative">
        {/* Logo / Name */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-xl font-bold tracking-wide cursor-pointer 
          bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Krishna Kalvakolanu
        </motion.h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="relative group transition duration-300"
            >
              <span className="group-hover:text-cyan-400 transition duration-300">
                {item.name}
              </span>
              <span className="
                absolute left-0 bottom-[-4px] w-0 h-[2px]
                bg-cyan-400
                transition-all duration-300
                group-hover:w-full
                shadow-[0_0_8px_#22d3ee]
              "></span>
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl p-2 rounded hover:bg-white/10 transition"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-full right-4 mt-2 w-48 bg-black/80 backdrop-blur-lg border border-white/20 rounded-xl shadow-lg flex flex-col py-4"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={mobileLinkVariants}
                  className="px-6 py-2 text-white hover:text-cyan-400 font-medium text-lg"
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="w-full block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Navbar;