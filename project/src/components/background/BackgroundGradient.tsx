import React from 'react';
import { motion } from 'framer-motion';

export const BackgroundGradient: React.FC = () => {
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        background: `
          radial-gradient(circle at 30% 30%, rgba(0, 147, 255, 0.4) 0%, transparent 30%),
          radial-gradient(circle at 70% 70%, rgba(138, 43, 226, 0.4) 0%, transparent 30%),
          radial-gradient(circle at 50% 50%, rgba(0, 201, 255, 0.3) 0%, transparent 50%)
        `
      }}
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 30% 30%, rgba(0, 147, 255, 0.4) 0%, transparent 30%)',
            'radial-gradient(circle at 70% 70%, rgba(0, 147, 255, 0.4) 0%, transparent 30%)',
            'radial-gradient(circle at 30% 30%, rgba(0, 147, 255, 0.4) 0%, transparent 30%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};