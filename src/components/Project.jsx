import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    title: "University Portal",
    description:
      "A modern university dashboard built with React and Tailwind CSS, featuring student services and course management.",
    image: "/images/university-portal.png",
    link: "https://react-university-portal.vercel.app/",
  },
  {
    title: "Spotify Top Tracks App",
    description:
      "Web app using Spotify API to show your top artists and tracks with PKCE OAuth2 flow.",
    image: "/images/spotify-app.png",
    link: "https://github.com/Nguyen020905/spotify-app",
  },
  {
    title: "LØTEX Private Group Chat",
    description:
      "Secure social chat app for close friend groups, with media storage and dynamic privacy controls.",
    image: "/images/lotex-app.png",
    link: "#",
  },
];

const ProjectSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 bg-white dark:bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
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
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-800"
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
                <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-violet-600 dark:text-violet-400 font-medium hover:underline"
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
