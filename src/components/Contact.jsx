import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiCopy } from "react-icons/fi";

const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("nnguy129@asu.edu");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-[#121212] transition-colors duration-300"
    >
      <div className="max-w-xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 text-gray-600 dark:text-gray-400 text-lg"
        >
          Whether you have a question or just want to say hi, my inbox is always
          open.
        </motion.p>

        {/* Email Copy Box */}
        <motion.div
          onClick={handleCopy}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10 mx-auto max-w-fit px-6 py-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-[#1e1e1e] flex items-center gap-3 shadow-sm cursor-pointer hover:border-violet-500 hover:shadow-[0_0_15px_#7862F855] transition-all duration-300"
        >
          <FiMail className="text-[#7862F8]" size={20} />
          <span className="text-base font-medium text-gray-800 dark:text-white select-none">
            nnguy129@asu.edu
          </span>
          <FiCopy
            className="text-gray-400 group-hover:text-[#7862F8] transition"
            size={18}
          />
          {copied && (
            <span className="ml-2 text-sm text-[#7862F8]">Copied!</span>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
