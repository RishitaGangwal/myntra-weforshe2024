import React from "react";
import { motion } from "framer-motion";

const DictionaryComponent = () => {
  const textVariants = {
    fadeOut: { opacity: 0 },
    fadeIn: { opacity: 1 },
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-28 px-4">
      <div className="bg-black rounded-lg shadow-lg relative overflow-hidden">
        <div className="px-6 py-8 text-center">
          <motion.h2
            className="text-3xl font-bold text-white animate-pulse"
            variants={textVariants}
            initial="fadeIn"
            animate="fadeOut"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            Next Challenge Coming Soon...
          </motion.h2>
        </div>
        <div className="px-6 py-8 text-center">
          <motion.h1
            className="text-3xl font-bold text-white animate-pulse"
            variants={textVariants}
            initial="fadeOut"
            animate="fadeIn"
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 2, 
            }}
          >
            Stay Tuned!
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default DictionaryComponent;
