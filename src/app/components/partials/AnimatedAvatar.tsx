"use client";
import { motion } from "framer-motion";

const AnimatedAvatar = () => {
  return (
    <motion.div
      animate={{ x: 110, y: 50 }}
      transition={{ type: "spring" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      whileDrag={{ scale: 0.9, rotate: 10 }}
      drag
    >
      <div className="bg-white -translate-x-28 w-80 h-80 mx-auto my-20 rounded-full bg-avatar bg-cover bg-no-repeat border-2 border-[#141451] ring-2 ring-[#101041] shadow-lg"></div>
    </motion.div>
  );
};

export default AnimatedAvatar;
