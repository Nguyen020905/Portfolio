import React, { useState } from "react";
import { motion } from "framer-motion";
import Profile from "../Picture/Profile.jpg";
import Profile2 from "../Picture/Profile2.png";
import { TbRuler } from "react-icons/tb";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import GlareHover from "./GlareHover";
const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const [imageRevealed, setImageRevealed] = useState(false);

  const handleHoverStart = () => {
    setHovered(true);
    setImageRevealed(true); // corrected from setImageRevealed(TbRuler)
  };

  const handleHoverEnd = () => {
    setHovered(false);
    setImageRevealed(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center justify-center text-center px-6">
      {/* Optional: Faint background shape */}
      <div className="absolute top-[-5rem] right-[-5rem] w-[25rem] h-[25rem] bg-purple-200 dark:bg-purple-800 rounded-full blur-3xl opacity-30 z-0" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="w-full flex justify-center items-center">
          <div className="z-10 flex flex-row items-center space-x-4">
            {/* Profile Image */}
            <div
              onMouseEnter={handleHoverStart}
              onMouseLeave={handleHoverEnd}
              className="relative w-32 h-32 rounded-full  p-[4px] bg-white
             hover:scale-110 hover:rotate-[-6deg] transition-transform duration-300 
             hover:shadow-[0_0_35px_#f472d0] shadow-lg"
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-[#0f0f0f] flex items-center justify-center">
                <img
                  src={imageRevealed ? Profile2 : Profile}
                  alt="Nguyen Nguyen"
                  className="w-full h-full object-cover object-center rounded-full"
                />
              </div>
            </div>

            {/* Name + Location */}
            <div className="flex flex-col items-start">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white">
                Nguyen Nguyen
              </h1>
              <h2 className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-300 mt-1">
                Based in Phoenix, America
              </h2>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center leading-tight">
          <p className="font-sora font-extrabold mt-6 text-7xl sm:text-8xl md:text-9xl text-gray-900 dark:text-white tracking-tight">
            Front-end
          </p>
          <p className="font-sora font-extrabold mt-2 text-7xl sm:text-8xl md:text-9xl text-violet-500 tracking-tight">
            Developer
          </p>
          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center gap-6 mt-8"
          >
            {/* GitHub */}
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              <a
                href="https://github.com/Nguyen020905"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-violet-500 rounded-2xl p-3 text-gray-800 dark:text-white hover:text-violet-500 transition-colors"
              >
                <FiGithub className="text-xl transition-colors duration-300 group-hover:text-violet-500" />
              </a>
            </GlareHover>

            {/* LinkedIn */}
            <GlareHover
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              <a
                href="https://www.linkedin.com/in/nhu-anh-nguyen-nguyen-986724337/"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-violet-500 rounded-2xl p-3 text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              >
                <FaLinkedinIn className="text-xl transition-colors duration-300 group-hover:text-blue-500" />
              </a>
            </GlareHover>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
