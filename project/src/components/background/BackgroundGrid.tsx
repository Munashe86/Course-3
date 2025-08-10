import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGrid: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 147, 255, 0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 147, 255, 0.15) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
      }}
      animate={{
        backgroundPosition: ['0px 0px', '50px 50px'],
        scale: [1, 1.1, 1],
      }}
      transition={{
        backgroundPosition: {
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        },
        scale: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }
      }}
    />
  );
};