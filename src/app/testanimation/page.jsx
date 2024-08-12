"use client"; // Ensure this is used if you are in a new Next.js setup

import { motion } from "framer-motion";

const AnimatedComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 200, y: 300 }}
      transition={{ duration: 1 }}
      className="w-64 h-64 bg-blue-500 flex items-center justify-center"
    >
      <h1 className="text-white">Hello, Framer Motion!</h1>
    </motion.div>
  );
};

export default AnimatedComponent;
