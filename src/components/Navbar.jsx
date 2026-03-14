import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
  ];

  const location = useLocation();

  const [showNavbar, setShowNavbar] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 80) {
        setShowNavbar(true);
      } 
      else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      } 
      else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateScrollDirection);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.05 },
    },
    exit: { opacity: 0, x: 40 },
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: showNavbar ? 0 : -100, opacity: showNavbar ? 1 : 0 }}
      transition={{ duration: 0.35 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10 shadow-lg"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white relative">

        {/* Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-base font-semibold tracking-wide cursor-pointer ml-0 md:-ml-4
          bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Krishna Kalvakolanu
        </motion.h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={index}
                to={item.path}
                className="relative group transition duration-300"
              >
                <span className="relative text-white transition-colors duration-300 group-hover:text-cyan-400">
                  {item.name}
                  {/* Unified subtle underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-[1.0px] w-full bg-cyan-400/70 
                    origin-left transition-transform duration-300 
                    ${isActive ? "scale-x-100 shadow-[0_0_4px_rgba(34,211,238,0.5)]" : "scale-x-0 group-hover:scale-x-100"}`}
                  ></span>
                </span>
              </Link>
            );
          })}
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
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;

                return (
                  <motion.div
                    key={index}
                    variants={mobileLinkVariants}
                    className="px-6 py-2 text-white hover:text-cyan-400 font-medium text-lg"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMenuOpen(false)}
                      className="block w-full"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
}

export default Navbar;