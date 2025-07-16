import React from "react";
import {
  SiReact,
  SiHtml5,
  SiTailwindcss,
  SiCss3,
  SiOauth,
  SiPython,
  SiFigma,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillList = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38B2AC" },
  { name: "CSS3", Icon: SiCss3, color: "#264DE4" },
  { name: "OAuth2", Icon: SiOauth, color: "#7BAA83" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
];

const Skills = () => (
  <section className="py-16 px-4">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
        My Tech Stack
      </h2>

      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {skillList.map((skill, i) => {
          const { name, Icon, color } = skill;
          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center cursor-default"
            >
              <Icon className="text-4xl mb-2" style={{ color }} />
              <span className="text-base text-gray-700 dark:text-gray-300">
                {name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Skills;
