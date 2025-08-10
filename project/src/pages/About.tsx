import React from 'react';
import { motion } from 'framer-motion';
import { Mission } from '../components/about/Mission';
import { Values } from '../components/about/Values';
import { Timeline } from '../components/about/Timeline';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden mb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 
                          border border-blue-500/20 text-blue-400 mb-6">
              Founded in 2024
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent 
                         bg-gradient-to-r from-blue-400 to-purple-400">
              Pioneering AI Innovation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transforming businesses through cutting-edge artificial intelligence 
              and machine learning technologies
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <Mission />

      {/* Values Section */}
      <Values />

      {/* Innovation Timeline */}
      <Timeline />
    </div>
  );
};