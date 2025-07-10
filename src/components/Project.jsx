import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Eduniversity from "../Picture/Eduniversity.png";
import Spotify from "../Picture/Spotify.png";
import Movie from "../Picture/Movie.png";
const projects = [
  {
    title: "University Portal",
    description:
      "A modern university dashboard built with React and Tailwind CSS, featuring student services and course management.",
    image: Eduniversity,
    link: "https://react-university-portal.vercel.app/",
  },
  {
    title: "Spotify Top Tracks App",
    description:
      "Web app using Spotify API to show your top artists and tracks with PKCE OAuth2 flow.",
    image: Spotify,
    link: "https://github.com/Nguyen020905/spotify-app",
  },
  {
    title: "LØTEX Private Group Chat",
    description:
      "Secure social chat app for close friend groups, with media storage and dynamic privacy controls.",
    image: Movie,
    link: "#",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
  }); /* make the animation run everytime we scroll by */

  return (
    <section className=" py-20" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          My Projects
        </h2>

        <div ref={ref} className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut",
              }}
              className="flex flex-col justify-between h-full rounded-2xl overflow-hidden shadow-lg 
bg-white dark:bg-gray-800 hover:bg-[#212121] 
transition-shadow duration-300 
border border-transparent hover:border-violet-500 
hover:shadow-[0_0_20px_#7C3AED]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm min-h-[64px]">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center mt-6 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
