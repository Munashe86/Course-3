import React from 'react';
import { motion } from 'framer-motion';
import { HeroText } from './HeroText';
import { HeroButton } from './HeroButton';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-10 dark:opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <HeroText />
        <HeroButton />
      </motion.div>
      
      <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-white dark:from-gray-900 to-transparent" />
    </section>
  );
};