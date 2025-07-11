import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Profile from "../Picture/Profile.jpg";
import Profile2 from "../Picture/Profile2.png";
const Header = () => {
  //toggle the menu open/close
  const [isOpen, setIsOpen] =
    useState(false); /* set the toggle menu to close original */
  const toggleMenu = () =>
    setIsOpen(!isOpen); /* toggle from false to true and same */
  //State to track if the contact form is open
  const [contactFormOpen, setContactFormOpen] = useState(false);
  const openContactForm = () => setContactFormOpen(true);
  const closeContactForm = () => setContactFormOpen(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);
  return (
    <header
      className={`w-full z-50 transition-all duration-300 ${
        sticky
          ? "fixed top-0 bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur"
          : "absolute"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/*Avatar */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            delay: 0.3,
            duration: 1.2,
          }}
          /* animation for the header */
          className="flex items-center"
        >
          <div
            className="h-10 w-10 rounded-full bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3 border border-transparent hover:border-violet-500 
hover:shadow-[0_0_20px_#7C3AED]  group relative overflow-hidden"
          >
            <img
              src={Profile}
              alt="Defualt Profile"
              className="w-full h-full rounded-full object-cover absolute transition-opacity duration-300 opacity-100 group-hover:opacity-0"
            />
            <img
              src={Profile2}
              alt="Second Profile"
              className="w-full h-full rounded-full object-cover absolute transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
            Nguyen Nguyen
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="lg:flex hidden space-x-8">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item, index) => (
              <motion.a
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay:
                    0.7 +
                    index *
                      0.2 /*one element animates slightly after another */,
                }}
                className="relative text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
                href="#"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            )
          )}
        </nav>

        {/*Social icon - Desktop */}
        <div className="md:flex hidden items-center space-x-4">
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-color duration-300"
            href="https://github.com/Nguyen020905"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-color duration-300"
            href="https://www.linkedin.com/in/nhu-anh-nguyen-nguyen-986724337/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin className="w-5 h-5" />
          </motion.a>
          <motion.a
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-color duration-300"
            href="#"
          >
            <FiInstagram className="w-5 h-5" />
          </motion.a>

          {/* Hire me button */}
          <motion.button
            onClick={openContactForm}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 1.6,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
            className="ml-4 px-4 py-2 rounded-xl bg-gradient-to-r from-gray-400 to-gray-100 text-violet-700 font-bold hover:from-violet-700 hover:to-purple-700 hover:text-white transition-all duration-300"
          >
            Hire Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <motion.button
            whileTap={{ scale: 0.7 }}
            onClick={toggleMenu}
            className="text-gray-300"
          >
            {isOpen ? (
              <FiX className="h-6 w-6 " />
            ) : (
              <FiMenu className="h-6 w-6 " />
            )}
          </motion.button>
        </div>
      </div>
      {/*Mobile Menu*/}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.5 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg px-4 py-4 space-y-5"
      >
        <nav className="flex flex-col space-y-3">
          {["Home", "About", "Projects", "Experience", "Contact"].map(
            (item) => (
              <a
                onClick={toggleMenu}
                className="text-gray-300 font-medium py-2"
                key={item}
                href="#"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex space-x-5">
            <a href="#">
              <FiGithub className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiTwitter className="h-5 w-5 text-gray-300" />
            </a>
            <a href="#">
              <FiInstagram className="h-5 w-5 text-gray-300" />
            </a>
          </div>
          <button
            onClick={() => {
              toggleMenu();
              openContactForm();
            }}
            className="mt-4 block w-full px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-violet-400 font-bold"
          >
            Contact Me
          </button>
        </div>
      </motion.div>
      {/*Contact Form*/}
      <AnimatePresence>
        {/*check if ContactForm is true = open it will show up */}
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6"
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold text-gray-300 ">
                  Get In Touch
                </h1>
                <button onClick={closeContactForm}>
                  <FiX className="w-5 h-5 text-gray-300 font-extrabold" />
                </button>
              </div>
              {/*input form*/}
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className=" block text-sm font-medium text-gray-300 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className=" block text-sm font-medium text-gray-300 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className=" block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    rows="4"
                    id="message"
                    placeholder="How Can We Help You"
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-violet-500 bg-gray-700"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.7 }}
                  className="w-full px-4 py-2 bg-gradient-to-r from-violet-600 to-violet-400 hover:from-violet-700 hover:to-purple-700 transition-all duration-300 rounded-lg shadow-md hover:shadow-lg hover:shadow-viot-600/50"
                >
                  Sent Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
