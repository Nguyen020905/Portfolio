import React from "react";
import {
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiPython,
  SiFigma,
  SiFramer,
} from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb"; // Replacing SiOauth
import { motion } from "framer-motion";

const skillList = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38B2AC" },
  { name: "CSS3", Icon: SiCss3, color: "#264DE4" },
  { name: "OAuth2", Icon: TbBrandOauth, color: "#7BAA83" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Motion", Icon: SiFramer, color: "#0055FF" },
];

// Parent container animation
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

// Each item animation
const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 300 },
  },
};

const Skills = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto text-left ">
      <motion.h2
        className="text-4xl font-semibold mb-16 text-gray-900 dark:text-white  sm:pl-8 md:pl-16 "
        style={{ paddingLeft: "60px" }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skillList.map(({ name, Icon, color }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.12 }}
            className="group cursor-default"
          >
            <motion.div
              initial={{
                color: "#ffffff",
                boxShadow: "0px 0px 0px rgba(0,0,0,0)",
              }}
              whileHover={{
                color,
                boxShadow: "0px 0px 12px #FFB6C1", // light pink glow
              }}
              transition={{ duration: 0.3 }}
              className="w-20 h-20 border rounded-xl border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center text-center p-2"
            >
              <Icon className="text-2xl mb-1" />
              <span className="text-xs text-gray-700 dark:text-gray-300 font-medium">
                {name}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;
