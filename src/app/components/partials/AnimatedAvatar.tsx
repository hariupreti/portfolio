"use client";
import { motion } from "framer-motion";

const AnimatedAvatar = () => {
  return (
    <motion.div>
      <div className="bg-black w-80 h-80 mx-auto my-20 rounded-full bg-avatar bg-cover bg-no-repeat border-2 border-violet-200 ring-2 ring-violet-400 shadow-lg"></div>
    </motion.div>
  );
};

export default AnimatedAvatar;
