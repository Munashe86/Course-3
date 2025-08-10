import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const HeroButton: React.FC = () => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r 
                 from-blue-600 to-purple-600 rounded-full shadow-lg
                 hover:shadow-blue-500/50 transition-all duration-300
                 flex items-center gap-2 mx-auto"
    >
      Get Started
      <ArrowRight className="w-5 h-5" />
    </motion.button>
  );
};