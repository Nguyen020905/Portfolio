import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Eduniversity from "../Picture/Eduniversity.png";
import Spotify from "../Picture/Spotify.png";
import Movie from "../Picture/Movie.png";
import { FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiSpotify, SiSocketdotio, SiMongodb } from "react-icons/si";

// Project data
const projects = [
  {
    title: "University Portal",
    tools: [FaReact, RiTailwindCssFill, FaHtml5],
    description:
      "A student and admin portal for managing courses and progress.",
    image: Eduniversity,
    link: "https://react-university-portal.vercel.app/",
  },
  {
    title: "Spotify Top Tracks App",
    tools: [FaReact, RiTailwindCssFill, SiSpotify],
    description: "Displays top artists and tracks using Spotify Web API.",
    image: Spotify,
    link: "https://github.com/Nguyen020905/spotify-app",
  },
  {
    title: "My Movie App",
    tools: [FaReact, RiTailwindCssFill, FaNodeJs, SiSocketdotio, SiMongodb],
    description:
      "Secure real-time chat for private friend groups with media sharing.",
    image: Movie,
    link: "https://movie-list-ashy-one.vercel.app/",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className="py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          My Projects
        </h2>

        {/* Grid of projects */}
        <div ref={ref} className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const ToolIcons = project.tools.map((Icon, i) => (
              <Icon key={i} className="text-xl text-violet-600 mr-2" />
            ));

            return (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                whileHover={{ y: -8, transition: { duration: 0.2 } }} // 👈 Lifts card up when hovered
                transition={{
                  delay: index * 0.2,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="flex flex-col justify-between h-full rounded-2xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 hover:bg-[#212121] transition-shadow duration-300 border border-transparent hover:border-violet-500 hover:shadow-[0_0_20px_#7C3AED] cursor-pointer"
              >
                {/* Image */}
                <div className="relative w-full h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-t-2xl"
                  />
                </div>

                {/* Card body */}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {project.title}
                  </h3>

                  <div className="mt-2 flex flex-wrap items-center">
                    {ToolIcons}
                  </div>

                  <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
