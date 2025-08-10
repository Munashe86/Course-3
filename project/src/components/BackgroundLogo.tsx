import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundLogo: React.FC = () => {
  return (
    <motion.div 
      className="fixed inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
      style={{ zIndex: -1 }}
    >
      <motion.div 
        className="relative w-[1000px] h-[400px] opacity-[0.08]"
        animate={{
          y: [0, -20, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[200px] font-bold text-white whitespace-nowrap">
            AI Solutions
          </h1>
        </div>
        <img
          src="https://imgur.com/KSNy8DA.png"
          alt=""
          className="w-full h-full object-contain absolute inset-0"
        />
      </motion.div>
    </motion.div>
  );
};