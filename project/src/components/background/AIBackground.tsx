import React from 'react';
import { motion } from 'framer-motion';
import { NetworkLines } from './NetworkLines';
import { BackgroundGradient } from './BackgroundGradient';
import { useReducedMotion } from '../../hooks/useReducedMotion';

export const AIBackground: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 overflow-hidden">
      {!prefersReducedMotion ? (
        <>
          <div className="absolute inset-0 bg-deep-space/80" />
          <NetworkLines />
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.08 }}
          >
            <motion.h1
              className="text-[20vw] md:text-[15vw] lg:text-[10vw] font-bold text-white whitespace-nowrap select-none"
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              AI Solutions
            </motion.h1>
          </motion.div>
          <BackgroundGradient />
        </>
      ) : (
        <div className="absolute inset-0 bg-deep-space" />
      )}
    </div>
  );
};