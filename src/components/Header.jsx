import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
  const [hoverIndex, setHoveredIndex] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const containerRef = useRef(null);
  const itemRefs = useRef([]);
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, width: 0 });

  const navItems = ["Home", "About", "Projects", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (hoverIndex !== null && itemRefs.current[hoverIndex]) {
      const item = itemRefs.current[hoverIndex];
      const container = containerRef.current;
      const itemRect = item.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();

      setHighlightStyle({
        left: itemRect.left - containerRect.left,
        width: itemRect.width,
      });
    }
  }, [hoverIndex]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isSticky ? "" : "bg-transparent"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto h-16 flex items-center justify-center px-4"
      >
        {/* ✨ Desktop Nav */}
        <nav
          ref={containerRef}
          className="relative hidden md:flex space-x-8 border border-violet-500 rounded-xl px-4 py-1 mt-8 bg-[#0f0f0f]/60 shadow-lg backdrop-blur"
        >
          <motion.div
            className="absolute top-0 bottom-0 my-auto h-10 bg-violet-500/20 rounded-full z-0"
            animate={{
              left: highlightStyle.left,
              width: highlightStyle.width,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          />
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              ref={(el) => (itemRefs.current[index] = el)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative inline-block px-4 py-2 rounded-full text-white font-medium transition-colors duration-300 z-10"
            >
              <span className="relative z-10">{item}</span>
            </a>
          ))}
        </nav>

        {/* 🍔 Mobile Hamburger */}
        <div className="md:hidden absolute right-4 top-4 z-60">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleMenu}
            className="text-white p-2 border border-violet-500 rounded-xl bg-[#1e1e1e]/60 backdrop-blur hover:bg-violet-500 hover:text-white transition-all duration-300"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </motion.button>
        </div>
      </motion.div>

      {/* 📱 Mobile Menu w/ Blur and Topbar */}
      {isOpen && (
        <>
          {/* 🔲 Blur Background */}
          <motion.div
            key="blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleMenu}
            className="fixed inset-0 z-30 backdrop-blur-sm bg-black/40"
          />

          {/* 🧊 Dark Top Bar with Close Button */}
          <div className="fixed top-0 left-0 w-full z-50 bg-[#0f0f0f] border-b border-gray-800 px-4 py-3 flex justify-end md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white p-2 border border-violet-500 rounded-xl bg-[#1e1e1e]/60 backdrop-blur hover:bg-violet-500 hover:text-white transition-all duration-300"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* 📄 Dropdown Menu (Below Top Bar) */}
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-14 left-0 w-full bg-[#0f0f0f] px-6 py-6 border-t border-gray-800 shadow-xl z-40 md:hidden"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="group relative text-center text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300"
                >
                  <span className="relative z-10 px-4 py-2">{item}</span>
                  <span className="absolute inset-0 mx-auto h-10 w-full scale-0 rounded-full bg-violet-500 opacity-10 transition-all duration-300 ease-out group-hover:scale-100 group-hover:opacity-20"></span>
                </a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default Header;
