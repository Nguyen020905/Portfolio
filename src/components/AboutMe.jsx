import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-32">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white mb-8">
          Crafting with Code & Creativity.
        </h2>

        <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm <span className="text-violet-600 font-semibold">Nguyen</span>, a
          front-end developer and design enthusiast with a focus on clean
          interfaces, smooth interactions, and pixel-level detail. Based in
          Arizona, I’m currently studying at ASU while building sleek
          experiences using <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Tailwind</span>, and{" "}
          <span className="font-medium">Framer Motion</span>.
        </p>

        <p className="mt-6 text-lg text-gray-600 dark:text-gray-400">
          Whether it's a creative side project or a full-stack collaboration, I
          enjoy pushing ideas from concept to production — with a strong
          attention to both performance and aesthetics.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
