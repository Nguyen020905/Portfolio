import React from "react";
import GlareHover from "./GlareHover";
import { FaReact, FaHtml5, FaNodeJs, FaPython } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandOauth } from "react-icons/tb";
import { motion } from "framer-motion";

const skillList = [
  { name: "React", image: FaReact, hoverColor: "group-hover:text-cyan-400" },
  { name: "HTML5", image: FaHtml5, hoverColor: "group-hover:text-orange-500" },
  {
    name: "Tailwind",
    image: RiTailwindCssFill,
    hoverColor: "group-hover:text-sky-400",
  },
  { name: "CSS3", image: IoLogoCss3, hoverColor: "group-hover:text-blue-500" },
  {
    name: "OAuth2",
    image: TbBrandOauth,
    hoverColor: "group-hover:text-green-400",
  },
  {
    name: "Python",
    image: FaPython,
    hoverColor: "group-hover:text-yellow-400",
  },
];

const Skills = () => {
  return (
    <div className="py-10 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.4 }}
        className="grid grid-cols-3 sm:grid-cols-6 gap-4 justify-items-center"
      >
        {skillList.map((skill, index) => {
          const Icon = skill.image;
          return (
            <GlareHover
              key={index}
              glareColor="#ffffff"
              glareOpacity={0.3}
              glareAngle={-30}
              glareSize={200}
              transitionDuration={800}
              playOnce={false}
            >
              <div className="group flex flex-col items-center px-3 py-3 rounded-lg shadow-md bg-white dark:bg-gray-900 w-[100px] h-[100px] justify-center">
                <Icon
                  className={`text-3xl text-violet-600 dark:text-violet-400 transition-colors duration-300 ${skill.hoverColor}`}
                />
                <span className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                  {skill.name}
                </span>
              </div>
            </GlareHover>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Skills;
