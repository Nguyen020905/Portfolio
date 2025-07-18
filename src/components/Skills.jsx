const Skills = () => (
  <section className="py-24 px-6">
    <div className="max-w-5xl mx-auto text-center">
      <motion.h2
        className="text-4xl font-semibold mb-16 text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 place-items-center"
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
                boxShadow: "0px 0px 12px #FFB6C1",
              }}
              transition={{ duration: 0.3 }}
              className="w-20 h-20 border-2 rounded-xl border-gray-300 dark:border-gray-600 flex flex-col items-center justify-center text-center p-2"
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
