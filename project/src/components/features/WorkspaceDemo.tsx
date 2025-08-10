import React from 'react';
import { motion } from 'framer-motion';

export const WorkspaceDemo: React.FC = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Powerful Workspace for Teams
          </h2>
          <p className="text-xl text-gray-300">
            Experience seamless collaboration and productivity
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&w=800&h=600"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="rounded-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&h=600"
              alt="Data analytics"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};